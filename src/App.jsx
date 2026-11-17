import './App.css'
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import FruitSelector from "./components/FruitSelector/FruitSelector.jsx";

function App() {

    const [fruits, setFruits] = useState({
        strawberryCount: 0,
        bananaCount: 0,
        appleCount: 0,
        kiwiCount: 0,
    });
    const {register, handleSubmit, formState:{errors}} = useForm({
        defaultValues: {age: 18,
        deliveryTime: "overdag"},
    });

    function handleFruitClick(fruitType, counter) {
        if (fruits[fruitType] + counter >= 0) {
            setFruits({
                ...fruits,
                [fruitType]: fruits[fruitType] + counter,
            });
        }
    }
    function resetFruitCount() {
        setFruits({
            strawberryCount: 0,
            bananaCount: 0,
            appleCount: 0,
            kiwiCount: 0,
            });
    }
    function handleFormSubmit(data) {
        console.log("De fruitbestelling is:",fruits, "En dit zijn de persoonsgegevens:",data);
    }

    return (
        <>
            <header>
                <div className="inner-container">
                    <h1>Fruitmand bezorgservice</h1>
                </div>

            </header>

            <section className="fruit-selection">
                <div className="inner-container">
                    <FruitSelector
                        fruitLabel="🍓Aardbeien"
                        fruitCount={fruits.strawberryCount}
                        fruitIncrease={() => handleFruitClick('strawberryCount', 1)}
                        fruitDecrease={() => handleFruitClick('strawberryCount', -1)}
                    />
                    <FruitSelector
                        fruitLabel="🍌Bananen"
                        fruitCount={fruits.bananaCount}
                        fruitIncrease={() => handleFruitClick('bananaCount', 1)}
                        fruitDecrease={() => handleFruitClick('bananaCount', -1)}
                    />
                    <FruitSelector
                        fruitLabel="🍎Appels"
                        fruitCount={fruits.appleCount}
                        fruitIncrease={() => handleFruitClick('appleCount', 1)}
                        fruitDecrease={() => handleFruitClick('appleCount', -1)}
                    />
                    <FruitSelector
                        fruitLabel="🥝Kiwi"
                        fruitCount={fruits.kiwiCount}
                        fruitIncrease={() => handleFruitClick('kiwiCount', 1)}
                        fruitDecrease={() => handleFruitClick('kiwiCount', -1)}
                    />
                    <button type="button"
                            onClick={() => resetFruitCount()}
                    >
                        Resetten
                    </button>
                </div>
            </section>
            <section className="fuit-order-form">
                <div className="inner-container">
                    <form onSubmit={handleSubmit(handleFormSubmit)}>
                        <label htmlFor="firstName">
                            Voornaam
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            {...register("firstName", {
                                required: {
                                    value: true,
                                    message: "Voornaam is verplicht.",
                                },
                                minLength: {
                                    value: 3,
                                    message: "De naam moet minimaal 3 karakters bevatten.",
                                },
                                maxLength: {
                                    value: 15,
                                    message: "De voornaam mag maximaal 15 karakters lang zijn.",
                                },
                            })}
                            />
                        {errors.firstName && <p>{errors.firstName.message}</p>}
                        <br/>
                        <label htmlFor="lastName">
                            Achternaam
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            {...register("lastName", {
                                required: {
                                    value: true,
                                    message: "Achternaam is verplicht.",
                                },
                                minLength: {
                                    value: 3,
                                    message: "De achternaam moet minimaal 3 karakters lang zijn.",
                                },
                                maxLength: {
                                    value: 20,
                                    message: "De achternaam mag maximaal 20 karakters lang zijn."
                                },
                            })}
                        />
                        {errors.lastName && <p>{errors.lastName.message}</p>}
                        <br/>
                        <label htmlFor="age">
                            Leeftijd
                        </label>
                        <input
                            type="number"
                            id="age"
                            {...register("age", {
                                min: {
                                    value: 18,
                                    message: "De minimale leeftijd om te bestellen is 18 jaar.",
                                },
                            })}
                        />
                        {errors.age && <p>{errors.age.message}</p>}
                        <br/>
                        <label htmlFor="postalCode">
                            Postcode
                        </label>
                        <input
                            type="text"
                            id="postalCode"
                            {...register("postalCode", {
                                required: {
                                    value: true,
                                    message: "Het invullen van een postcode is verplicht.",
                                },
                                minLength: 6,
                                maxLength: 7,
                                pattern: {
                                    value: /^[1-9][0-9]{3}\s?(?!SA|SD|SS)[A-Za-z]{2}$/,
                                    message: "De postcode bestaat niet uit de combinatie van 4 letters en 2 cijfers."
                                },
                            })}
                        />
                        {errors.postalCode && <p>{errors.postalCode.message}</p>}
                        <br/>
                        <fieldset>
                            <legend>Bezorgfrequentie</legend>
                            <select {...register("deliveryFrequency")}>
                                <option value="weekly">Iedere week</option>
                                <option value="biweekly">Om de week</option>
                                <option value="monthly">Maandelijks</option>
                            </select>
                        </fieldset>
                            <fieldset>
                                <label>
                                    <input
                                        type="radio"
                                        value="overdag"
                                        {...register("deliveryTime")}
                                    />
                                    Overdag
                                </label>

                                <label>
                                    <input
                                        type="radio"
                                        value="avond"
                                        {...register("deliveryTime")}
                                    />
                                    's Avonds
                                </label>
                            </fieldset>
                        <label htmlFor="comments">Opmerking</label>
                        <textarea
                            id="comments"
                            {...register("comments")}
                            >
                        </textarea>
                        <label htmlFor="terms-and-services">
                            <input type="checkbox"
                                   id="terms-and-services"
                                   {...register("terms-and-services",{
                                       required: {
                                           value: true,
                                           message: 'Je kunt alleen bestellen door akkoord te gaan met de algemene voorwaarden.'
                                       },
                                   })}

                            />
                            Ik ga akkoord met de voorwaarden
                        </label>
                        {errors['terms-and-services'] && <p>{errors['terms-and-services'].message}</p>}
                        <button type="submit">Verzend</button>

                    </form>
                </div>
            </section>
        </>
    )
}

export default App

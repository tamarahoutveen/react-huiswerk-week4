import './App.css'
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import FruitSelector from "./components/FruitSelector/FruitSelector.jsx";
import InputField from "./components/InputField/InputField.jsx";
import TextField from "./components/TextField/TextField.jsx";
import Checkbox from "./components/Checkbox/Checkbox.jsx";
import Button from "./components/Button/Button.jsx";
import SelectBox from "./components/SelectBox/SelectBox.jsx";
import RadioButton from "./components/RadioButton/RadioButton.jsx";

function App() {

    const startFruitState = {
        strawberryCount: 0,
        bananaCount: 0,
        appleCount: 0,
        kiwiCount: 0,
    }

    const [fruits, setFruits] = useState(startFruitState);
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            age: 18,
            deliveryTime: "overdag"
        },
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
        setFruits(startFruitState);
    }

    function handleFormSubmit(data) {
        console.log("De fruitbestelling is:", fruits, "En dit zijn de persoonsgegevens:", data);
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
                    <Button
                        buttonType="button"
                        buttonAction={resetFruitCount}
                        buttonLabel="Resetten"
                    />
                </div>
            </section>
            <section className="fuit-order-form">
                <div className="inner-container">
                    <form onSubmit={handleSubmit(handleFormSubmit)}>
                        <InputField
                            inputLabel="Voornaam"
                            inputType="text"
                            inputId="first-name"
                            inputName="first-name"
                            validationRules={{
                                required: {
                                    value: true,
                                    message: "Voornaam is verplicht.",
                                },
                                minLength: {
                                    value: 3,
                                    message: "De voornaam moet minimaal 3 tekens lang zijn.",
                                },
                                maxLength: {
                                    value: 20,
                                    message: "De voornaam mag maximaal 20 tekens lang zijn."
                                }
                            }}
                            register={register}
                            errors={errors}
                        />
                        <InputField
                            inputLabel="Achternaam"
                            inputType="text"
                            inputId="last-name"
                            inputName="last-name"
                            validationRules={{
                                required: {
                                    value: true,
                                    message: "Achternaam is verplicht.",
                                },
                                minLength: {
                                    value: 3,
                                    message: "De achternaam moet minimaal 3 tekens lang zijn.",
                                },
                                maxLength: {
                                    value: 20,
                                    message: "De achternaam mag maximaal 20 tekens lang zijn."
                                }
                            }}
                            register={register}
                            errors={errors}
                        />
                        <InputField
                            inputLabel="Leeftijd"
                            inputType="number"
                            inputId="age"
                            inputName="age"
                            validationRules={{
                                required: {
                                    value: true,
                                    message: "Een leeftijd invullen is verplicht",
                                },
                                min: {
                                    value: 18,
                                    message: "De minimale leeftijd om te bestellen is 18 jaar.",
                                }
                            }}
                            register={register}
                            errors={errors}
                        />
                        <InputField
                            inputLabel="Postcode"
                            inputType="text"
                            inputId="postal-code"
                            inputName="postal-code"
                            validationRules={{
                                required: {
                                    value: true,
                                    message: "Het invullen van een postcode is verplicht.",
                                },
                                minLength: {
                                    value: 6,
                                    message: "De postcode bestaat uit 4 letters en 2 cijfers.",
                                },
                                maxLength: {
                                    value: 7,
                                    message: "De postcode bestaat uit 4 letters en 2 cijfers."
                                },
                                pattern: {
                                    value: /^[1-9][0-9]{3}\s?(?!SA|SD|SS)[A-Za-z]{2}$/,
                                    message: "De postcode bestaat niet uit de combinatie van 4 letters en 2 cijfers."
                                }
                            }}
                            register={register}
                            errors={errors}
                        />

                        <SelectBox
                            selectBoxLabel="Bezorgfrequentie"
                            selectBoxId="delivery-frequency"
                            register={register}
                            selectOptions={[
                                { value: "weekly", label: "Iedere week" },
                                { value: "biweekly", label: "Om de week" },
                                { value: "monthly", label: "Elke maand" }
                            ]}
                            />
                        <fieldset>
                            <RadioButton
                                value="overdag"
                                label="Overdag"
                                register={register}
                                buttonId="delivery-time"
                                />
                            <RadioButton
                                value="avond"
                                label="'s Avonds"
                                register={register}
                                buttonId="delivery-time"
                            />
                        </fieldset>
                        <TextField
                            textFieldName="comments"
                            textFieldId="comments"
                            textFieldLabel="Opmerking"
                            register={register}
                        />

                        <Checkbox
                            checkboxId="terms-and-services"
                            checkboxLabel="Ik ga akkoord met de voorwaarden"
                            register={register}
                            errors={errors}
                            validationRules={{
                                required: {
                                    value: true,
                                    message: "Je kunt alleen bestellen door akkoord te gaan met de algemene voorwaarden.",
                                }
                            }}
                        />
                        <Button
                            buttonType="submit"
                            buttonLabel="Verzend"
                        />
                    </form>
                </div>
            </section>
        </>
    )
}

export default App

import './App.css'
import React from 'react';
import FruitSelector from "./components/FruitSelector/FruitSelector.jsx";

function App() {

    const [fruits, setFruits] = React.useState({
        strawberryCount : 0,
        bananaCount : 0,
        appleCount : 0,
        kiwiCount : 0,
    });

    function handleFruitClick(fruitType, counter){
        if(fruits[fruitType] + counter >= 0) {
            setFruits({
                ...fruits,
                [fruitType]: fruits[fruitType] + counter,
            });
        }
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
                fruitLabel = "🍓Aardbeien"
                fruitCount={fruits.strawberryCount}
                fruitIncrease ={() => handleFruitClick('strawberryCount', 1)}
                fruitDecrease ={() => handleFruitClick('strawberryCount', -1)}
                />
            <FruitSelector
                fruitLabel = "🍌Bananen"
                fruitCount={fruits.bananaCount}
                fruitIncrease ={() => handleFruitClick('bananaCount', 1)}
                fruitDecrease ={() => handleFruitClick('bananaCount', -1)}
            />
            <FruitSelector
                fruitLabel = "🍎Appels"
                fruitCount={fruits.appleCount}
                fruitIncrease ={() => handleFruitClick('appleCount', 1)}
                fruitDecrease ={() => handleFruitClick('appleCount', -1)}
            />
            <FruitSelector
                fruitLabel = "🥝Kiwi"
                fruitCount={fruits.kiwiCount}
                fruitIncrease ={() => handleFruitClick('kiwiCount', 1)}
                fruitDecrease ={() => handleFruitClick('kiwiCount', -1)}
            />


        </div>
    </section>
    </>
  )
}

export default App

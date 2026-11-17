import './FruitSelector.css';
import Button from "../Button/Button.jsx";

function FruitSelector({fruitLabel, fruitCount, fruitIncrease, fruitDecrease}) {
    return (
        <>
            <article className="fruit-type">
                <span className="fruit-label">{fruitLabel}</span>
                <Button
                    buttonType="button"
                    buttonAction = {fruitDecrease}
                    buttonLabel="-"
                    />
                <span className="fruitCount">{fruitCount}</span>
                <Button
                    buttonType="button"
                    buttonAction = {fruitIncrease}
                    buttonLabel="+"
                    />
            </article>
        </>
    );

}
export default FruitSelector;
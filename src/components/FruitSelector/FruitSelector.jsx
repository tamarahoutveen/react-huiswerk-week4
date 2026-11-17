import './FruitSelector.css';

function FruitSelector({fruitLabel, fruitCount, fruitIncrease, fruitDecrease}) {
    return (
        <>
            <article className="fruit-type">
                <span className="fruit-label">{fruitLabel}</span>
                <button
                    className="decrease-button"
                    type="button"
                    onClick={fruitDecrease}>
                    -
                </button>
                <span className="fruitCount">{fruitCount}</span>
                <button
                    className="increase-button"
                    type="button"
                    onClick={fruitIncrease}>
                    +
                </button>
            </article>
        </>
    );

}
export default FruitSelector;
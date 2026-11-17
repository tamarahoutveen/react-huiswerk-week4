import './RadioButton.css';

function RadioButton({value, register, label, buttonId}) {
    return (
        <label className="radiobutton-label">
            <input
                type="radio"
                value={value}
                {...register(buttonId)}
            />
            {label}
        </label>
    );
}
export default RadioButton;
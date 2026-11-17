import './Checkbox.css';

function Checkbox({checkboxId, checkboxLabel, errors, register, validationRules}) {
    return (
        <div className="form-group">
            <label htmlFor={checkboxId} className="checkbox-label">
                <input type="checkbox"
                       id={checkboxId}
                       {...register(checkboxId, validationRules)}

                />
                {checkboxLabel}
            </label>
            {errors[checkboxId] && <span className="error-message">{errors[checkboxId].message}</span>}
        </div>

    );
}
export default Checkbox;
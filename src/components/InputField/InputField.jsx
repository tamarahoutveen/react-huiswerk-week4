import './InputField.css';

function InputField({inputLabel, inputType, inputId, inputName, validationRules, register, errors}) {
    const hasError = errors[inputName];
    return (
        <div className="form-group">
            <label htmlFor={inputId} className="form-label">
                {inputLabel}
            </label>
            <input
                className={ hasError ? 'error-input form-field' : 'form-field'}
                type={inputType}
                id={inputId}
                {...register(inputName, validationRules)}
            />
            {errors[inputName] && <span className="error-message">{errors[inputName].message}</span>}
        </div>
    );
}

export default InputField;
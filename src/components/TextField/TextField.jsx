import './TextField.css';

function TextField({textFieldId, textFieldLabel, textFieldName, register}) {
    return (
        <div className="form-group">
            <label htmlFor={textFieldId} className="form-label">
                {textFieldLabel}
            </label>
    <textarea
        id={textFieldId}
        className="text-field"
        {...register(textFieldName)}
    >
                        </textarea>
        </div>
    );
}

export default TextField;
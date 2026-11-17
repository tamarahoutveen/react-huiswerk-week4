import './SelectBox.css';

function SelectBox({selectBoxLabel, selectBoxId, register, selectOptions = []}) {

    return(
        <fieldset className="selectbox-wrapper">
            <legend>{selectBoxLabel}</legend>
            <select {...register(selectBoxId)}>

                {selectOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}

            </select>
        </fieldset>
    );
}

export default SelectBox;
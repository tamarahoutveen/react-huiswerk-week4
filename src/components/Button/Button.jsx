import './Button.css';

function Button({buttonType, buttonAction = () =>{}, buttonLabel}){
    return (
        <button
            className="primary-button"
            type={buttonType}
            onClick={() => {buttonAction()}}
            >
            {buttonLabel}
        </button>
    );
}
export default Button;
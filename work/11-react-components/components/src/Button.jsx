import './button.css';

function Button({
    children,
    className,
    disabled=false,
    onClick,
    type="button",
    visual="button",
}){
    let buttonClass="button";
    if (visual==="link"){
        buttonClass= "button-link";
    }
    return(
        <button className={`${buttonClass} ${className}`}
        disabled= {disabled} type={type}
            onClick={() => alert( 'type ' + type +' '+ visual+ ' visual ' +' clicked!')}
        >
            {children}
        </button>
    );
}

export default Button;
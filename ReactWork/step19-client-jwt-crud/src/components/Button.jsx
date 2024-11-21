import './Button.css';

const Button = ({text, type,  onClick})=>{
    return (
       <button  type={type} className={`Button Button_${type}`}
        onClick={onClick}>{text}</button>
    )
}

export default Button;


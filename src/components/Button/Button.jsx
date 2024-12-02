import css from './Button.module.css'

const Button = ({ variation, children, id, onDelete}) => {
    return(<button className={css[variation]} onClick={() => onDelete(id)}>{children}</button>)
}

export default Button;
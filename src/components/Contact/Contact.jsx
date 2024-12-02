import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css"
import Button from '../Button/Button.jsx'



const Contact = ({ id, name, number, onDelete  }) => {
    return (
        <li className={css.wrapper}> 
            <div className={css.infoWrapper}>
                <div className={css.info}>
                    <IoPersonSharp size="15"/>
                    <p className={css.name}>{name}</p>
                </div>
                <div className={css.info}>
                    <FaPhoneAlt size="15" />
                    <p className={css.phone}>{number}</p>
                </div>
            </div>
            <Button variation="del" onDelete={onDelete} id={id} >Delete</Button>
        </li>
    )
}

export default Contact;
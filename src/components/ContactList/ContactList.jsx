import s from './ContactList.module.css'
import Contact from '../Contact/Contact'

const ContactList = ({numberList, onDelete}) => {
  return (
    <ul className={s.contactList}>
      {numberList.map(number  => {
        return (<Contact key={number.id} {...number} onDelete={onDelete} />)}
      )}
    </ul>
  )
}

export default ContactList
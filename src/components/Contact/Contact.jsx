import s from './Contact.module.css'
import symbol from '../../assets/symbol-defs.svg'
import clsx from 'clsx'

const Contact = ({id, name, number, onDelete}) => {
  return (
    <li className={s.contactWrap}>
      <div className={s.textWrap}>
        <p className={s.name}>
          <svg className={s.icon} width='20' height='20'>
            <use href={symbol + '#icon-user'}/>
          </svg>
          {name}</p>
        <p className={s.phone}>
        <svg className={clsx(s.icon, s.iconPhone)} width='20' height='20'>
            <use href={symbol + '#icon-phone'}/>
          </svg>
          {number}</p>
      </div>
      <button type='button' onClick={()=>{onDelete(id)}} className={s.button}>Delete</button>
    </li>
  )
}

export default Contact
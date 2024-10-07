import s from './SearchBox.module.css'

const SearchBox = ({search, onFilter}) => {
  return (
    <div className={s.searchWrap}>
      <input className={s.input} type="text" value={search} onChange={(e)=>{onFilter(e.target.value)}} />
      <p className={s.inputName}>Search contact:</p>
    </div>
  )
}

export default SearchBox
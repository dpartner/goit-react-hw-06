import { useEffect, useState } from 'react'
import './App.css'
import 'modern-normalize';
import ContactList from './components/ContactList/ContactList'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import { nanoid } from 'nanoid'
import data from './contactData'

function App() {
  const [numberList, setNumberList] = useState(()=>{
    const storageData = JSON.parse(window.localStorage.getItem('contacts'));
    if (storageData?.length) {
      return storageData;
    }
    return data;
  });
  const [searchValue, setSearchValue] = useState('');
  const [filteredList, setFilteredList] = useState(numberList);
  
  useEffect(()=>window.localStorage.setItem('contacts', JSON.stringify(numberList)),[numberList]);
  useEffect(()=> {
    setFilteredList(numberList);
  },[numberList]);

  function handleSearch (value) {
    setFilteredList(numberList.filter(number => number.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())))
    setSearchValue(value);
  }

  function handleDeleteContact (id) {
    setNumberList(prev => prev.filter(number => number.id !== id));
  }

  function handleAddContact (contact) {
    setNumberList(prev => [...prev, {
      ...contact,
      id: nanoid(),
    }])
  }

  return (
    <div className='container'>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      <SearchBox search={searchValue} onFilter={handleSearch}/>
      <ContactList numberList={filteredList} onDelete={handleDeleteContact} />
    </div>
  )
}


export default App


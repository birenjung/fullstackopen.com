import React from 'react'
import { useState, useEffect } from 'react'
import PhonebookSearch from './components/phonebooksearch'
import AddNew from './components/addnew'
import Numbers from './components/numbers'
import phonebookService from './services/phonebookService'
import Notification from './components/notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState([])
  const [notification, setNotification] = useState("")
  

  useEffect(() => {
    phonebookService
    .getAll()
    .then(initialData => setPersons(initialData))
  }, [])

  const handleAddNew = (e) => {
    e.preventDefault();
    phonebookService
    .create(newName[0])
    .then(newName => {
      setPersons(persons.concat(newName))
      setNewName([])
      setNotification(`Added ${newName.name}`)
      setTimeout(() => {
        setNotification("")
      }, 5000)
      
    })    
  }

  const handleRemove = (x) => {
    const confirm = window.confirm(`Delete ${x.name} ?`)
    if (confirm) {
      phonebookService
    .remove(x.id)
    .then(
      phonebookService
      .getAll()
      .then(initialData => setPersons(initialData))
    )
    }    
  }  
  
  const handleChangeNewName = (e) => {
    persons.map(x => x.name).includes(e.target.value) ? alert(`${e.target.value} is already in the phonebook`)
      : setNewName([{ name: e.target.value, number: ""  }])    
  }

  const handleNewPhone = (e) => {
    setNewName([{ name: newName[0].name, number: e.target.value, id: persons.length + 1}])
  }  

  const [search, setSearch] = useState("");

  const handleChangeFilter = (e) => setSearch(e.target.value);

  
  return (
    <div>
        <Notification notification={notification}/>
        <PhonebookSearch heading={"Phonebook"} search={search} handleChangeFilter={handleChangeFilter}  />
       
        <AddNew heading={"Add new contact"} handleAddNew={handleAddNew} handleChangeNewName={handleChangeNewName} 
        handleNewPhone={handleNewPhone} newName={newName}/>

        <Numbers heading={"Numbers"} persons={persons} search={search} handleRemove={handleRemove}/>
    </div>
  )
}

export default App

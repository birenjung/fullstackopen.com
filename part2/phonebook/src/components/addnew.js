import React from 'react'
const AddNew = ({heading, handleAddNew, handleChangeNewName, handleNewPhone, newName}) => {
    return (      
      <div>
        <h2>{heading}</h2>
        <form onSubmit={handleAddNew} className='add-new-form'>  
          <div> name:  <input value={newName.map(x => x.name)} onChange={handleChangeNewName}></input> </div>
          <div>number: <input value={newName.map(x => x.number)} onChange={handleNewPhone} /></div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </div>      
    )
  }

  export default AddNew;
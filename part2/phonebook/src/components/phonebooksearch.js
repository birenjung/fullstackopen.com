import React from 'react'
const PhonebookSearch = ({heading, search, handleChangeFilter}) => {
    return (
      <>
      <h2>{heading}</h2>
      <form>
          <div>
              filter shown with: <input value={search} onChange={handleChangeFilter}></input>
          </div>          
      </form>  
      </>
    )
}

export default PhonebookSearch;
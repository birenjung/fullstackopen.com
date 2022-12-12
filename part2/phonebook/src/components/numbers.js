import React from 'react'
const Numbers = ({heading, persons, search, handleRemove}) => {  
    return (
      <>
      <h2>{heading}</h2>
        <ol className='numbers-list'>      
         { search === "" ? persons.map(x => {
                return  <li key={x.id}>
                            {x.name} {x.number} <button onClick={()=>handleRemove(x)}>delete</button>               
                        </li>
                        
            }):
            persons
            .filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
            .map(function(x) {
                return  <li key={x.id}>
                            {x.name} {x.number} <button>delete</button>          
                        </li>
                        
            })
          }
        </ol>
      </>
    )
  }

  export default Numbers;
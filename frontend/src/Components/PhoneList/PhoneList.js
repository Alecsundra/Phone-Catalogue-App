import React, 
  { useEffect, useState } from 'react';
import { Context } from '../../Context/Provider';
import { Link } from 'react-router-dom'


const PhoneList = () => {

  const { state, addPhonesList } = React.useContext(Context);
  const [ mounted, setMounted ] = useState(false)

  useEffect(() => {
    fetch('http://localhost:8000/phones')
      .then(res => res.json())
      .then(data =>{
        addPhonesList(data)
        setMounted(true)
      })

  },[])

  return (  
    <div className="list">
      {mounted === false ?
      'loading' 
      :
      state.phones.map(item =>(
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <p>{item.description}</p>
          <Link to={`/phones/${item.id}`}><button>See more details</button></Link>
        </div>
      ))
      }
    </div>
  );
}

export default PhoneList;
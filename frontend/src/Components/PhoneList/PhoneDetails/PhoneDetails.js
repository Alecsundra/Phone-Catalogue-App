import React, 
  { useEffect, useState } from 'react';
import { Context } from '../../../Context/Provider';
import { useParams } from 'react-router-dom'

const PhoneList = () => {
  const { state, addPhonesList } = React.useContext(Context);
  // const [ mounted, setMounted ] = useState(false)
  const [ phone, setPhone]= useState({})
  const { id } = useParams();
  
  useEffect(() => {
    fetch(`http://localhost:8000/phones/${id}`)
      .then(res => res.json())
      .then(data =>{
        setPhone(data)
        // setMounted(true)
      })
  //     // .catch(err=>{console.log(err)})

  },[])
console.log(phone)
console.log(phone.name)




  return (  
    <div className="list">
       <div>
        <p>{id}</p>
         <p>{phone.name}</p>
        <p>{phone.manufacturer}</p>
        <p>{phone.description}</p>
        <p>{phone.color}</p>
        <p>{phone.price}</p>
        <p>{phone.screen}</p>
        <p>{phone.processor}</p>
        <p>{phone.ram}</p> 
        {/* <p>{item.imageFileName}</p> */}
        </div>

    </div>
  );
}

export default PhoneList;
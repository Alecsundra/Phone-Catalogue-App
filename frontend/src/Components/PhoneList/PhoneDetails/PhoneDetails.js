import React, 
  { useEffect, useState } from 'react';
import { Context } from '../../../Context/Provider';
import { useParams,Link } from 'react-router-dom';

import PhotoCar from './PhotosCar'

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
      .catch(err=>{
        console.log(err,'error')
        alert('Could not find any phone with this id!')
      })

  },[])
console.log(phone)
console.log(phone.name)




  return (  
    <div>
     {id &&
     <div className="list-card">
      <div>
          <img className='img-card'
          src='https://images.unsplash.com/photo-1537589376225-5405c60a5bd8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=80' />
          </div>
       <div>
        <p className='title'>{phone.name}</p>
        <p className='price'>{phone.price}$</p>
        <p className='description'>{phone.description}</p>
        <div className='details-added'>
        <p><span className='details-text'>Manufacturer:</span> {phone.manufacturer}</p>
        <p><span className='details-text'>Color:</span> {phone.color}</p>
        <p><span className='details-text'>Screen:</span> {phone.screen}</p>
        <p><span className='details-text'>Processor:</span> {phone.processor}</p>
        <p><span className='details-text'>Ram:</span> {phone.ram}</p> 
        </div>
        {/* <p>{item.imageFileName}</p> */}
      </div>
        </div>
     }
     <PhotoCar />
    </div>
  );
}

export default PhoneList;
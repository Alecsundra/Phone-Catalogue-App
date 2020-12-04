import React, 
  { useEffect, useState } from 'react';
import { Context } from '../../../Context/Provider';
import { useParams,Link } from 'react-router-dom';

import PhotoCar from './PhotosCar'

const PhoneList = () => {
  const { state, addPhonesList } = React.useContext(Context);
  const [ phone, setPhone]= useState({})
  const { id } = useParams();
  const [error, setError] = useState(false)
  
  useEffect(() => {
    fetch(`http://localhost:8000/phones/${id}`)
      .then(res => res.json())
      .then(data =>{
        setPhone(data)
      })
      .catch(err=>{
        setError(true)
        console.log(err,'error')
        alert('Could not find any phone with this id!')
      })

  },[])
// console.log(phone)
// console.log(phone.name)

  return (  
    <div className={error ? 'none':'details'}>
      {id &&
        <div className="list-card-details">
          <div>
              <img className='img-card'
              src={phone.imageFileName} alt={phone.name} />
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
          </div>
        </div>
     }
          <PhotoCar />
      {error && 'go back home'}
      
    </div>
  );
}

export default PhoneList;
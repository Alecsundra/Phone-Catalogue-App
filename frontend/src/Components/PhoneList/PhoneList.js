import React, 
  { useEffect, useState } from 'react';
import { Context } from '../../Context/Provider';
import { Link } from 'react-router-dom';
import { Spinner } from 'reactstrap';

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
      .catch(err=>{
        console.log(err,'error')
        alert('Found a problem fetching data')
      })
  },[])

  return (  
    <div className="list">
      {mounted === false ?
        <Spinner style={{ width: '5rem', height: '5rem',marginTop:'3rem' }} />
      :
      state.phones.map(item =>(
        <div key={item.id} className='list-card'>
        <div>
          <img className='img-card'
          src='https://images.unsplash.com/photo-1537589376225-5405c60a5bd8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=80' />
       {/* src={`../../Utils/img/${item.imageFileName}`} alt={item.name} />
       src={item.imageFileName} /> */}
          </div>
          <div>
          <p className='title'>{item.name}</p>
           <p className='price'>{item.price}$</p>
          <p className='description'>{item.description}</p>
          <Link to={`/phones/${item.id}`}><button className='btn-details'>See more details</button></Link>
          </div>
        </div>
      ))
      }
    </div>
  );
}

export default PhoneList;
import React, 
  { useEffect, useState } from 'react';
import './App.css';
import AppContext from './Context/Provider';
import { Context } from './Context/Provider';


const App = () => {
  const { state, addPhonesList } = React.useContext(Context);
  // const [ list, setList ] = useState([]);
  const [ mounted, setMounted ] = useState(false)

  useEffect(() => {
    fetch('http://localhost:8000/phones')
      .then(res => res.json())
      .then(data =>{
                      addPhonesList(data)
                      setMounted(true)
                    })
  // console.log(state.phones)

  }, [])
  // console.log(state.phones)

  return (
    <AppContext>
    
    <div className="App">
    {mounted === false ? 'hello' :
     'App' }
    </div>
 </AppContext>
  );
}

export default App;

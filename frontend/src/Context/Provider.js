import React, { useState } from 'react';

export const Context = React.createContext();

const AppContext = (props) => {
    const [state, changeState] = useState({
      phones: [],
    });
  return (

    <Context.Provider value={{
      state,
      addPhonesList: (data) => changeState({
        ...state,
        phones: data,
      }),
    }}

    >
      {props.children}
    </Context.Provider>


)}

export default AppContext;

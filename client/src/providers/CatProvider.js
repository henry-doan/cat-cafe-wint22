import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const CatContext = React.createContext();
export const CatConsumer = CatContext.Consumer;

const CatProvider = ({ children }) => {
  const [cats, setCats] = useState([])
  const [msgs, setMsgs] = useState()
  const navigate = useNavigate()

  const getAllCats = () => {
    axios.get('/api/cats')
      .then( res => setCats(res.data))
      .catch( err => {
        console.log(err)
        setMsgs(err.response.data.errors)
      })
  }

  return (
    <CatContext.Provider value={{
      cats, 
      getAllCats,
      msgs,
      setMsgs
    }}>
      { children }
    </CatContext.Provider>
  )
}

export default CatProvider;
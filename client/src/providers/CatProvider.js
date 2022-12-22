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
        setMsgs({ msg: err.response.data.errors })
      })
  }

  const addCat = (cat) => {
    axios.post('/api/cats', { cat })
      .then( res => setCats([...cats, res.data]))
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  const updateCat = (id, cat) => {
    axios.put(`/api/cats/${id}`, { cat })
      .then(res => {
        const newUpdatedCats = cats.map( c => {
          if (c.id === id) {
            return res.data
          }
          return c
        })
        setCats(newUpdatedCats)
        navigate('/cats')
      })
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  const deleteCat = (id) => {
    axios.delete(`/api/cats/${id}`)
      .then( res => setCats( cats.filter(c => c.id !== id)))
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  return (
    <CatContext.Provider value={{
      cats, 
      getAllCats,
      msgs,
      setMsgs,
      addCat,
      updateCat,
      deleteCat,
    }}>
      { children }
    </CatContext.Provider>
  )
}

export default CatProvider;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const NoteContext = React.createContext();

export const NoteConsumer = NoteContext.Consumer;

const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([])
  const [msgs, setMsgs] = useState(null)

  const getAllNotes = (catId) => {
    axios.get(`/api/cats/${catId}/notes`)
      .then( res => setNotes(res.data) )
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  const addNote = (catId, note) => {
    axios.post(`/api/cats/${catId}/notes`, { note })
      .then( res => setNotes([...notes, res.data]) )
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  const updateNote = (catId, id, note) => {
    axios.put(`/api/cats/${catId}/notes/${id}`, { note })
      .then(res => {
        const newUpdatedNotes = notes.map(n => {
          if (n.id === id) {
            return res.data
          } 
          return n
        })
        setNotes(newUpdatedNotes)
      })
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  const deleteNote = (catId, id) => {
    axios.delete(`/api/cats/${catId}/notes/${id}`)
      .then( res => setNotes( notes.filter(n => n.id !== id )))
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }
  
  return (
    <NoteContext.Provider value={{
      notes,
      setMsgs,
      msgs,
      getAllNotes,
      addNote,
      updateNote,
      deleteNote,
    }}>
      { children }
    </NoteContext.Provider>
  )
}

export default NoteProvider;
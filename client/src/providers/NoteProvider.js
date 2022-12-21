import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const NoteContext = React.createContext();

export const NoteConsumer = NoteContext.Consumer;

const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([])
  const [msgs, setMsgs] = useState(null)

  return (
    <NoteContext.Provider value={{
      notes,
      setMsgs,
      msgs,
    }}>
      { children }
    </NoteContext.Provider>
  )
}

export default NoteProvider;
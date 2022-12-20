import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

const AuthProvider = ({ children }) => {
  
  return(
    <AuthContext.Provider value={{

    }}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider;
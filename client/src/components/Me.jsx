import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';

const Me = () => {
  const [me, setMe] = useState([]);

  const { state } = useContext(AuthContext)

  const navigate = useNavigate()

  useEffect(() => {
    state.isLoggedIn ? (
    axios.get(`/api/users/me`)
      .then(res => {
        const me = res.data;
        setMe(me);
      })
      .catch(() => {
        navigate('/login')
      })
      ):(
      navigate('/login')
    )
  }, [navigate, state.isLoggedIn])

  return (
    <ul>

      
          <li key={me.name}>Name: {me.name}</li>
          <li key={me.languages}>Languages: {me.languages}</li>
          <li key={me.bio}>Bio: {me.bio}</li>
          <br></br>
  
     
    </ul>
  )
}

export default Me

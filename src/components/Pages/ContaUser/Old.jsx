import React, { useEffect, useState } from 'react'
import styles from './ContaUser.module.css'
import { api } from '../../../services/api'

const ContaUser = () => {
  const [userdata, setUserdata] = useState();
  const getData = async () => {
    const response = await api.get('/api/users');
    response.json().then((res)=> setUserdata(res.data.userdata));
    console.log(userdata);
  };

  useEffect(()=>{
    getData();
  })

  return (
    <div className={styles.fundo}>
      <h1 className={styles.container}>TESTE</h1>
    </div>
  )
}

  export default ContaUser

// testar o código amanhã 23/09

{/*
function ContaUser () {
  const dataUser = (data) => api.get("/api/users", 
    {   
      name: data.name,
    }
        )
.then((response) => {
    console.log(response.data)
    
  })
.catch((erro) => {
    console.log(erro.response.data,"Deu erro ao pegar dados back")
  });

  return (
    <div className={styles.fundo}>
      <h1 className={styles.container}>{dataUser}</h1>
      
    </div>
  )
}

export default ContaUser

//{/*
<div className={styles.fundo}>
      {userdata.map((ce) => (
             
        <div className={styles.container} 
              key={ce.name}>
          {/*<h2>{ce.email}</h2>
          <p>{ce.balance}</p>*/
          
       
    





















































/*
import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import styles from './ContaUser.module.css';

function ContaUser() {


  const [conta, setConta] = useState([]);

  const userAccount = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    // console.log(user.access_token)
   
  // 1 - Resgatando dados do usuário
  
    const dataUser = {
      headers: {
        Accept: "application/json", 
        "ngrok-skip-browser-warning": null, 
        Authorization: `Bearer ${user.access_token}`
    }
  }

    axios.get("https://f7d7-179-108-104-153.sa.ngrok.io/api/users", dataUser)
    .then((response => {
      setConta(response.data)
      console.log(conta)
    }))
    .catch((erro) => {
      console.log(erro, 'erro')
    }) 
  // console.log(conta.user.id)
 
  // console.log(conta.account.balance);
}     
  useEffect(() => {
    userAccount();
  },[])


  return (
    <div className={styles.fundo}>
      <h1 className={styles.container}>Sua conta</h1>
      
      {Object.values(conta).map((contas, key) => (
          <div key={key}>
            
            <h3> Usuário: {contas.name} </h3>
          </div>
        )
        )}
    </div>
  )
}

export default ContaUser
*/}
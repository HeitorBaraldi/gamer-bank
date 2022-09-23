import React, { useEffect, useState } from 'react'
import styles from './ContaUser.module.css'
import { api } from '../../../services/api'

const ContaUser = () => {
  const [userdata, setUserdata] = useState();
  const getData = async () => {
    const response = await api.get('/api/users');
    response.json()
    .then((res)=> 
    setUserdata([res.data.userdata]));
    console.log(userdata);
  };

  useEffect(()=>{
    getData();
  })

  return (
    <div className={styles.fundo}>
      {userdata.map((ce) => (
        <div className={styles.container} 
        key={ce.id}>
          <h2>{ce.name}</h2>
          <p>{ce.email}</p>
        </div>
      ))}
    </div>
  );
};

export default ContaUser

  {/*return (
    <div className={styles.fundo}>
      <div className={styles.container}>
        <h1>Dados usuário</h1>
        <p>Carlos:</p>
        <p>Saldo:</p>
      </div>
      </div>
  )}    


 
  */}
// 



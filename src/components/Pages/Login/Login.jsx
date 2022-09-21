import styles from './Login.module.css'
import React, {useState, useContext} from 'react'
import  {AuthContext} from "../../../contexts/auth"
import { Link } from 'react-router-dom'


const Login = () => {
    const {authenticated, login} = useContext(AuthContext)

    const [username, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const cliqueLogin = (e) => {
        login(username, password)
    }

return (        
    <div className={styles.fundo}>
        <div className={styles.container}>
            <h1>Faça seu Login</h1>
            <p>{authenticated}</p> 
                <form onSubmit={cliqueLogin}>
                    <div>
                        <label htmlFor="email"></label>
                        <input
                            placeholder='Digite seu email' 
                            type="email" 
                            name='email' 
                            id='email'
                            autoComplete='none'
                            value={username} 
                            onChange={(e)=>setEmail(e.target.value)}
                            required/>
                            
                    </div>

                    <div>
                            <label htmlFor="password"></label>
                            <input 
                            placeholder='Digite sua senha' 
                            type="password" 
                            name='password' 
                            id='password' 
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            required />
                    </div>
                        
                    <div>
                            <Link to="/">
                                <button className={styles.button}
                                    onClick={cliqueLogin} 
                                    type='submit'
                                    >Entrar
                                </button>
                            </Link>
                            
                    </div>
                </form>
        </div>
    </div>
)}

    export default Login
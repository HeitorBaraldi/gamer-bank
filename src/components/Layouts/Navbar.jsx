import {NavLink} from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../img/logo.jpg'
import React, {useContext} from 'react';
import {useRef} from 'react';
import { AuthContext } from '../../contexts/auth';

const Navbar = () => {
    const {authenticated, logout} = useContext(AuthContext);
    
  
    const handleLogout = () =>{
      logout();
    }
  
    const navRef = useRef();

    return (
        <div className={styles.navbar}>
                <NavLink to="/"><img src={logo} alt="Banco"/></NavLink>

            <nav ref={navRef} className={styles.list}>
                {/* retirar exclamação abaixo*/}
                    {authenticated ? 
                        <>
                        <li className={styles.item}>
                            <NavLink to="/transfer" className={({ isActive }) => (isActive ? styles.active : "")}>Transferência</NavLink>
                        </li>
                        <li className={styles.item}>
                            <NavLink to="/deposito" className={({ isActive }) => (isActive ? styles.active : "")}>Depósito</NavLink>
                        </li>
                        <li className={styles.item}>
                            <NavLink to="/saque" className={({ isActive }) => (isActive ? styles.active : "")}>Saque</NavLink>
                        </li>
                        <li className={styles.item}>
                            <NavLink to="/boletogerar" className={({ isActive }) => (isActive ? styles.active : "")}>Gerar Boleto</NavLink>
                        </li>
                        <li className={styles.item}>
                            <NavLink to="/boletopagar" className={({ isActive }) => (isActive ? styles.active : "")}>Pagar Boleto</NavLink>
                        </li>
                        <li className={styles.item}>
                            <NavLink onClick={handleLogout}>Sair</NavLink>
                        </li>
                        </> :

                        <>
                        <li className={styles.item}>
                            <NavLink to="/login" className={({ isActive }) => (isActive ? styles.active : "")}>Entrar</NavLink>
                        </li>
                        <li className={styles.item}>                    
                            <NavLink to="/cadastro" className={({ isActive }) => (isActive ? styles.active : "")}>Cadastro</NavLink>
                        </li>

                        </>
                    }       
            </nav>
  
        </div>
    )
}

export default Navbar






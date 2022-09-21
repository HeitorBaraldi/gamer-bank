// React Router
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import React, { useContext } from 'react';


// Components
import Navbar from './components/layouts/Navbar'
import Rodape from './components/layouts/Rodape'

//Pages
import Home from './components/Pages/Home/Home'
import Login from './components/Pages/Login/Login'
import Transfer from './components/Pages/Transfer/Transfer'
import Cadastro from './components/Pages/Cadastro/Cadastro'
import Deposito from './components/Pages/Deposito/Deposito';
import Saque from './components/Pages/Saque/Saque';
import BoletoGerar from './components/Pages/BoletoGerar/BoletoGerar';
import BoletoPagar from './components/Pages/BoletoPagar/BoletoPagar';

import {AuthProvider, AuthContext} from './contexts/auth'

//import ContaUser from './pages/ContaUser/ContaUser'

function AppRoutes () {
  
  const Private = ({children}) => {
     const { authenticated, loading } = useContext(AuthContext); 
    
     if(loading){
      return <div className="loading">Loading...</div>
     }
     if (!authenticated){
      return <Navigate to={"/login"} /> 
     }
     return children;
  }

  return (
    <div className="App">
      
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/Login' element={<Login />} />
              <Route path='/Cadastro' element={<Cadastro />} />
              <Route path="/Transfer"  element={<Private><Transfer/></Private>}/>
              <Route path='/Deposito' element={<Private><Deposito/></Private>}/>
              <Route path='/Saque' element={<Private><Saque/></Private>}/>
              <Route path='/BoletoGerar' element={<Private><BoletoGerar/></Private>}/>
              <Route path='/BoletoPagar' element={<Private><BoletoPagar/></Private>}/>
            </Routes>
          <Rodape/>
        </AuthProvider>
      </BrowserRouter>
      
    </div>
  );
}
export default AppRoutes;
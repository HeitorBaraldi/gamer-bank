import React from 'react';
import styles from './Transfer.module.css';
import InputMask from 'react-input-mask';
import CurrencyInput from 'react-currency-input-field';

const Transfer = () => {

  return (
    <div className={styles.fundo}>
      <div className={styles.container}>
        <h1>Conta de destino</h1>
          <form>
            <div >
              <label htmlFor="">Agência: 
                <InputMask className={styles.container_inputs} 
                mask="9999-9" 
                type="text" 
                name='agencia_destino'
                autoComplete='none' 
                id='agencia_destino' 
                placeholder="Digite o nº da agência" />
              </label>
            </div> 
            <div className={styles.form_line}>
              <label htmlFor="">Conta: 
                <InputMask className={styles.container_inputs} 
                mask="9999999999999999" 
                type="text" 
                name='conta_destino'
                autoComplete='none' 
                id='conta_destino' 
                placeholder="Digite o nº da conta" />
              </label>
            </div> 
            <div className={styles.form_line}>
              <label htmlFor="">Valor: 
                <CurrencyInput className={styles.container_inputs} 
                prefix="R$"
                type="text" 
                name='valor'
                autoComplete='none' 
                id='valor' 
                placeholder="R$" 
                decimalSeparator="," 
                groupSeparator="."
                decimalsLimit="2"/>
              </label>
            </div>
            <button 
              className={styles.button} 
              onClick={(e) => alert("Transferência efetuada")}> Transferir </button>      
          </form>

      </div>
    </div>
  )
}

export default Transfer

//npm install react-currency-input-field - instalar para melhor config da tela de transf
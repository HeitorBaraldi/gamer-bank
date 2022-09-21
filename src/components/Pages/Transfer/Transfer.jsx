import React from 'react';
import styles from './Transfer.module.css';
import InputMask from 'react-input-mask';
import CurrencyInput from 'react-currency-masked-input';

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
                mask="99999-9" 
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
                mask="999.999.999.999,99" 
                type="text" 
                name='valor'
                autoComplete='none' 
                id='valor' 
                placeholder="R$" />
              </label>
            </div>
            <button className={styles.button}> Transferir </button>      
          </form>

      </div>
    </div>
  )
}

export default Transfer
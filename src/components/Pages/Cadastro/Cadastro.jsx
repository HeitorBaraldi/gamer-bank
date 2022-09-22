import styles from './Cadastro.module.css';
import { useState } from 'react'
import { api } from '../../../services/api'
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
//import {cpf, cnpj} from 'cpf-cnpj-validator';

const schema = yup.object({
  
  document_type: yup.string().required('Selecione o tipo de conta'),
  name: yup.string().required('O campo nome é obrigatório'),
  document_number: yup.string('Digite um documento válido').required('O documento é obrigatório'),//.value() => cpf.isValid(data) || cnpj.isValid(data),
  email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
  password: yup.string().required('A senha é obrigatória'),
  road: yup.string().required('O campo endereço é obrigatório'),
  zip_code: yup.string('Digite o CEP').required('O Cep é obrigatório'),
  number: yup.number('Digite um número válido').required('O número é obrigatório'),
  
}).required();


const Cadastro = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const navigate = useNavigate();
  const [type, setType] = useState("CPF")

  const addUser = data =>
  api.post("/api/users", 
  
  {   name: data.name,
      document_type: data.document_type,
      document_number: parseInt(data.document_number),
      email: data.email,
      password: data.password,
      road: data.road,
      number: parseInt(data.number),
      zip_code: parseInt(data.zip_code)
}
  
  )
  .then((response) => {
    console.log(response.data)
    navigate("/login");
    
    
  })
  .catch((erro) => {
    console.log(erro.response.data,"Deu erro no envio de dados")
  });

  return (
    <div className={styles.fundo}>
      <div className={styles.container}>
        <form className={styles.container_form} onSubmit={handleSubmit(addUser)} >
          <h1>Abra sua conta</h1>
            <div className={styles.container_radios}>
            
              <div>
                <input 
                type="radio" 
                name="document_type" 
                id="CPF" 
                value={"CPF"} {...register("document_type", { required: true })} 
                onClick={(e) => setType(e.target.value)} />
                <label>Pessoa Fisica</label>
              </div>

              <div>
                <input 
                type="radio" 
                name="document_type" 
                id="CNPJ" value={"CNPJ"} {...register("document_type", { required: true })} 
                onClick={(e) => setType(e.target.value)} />
                <label>Pessoa Juridica</label>
              </div>
              {errors.document_type && <span className={styles.span_cad}>Selecione uma opção</span>}
            </div>

        <div>
                <div>
                <label htmlFor="name">
                  <input 
                  className={styles.container_inputs} 
                  type="text" 
                  name="name"
                  autoComplete='none'
                  id="name" {...register("name", { required: true})} 
                  placeholder="Nome completo" />
                  {errors.name?.message && <span className={styles.span_cad}>O nome é obrigatório</span>}
                </label>

              <div>
              <label htmlFor="">
              {type === "CPF" ?
                <InputMask className={styles.container_inputs} 
                mask="999.999.999-99" 
                type="text" 
                name='document_number'
                autoComplete='none' 
                id='document_number' {...register("document_number", { required: true})} 
                placeholder="Digite o CPF" />
                : <InputMask className={styles.container_inputs} 
                mask="99.999.999/9999-99" 
                type="text" 
                name='document_number'
                autoComplete='none' 
                id='document_number' {...register("document_number", { required: true})} 
                placeholder="Digite o CNPJ" />
              }
              {errors.document_number?.message && <span className={styles.span_cad}>O documento é obrigatório</span>}
              </label>
              </div>  
            
            <label htmlFor="email">
              <input className={styles.container_inputs} 
              type="email" 
              name="email"
              autoComplete='none' 
              id="email" {...register("email", { required: true })} 
              placeholder='Digite seu E-mail' />
              {errors.email?.message && <span className={styles.span_cad}>O e-mail é obrigatório</span>}
            </label>

            <label htmlFor="password">
              <input className={styles.container_inputs} 
              name="password"
              autoComplete='none' 
              id="password" {...register("password", { required: true})} 
              type="password" 
              placeholder="Senha" />
              {errors.password?.message && <span className={styles.span_cad}>A senha é obrigatória</span>}
            </label>

            <label htmlFor="road">
              <input className={styles.container_inputs} 
              type="text" 
              name="road"
              autoComplete='none' 
              id="road" {...register("road", { required: true})} 
              placeholder="Endereço" />
              {errors.road?.message && <span className={styles.span_cad}>O endereço é obrigatório</span>}
            </label>

            <label htmlFor="number">
              <input className={styles.container_inputs} 
              type="text" 
              name="number"
              autoComplete='none' 
              id="number" {...register("number", { required: true})} 
              placeholder="Numero" />
              {errors.number?.message && <span className={styles.span_cad}>O número é obrigatório</span>}
            </label>

            <div>
            <label htmlFor="">
              <InputMask className={styles.container_inputs} 
              mask="99999-999" 
              type="text" 
              name='zip_code'
              autoComplete='none' 
              id='zip_code' {...register("zip_code", { required: true})} 
              placeholder="CEP" />
            {errors.zip_code?.message && <span className={styles.span_cad}>O documento é obrigatório</span>}
            </label>
            </div> 

            </div>
            <div className={styles.div_btn_cad}>
            <input 
            id='btnCadastro' 
            type="submit" 
            value="Cadastre-se" 
            className={styles.div_btn}/>
            </div>

          </div>
        </form>
      </div>
    </div>
  )
}
export default Cadastro;
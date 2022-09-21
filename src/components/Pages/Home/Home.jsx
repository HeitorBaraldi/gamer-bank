import styles from './Home.module.css'
import {Link} from 'react-router-dom'


const Home =() => {
    return (
        <div className={styles.fundo}>

            <div className={styles.container}>
                <h1>Bem vindo ao <span>Gamer's Bank</span></h1>
                <p>Conheça o banco pensado para você: Gamer</p>
                <p>Incriveis beneficios para não pausar seu jogo!!!</p>
                {/*<Link to="/cadastro">
                    <button>Cadastre agora</button>
    </Link>*/}
                
                <div className={styles.div_btn_cad}>
                <Link to ="/cadastro">
                <input 
                id='btnCadastro' 
                type="submit" 
                value="Cadastre-se" 
                className={styles.div_btn}/>
                </Link>
                </div>
                
            </div>
         </div>
    )
}

export default Home
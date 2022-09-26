import styles from './Home.module.css'
import {Link} from 'react-router-dom'
import logoPs from '../../../img/psplus.png'
import logoGp from '../../../img/gamepass.png'
import logoSteam from '../../../img/steam.png'



const Home =() => {
    return (
        <main>
        <div className={styles.fundo}>

            <div className={styles.container}>
                <h1>Bem vindo ao <span>Gamer's Bank</span></h1>
                <p>Conheça o banco pensado para você: Gamer</p>
                <p>Incriveis beneficios para não pausar seu jogo!!!</p>
                
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

        <div className={styles.fundo2}>
            <div className={styles.container2e}>
                <h1>Descontos incriveis</h1>
                <p>Ganhe até 30% de desconto</p>
                <p>utilizando nosso cartão de crédito</p>
                <p>para pagamento das mensalidades no <span>Plano Anual</span></p>
                <p>das principais plataformas de games !!!</p>
            </div>
            <div className={styles.container2d}>
                <h1>Não pause seu jogo</h1>
                <a href="https://store.playstation.com/pt-br/pages/latest"><img src={logoPs} alt="Ps" /></a>
                <a href="https://www.xbox.com/pt-BR/xbox-game-pass/pc-game-pass?&ef_id=EAIaIQobChMI_oryouyy-gIVvEFIAB3m0geREAAYASAAEgJ-e_D_BwE:G:s&OCID=AIDcmmaigrfm8i_SEM_EAIaIQobChMI_oryouyy-gIVvEFIAB3m0geREAAYASAAEgJ-e_D_BwE:G:s&gclid=EAIaIQobChMI_oryouyy-gIVvEFIAB3m0geREAAYASAAEgJ-e_D_BwE"><img src={logoGp} alt ="Gp"/></a>
                <a href="https://store.steampowered.com/?l=brazilian"><img src={logoSteam} alt="St" /></a>
                
            </div>
        </div>
        </main>

    )
}

export default Home
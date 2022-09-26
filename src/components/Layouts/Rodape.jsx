import styles from './Rodape.module.css'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

const Rodape = () => {
    return (
            <footer className={styles.footer}>
                <ul className={styles.social_list}>
                    <li>
                        <a href="https://www.facebook.com/"><FaFacebook/></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/sem/campaign/emailsignup/?campaign_id=13534421690&extra_1=s|c|547348930993|e|instagram%20%27|&placement=&creative=547348930993&keyword=instagram%20%27&partner_id=googlesem&extra_2=campaignid%3D13534421690%26adgroupid%3D126262409974%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-1321618851291%26loc_physical_ms%3D1001729%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=EAIaIQobChMIlcbC0fWy-gIVEemRCh3irgTfEAAYASAAEgKLxPD_BwE"><FaInstagram/></a>
                    </li>
                    <li>
                        <a href="https://br.linkedin.com/?src=go-pa&trk=sem-ga_campid=12619604099_asid=122510712920_crid=606535073454_kw=linked_d=c_tid=kwd-103941963_n=g_mt=e_geo=1001729_slid=&mcid=6821526239111716925&cid=&gclid=EAIaIQobChMI6sbr6PWy-gIVc0FIAB2-fQ8gEAAYASAAEgL8tPD_BwE&gclsrc=aw.ds"><FaLinkedin/></a>
                    </li>
                </ul>
                <p className={styles.copy_right}>contato@gamersbank.com</p>
                <p className={styles.copy_right}><span>Gamer's Bank</span>&copy; 2022</p>
                
            </footer>
    )
}

export default Rodape

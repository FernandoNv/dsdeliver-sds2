import './Footer.styles.css';
import { ReactComponent as YoutubeIcon } from '../../images/youtube-icon.svg';
import { ReactComponent as InstagramIcon } from '../../images/instagram-icon.svg';
import { ReactComponent as LinkedinIcon } from '../../images/linkedin-icon.svg';

function Footer () {
    return(
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/c/DevSuperior" target="_new">
                    <YoutubeIcon/>
                </a>
                <a href="https://www.linkedin.com/school/devsuperior" target="_new">
                    <InstagramIcon/>
                </a>
                <a href="https://www.instagram.com/devsuperior.ig" target="_new">
                    <LinkedinIcon/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
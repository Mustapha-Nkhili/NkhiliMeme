import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"

export default function Footer() {
    return (
        <footer>
            <div className="copyright">  Made with <FontAwesomeIcon icon={faHeart} /> by 
             <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mustapha-nkhili-35280a280/"> Mustapha Nkhili</a></div>
        </footer>
    )
}
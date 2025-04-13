import './Footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
    const contactUrl = [
        { instaUrl: "https://www.instagram.com/mukt.techno.krit?utm_source=qr&igsh=MTAwZ2NsZnV4bW5rdA==" },
        { fbUrl: "https://www.facebook.com/share/169eueMco7/" },
        { whatsappUrl: "https://wa.me/message/XDWJDILV4PS5C1" },
        { emailUrl: "mukt.techno.kriti@gmail.com" }
    ]
    return (
        <footer className="bg-dark text-light">
            <div className="container text-center py-4">
                <h5>Follow Us</h5>
                <div className="social-icons">
                    <a href={contactUrl[0].instaUrl} target="_blank" rel="noopener noreferrer" className="me-4">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a href={contactUrl[1].fbUrl} target="_blank" rel="noopener noreferrer" className="me-4">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a href={contactUrl[2].whatsappUrl} target="_blank" rel="noopener noreferrer" className="me-4">
                        <i className="bi bi-whatsapp"></i>
                    </a>
                    <a href={`mailto:${contactUrl[3].emailUrl}`} className="me-4">
                        <i className="bi bi-envelope"></i>
                    </a>
                </div>

                <p className="mt-3">&copy; {new Date().getFullYear()} Mukt Techno Krit. All rights reserved.</p>
            </div>
            <div className="text-center bg-dark text-light py-2">
                <p>Powered by Techno Mukriti</p>
            </div>
        </footer>
    );
}

export default Footer;

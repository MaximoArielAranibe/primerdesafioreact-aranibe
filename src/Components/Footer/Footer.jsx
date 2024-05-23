import { Link } from "react-router-dom"
import './footer.css'
import SocialMediaSVG, { FacebookSVG, WhatsappSVG, InstagramSVG, GmailSVG, } from '../SocialMediaSVGS/SocialMediaSVG.jsx'

export const Footer = () => {
	return (
		<footer className="footer__container">
			<div className="footer__wrapper">
				<span className="footer__knowmore">TE INTERESA SABER MÁS?↓</span>
				<span className="footer__contact">Contactanos</span>
				<span className="footer__arrow"></span>
			</div>
			<div className="footer__wrapper">
				<h6 className="footer__phrase">Elevamos tu capacidad física y mental.</h6>
				<div className="footer__info">
					<h6 className="footer_location">Pergamino, Buenos Aires</h6>
					<Link className="footer__link">vitalsportpergamino@gmail.com</Link>
					<p className="footer__number">+54 9 2477 333 333</p>
					<p className="footer__adress">Direccion imaginaria 243, barrio acevedo, entre calle imaginaria y calle imaginaria</p>
					<Link className="footer__map footer__link">Ver en el mapa ⇗</Link>
				</div>

				<div className="footer__info">
					<h6>Rosario, Buenos Aires</h6>
					<Link className="footer__link">vitalsportpergamino@gmail.com</Link>
					<p className="footer__number">+54 9 2477 333 333</p>
					<p className="footer__adress">Direccion imaginaria 984, barrio acevedo, entre calle imaginaria y calle imaginaria</p>
					<Link className="footer__map footer__link">Ver en el mapa ⇗</Link>
				</div>

				<div className="footer__info--map footer__info">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.9259114533857!2d-60.56734793971346!3d-33.8915618958178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b9b55943e79faf%3A0xa3533f4fd487bc3c!2sEspa%C3%B1a%20Pergamino%20Park!5e0!3m2!1sen!2sus!4v1715971936877!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
					<ul className="footer__info--list">
						<li className="footer__info--item"><Link to="https://www.instagram.com/suplementos_vitalsport/" target="_blank"><FacebookSVG /></Link></li>
						<li className="footer__info--item"><Link to="https://www.instagram.com/suplementos_vitalsport/" target="_blank"><WhatsappSVG /></Link></li>
						<li className="footer__info--item"><Link to="https://www.instagram.com/suplementos_vitalsport/" target="_blank"><InstagramSVG /></Link></li>
						<li className="footer__info--item"><Link to="https://www.instagram.com/suplementos_vitalsport/" target="_blank"><GmailSVG /></Link></li>
					</ul>
				</div>

			</div>
		</footer>
	)
}

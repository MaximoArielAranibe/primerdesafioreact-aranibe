import { Link } from "react-router-dom"
import './footer.css'

export const Footer = () => {
	return (
		<footer className="footer__container">
			<div className="footer__wrapper">
				<span>Te interesa saber más?</span>
				<span>Contactanos</span>
				<span>{"->"}</span>
			</div>
			<div className="footer__wrapper">
				<div className="footer_info">
					<h6>Elevamos tu capacidad fisica y mental</h6>
				</div>
				<div className="footer_info">
					<h6>Pergamino</h6>
					<Link>vitalsportpergamino@gmail.com</Link>
					<p>+54 9 2477 333 333</p>
					<p>Direccion imaginaria 243, Barrio acevedo, entre calle imaginaria y calle imaginaria</p>
					<Link>Ver en el mapa</Link>
				</div>
				<div className="footer_info">
				<h6>Pergamino</h6>
					<Link>vitalsportpergamino@gmail.com</Link>
					<p>+54 9 2477 333 333</p>
					<p>Direccion imaginaria 243, Barrio acevedo, entre calle imaginaria y calle imaginaria</p>
					<Link>Ver en el mapa</Link>
				</div>
				<div className="footer_info">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.9259114533857!2d-60.56734793971346!3d-33.8915618958178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b9b55943e79faf%3A0xa3533f4fd487bc3c!2sEspa%C3%B1a%20Pergamino%20Park!5e0!3m2!1sen!2sus!4v1715971936877!5m2!1sen!2sus" width="300" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
				</div>
			</div>
		</footer>
	)
}

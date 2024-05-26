import { useEffect, useState } from "react";
import Modal from 'react-modal'
import emailjs from 'emailjs-com';
import { useCart } from "../../context/CartProvider";
import '../Button/index.css';
import { db } from "../../firebase/firebase.js";
import { collection, getDocs, addDoc } from "firebase/firestore";
import SvgCart from "../SvgCart/SvgCart.jsx";
import './index.css';
import toast from "react-hot-toast";

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		padding: '0',
		backgroundColor: "none"
	},
};


export const ModalForm = () => {
	const { cart, calculateTotal } = useCart();
	const [openedModal, setOpenedModal] = useState(false);
	const [email, setEmail] = useState('');
	const [numberOfOrder, setNumberOfOrder] = useState(1);

	useEffect(() => {
		const getNumberOfOrder = async () => {
			try {
				const ordersRef = collection(db, "orders");
				const querySnapshot = await getDocs(ordersRef);
				const lastOrder = querySnapshot.docs.length;
				setNumberOfOrder(lastOrder + 1)
			} catch (error) {
				console.error("Error al obtener el número de orden:", error)
			}
		};
		getNumberOfOrder()
	}, []);

	const separadorDeMiles = () => {
		const resultadoString = calculateTotal().toString();
		let resultado = "";
		for (let i = 0; i < resultadoString.length; i++) {
			resultado += resultadoString[i];
			if ((resultadoString.length - i - 1) % 3 === 0 && i < resultadoString.length - 1) {
				resultado += ".";
			}
		}
		return resultado
	}

	const cartItemsEmail = cart.map((item) => {
		return (
			`${item.name} (${item.quantity} unidades) con un valor de $${(item.price[0] * item.quantity)}\n`
		)
	});

	emailjs.init('SAfLDKK81aknEdPMH');

	const openModal = () => {
		setOpenedModal(true);
	};

	const closedModal = () => {
		setOpenedModal(false);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		toast.success('Correo enviado con éxito', { position: "bottom-center"})
		try {
			// Enviar correo electrónico
			await emailjs.send("service_36n7yza", "template_z72rmlg", {
				to_name: email,
				from_name: "darknesswong@gmail.com",
				message: `Tu carrito: N°:${numberOfOrder.toString()}
					${cartItemsEmail}
					Total del carrito: $${separadorDeMiles()}
					Para finalizar la compra podes abonar en nuestro local fisico ubicado en "dirección imaginaria" o abonar por transferencia al cbu : "cbu imaginario" y una vez pagado enviar comprobante al +549********.
					Muchas gracias!`,
			});

			// Guardar el pedido en Firestore
			await addDoc(collection(db, "orders"), {
				email,
				items: cart,
				total: calculateTotal(),
				orderNumber: numberOfOrder
			});

			// Incrementar el número de orden
			setNumberOfOrder(prevNumber => prevNumber + 1);
			console.log("Correo enviado");
			// Cerrar el modal
			closedModal();
		} catch (error) {
			console.error("Error al enviar el correo electrónico:", error);
		}
	};

	return (
		<>
			<button className="modalform" onClick={openModal}>Comprar carrito<span><SvgCart /></span></button>
			<Modal
				isOpen={openedModal}
				onRequestClose={closedModal}
				style={customStyles}
				ariaHideApp={false}
				contentLabel="Formulario Modal"
			>
				<div className="modal__container">
					<div className="modal__wrapper">
						<h2 className="modal__title">⭐Ingresá tu email para poder finalizar la compra.</h2>
						<button className="modal__wrapper--button" onClick={closedModal}>X</button>

					</div>
					<form className="modal__form" onSubmit={handleSubmit}>
						<label className="modal__label">
							<div className="label__wrapper">
								<input
									className="label__input"
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
									placeholder="vitalsport@hotmail.com"
									aria-required
								/>
								<button type="submit">Enviar</button>
							</div>
						</label>
					</form>
				</div>
			</Modal >
		</>
	);
};


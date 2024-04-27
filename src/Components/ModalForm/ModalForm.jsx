import { useState } from "react";
import Modal from 'react-modal'
import emailjs from 'emailjs-com';
import { useCart } from "../../context/CartProvider";
import '../Button/index.css'



const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		padding: '0',
	},
};



export const ModalForm = () => {
	const [openedModal, setOpenedModal] = useState(false);
	const [email, setEmail] = useState('');
	const { cart, calculateTotal } = useCart();
	const [numberOfOrder, setNumberOfOrder] = useState(1);

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
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Formulario enviado");
		emailjs.send("service_36n7yza", "template_z72rmlg", {
			to_name: email,
			from_name: "darknesswong@gmail.com",
			message: `Tu carrito: N°:${numberOfOrder.toString()}
            ${cartItemsEmail}
            Total del carrito: $${separadorDeMiles()}
        Para finalizar la compra podes abonar en nuestro local fisico ubicado en "dirección imaginaria" o abonar por transferencia al cbu : "cbu imaginario" y una vez pagado enviar comprobante al +549********.
        Muchas gracias!`,
		})
		console.log(numberOfOrder);
		setNumberOfOrder(numberOfOrder + 1)
		console.log(numberOfOrder);
		closedModal();
	};




	return (
		<>
			<button className='' onClick={openModal}>Comprar carrito</button>
			<Modal
				isOpen={openedModal}
				onRequestClose={closedModal}
				style={customStyles}
				contentLabel="Formulario Modal"
			>
				<h2>Formulario</h2>
				<p></p>
				<form onSubmit={handleSubmit}>
					<label>
						Correo electrónico:
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</label>
					<button type="submit">Enviar</button>
				</form>
			</Modal>
		</>
	);
};


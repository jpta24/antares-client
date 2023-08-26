import { useState } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';

import './Contact.css';

const Contact = () => {
	const initialState = {
		nombre: '',
		correo: '',
		tel: '',
		mensaje: '',
	};
	const [message, setMessage] = useState(initialState);
	const [showModal, setShowModal] = useState(false)

	const postAPI = async () => {
	
		try {
			const response = await axios.post(
				`https://pink-clumsy-gosling.cyclic.app/mails/webmessage`,
				message
			);
			console.log(response.data.message)
			setShowModal(true)
		} catch (error) {
			console.error(error)
		}
	};
	return (
		<div className='bg-secondary p-2' id='contact'>
			<h3 className='m-3 fw-bolder'>Contáctanos</h3>
			<form className='col-12 col-md-8 mx-auto h5'>
				<div>
					<input
						type='text'
						id='nombre'
						name='nombre'
						required
						placeholder='Nombre'
						className='col-8 my-1 contact'
						onChange={(e) => {
							setMessage({
								...message,
								[e.target.name]: e.target.value,
							});
						}}
					/>
				</div>
				<div>
					<input
						type='email'
						id='correo'
						name='correo'
						required
						placeholder='E-mail'
						className='col-8 my-1 contact'
						onChange={(e) => {
							setMessage({
								...message,
								[e.target.name]: e.target.value,
							});
						}}
					/>
				</div>
				<div>
					<input
						type='tel'
						id='tel'
						name='tel'
						required
						placeholder='Teléfono'
						className='col-8 my-1 contact'
						onChange={(e) => {
							setMessage({
								...message,
								[e.target.name]: e.target.value,
							});
						}}
					/>
				</div>
				<div className=''>
					<textarea
						id='mensaje'
						name='mensaje'
						placeholder='Mensaje'
						rows='4'
						required
						className='col-8 my-1 contact'
						onChange={(e) => {
							setMessage({
								...message,
								[e.target.name]: e.target.value,
							});
						}}
					></textarea>
				</div>
				<div>
					<Button
						variant='primary'
						className='mx-2 avisos col-5 mx-auto my-2 border fw-bold'
                        onClick={postAPI}
					>
						Enviar
					</Button>
				</div>
			</form>
			<Modal
					show={showModal}
					onHide={() => setShowModal(false)}
					backdrop='static'
					keyboard={false}
				>
					<Modal.Header closeButton>
						<Modal.Title>Mensaje Enviado</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						Muchas gracias, su mensaje ha sido recibido en nuestro correos nos podremos en contacto con ud. pronto.
					</Modal.Body>
					<Modal.Footer>
						<Button variant='secondary' onClick={() => setShowModal(false)}>
							Cerrar
						</Button>
					</Modal.Footer>
				</Modal>
		</div>
	);
};

export default Contact;

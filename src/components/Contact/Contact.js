import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
	const initialState = {
		nombre: '',
		correo: '',
		tel: '',
		mensaje: '',
	};
	const [message, setMessage] = useState(initialState);
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
                        onClick={()=>{
                            console.log(message)
                            setMessage(initialState)
                        }}
					>
						Enviar
					</Button>
				</div>
			</form>
		</div>
	);
};

export default Contact;

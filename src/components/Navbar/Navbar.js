import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
	return (
		<div className='container-fluid p-0'>
			<nav className='col-12 d-flex justify-content-between px-3 py-3 bg-dark'>
				<div className='d-flex align-items-center justify-content-center'>
					<img
						src={'/logo-antaresS.png'}
						width='50px'
						height='50px'
						alt='altLogo'
					/>{' '}
					<span className='text-light h3 px-4 '>
						Antares International Trade Corp.
					</span>
				</div>
				<div className='col-4 d-flex justify-content-around align-items-center fw-bold fs-5'>
					<Link to='#'>
						<span>Inicio</span>
					</Link>

					<Link to='#'>
						<span>Servicios</span>
					</Link>
					<Link to='#'>
						<span>Nosotros</span>
					</Link>
				</div>
				<div className='col-2 d-flex justify-content-around align-items-center fw-bold fs-4'>
					<Link to='#' className='badge rounded-pill bg-primary py-3 px-5'>
						<span>Contacto</span>
					</Link>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;

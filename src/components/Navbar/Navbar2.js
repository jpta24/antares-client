import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Nabvar2 = () => {
	return (
		<Navbar
			className='px-4'
			bg='dark'
			variant='dark'
			sticky='top'
			expand='sm'
			collapseOnSelect
		>
			<Navbar.Brand href='/' className='d-flex align-items-center'>
				{window.innerWidth < 450 ? (
					<Link to={'/'}>
						<img
							src={'/logo-antaresS.png'}
							width='40px'
							height='40px'
							alt='altLogo'
						/>
						<span className='text-light'> Antares Inter Trade Corp.</span>
					</Link>
				) : (
					<Link to={'/'}>
						<img
							src={'/logo-antaresS.png'}
							width='40px'
							height='40px'
							alt='altLogo'
						/>
					</Link>
				)}
			</Navbar.Brand>

			<Navbar.Toggle className='coloring' />
			<Navbar.Collapse className='d-flex-lg justify-content-around '>
            {window.innerWidth > 450 && 
                <div className='d-flex align-items-center'>
                    <h1 className='text-light h3 px-4 d-inline-block text-truncate col-md-12 text-start'>Antares International Trade Corp.</h1>
                </div>
            }
				<Nav className='col-11 col-md-6 d-flex justify-content-around align-items-center fw-bold fs-5'>
					<Nav.Link href='#'>Inicio</Nav.Link>
					<Nav.Link href='#'>Servicios</Nav.Link>
					<Nav.Link href='#'>Nosotros</Nav.Link>
				</Nav>
				<Nav className='col-11 col-md-2 d-flex justify-content-around align-items-center fw-bold fs-4'>
					<Nav.Link to='#' className='badge rounded-pill bg-primary py-3 px-5'>
						<span>Contacto</span>
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Nabvar2;

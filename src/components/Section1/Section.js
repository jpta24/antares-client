import React from 'react';

const Section = () => {
	return (
		<div>
			<section id='nosotros' className='services-section my-4'>
				<div className='section-heading'>
					<h2 className='h1 fw-bold my-md-4 my-1'>
						Servicios de Procura Especializados
					</h2>
				</div>
				<div className='services-content d-flex flex-wrap justify-content-around p-3 mx-auto'>
					<div className='col-md-5 col-11 my-md-5 '>
						<img src='section1.png' alt='' className='col-11' />
					</div>
					<div className='services-description col-md-6 col-11 text-start fw-bold fs-5  my-3'>
						<p>
							Nuestra empresa, Antares Internacional Trade Corp, Ofrece
							servicios de procura especializados, enfocados en adquirir y
							proveer los materiales esenciales para la fabricación de productos
							de seguridad monetaria. Como una compañía comprometida con
							soluciones integrales, operamos en diversos campos como tintas,
							papeles, hilos, cartones, cintas adhesivas, cuchillas y productos
							relacionados.
						</p>
						<p>
							A través de nuestra sólida trayectoria en la industria, hemos
							establecido relaciones de confianza con proveedores reconocidos y
							fabricantes líderes. Esto garantiza la autenticidad y calidad de
							los suministros que ofrecemos, siendo conscientes de la vital
							importancia de estos elementos en la producción de productos
							seguros. Nos esforzamos por brindar productos que cumplen con los
							más altos estándares de calidad y seguridad.
						</p>
					</div>
				</div>
				{/* <div className='services-icons'>
					<div className='icon'>
						<img src='ruta-de-tu-icono-tinta.png' alt='Tintas Especiales' />
						<p>Tintas Especiales</p>
					</div>
					<div className='icon'>
						<img src='ruta-de-tu-icono-papel.png' alt='Papeles de Seguridad' />
						<p>Papeles de Seguridad</p>
					</div>
					<div className='icon'>
						<img src='ruta-de-tu-icono-hilo.png' alt='Hilos de Autenticación' />
						<p>Hilos de Autenticación</p>
					</div>
					<div className='icon'>
						<img src='ruta-de-tu-icono-carton.png' alt='Cartones Resistentes' />
						<p>Cartones Resistentes</p>
					</div>
				</div> */}
			</section>
		</div>
	);
};

export default Section;

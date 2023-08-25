import React from 'react';
import './Services.css'

const Services = () => {
	return (
		<div>
			<section id='servicios' className='services-section my-4'>
				<div className='section-heading'>
					<h2 className='h1 fw-bold my-4'>
						Nuestros Servicios
					</h2>
				</div>
                <div className='col-11 col-md-10 d-flex justify-content-around mx-auto'>
                    <div className='col-3'>
                        <img src="/air.png" alt=""  className='col-12'/>
                        <span className='subtitle'>Logística Aérea</span>
                    </div>
                    <div className='col-3'>
                        <img src="/sea.png" alt=""  className='col-12'/>
                        <span className='subtitle'>Logística Marítima</span>
                    </div>
                    <div className='col-3'>
                        <img src="/proc.png" alt="" className='col-12' />
                        <span className='subtitle'>Procura Especializada</span>
                    </div>
                </div>
			</section>
		</div>
	);
};

export default Services;

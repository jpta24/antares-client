import React from 'react'

const Footer = () => {
  return (
    <div id='footer' className='bg-primary text-light d-flex flex-md-row flex-column'>
        <div className="col-md col-12 text-start mx-1 p-3">
        <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19426.701567280023!2d13.360651603271492!3d52.50922743927815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c655f20989%3A0x26bbfb4e84674c63!2sBrandenburger%20Tor!5e0!3m2!1sde!2sde!4v1692915013432!5m2!1sde!2sde" 
        width="250" height="150" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="col-md-3 col-12 text-start mx-1 p-3">
            <p className="h5 mb-3">Antares International Trade Corp.</p>
            <p>Techowpromenade 78.<br/>  13437 Berlin-Wittenau</p>
        </div>
        <div className="col-md-3 col-12 text-start mx-1 p-3">
            <p className="mt-4">Horario de Atención </p>
            <p>Lunes a Viernes: <br/> 10:30 - 18:30 </p>
        </div>
        <div className="col-md-3 col-12 text-start mx-1 p-3">
            <p className="my-3 mt-4">Teléfono: +58 414-2591512 </p>
            <p> Correos Electrónicos:  <br/>admin@antaresintrade.com <br/>mmoncada@antaresintrade.com </p>
        </div>
    </div>
  )
}

export default Footer
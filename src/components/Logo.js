import '../stylesheets/Logo.css'

export const Logo = (porps) => {
  return (
  <div className='freecodecamp-logo-contenedor'>
    <img 
      src={porps.src}
      className='freecodecamp-logo'
      alt='Logo de freeCodeCamp' />
  </div>
  );
};
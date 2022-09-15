import '../stylesheets/BotonClear.css'

export const BotonClear = (props) => (
  <button className='boton-clear' onClick={props.manejarClear}>
    {props.children}
  </button>
);
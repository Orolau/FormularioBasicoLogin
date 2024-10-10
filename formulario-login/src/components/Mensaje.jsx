import './estiloMensaje.css';
const Mensaje = ({messageCode}) =>{
    
    return(
        <div id='mensaje'>
            <h1>{messageCode}</h1>
        </div>
    )

}
export default Mensaje;
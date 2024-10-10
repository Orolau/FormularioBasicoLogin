import {useState} from 'react';
import './estiloLogin.css';

const Login = ({submitFunction}) =>{
    const [data, setData] = useState({
        email:'',
        password:''
    });
    const handleOnChange = (event, field) =>{
        setData({
            ...data,
            [field]:event.target.value
        });
    }
    async function handleOnClick(event) {
        event.preventDefault();
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const usersData = await response.json();
        
            const user = usersData.find(userApi => data.email === userApi.email);
            
            if(!user){
                submitFunction('Error: el usuario no existe');
                return;
            }
            
            user.username === data.password ? submitFunction(`Bienvenido ${data.email}`) : submitFunction('Error: la contraseña no coincide');

        }catch (error) {
            console.error('Error en la solicitud o en el proceso', error);
            submitFunction('Error al cargar la información de los usuarios');
        }
        
    }

    return(
        <div>
            <form onSubmit={handleOnClick}>
                <label>Email:</label>
                <input type='email' onChange={(event => handleOnChange(event, 'email'))}/>
                <label>Password:</label>
                <input type='text' onChange={(event => handleOnChange(event, 'password'))}/>

                <button type='submit'>Send</button>
            </form>
        </div>
    )
}
export default Login;
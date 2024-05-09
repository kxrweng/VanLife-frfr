import {useNavigate,redirect} from 'react-router-dom'

export async function requireAuth(){
    const status = localStorage.getItem("LoggedIn");
    console.log(status);
    if(!status){
        const response = redirect(`/login?message=You must log in first`)
        console.log(response);
        response.body = true 
        throw response 
       }
    else {
        return true
    }
       
}
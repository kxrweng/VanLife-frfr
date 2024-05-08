import {useNavigate,redirect} from 'react-router-dom'

export async function requireAuth(){
    const isLoggedIn = false;
    if(!isLoggedIn){
        const response = redirect("/login?message=You must log in first")
        console.log(response);
        response.body = true 
        throw response 
       }
       
}
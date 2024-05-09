import {useNavigate,redirect} from 'react-router-dom'

export async function requireAuth(request){
   console.log(request)
   const pathName = new URL(request.url).pathname
   console.log(pathName);
    const status = localStorage.getItem("LoggedIn");
    console.log(status);
    if(!status){
        const response = redirect(`/login?message=You must log in first.&redirectTo=${pathName}`)
        console.log(response);
        response.body = true 
        throw response 
       }
    else {
        return true
    }
       
}
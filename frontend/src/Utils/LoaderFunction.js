import { requireAuth } from "./RequireAuth";



const LoaderFunction = async() => {
  await requireAuth();
 
}

export default LoaderFunction
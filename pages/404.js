import Link from "next/link"
import { useEffect } from "react";
import { useRouter } from "next/router";//to re-direct to a different page

const NotFound = () => {
/**
 * @desc calling the function for re-directing to a different page
 */
    const router = useRouter(); 

    useEffect(()=>{
        setTimeout(()=>{
            router.push('/');
        },3000)
    },[])

    return ( 
        <div className = "not-found">
            <h1>404 Error</h1>
            <h1>OH NO... 😢 </h1>
            <h2>That page cannot be found</h2>
            <p>Go back to the 
                <Link href = "/">
                <a> home page</a></Link>
            </p>
        </div>
     );
}
 
export default NotFound;
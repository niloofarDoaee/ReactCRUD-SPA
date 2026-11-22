import {useParams } from "react-router"
import { useState, useEffect } from "react";
import Loading from "../../components/Loading";


function UserShow() {

    const {userId}=useParams();
    
    const [user, setUser]= useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);

    

     useEffect(() => {
           fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
           .then((res) => {
            
             if(!res.ok) throw new Error("Failed to fetch  data")
            return res.json();
                
           })
           .then((data) => {
            console.log(data);
          
            setUser(data)
           })
           .catch((error)=>{
             console.log(error.message);
             
             setError(error.message)
           })
           .finally(()=>{
             setLoading(false)
           })
        },[])



  return (

    <>
    
    <div className="container mx-auto mt-15 px-4 sm:px-6 lg:px-8">

       {error && <div className="text-rose-500">{error}</div>}

        {loading && <Loading/>}


       {user && (
          <ul className="w-100 flex flex-col">

          <li className="py-2 px-4 text-md font-bold bg-gray-200/50 border border-gray-200 text-indigo-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
            <a href="#" className="underline">
             {user.name}
            </a>
          </li>

          <li className="py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
            UserName: <span>{user.username}</span>
          </li>

          <li className="py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
            Email: <span>{user.email}</span>
          </li>

          <li className="py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
            Phone: <span>{user.phone}$</span>
          </li>

           <li className="py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
            Website: <span>{user.website}$</span>
          </li>


        </ul>
       )}
        
       
        
        
    </div>

    </>

  )
}

export default UserShow
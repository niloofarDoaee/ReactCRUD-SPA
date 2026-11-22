import { useEffect, useState } from "react"
import UsersList from '../../components/users/List'
import Loading from "../../components/Loading";





function Index() {

    const [users, setUsers]= useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null)

    useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/users')
       .then((res) => {

        if(!res.ok) {
          throw new Error("Failed to fetch users data")
        }
        return res.json();
            
       })
       .then((data) => {
        // console.log(data);
        
        setUsers(data)
       })
       .catch((error)=>{
         setError(error.message)
         console.log(error);
         
       })
       .finally(()=>{
         setLoading(false)
       })
    },[])




  return (
  
       <div className="container mx-auto mt-15 px-4 sm:px-6 lg:px-8">

            <h1 className="font-bold text-xl mb-5">Users:</h1>

            {error && <div className="text-rose-500">{error}</div>}

            {loading && <Loading/>}
           


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
               
              {users && <UsersList users={users}/> }

            </div>

        </div>

  )
}

export default Index
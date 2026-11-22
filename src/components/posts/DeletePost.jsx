import { useState } from "react";
import { toast } from "react-toastify";
import Loading from "../Loading";


function DeletePost({postId}) {

    
    const [loading,setLoading] =useState(false)

    const handleDelete= ()=> {

       setLoading(true) 
       fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method:'DELETE',
       })
      .then((res) => {
            if (!res.ok) throw new Error("Failed to fetch posts data!!");
            return res.json();
        })
        .then((data)=>{
            console.log(data);
            
            
           toast.warning(`post ${postId} delete successfully` )
        })
        .catch((error)=>{
            toast.error(error.message)

        })
        .finally(()=>{
           setLoading(false)
        })
    }


  return (
    <button 
    onClick={handleDelete}
    disabled={loading}
    className="disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer rounded-sm border border-red-600 bg-red-600 px-3 py-1 text-sm font-medium text-white hover:bg-transparent hover:text-red-600 focus:ring-3 focus:outline-hidden"
    >
        {loading ? <Loading/> : "Delete"}
    </button>
  )
}

export default DeletePost
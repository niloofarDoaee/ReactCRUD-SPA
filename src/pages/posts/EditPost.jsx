import { useEffect, useState } from "react";
import EditFrom from "../../components/posts/EditForm";

import { useParams } from "react-router";
import Loading from "../../components/Loading";


function EditPost() {


    
    const {postId} =useParams();

    const [post,setPost] =useState(null)
    const [error,setError] =useState(null)
    const [loading,setLoading] =useState(true)

    useEffect(()=>{
          fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
          .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch posts data!!");
                return res.json();
            }).then((data)=>{
                // console.log(data);
                
               setPost(data)
            }).catch((error)=>{
                setError(error.message)
            }).finally(()=>{
               setLoading(false)
            })
       },[])


  return (
     <div className="container mx-auto mt-15 px-4 sm:px-6 lg:px-8">
        <h1 className="font-bold text-xl mb-5">Edit Post:</h1>

        {error && <div className="text-rose-500">{error}</div>}
        {loading && <Loading />}
            
        {post && <EditFrom post={post} /> }    
         


        </div>
  )
}

export default EditPost
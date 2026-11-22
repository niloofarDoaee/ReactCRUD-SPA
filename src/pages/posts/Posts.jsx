import { useEffect, useState } from "react"
import Loading from "../../components/Loading"
import ListPosts from "../../components/posts/ListPosts"

import { Link } from "react-router"


function Posts() {

    const [posts,setPosts] =useState(null)
    const [error,setError] =useState(null)
    const [loading,setLoading] =useState(true)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            if (!res.ok) throw new Error("Failed to fetch posts data!!");
            return res.json();
        }).then((data)=>{
            setPosts(data)
        }).catch((error)=>{
            setError(error.message)
        }).finally(()=>{
           setLoading(false)
        })
    },[])



    
  return (
     <div className="container mx-auto mt-15 px-4 sm:px-6 lg:px-8">
            <h1 className="font-bold text-xl mb-5">Posts:</h1>
            <Link to="/posts/create" className="mb-5 inline-block cursor-pointer rounded-sm border border-indigo-600 bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden">
                Create Post
            </Link>

            {error && <div className="text-rose-500">{error}</div> }
            {loading && <Loading/>}
           
           

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
               {posts && <ListPosts  posts={posts} /> } 
            </div>
        </div>
  )
}

export default Posts
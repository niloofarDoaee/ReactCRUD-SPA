import { useEffect, useState } from "react";
import { Link, useParams } from "react-router"
import Loading from "../../components/Loading";
import DeletePost from "../../components/posts/DeletePost";



function ShowPosts() {

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
           setPost(data)
        }).catch((error)=>{
            setError(error.message)
        }).finally(()=>{
           setLoading(false)
        })
   },[])
    

  return (
    
    <div className="container mx-auto mt-15  px-4 sm:px-6 lg:px-8">


           {error && <div className="text-rose-500">{error}</div>}
            {loading && <Loading/>}

            {post && (
                <div className="w-100 mb-15 ">
                    <ul className="flex flex-col">
                        <li className="py-2 px-4 text-md font-bold bg-gray-200/50 border border-gray-200 text-indigo-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
                            <Link to="" className="underline">
                                {post.title}
                            </Link>
                        </li>


                        <li className="py-6 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
                            {post.body}
                        </li>

                        <li className="py-2 px-4 text-md font-bold bg-gray-200/50 border border-gray-200 text-indigo-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
                            <DeletePost postId={post.id} />

                            <Link to={`/posts/edit/${post.id}`} className="ml-4 cursor-pointer rounded-sm border border-indigo-600 bg-indigo-600 px-3 py-1 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden">
                                Edit
                            </Link>
                        </li>
                    </ul>
                </div>
            )}

            <Link to="/posts" className=" cursor-pointer rounded-sm border border-indigo-600 bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden">
                All Posts
            </Link>
        </div>

        
  )
}

export default ShowPosts
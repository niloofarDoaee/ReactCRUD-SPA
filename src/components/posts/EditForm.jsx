import { useState } from "react"
import Loading from "../Loading"
import { toast } from "react-toastify"


function EditFrom({post}) {

    const [title,setTitle] =useState(post.title)
    const [body,setBody] =useState(post.body)
    const [error,setError] =useState(null)
    const [loading,setLoading] =useState(false)


     const handlesSubmit=(e)=>{
        e.preventDefault();
        

        setLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}` , {
            method : "PUT",
            body: JSON.stringify({
                title ,
                body,
                userId: 1,
                id:post.id
            }),
            headers:{
                "Content-type": "application/json; charset=UTF-8",
            },
        })
        .then((res) => {
            if (!res.ok) throw new Error
            (`Failed to put Request,HTTP status ${res.status} `);
            return res.json();
        })
        .then((data)=>{
            console.log(data);
            toast.success("Post updated successfully")
            
        })
        .catch((error)=>{
            setError(error.message)
        })
        .finally(()=>{
           setLoading(false)
        })
        
    }

  return (

         <>
           {error && <div className="text-rose-500">{error}</div> }
           
            <form  onSubmit={handlesSubmit} className="w-md flex flex-col gap-5">
                <div className="flex flex-col">
                    <label className="font-medium text-gray-700">title:</label>

                    <input
                        onChange={(e)=> setTitle(e.target.value)}
                        value={title}
                        type="text"
                        className="mt-1 rounded border border-gray-300 py-2 px-2 shadow-md focus:border-indigo-600 focus:outline-hidden"
                    />
                    <p className="text-xs text-red-500 mt-1">
                        {title ? "" : "title is required!"} 
                    </p>
                </div>

                <div className="flex flex-col">
                    <label className="font-medium text-gray-700">body:</label>

                    <textarea
                        onChange={(e)=> setBody(e.target.value)}
                        value={body}
                        className="mt-1 rounded border border-gray-300 py-2 px-2 shadow-md focus:border-indigo-600 focus:outline-hidden"
                        rows="4"
                    ></textarea>
                    <p className="text-xs text-red-500 mt-1">
                       {body ? "" : "body is required!"} 
                    </p>
                </div>

                <button
                    disabled={loading || title === "" || body === "" }
                    type="submit"
                    className="disabled:opacity-75 disabled:cursor-not-allowed mb-5 cursor-pointer flex justify-center items-center gap-2 rounded-sm border border-indigo-600 bg-indigo-600 px-6 py-2 text-sm font-medium text-white focus:ring-3 focus:outline-hidden"
                >
                    Create

                    {loading && <Loading/>}
                </button>

                
            </form>
         </>
         
  )
}

export default EditFrom
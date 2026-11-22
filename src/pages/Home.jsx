import { Link } from "react-router"


function Home() {
  return (
    <>
       <div className="container mx-auto mt-15 px-4 sm:px-6 lg:px-8">

            <h1 className="font-bold text-2xl mb-5">
                CRUD (Create Read Update Delete) App
            </h1>

            <p className="max-w-2xl">
                In computer programming, create, read, update, and delete (CRUD) are the four basic operations (actions) of persistent storage.CRUD is also sometimes used to describe user interface conventions that facilitate viewing, searching, and changing information using computer-based forms and reports.
            </p>

            <div className="mt-8">
                <Link to="/posts" className="cursor-pointer rounded-sm border border-indigo-600 bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden">
                    Posts
                </Link>

                <Link to="/users" className="ml-3 cursor-pointer rounded-sm border border-indigo-600 px-6 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:ring-3 focus:outline-hidden">
                    Users
                </Link>
            </div>

        </div>
    </>
  )
}

export default Home
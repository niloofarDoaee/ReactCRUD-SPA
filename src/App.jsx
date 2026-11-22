import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Header from "./components/Header";

import Index from "./pages/users/Index";
import UserShow from "./pages/users/Show";
import { ToastContainer } from "react-toastify";
import Posts from "./pages/posts/Posts";
import ShowPosts from "./pages/posts/ShowPosts";
import CreatePosts from "./pages/posts/CreatePosts";
import EditPost from "./pages/posts/EditPost";

function App() {

  return (
    
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/users" element={<Index />} />
          <Route path="/users/:userId" element={<UserShow />} />

          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:postId" element={<ShowPosts />} />
          <Route path="/posts/create" element={<CreatePosts />} />
          <Route path="/posts/edit/:postId" element={<EditPost />} />
        </Routes>

        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Post } from "../components/posts";
import { Posts } from "./posts"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Posts />}></Route>
                <Route exact path='/post/:id' element={<Post />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }
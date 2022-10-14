import {lazy, Suspense} from 'react';
import {NavLink, Route, Routes} from "react-router-dom";

import {Container} from "./ui-kit/Contenedor";
import {theme} from "./ui-kit/Theme";
import {ThemeProvider} from "@mui/material";

const Home = lazy(() => import('./pages/Home'))
const Posts = lazy(() => import('./pages/Posts/Posts'))
const Author = lazy(() => import('./pages/Author'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact/Contact'))

function App() {
    return (
        <ThemeProvider theme={theme}>

            <Container>
                <NavLink style={{textDecoration: 'none', color: "white",}} to="/home">Home</NavLink>
                <NavLink style={{textDecoration: 'none', color: "white",}} to="/posts">Posts</NavLink>
                <NavLink style={{textDecoration: 'none', color: "white",}} to='/author'>Author</NavLink>
            </Container>

            <Suspense fallback={"Loading..."}>
                <Routes>
                    <Route path="/Home" element={<Home/>}/>
                    <Route path="/posts" element={<Posts/>}/>
                    <Route path="/author" element={<Author/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </Suspense>


        </ThemeProvider>
    );
}

export default App;

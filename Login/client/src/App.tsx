import Login from "./login.tsx";
import Code from "./verification/code.tsx";
import Register from "./register/register.tsx";
import Home from "./homepage/home.tsx";
import {BrowserRouter , Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" Component={Login} />
            <Route path="/code" Component={Code} />
            <Route path="/register" Component={Register} />
            <Route path="/home" Component={Home} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

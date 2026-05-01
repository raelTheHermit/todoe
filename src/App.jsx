import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TodoDetail from "./pages/TodoDetail";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo/:id" element={<TodoDetail />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

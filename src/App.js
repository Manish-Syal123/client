import "./App.css";
import Header from "./component/header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/home/Home";
import AddBlog from "./pages/add-blog/AddBlog";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route eaxct path="/" element={<Home />} />
        <Route eaxct path="/add-blog" element={<AddBlog />} />
      </Routes>
    </div>
  );
}

export default App;

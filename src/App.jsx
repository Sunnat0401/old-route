import { Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Layout from "./Layout";

export default function App() {
  return (
    <div>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

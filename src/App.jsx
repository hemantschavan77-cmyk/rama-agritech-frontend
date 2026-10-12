import { useEffect, useState } from "react"
import "./App.css"
import Navbar from "./Components/Navbar";
function App() {



  const [count, setCount] = useState(0);
  return (
    <>
    
      <Navbar/>
      
      <main className="min-h-screen bg-white">

      </main>
    </>
  )
}

export default App

import Navbar from "./components/navbar/Navbar"
import "./layout.scss"
import HomePage from "./routes/homepage/homepage"

function App() {
  
  return (
    <div className="layout">
      <div className="NavBar">
      <Navbar/>
      </div>
      <div className="content">
        <HomePage/>
      </div>
      
    </div>
  )
}

export default App

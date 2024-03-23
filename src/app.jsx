import Home from "./pages/home/home";
import GetInvolved from "./pages/get_involved/get_involved"
import Sponsors from "./pages/sponsors/sponsors"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/meet_the_team" />
          <Route path="/history" />
          <Route path="/sponsors" element={<Sponsors/>}/>
          <Route path="/get_involved" element={<GetInvolved />} />
        </Routes>
      </Router>
  )
}

export default App

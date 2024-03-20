import Home from "./pages/home/home";
import GetInvolved from "./pages/get_involved/GetInvolved"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/meet_the_team" />
          <Route path="/history" />
          <Route path="/sponsors" />
          <Route path="/get_involved" element={<GetInvolved />} />
        </Routes>
      </Router>
  )
}

export default App

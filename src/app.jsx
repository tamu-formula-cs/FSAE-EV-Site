import Home from "./pages/home/home";
import GetInvolved from "./pages/get_involved/get_involved"
import Sponsors from "./pages/sponsors/sponsors"
import BecomeSponsors from "./pages/sponsors/becomeSponsors";
import Team from "./pages/meet_the_team/team";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/meet-the-team" element={<Team/>}/>
          {/* <Route path="/history" /> */}
          <Route path="/sponsors" element={<Sponsors/>}/>
          <Route path="/become-sponsors" element={<BecomeSponsors/>} />
          <Route path="/get-involved" element={<GetInvolved />} />
        </Routes>
      </Router>
  )
}

export default App

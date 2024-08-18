import Home from "./pages/home/home";
import Sponsors from "./pages/sponsors/sponsors"
import BecomeSponsors from "./pages/sponsors/becomeSponsors";
import Team from "./pages/meet_the_team/team";
import ScrollToTop from "./components/scroll_to_top/scroll_to_top";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recruiting from "./pages/recruiting/recruiting";
import Contact from "./pages/contact/contact";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meet-the-team" element={<Team />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/become-sponsors" element={<BecomeSponsors />} />
        <Route path="/recruiting" element={<Recruiting />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App

import Home from "./Components/Home";
import "./App.css";
import About from "./Routes/About";
import { Route, Router, Routes } from "react-router-dom";
import History from "./Pages/History";
import Advocate from "./Routes/Advocate";
import Member from "./Routes/HistoryRoutes/Member";
import IDCard from "./Routes/HistoryRoutes/IdCard";
import Service from "./Routes/Services";
import Membership from "./Routes/Membership";
import News from "./Routes/News";
import Footer from "./Components/Footer";
import Event from "./Routes/Event";
import ReportCase from "./Routes/ReportCase";
import OurStructure from "./Pages/OurStructure";
import Publication from "./Pages/Publication";
import IreRepoter from "./Routes/IreRepoter";
import StructureFederal from "./Routes/OurStructure/StructureFedral";
import State from "./Routes/PublicationRoutes/State";
import Zone from "./Routes/PublicationRoutes/Zone";
import Area from "./Routes/PublicationRoutes/Area";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/History" element={<History />} />
        <Route path="/News" element={<News />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/Services" element={<Service />} />
        <Route path="/Membership" element={<Membership />} />
        <Route path="/Become-A-Member" element={<Member />} />
        <Route path="/ReportCase" element={<ReportCase />} />
        <Route path="/Ireporter" element={<IreRepoter/>} />
        <Route path="/Publication" element={<Publication />} />
        <Route path="/Structure" element={<OurStructure />} />
        <Route path="/Federal" element={<StructureFederal />} />
        <Route path="/State" element={<State />} />
        <Route path="/Zone" element={<Zone />} />
        <Route path="/Area" element={<Area />} />
        <Route path="/IDCardApplication" element={<IDCard />} />
        <Route path="/Advocate" element={<Advocate />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

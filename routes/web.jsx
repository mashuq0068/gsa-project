import MainLayout from "@/layout/MainLayout";
import AboutUs from "@/pages/AboutUs/AboutUs";
import Donate from "@/pages/Donate/Donate";
import Home from "@/pages/Home/Home";
import Programs from "@/pages/Porgrams/Programs";
import SingleProgram from "@/pages/Porgrams/SingleProgram";
import Team from "@/pages/Team/Team";
import TeamMember from "@/pages/Team/TeamMember";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Web = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/:id" element={<TeamMember />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/:id" element={<SingleProgram />} />
        <Route path="/donate" element={<Donate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Web;

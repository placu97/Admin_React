import React from "react";
import Messages from "pages/Messages";
import Home1 from "pages/Home1";
import Login from "pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home1" element={<Home1 />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;

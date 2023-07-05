import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './app/layout/layout';
import Home from './app/home';
import Resume from './app/resume';
import Projects from './app/projects';
import Contact from './app/contact';

/**
 * Router component with the different paths/pages
 */
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom"
import reportWebVitals from './reportWebVitals';
import TodoContainer from './functionBased/components/TodoContainer';
import './styles/App.css'
import Navbar from './functionBased/components/Navbar';
import About from './functionBased/pages/About';
import NoMatch from './functionBased/pages/NoMatch'
import SinglePage from './functionBased/pages/SinglePage';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="" element={<TodoContainer />} />
          <Route path="home" element={<TodoContainer />} />
          <Route path="about" element={<About />}>
            <Route index element={<h3>Select a link above</h3>} />
            <Route path=":slug" element={<SinglePage />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

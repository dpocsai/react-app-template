import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>HELLO WORLD!</div>
      <Routes>
        <Route exact path="/"></Route>
      </Routes>
    </Router>
  );
};

export default App;

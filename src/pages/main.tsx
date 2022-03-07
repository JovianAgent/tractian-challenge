import React from 'react';
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Route Test
        </p>
      </header>
      <Outlet />
    </div>
  );
}

export default Main;

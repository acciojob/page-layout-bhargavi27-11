
import React from "react";
import './../styles/App.css';
import pageLayout from "./components/Pagelayout";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <pageLayout
          header={<h1>Welcome to my website</h1>}
          footer={<p>2023 My Website. All rights reserved.</p>}
        >
          <p>This is the content of my website.</p>
        </pageLayout>
    </div>
  )
}

export default App

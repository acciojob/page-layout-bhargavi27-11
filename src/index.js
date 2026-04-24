import React from "react";
import ReactDOM from "react-dom";

function PageLayout({ header, footer, children }) {
  return (
    <>
      {header}
      {children}
      {footer}
    </>
  );
}

const App = () => {
  return (
    <PageLayout
      header={<h1>Welcome to my website</h1>}
      footer={<p>@ 2023 My Website. All rights reserved.</p>}
    >
      <p>This is the content of my website.</p>
    </PageLayout>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";

function PageLayout({ header, footer, children }) {
  return (
    <div>
      {header}
      {children}
      {footer}
    </div>
  );
}

const App = () => {
  return (
    <PageLayout
      header={<h1>Welcome to my website</h1>}
      footer={<p>Footer here</p>}
    >
      <p>This is the content of my website.</p>
    </PageLayout>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

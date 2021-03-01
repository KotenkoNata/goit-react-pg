import React from "react";
import ReactDOM from "react-dom";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const link = React.createElement(
  "a",
  { href: "reactjs.org", target: "_blank" },
  "Ссылочка"
);

const jsxlink = <a href="reactjs.org">Ссылка2</a>;

console.log(link);
console.log(jsxlink);

ReactDOM.render(link, document.getElementById("root"));

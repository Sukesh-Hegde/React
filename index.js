/**  JavaSript */
// const heading = document.createElement("h2");
// heading.textContentn = "Hello word";
// heading.className = "header";
// document.getElementById("root").append(heading);

/** REACT */

/** Method1 */
// const reactHeading = React.createElement(
//   "h1", 
//   { className: "head" , id:"reactHead"},
//   "Hello React"
// );

/** Method2 */
// const reactHeading = React.createElement(
//   "h1",
//   { className: "head", id: "reactHead" ,cildren:""Hello React""},
//   "Hello React"
// );

/** REACT rendaring image */
// const reactHeading = React.createElement("img", {
//   className: "head",
//   id: "reactHead",
//   src: "https://files.codingninjas.in/coding-ninjas-24647.png",
// });

// ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);


/** REACT With JSX*/
const App = () => ( <React.Fragment >
            <h1 className="header">React Project</h1>
            <p> className="Skill used to make this project</p>
            </React.Fragment>);

        ReactDOM.createRoot(document.getElementById("root")).render(App);

const jsxHeading = (<h1 classnName="head"> Hello JSX </h1>);

ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);


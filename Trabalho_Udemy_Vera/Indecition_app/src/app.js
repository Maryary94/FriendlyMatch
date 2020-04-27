console.log("App.js is running");

//JSX - JavaScript XML
var template = <p>This is JSX app.js</p>; //React.createElement("h1", { id: "someid" }, "Something new");
var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);

//babel src/app.js --out-file=public/scripts/app.js --presets=env,react

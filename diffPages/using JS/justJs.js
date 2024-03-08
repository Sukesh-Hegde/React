const div = document.createElement("div");

const heading = document.createElement("h1");
heading.textContentn = "hello";
heading.className = "header";

const para = document.createElement("p");
para.textContent="welcome to the session";
para.className="para";

const btn = document.createElement("button");
btn.textContent = "click";
btn.className = "btn";

div.append(heading);
div.append(para);
div.append(btn);

document.getElementById("root").append(div);
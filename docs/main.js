import { changeRoute } from "../lib/controllers/route.js";
import { hrefContent, routes } from "../lib/views/Components.js";


const container = document.getElementById("root");

const pathname = window.location.pathname;
container.appendChild(routes[pathname]());

window.addEventListener("hashchange", () => {
  const link = window.location.hash;
  console.log("hash change", link);

  changeRoute(link);
  container.innerHTML = "";
  container.appendChild(hrefContent[link]());
});

window.addEventListener("popstate", () => {
  const pathname = window.location.pathname;
  console.log("path name change", pathname);

  container.innerHTML = "";
  container.appendChild(routes[window.location.pathname]());
});


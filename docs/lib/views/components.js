import home from "../home.js";
import profile from "./profile.js";
import register from "./register.js";
import movie from "./movie.js";

export const hrefContent = {
  "#": register,
  "": register,
  "#home": home,
  "#profile": profile,
  "#movie": movie,
};

export const routes = {
  "/": register,
  "/home": home,
  "/profile": profile,
  "/movie": movie,
};
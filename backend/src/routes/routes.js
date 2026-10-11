import { Router } from "express";
import { dltUrl, getAllUrl, getURL } from "../controller/url.controllers.js";

const routes = Router();


routes.post("/register", getURL);
routes.get("/urls", getAllUrl);
routes.delete("/:id", dltUrl);




export default routes;

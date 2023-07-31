import { Router } from "./router.js";

const router = new Router();

router.add("/rocketseat-explorer/nivel-06/stage/desafio-01/", "/pages/home.html");
router.add("/rocketseat-explorer/nivel-06/stage/desafio-01/about", "/pages/about.html");
router.add("/rocketseat-explorer/nivel-06/stage/desafio-01/contact", "/pages/contact.html");
router.add("/rocketseat-explorer/nivel-06/stage/desafio-01/404", "/pages/404.html");

router.handle();

window.onpopstate = () => router.handle();

window.route = () => router.route();
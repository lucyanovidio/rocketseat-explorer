import { Router } from "./router.js";

const router = new Router();

router.add("/rocketseat-explorer/nivel-06/stage/desafio-02/", "../../pages/home.html");
router.add("/rocketseat-explorer/nivel-06/stage/desafio-02/universe", "../../pages/universe.html");
router.add("/rocketseat-explorer/nivel-06/stage/desafio-02/exploration", "../../pages/exploration.html");
router.add("/rocketseat-explorer/nivel-06/stage/desafio-02/404", "../../pages/404.html");

router.handle();
window.onpopstate = () => router.handle();
window.route = () => router.route();
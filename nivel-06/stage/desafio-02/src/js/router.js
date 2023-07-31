export class Router {
  routes = {};

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

    this.handle();
  }

  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes[404];

    this.activateCurrentNavSection(pathname);

    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        document.querySelector("#app").innerHTML = html;
      });
  }

  activateCurrentNavSection(pathname) { // MELHORAR ISSO
    if (pathname == "/") {
        document
          .querySelectorAll("a")
          .forEach((a) => a.classList.remove("active"));
        document
          .querySelector("ul li:nth-child(2) a")
          .classList.add("active");
      } else if (pathname == "/universe") {
        document
          .querySelectorAll("a")
          .forEach((a) => a.classList.remove("active"));
        document
          .querySelector("ul li:nth-child(3) a")
          .classList.add("active");
      } else {
        document
          .querySelectorAll("a")
          .forEach((a) => a.classList.remove("active"));
        document
          .querySelector("ul li:nth-child(4) a")
          .classList.add("active");
      }
  }
}

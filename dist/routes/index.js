"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("./routes");
const PersonFinder_1 = require("../PersonFinder");
class IndexRoute extends routes_1.BaseRoute {
    static create(router) {
        console.log("[IndexRoute::create] Creating index route.");
        router.get("/", (req, res, next) => {
            new IndexRoute().index(req, res, next);
        });
        router.get("/search", (req, res, next) => {
            new PersonFinder_1.PersonFinder().search(req, res, req.query.name);
        });
    }
    constructor() {
        super();
    }
    index(req, res, next) {
        this.title = "Home | Tour of Heros";
        let options = {
            "message": "Welcome to the Tour of Heros"
        };
        this.render(req, res, "index", options);
    }
    search(req, res, next) {
        res.status(200).send({ message: 'Welcome to our restful API' });
    }
}
exports.IndexRoute = IndexRoute;

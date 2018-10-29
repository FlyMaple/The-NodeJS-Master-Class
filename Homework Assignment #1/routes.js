/**
 * This is route handler
 * 
 */

// request pathname parse
const getPathname = (url) => {
    return url.replace(/^\/|\/$/g, '').trim();
};

// welcome message
const welcome = (req) => {
    const pathname = getPathname(req.url);
    const method = req.method.toUpperCase();
    return `[${method}] /${pathname} Welcome!`;
};

// common method
const methods = {
    get: (req, res) => {
        res.end(welcome(req));
    },
    post: (req, res) => {
        res.end(welcome(req));
    },
    put: (req, res) => {
        res.end(welcome(req));
    },
    delete: (req, res) => {
        res.end(welcome(req));
    },
};

// routes mapping rules
const routeRules = {};

// route hello
routeRules.hello = Object.assign({}, methods);

// route not found
routeRules.notFound = (req, res) => {
    const pathname = getPathname(req.url);
    const method = req.method.toUpperCase();
    res.writeHead(404);
    res.end(`[${method}] /${pathname} Not found!`);
};

// routes handle function
const routes = (req, res) => {
    const pathname = getPathname(req.url);
    const method = req.method.toLowerCase();
    const route = routeRules[pathname];

    if (route[method]) {
        route[method](req, res);
    } else {
        routeRules.notFound(req, res);
    }
};


//  export
module.exports = routes;
/**
 * This is node environment configuration file
 * 
 */

//  environment
const environment = {};

// normal environment
environment.normal = {
    httpPort: 8000,
};

// environment to export
const environmentToExport = environment[process.env.NODE_ENV] || environment.normal;

// export
module.exports = environmentToExport;

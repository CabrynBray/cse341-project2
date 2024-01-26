const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Cars Api',
        description: 'Cars Api'
    },
    host: 'localhost:4040',
    schemes: ['http', 'https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// this will generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "My Contacts API",
    description: "Contact API for W02 Project",
  },
  host: "localhost:8080",
  schemes: ["http", "https"],
};

const outputFile = "./swagger.json"; // El archivo que se va a generar
const endpointsFiles = ["./routes/index.js"]; // Apunta a tu archivo principal de rutas

// Esto genera el swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

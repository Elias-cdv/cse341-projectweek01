const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "My Contacts API",
    description: "Contact API for W02 Project",
  },
  // 1. AQUÍ CAMBIAS POR TU LINK DE RENDER (Sin el https:// ni barras al final)
  host: "cse341-projectweek01.onrender.com",
  // 2. EN RENDER USAMOS SOLO HTTPS
  schemes: ["https"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);

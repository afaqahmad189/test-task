const app = require("./src/routes/index");
const swaggerJsdoc = require("swagger-jsdoc");
const  swaggerUi = require("swagger-ui-express");
const options = require("./utility/sweggerConfig");
const database = require("./utility/dbConfig");
require("dotenv").config();

const specs = swaggerJsdoc(options);
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
);

app.database
app.listen(app.get("port") || 3000, function () {
    console.log("Express server listening on port " + (app.get("port") || 3000));
});

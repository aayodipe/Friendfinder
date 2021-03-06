const express = require("express");

// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

// 

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

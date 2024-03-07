const express = require('express');
const app = express();
const cors = require('cors')

//route
const taskRoutes = require("./routes/taskRoutes");

//config
require("dotenv").config();
const port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log(`Server is now listening at http://localhost:${port}`);
});

//Route for tasks
app.use('/tasks', taskRoutes);


const express = require('express');
const app = express();
const cors = require('cors')
app.use(express.json());
//route
const taskRoutes = require("./routes/taskRoutes");

//config
require("dotenv").config();
const { CORS_ORIGIN } = process.env;
app.use(cors({ origin: CORS_ORIGIN}));
const port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log(`Server is now listening at http://localhost:${port}`);
});

//Route for tasks
app.use('/tasks', taskRoutes);



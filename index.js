const express = require("express");
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 3020;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening at :http://localhost:${PORT}`);
    });
});
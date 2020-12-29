const express = require("express");
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 3020;

const userRoutes = require("./routes/user_routes");
const profileRoutes = require("./routes/profile_routes");
const postRoutes = require("./routes/post_routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/profiles", profileRoutes);
app.use("/api/posts", postRoutes);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening at :http://localhost:${PORT}`);
    });
});
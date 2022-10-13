// const mongoose = require("mongoose");

const app = require("./src/app");
const config = require("./src/config");

app.listen(config.port, () => {
    console.log(`Listening on port ${config.port}`);
});
// mongoose
//     .connect(config.mongoose.url)
//     .then(() => {
//         console.log("Connected to MongoDB");
//     })
//     .catch((err) => console.log(err));

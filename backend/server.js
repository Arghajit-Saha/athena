require("dotenv").config();
const app = require("./src/app")
const connectDB = require("./src/config/db")
const invokeGemini = require("./src/services/ai.service")

connectDB();

app.listen(3000, () => {
    console.log("Server running on PORT 3000");
});
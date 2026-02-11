import "dotenv/config";
import app from "./app.js";

console.log("DB_NAME =", process.env.DB_NAME);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

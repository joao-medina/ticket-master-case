import { app } from "./app.js";

const portValue = process.env.PORT ?? "3001";
const port = Number(portValue);

app.listen(port, () => {
  console.log(`Event Service in http://localhost:${port}`);
});

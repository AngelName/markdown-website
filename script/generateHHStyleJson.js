const fs = require("fs");
const path = require("path");
const data = fs.readdirSync(
  path.resolve(__dirname, "../public/highlight/styles")
);
fs.writeFileSync(
  path.resolve(__dirname, "../public/highlight/index.json"),
  JSON.stringify(data)
);

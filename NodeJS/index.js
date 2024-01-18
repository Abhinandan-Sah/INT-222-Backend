const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`App in listening on the port ${port}`);
}); 

app.use((req, res) => {
    console.log("request received");
});
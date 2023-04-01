var express = require("express")
var app = express()
const PORT = process.env.PORT || 3001;


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

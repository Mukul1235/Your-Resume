const express = require("express");
const app = express();
require('./db.js');
const color = require("colors");
const Router = require('./routes/userRouter');
const path=require("path");
app.use(express.json());

app.get("*", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "Client", "build")));
  res.sendFile(path.resolve(__dirname, "Client", "build", "index.html"));
});
const port = process.env.PORT || 6002;
app.use('/api/user/', Router);
// if (process.env.NODE_ENV === 'production') {
//   app.use('/', express.static('client/build'))
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname,"client/build/index.html"));
//   })
// }
app.listen(port, () => {
  console.log(`App Listening on http://localhost:${port}/`.bold.green);
});

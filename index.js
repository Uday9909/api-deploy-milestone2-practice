const express = require('express');
require('dotenv').config();

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  if (process.env.IS_ADMIN === 'true') {
    res.send({ message: "Welcome, Venom!", data: ["god of the skies", "australian"] });
  } else {
    res.send({ message: "Welcome, Lucifer!", data: ["ruler of the underworld", "british"] });
  }
});

app.listen(3000, () => console.log(`Server is runnning on local host http://localhost:${port}
`));

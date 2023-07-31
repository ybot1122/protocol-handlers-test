const express = require('express')
const fs = require('fs');
const https = require('https');

const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.static('static'))

const httpsOptions = {
  cert: fs.readFileSync('./certificates/localhost.crt'),
  key: fs.readFileSync('./certificates/localhost.key'),
};
const httpsServer = https.createServer(httpsOptions, app);
httpsServer.listen(port, (err) => {
  if (err) throw err;
  console.log(`Ready on port ${port}`); // eslint-disable-line no-console
});

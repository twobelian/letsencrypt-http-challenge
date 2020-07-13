const express = require('express')
const app = express()
const port = 80

app.use('/.well-known/acme-challenge', express.static('public'));

app.listen(port, () => console.log(`app listening at port ${port}`))



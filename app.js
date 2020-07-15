const express = require('express')
const fs = require('fs')
const app = express()
const port = 80

try {
    const acmeChallengeCode = fs.readFileSync('./acme-challenge-code.txt', 'utf-8')
    const resourcePath = `/.well-known/acme-challenge/${acmeChallengeCode.split('.')[0]}`
    app.get(resourcePath, (req, res) => {
        res.send(acmeChallengeCode)
    })
    console.log(`create acme-challenge resource path: ${resourcePath}`)
} catch (e) {
    console.log(e)
}

app.use('/.well-known/acme-challenge', express.static('public'));
app.listen(port, () => console.log(`app listening at port ${port}`))



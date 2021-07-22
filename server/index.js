const express = require('express')
const app = express()
const port = 3001

function apiPath(path) {
    return path[0] === '/' ?
        `/api${path}` :
        `/api/${path}`;
}

app.get('/api/foo', (req, res) => {
    console.log("Sending foobar");
    res.send({foo: 'bar'});
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
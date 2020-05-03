const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs').promises

const app = express()

app.use(
  bodyParser.raw({
    inflate: true,
    limit: '1000kb',
    type: 'application/octet-stream'
  })
)

app.use(bodyParser.json({ limit: '1000kb' }))

app.get('/api/v1/device/info', (req, res) =>
  res.send({
    code: 0,
    data: {
      firmware: '2.0.0',
      type: 'RAF-G1',
      mac: '24:0A:C4:2A:68:9C',
      sn: '801080RAF_G1240AC42A689C',
      bluetoothName: 'BLUFI_RUFF_RAF_G1_689C'
    }
  })
)
var count = 1
app.get('/api/v1/persons', async function(req, res) {
  res.send({
    code: 0,
    msg: 'success',
    data: {
      page: 1,
      pageSize: 10,
      totalSize: 30,
      faces: [
        ...(() => {
          let res = []
          for (var i = 0; i < 10; i++) {
            res.push({
              uid: count++,
              name: 'ruff' + count,
              createTime: Date.now()
            })
          }
          return res
        })()
      ]
    }
  })
})

app.post('/api/v1/person', async function(req, res) {
  res.send('ok')
})

app.delete('/api/v1/persons', async function(req, res) {
  res.send('ok')
})

app.delete('/api/v1/person', async function(req, res) {
  res.send('ok')
})

app.delete('/api/v1/persons/:id', async function(req, res) {
  res.send('ok')
})

app.get('/api/v1/device/config', async function(req, res) {
  res.send({
    code: 0,
    msg: 'success',
    data: {
      recognitionAntiSpoofing: 1,
      recognitionThreshold: 80,
      recognitionDistance: 2,
      currentFaces: 8,
      maxFaces: 1000
    }
  })
})

app.post('/api/v1/device/config', async function(req, res) {
  console.log(req.body)
  res.send('ok')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))

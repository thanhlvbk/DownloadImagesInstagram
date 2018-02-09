const express = require('express')
const next = require('next')
const config = require('./server/config')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const cheerio = require('cheerio')
const request = require('request')

function getImage (value) {
  return new Promise((resolve, reject) => {
    request(value.replace(/,/g, "/"), (error, response, body) => {
      const $ = cheerio.load(body);
      resolve($('meta[property="og:image"]').attr('content'))
    })
  })
}

app.prepare()
.then(() => {
  const server = express()

  server.get('/get-image/:id', async(req, res) => {
    const img = await getImage(req.params.id)
    return res.json({
      img,
    })
  })

  server.post('/api/download-image', (req, res) => {
    return res.json(parseImage())
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(config.port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${config.port}`)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
const express = require('express')
const next = require('next')
const config = require('./server/config')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const cheerio = require('cheerio')
const request = require('request')
const fs = require('fs')

const instagramLink = "https://www.instagram.com/p/"

function getImage (postId) {
  const instagramPostLink = instagramLink.concat(postId)

  return new Promise((resolve, reject) => {
    request(instagramPostLink, (error, response, body) => {
      const $ = cheerio.load(body);
      resolve($('meta[property="og:image"]').attr('content'))
    })
  })
}

async function downloadImage (postId, res) {
  const imageLink = await getImage(postId)

  request.get(imageLink).on('response', r => {
    res.setHeader('Content-disposition', 'attachment; filename=' + `${postId}.jpg`);
    res.setHeader('Content-type', r.headers['content-type']);
    r.pipe(res);
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

  server.get('/download-image/:id', (req, res) => {
    downloadImage(req.params.id, res)
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
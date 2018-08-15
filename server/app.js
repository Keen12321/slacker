import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import config from 'config'
import socketio from 'socket.io'
import http from 'http'
import path from 'path'
import runsocket from './chat'

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res, next) => {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})

if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
      error: err
    })
  })
}


if (app.get('env') === 'production') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
      message: 'Oops. Our bad.'
    })
  })
}

const server = http.createServer(app)

const io = socketio(server)

runsocket(io)

server.listen(config.get('server.port'), '0.0.0.0', () => {
  console.log('connection on port ' + config.get('server.port'))
})

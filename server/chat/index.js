import conn from '../db/conn'

function runsocket(io) {

  io.on('connection', (socket) => {
    console.log('connected')

    socket.join('room1')
    socket.join('room2')
    socket.join('room3')

    socket.on('/chat1', (data) => {
      const sql = `
        INSERT INTO chat1 (username, timestamp, message)
        VALUES (?, ?, ?)
      `
      conn.query(sql, [data.username, data.timestamp, data.message], (err, response, fields) =>  {
        const obj = Object.assign(data, {
      })
        io.to('room1').emit('/chat1', obj)
      })
    })

    socket.on('/chat2', (data) => {
      const sql = `
        INSERT INTO chat2 (username, timestamp, message)
        VALUES (?, ?, ?)
      `
      conn.query(sql, [data.username, data.timestamp, data.message], (err, response, fields) =>  {
        const obj = Object.assign(data, {
      })
        io.to('room2').emit('/chat2', obj)
      })
    })

    socket.on('/chat3', (data) => {
      const sql = `
        INSERT INTO chat3 (username, timestamp, message)
        VALUES (?, ?, ?)
      `
      conn.query(sql, [data.user, data.timestamp, data.message], (err, response, fields) =>  {
        const obj = Object.assign(data, {
      })
        io.to('room3').emit('/chat3', obj)
      })
    })
  })  
  
}

export default runsocket
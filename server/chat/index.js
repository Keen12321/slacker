function runsocket(io) {

  io.on('connection', socket => {
    console.log('connected')
  })
  
}

export default runsocket
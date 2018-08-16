function runsocket(io) {

  io.on('connection', (socket) => {
    console.log('connected')

		socket.on('signin', (name) => {
			socket.name = name 
		})

    socket.join('room1')

    socket.on('message room 1', (data) => {
    	const obj = Object.assign(data, {
    		name: socket.name
    	})
			io.to('room1').emit('message room 1', obj)
    })
  })  
  
}

export default runsocket
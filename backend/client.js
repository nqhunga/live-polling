const io = require('socket.io-client')
const socket = io('http://localhost:3000')
const id = "yD6kTgn6H"
socket.on('ok', ()=>{
	console.log('ok')
	socket.emit('join',{id})	
	socket.on('update',poll=>{
		console.log('new update: ',poll)
	})
	socket.emit('update',{
		id,
		vote:[0,1,0]
	})
})
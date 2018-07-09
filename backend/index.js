const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const cors = require('cors')
const shortid = require('shortid')
const bodyparser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

var collection = null

app.use(cors());
app.use(bodyparser.json());
const uri = 'mongodb+srv://khan:khan@vainu-lead-qlquk.mongodb.net/test?retryWrites=true'
MongoClient.connect(uri, {
    useNewUrlParser: true
}, function(err, client) {
    console.log('mongo connected')
    collection = client.db("poll").collection("poll");
    io.on('connection', socket => {
        console.log('someone connect')
        socket.emit('ok', {})
        socket.on('join', async({
            id
        }) => {
            const poll = await collection.findOne({
                id
            })
            if (poll) {
                socket.join(id)
                socket.emit('update', poll)
                console.log(`room ${id} created`)
            }
        })

        socket.on('update', async({
                id,
                vote
            }) => {
            console.log('received update',id)
                const poll = await collection.findOne({
                    id
                })
                if (poll) {
                    const {
                        answer
                    } = poll
                    console.log(answer)
                    newAnswer = answer.map((e, i) => {
                        return {
                            answer:e.answer,
                            count: e.count + vote[i]
                        }
                    })
                    poll.answer = newAnswer

                    const {
                        result
                    } = await collection.update({
                        "_id": poll._id
                    }, poll)
                    if (result.ok) {
                        // console.log(socket.rooms)
                        socket.emit('update', poll)
                        socket.to(id).emit('update', poll)
                        console.log(`sending update to room ${id}`)
                    }
                }
            })
            // socket.on('connect',)
    })

    // perform actions on the collection object
});

app.post('/new/', async(req, res) => {
    const {
        question,
        answer
    } = req.body
    const id = shortid.generate()
    collection.insertOne({
        id,
        question,
        answer: answer.map(a => {
            return {
                answer: a,
                count: 0
            }
        })
    }).then(r => {
        const {
            result
        } = r;
        if (result.ok) {
            return res.json({
                id
            })
        }
        return res.status(500).send("internal server error")
    })
});

app.get('/get/:id', async(req, res) => {
    const poll = await collection.findOne({
        id: req.params.id
    })
    if (poll) {
        return res.json(poll)
    }
    return res.status(404).send("poll not found")
})


http.listen(3000, function() {
    console.log('listening on :3000');
});
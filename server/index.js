const WebSocket = require('ws')

const wss = new WebSocket.Server({ port:8090 })

wss.on("connection", ws => {
    console.log("A connection was successfully made!")

    ws.on("message", function incoming(data) {
        wss.clients.forEach((client) => {
            if(client !== ws) {
                client.send(data)
            }
        })
    })

    ws.on("close", () => {
        console.log("A disconnection happened!")
    })
})
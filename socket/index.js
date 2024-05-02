const { Server } = require("socket.io");

const io = new Server({ 
    cors:{
        origin:"http://localhost:5173/"
    }
 });

io.on("connection", (socket) => {
    console.log("Connected");

    socket.on("disconnect", () => {
        console.log("Disconnected");
    });
});

io.listen(3000);
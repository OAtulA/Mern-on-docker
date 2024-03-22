import mongoose from "mongoose";
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import User from "./models/user";

let app = express();
let server = createServer(app);

const io = new Server(server);

let map_socket_user: Map<String, String | null> = new Map();

interface IUser {
  uname: string;
  password: string;
  email?: string;
  avatar?: string;
  gender?: string;
  age?: number;
  description?: string;
}

let MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/";

let mongooseConnect = async () => {
  try {
    await mongoose.connect(MONGO_URI);

    console.log("connected to mongodb");
  } catch (error) {
    console.log("not connected to mongodb");
  }
};
mongooseConnect();

// I will later add a check to see if user is logged in
// before doing the chat
io.on("connection", (socket) => {
  console.log("a user connected");
  map_socket_user.set(socket.id, null);

  // I want to make a socket.on whcich takes a uname
  //   and add the uname to socket id in the map_socket_user
  socket.on("add_uname", (uname) => {
    if (map_socket_user.has(socket.id)) {
      map_socket_user.delete(socket.id);
    }
    map_socket_user.set(uname, socket.id);
  });
  // I want to let the user be able to signup by just entering the uname and password
  socket.on("signup", async ({ uname, password }, args) => {
    try {
      if (await User.findOne({ uname: uname })) {
        throw new Error("username exists");
      }
      let user = new User(uname, password);
      if (args.email) user.email = args.email;
      if (args.avatar) user.avatar = args.avatar;
      if (args.gender) user.gender = args.gender;
      if (args.age) user.age = args.age;
      if (args.description) user.description = args.description;

      await user.save();
      // map uname to the socket id it has now
      map_socket_user.set(uname, socket.id);
    } catch (err: any) {
      socket.emit("error", err.message);
    }
  });

  socket.on("login", async ({ uname, password }, args) => {
    try {
      let user = await User.findOne({ uname: uname });
      if (!user) {
        throw new Error("username does not exist");
      }
      if (user.password !== password) {
        throw new Error("password is incorrect");
      }
      // map uname to the socket id it has now
      map_socket_user.set(uname, socket.id);
      socket.emit("login", user);
    } catch (err: any) {
      socket.emit("error", err.message);
    }
  });
  //   chat fucntion from, message, to
  socket.on("chat", async ({ from, message, to }) => {
    // check if to is connected and added to the map_socket_user?
    if (map_socket_user.has(to)) {
      socket.emit("error", "user is not connected");
      return;
    } else {
      let to_user = await map_socket_user.get(to);
      io.to(to_user as string).emit("chat", { from, message });
    }
  });

  // I want to make disconnect which checks the socket.id
  // and remove the uname from socket id in the map_socket_user
  socket.on("disconnect", () => {
    map_socket_user.forEach((value, key) => {
      if (value === socket.id) {
        map_socket_user.delete(key);
      }
    });
    console.log("user disconnected");
  });
});

let PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log("listening on ", `http://localhost:${PORT}`);
});

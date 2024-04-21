// const express = require("express");
import express from "express";
import {WebSocketServer} from "ws";
// const WebSocketServer = require("ws");

const app = express();
const port=8080;

const server = app.listen(port, (req, res) => {
    console.log("server is listening...");
});

const wss = new WebSocketServer({server});

wss.on("connection", (ws) => {
    ws.on("message", (data) =>{
        console.log("data from client: %s", data);
        ws.send("Thanks buddy");
    })
});
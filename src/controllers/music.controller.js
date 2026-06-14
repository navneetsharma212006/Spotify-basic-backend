const musicModel = require("../models/music.model");

const albumModel = require("../models/album.model");

const jwt = require("jsonwebtoken");

const { uploadFile } = require("../services/storage.service");
async function createMusic(req, res) {

    const {title}=req.body;
    const file = req.file;

    const result = await uploadFile(file.buffer.toString("base64"));

    const music = await musicModel.create({
      uri: result.url,
      title,
      artist: req.user.id,
    });
    
    res.status(201).json({
        message: "Music created successfully",
        music,
    });
}
async function createAlbum(req, res) {

   
   

        const {title , musics}=req.body;

        const album = await albumModel.create({
            title,
            artist: req.user.id,
            musics: musics,
            
        })

        res.status(201).json({
            message: "Album created successfully",
            album,
        });
    }
    
async function getAllMusics(req, res) {

    const musics = await musicModel.find().populate("artist");

    res.status(200).json({
        message: "Musics fetched successfully",
        musics:musics,
    });
}


async function getAllAlbums(req, res) {
    const albums = await albumModel.find().populate("artist").populate("musics");

    res.status(200).json({
        message: "Albums fetched successfully",
        albums:albums,
    });
}

async function logoutUser(req, res) {
    res.clearCookie("token").status(200).json({
        message: "User logged out successfully"
    });
}
module.exports = {
    createMusic,
    getAllMusics,
    createAlbum,
    getAllAlbums,
    logoutUser
}           

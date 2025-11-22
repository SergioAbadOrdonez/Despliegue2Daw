const express = require("express");

const Player = require("../models/player");

const router = express.Router();

router.get("/", async (res) => {
  try {
    const players = await Player.find();
    if (!players || players.length === 0) {
      return res.status(404).json({
        error: "No hay jugadores",
        result: null
      });
    }

    return res.status(200).json({
      result: players,
      error: null
    });
  } catch (e) {
    return res.status(500).json({
      error: err.message,
      result: null
    });
  }
});

router.get("/:id", async (req,res) => {
  try {
    const player = await Player.findById(req.params.id);
    if(!player){
        return res.status(404).json({
            error: "No se ha encontrado el jugador",
            result: null
        });
    }
    return res.status(200).json({
        result: player,
        error: null
    });
  } catch (e) {
    return res.status(500).json({
      error: err.message,
      result: null
    });
  }
});

router.get("/find", async (req,res) => {
    try{
        const name = req.query.name;
        if(!name){
            return res.result(400).json({
                error: "No has pasado el nombre",
                result: null
            });
        }
        players = await Player.find({name: {$regex: name, $options: "i"}});
        if(!players || players.length === 0){
            return res.status(404).json({
                error: "No se han encontrado jugadores",
                result: null
            })
        }
        return res.status(200).json({
            result: players,
            error: null
        });
    }catch(e){
        return res.status(500).json({
            error: e.message,
            result: null
        })
    }
});

module.exports = router;

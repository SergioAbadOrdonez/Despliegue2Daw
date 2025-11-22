import moongose from "mongoose";

const playerStatsSchema = new moongose.Schema({
  player: {
    type: moongose.Schema.Types.ObjectId,
    ref: "players",
    required: true,
  },
  team: {
    type: moongose.Schema.Types.ObjectId,
    ref: "teams",
    required: true,
  },
  points: {
    type: Number,
    required: true,
    min: 0,
  },
  rebounds: {
    type: Number,
    required: true,
    min: 0,
  },
  assists: {
    type: Number,
    required: true,
    min: 0,
  },
  steals: {
    type: Number,
    required: true,
    min: 0,
  },
  fouls: {
    type: Number,
    required: true,
    min: 0,
  },
  mvp: {
    type: Boolean,
    default: false,
  },
});

const matchSchema = new moongose.Schema({
  tournament: { type: String, required: true, minlength: 3, maxlength: 100 },
  date: {
    type: Date,
    required: true,
  },
  stage: {
    type: String,
    required: true,
    enum: ["Group", "Quarterfinals", "Semifinals", "Final"],
  },
  homeTeam: {
    type: moongose.Schema.Types.ObjectId,
    ref: "teams",
    required: true,
  },
  awayTeam: {
    type: moongose.Schema.Types.ObjectId,
    ref: "teams",
    required: true,
    validate: {
      validator: function (value) {
        return value.toString() !== this.homeTeam.toString();
      },
      message: "They must be different teams",
    },
  },
  homeScore: {
    type: Number,
    required: true,
    min: 0,
  },
  awayScore: {
    type: Number,
    required: true,
    min: 0,
  },
  playerStats: [playerStatsSchema],
});

matchSchema.index(
  { tournament: 1, date: 1, homeTeam: 1, awayTeam: 1 },
  { unique: true }
);

export default moongose.model("matches", matchSchema);

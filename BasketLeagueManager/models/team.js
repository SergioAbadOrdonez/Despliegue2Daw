import moongose from "mongoose";

const rosterSchema = new moongose.Schema({
player: {
      type: moongose.Schema.Types.ObjectId,
      ref: "players",
    },
    joinDate: {
      type: Date,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
})

const teamSchema = new moongose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  foundedAt: {
    type: Date,
  },
  roster: [rosterSchema]
});


export default moongose.model("teams", teamSchema);
import moongose from 'mongoose';

const tournamentSchema = new moongose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
    year: {
        type: Number,
        required: true,
        min: 1900,
        max: 2100
    },
    season: {
        type: String,
        required: true,
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    },
    organizer: {
        type: String,
        minlength: 3,
        maxlength: 70
    },
    teams: {
        type: [moongose.Schema.Types.ObjectId],
        ref: 'teams'
    }
});

tournamentSchema.index({ title: 1, year: 1, season: 1 }, { unique: true });

export default moongose.model("tournaments", tournamentSchema);
const mongoose = require('mongoose');



const WorkoutSchema = new mongoose.Schema({
	name:{
		type: String
	},
	purpose:{
		type: String
	}
});

const Workout = mongoose.model('Workout',WorkoutSchema);

module.exports = Workout;
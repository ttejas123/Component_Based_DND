import { Schema, model, models } from 'mongoose';

const userDataSchema = new Schema({
	mail:{
		type:String,
	    required: true
	},
	password:{
		type:String,
	    required: true
	},
	createdAt: {
		type: Date,
		required: true,
		default: Date.now
	}
});


const User = models.user || model("user", userDataSchema)
export default User

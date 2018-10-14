const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const todoSchema = mongoose.Schema ({
	title: {type: String},
	completed: {
		type: Boolean,
		default: false
	}
});

todoSchema.methods.serialize = function() {
	return {
		id: this._id,
		title: this.title,
		completed: this.completed
	};
}

const Todo = mongoose.model("todos", todoSchema);
module.exports = { Todo };
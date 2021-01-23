const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true }, (err) => {
	if (!err) {
		console.log('Connexion done !');
	} else {
		console.log('nous avons une erreur , la voici: ' + err);
	}
});
module.exports = mongoose;

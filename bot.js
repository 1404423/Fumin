/*
 * Discord Bot Builder Bot
 * Version 1.2.0
 * Robert Borghese
 */

const Files = require(require('path').join(__dirname, 'js', 'Main.js')).Files;

if(!process.send) {

Files.initStandalone();

} else {

process.on('message', function(content) {
	Files.initBotTest(content);
});

}

client.login(process.env.Mzk1MTc4NTg0NTc2MjI5Mzc2.DSaf0Q.Tlymm08FYqY9p4pwVQNPgp593fw);

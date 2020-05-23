const discord = require('discord.js') ;
const client = new discord.Client() ;
const shell = require('shelljs') ;
const token = '<enter token here>';


client.on('ready', ()=> {
	console.log(`Bot up and Running as ${client.user.tag}!`) ;
}) ;

client.login(token) ;

client.on('message', msg => {
	if(msg.content === '--start') {
		msg.reply('teri maa ki');

	setTimeout(function() {
		msg.reply('ruko bhosdi start ho rha hai') ;
		shell.exec('./scripts/start.sh') ;
	}, 2000)
	}
}) ;




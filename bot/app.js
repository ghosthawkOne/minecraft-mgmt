const discord = require('discord.js') ;
const client = new discord.Client() ;
const shell = require('shelljs') ;
const querystring = require('querystring') ;
const axios = require('axios') ;
const googleapi = '<google api key here>' ;
const token = '<token here>' ;

client.login(token) ;



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Set Status~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

client.on('ready', ()=> {
        console.log(`Bot up and Running as ${client.user.tag}!`) ;
        let act = ["WATCHING","PLAYING","STREAMING","LISTENING" ] ;
        let i=0 ;
        let mum = ["your mum", "with your mum", "your mum", "to your mum whine"] ;

        client.user.setActivity(mum[i] ,{type: act[i]} ) ;

        setInterval(()=>{
                if(i > act.length){ i=0 ; }

                client.user.setActivity(mum[i], {type:act[i]}) ;
                //console.log("i : " + i) ;             
                i++ ;
        }, 1000*1000*15) ;

}) ;




//~~~~~~~~~~~~~~~~~~~~~~~~~~Start/Stop the Server~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

client.on('message', msg => {
        if(msg.content === 'chotu server chalu krr' || msg.content === 'server chalu krr bsdk' || msg.content === 'server chala' || msg.content === 'chotu server chala' || msg.content === 'server chalu karr bhosdi' ) {
                msg.reply('starting the server ji') ;
                shell.exec(__dirname + '/scripts/start.sh',{silent:true ,async:true}) ;
        } ;

        if(msg.content === '--stop') {
                client.channels.cache.get('707676980127989940').send('stop') ;
        } ;
}) ;




//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Commands~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//yt()

client.on('message', msg =>{
	if(msg.content.startsWith('yt.')) {
		let search = { 	q : msg.content.split('.')[1] ,
				part : 'snippet' ,
				maxResults : 30 ,
				key : googleapi
		}

		axios.get('https://www.googleapis.com/youtube/v3/search?' + querystring.stringify(search))
			.then((res)=> {
			msg.reply('https://www.youtube.com/watch?v=' + res.data.items[0].id.videoId) ;
			
			})
			.catch( err=> {
				console.log(err) ;
			}) ;

		
		

		
	}

}) ;




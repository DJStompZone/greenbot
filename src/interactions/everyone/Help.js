const KongouCommand=require("../../abstract/KongouCommand.js");class Help extends KongouCommand{get name(){return"help"}get category(){return"Everyone Commands"}get aliases(){return["h","commands","command"]}get description(){return"Displays all the commands of the bot. "}get arguments(){return[{name:"command",description:"Specific command help",required:!1,type:3}]}run({ctx:e}){if(e.args[0]){const a=e.client.commmands.commands.get(e.args[0].value.toLowerCase())||e.client.commmands.commands.find(a=>a.aliases&&a.aliases.includes(e.args[0].value.toLowerCase()));if(!a)return e.errorMessage("Please provide a valid command!");e.reply({embeds:[{color:"#3A871F",author:{name:a.name,icon_url:e.client.user.displayAvatarURL({size:512,format:"png"}),url:"https://discord.gg/synAXZtQHM"},footer:{text:"Check green-bot.app/commands for more informations!",icon_url:e.client.user.displayAvatarURL({size:512,format:"png"})},fields:[{name:"• Aliases",value:a.aliases?`(${a.aliases.length}) => `+a.aliases.map(e=>`\`${e}\``).join(", "):"No aliase yet! Want an aliase? Feel free to suggest it on the [Support Server](https://disord.gg/green-bot)"},{name:"• Arguments",value:a.arguments?`${a.arguments[0].name} (${a.arguments[0].description}) [Required: ${a.arguments[0].required?"Yes":"No"}]\n\nUsage: \`${e.guildDB.prefix}${a.name} ${a.arguments[0].name}\``:"You don't need to provide any arguments for this command!"},{name:"• Requirements",value:a.playerCheck?`${a.playerCheck.voice?"-Must be in a voice channel\n":""}${a.playerCheck.dispatcher?"-A music must be currently playing\n":""}${a.playerCheck.channel?"-Must be in the same voice channel as me\n":""}${a.playerCheck.vote?"-Must [upvote](https://top.gg/bot/783708073390112830/vote) the bot\n":""}${a.playerCheck.premium?"-Must have the [Guild Premium](https://green-bot.app/premium) tier enabled on the server":""}`:"No requirements for this command!"}],description:a.description}]})}else{const a=[];e.client.commmands.commands.each(e=>{e.category&&(a.includes(e.category)||a.push(e.category))}),e.reply({components:[{components:[{url:"https://green-bot.app/commands",label:"View online",style:5,type:"BUTTON"},{url:"https://discord.com/oauth2/authorize?client_id=913065900125597706&permissions=8&scope=bot%20applications.commands",label:"Invite me",style:5,type:"BUTTON"},{url:"https://green-bot.app/premium",label:"Go Premium",style:5,type:"BUTTON"}],type:"ACTION_ROW"}],embeds:[{fields:a.map(a=>({name:`${a}`,value:e.client.commmands.commands.filter(e=>e.category===a).map(e=>`\`${e.name}\``).join(", ")})),color:"#3A871F",author:{name:"Green-Bot | Help Menu",icon_url:e.author.displayAvatarURL({size:512,format:"png"}),url:"https://discord.gg/synAXZtQHM"},footer:{text:"Do "+e.guildDB.prefix+"help <command> for more informations about a command!",icon_url:e.client.user.displayAvatarURL({size:512,format:"png"})}}]})}}}module.exports=Help;
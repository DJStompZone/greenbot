const KongouCommand=require("../../abstract/KongouCommand.js");class Ping extends KongouCommand{get name(){return"clean"}get category(){return"Admin Commands"}get description(){return"Delete all the bot messages in the channel."}get permissions(){return["MANAGE_GUILD"]}run({ctx:e}){e.channel.messages.fetch().then(t=>{const s=t.filter(t=>t.author.id===e.client.user.id||t.content.startsWith(e.guildDB.prefix));return s.forEach(e=>e.delete().catch(e=>{})),e.successMessage(`Deleted **${s.size}** messages.`)}).catch(t=>e.errorMessage("I need the `Manage messages` permission to delete messages."))}}module.exports=Ping;
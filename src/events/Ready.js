const KongouEvent=require("../abstract/KongouEvent.js");class Ready extends KongouEvent{get name(){return"ready"}get once(){return!0}async run(){this.client.user.setActivity({name:"*help - green-bot.app",type:"WATCHING"})}}module.exports=Ready;
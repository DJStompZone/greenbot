const KongouCommand=require("../../abstract/KongouCommand.js");class Skip extends KongouCommand{get name(){return"back"}get description(){return"Plays the previous track from your queue"}get aliases(){return["b","previous","toggle-np"]}get category(){return"Queue Management"}get playerCheck(){return{voice:!0,dispatcher:!0,channel:!0,dj:!0}}run({ctx:e}){if(0==e.dispatcher.previousTracks.length)return e.errorMessage("There is no previous track on your queue");e.dispatcher.queue.unshift(e.dispatcher.previousTracks[e.dispatcher.previousTracks.length-1]),e.reply("**⏪ *Now Playing the previous track from your queue!***👍"),e.dispatcher.skip()}}module.exports=Skip;
const Discord = require('discord.js');


const emoji = require('../../emojis.json')

module.exports = {
    name: 'stop',
    description: 'Arrete la musique et fait quitter le bot',
    cat: 'musique',

    botpermissions: ['CONNECT', 'SPEAK'],

    async execute(message, args) {


        const voice = message.member.voice.channel;
        if (!voice) {
            return message.channel.send(`${emoji.error} Vous devez d'abord rejoidre un salon vocal !`)
        }

        if (!message.client.player.getQueue(message)) return message.channel.send(`${emoji.error} Je ne joue pas de musique actuellement.`)
        client.player.setRepeatMode(message, false);
        client.player.stop(message);

        message.channel.send(`${emoji.success} - J'ai **arrété** la musique avec succès  !`);










    },
};
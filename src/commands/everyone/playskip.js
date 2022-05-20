const KongouCommand=require("../../abstract/KongouCommand.js");class Play extends KongouCommand{get name(){return"playskip"}get aliases(){return["pskip","ps"]}get description(){return"Adds a music to the queue and the skips to this music"}get category(){return"Everyone Commands"}get playerCheck(){return{voice:!0,dispatcher:!0,channel:!0}}get arguments(){return[{name:"query",description:"The track you want to play",required:!0}]}static wait(e){return new Promise(t=>setTimeout(t,e).unref())}async run({ctx:e}){let t=e.args.join(" ");const a=e.client.shoukaku.getNode();if(!a)return e.errorMessage("No nodes are available yet! You can report this error is [Green bot Server](https://discord.gg/greenbot)");let r=await e.client.queue.create(e,a);if(!r)return e.errorMessage("Something went wrong while joining your voice channel.\nPlease do the command again to fix it.");const s=await e.client.shoukaku.search(a,t,e);if(t.includes("spotify")){if(!s||!s.raw)return e.errorMessage("No results found on spotify for your query!\nIf that's a playlist, it's maybe private! [How to make a spotify playlist public?](https://www.androidauthority.com/make-spotify-playlist-public-3075538/)");if("track"===s.sp.type)r.addTrack(s.raw,e.author),r.playing?e.channel.send({embeds:[{description:`Enqueued **[${s.sp.tracks[0].title.slice(0,100)}](${s.sp.tracks[0].originURL})** at position **${r.queue.length}**`,color:"#3a871f"}]}):r.play();else if("playlist"===s.sp.type){e.channel.send({embeds:[{description:`Added [${s.sp.name.slice(0,50)}](${t}) with ${s.raw.length} tracks ${e.guildDB.auto_shuffle?"🔀 And automatically shuffled":""}`,color:"#3a871f"}]}).catch(()=>null);for(const t of s.raw){if(s.scraped&&!t.track)return;let a={info:{title:s.scraped?t.name:t.title,uri:s.scraped?t.track.external_urls.spotify:t.originURL,sp:!0,image:s.scraped?t.image:t.thumbnail,author:s.scraped?null:t.artists,requester:{name:e.author.username,id:e.author.id,avatar:e.author.displayAvatarURL({dynamic:!0})}}};r.queue.push(a)}r.tracksAdded(),e.guildDB.auto_shuffle&&(e.dispatcher.queue=e.dispatcher.queue.sort(()=>Math.random()-.5)),setTimeout(()=>{r.playing||r.play()},1e3)}else{if("album"!==s.sp.type)return e.errorMessage("No results found on spotify for your query!\nIf that's a playlist, it's maybe private! [How to make a spotify playlist public?](https://www.androidauthority.com/make-spotify-playlist-public-3075538/)");for(const t of s.raw){let a={info:{title:s.scraped?t.name:t.title,author:s.scraped?t.artists[0].name:t.artists,image:s.scraped?t.image:t.thumbnail,uri:s.scraped?t.external_urls.spotify:t.originURL,sp:!0,requester:{name:e.author.username,id:e.author.id,avatar:e.displayAvatarURL({dynamic:!0})}}};r.queue.push(a)}r.tracksAdded(),e.guildDB.auto_shuffle&&(e.dispatcher.queue=e.dispatcher.queue.sort(()=>Math.random()-.5)),e.channel.send({embeds:[{description:`Added [${s.sp.name.slice(0,50)}](${t}) with ${s.raw.length} tracks ${e.guildDB.auto_shuffle?"🔀 And automatically shuffled":""}`,color:"#3a871f"}]}).catch(()=>null),setTimeout(()=>{r.playing||r.play()},1e3)}return}const{type:i,tracks:o,playlistName:n}=s;if("PLAYLIST"!==i){let a=null;if((t.includes("youtube")||t.includes("soundcloud"))&&(a=await e.successMessage("<a:green_loading:824308769713815612> Trying to resolve your track from a copyright free source!")),!s.tracks.length)return e.errorMessage("I didn't find any song on the query you provided!");let i=s.tracks[0];r.addTrack(i,e.author),r.playing?a?setTimeout(()=>{a.edit({embeds:[{description:`Enqueued **[${i.info.title.slice(0,100)}](https://discord.gg/greenbot)** and skipping to this track`,color:"#3a871f"}]})},2e3):e.channel.send({embeds:[{description:`Enqueued **[${i.info.title.slice(0,100)}](https://discord.gg/greenbot)** and skipping to this track`,color:"#3a871f"}]}):r.play()}else{for(let t of o)t.info.requester={name:e.author.username,id:e.author.id,avatar:e.author.displayAvatarURL({dynamic:!0})},r.queue.push(t);e.guildDB.auto_shuffle&&setTimeout(()=>{e.dispatcher.queue=e.dispatcher.queue.sort(()=>Math.random()-.5)},2e3),r.tracksAdded(),e.channel.send({embeds:[{description:`Added [${n.slice(0,50)}](${t}) with ${o.length} tracks ${e.guildDB.auto_shuffle?"🔀 And automatically shuffled":""}`,color:"#3a871f"}]}).catch(()=>null),r.playing||r.play()}setTimeout(()=>{e.dispatcher.skip()},1200)}}module.exports=Play;
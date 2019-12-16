# Embedcord
A package for discord to build embeds like discord.js

# NPM
```
npm i --save embedcord
```

[![NPM](https://nodei.co/npm/embedcord.png)](https://nodei.co/npm/embedcord/)

# Quick Example
```js
const  Embed = require("embedcord");

const embed = new Embed.DiscordEmbed()
  .setTitle("This is your title, it can hold 256 characters")
  .setAuthor("Author Name", "https://i.imgur.com/lm8s41J.png")
  .setColor(123456) // Available: "RANDOM", "DEFAULT", "BLURPLE", "RED", "GREEN" & Color int
  .setDescription("This is the main body of text, it can hold 2048 characters.")
  .setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
  .setImage("http://i.imgur.com/yVpymuV.png")
  .setThumbnail("http://i.imgur.com/p2qNFag.png")
  .setTimestamp(/* enter timestamp or leave it blank */)
  .setURL("https://discord.gg")
  .addField("This is a field title, it can hold 256 characters", "This is a field value, it can hold 1024 characters.")
  .addField("Inline Field", "They can also be inline.", true)
  .addBlankField()
  .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);

message.channel.send({ embed: embed.embed }); // discord.js
message.channel.createMessage({ embed: embed.embed }); // Eris
```

# Object

```js
embed = {
    title: null,
    url: null,
    author: null,
    color: null,
    description: null,
    thumbnail: null,
    fields: [],
    image: null,
    footer: null,
    timestamp: null
}
```

# Image [Code taken from an idiot's guide]
![Image](https://github.com/INEX07/embedcord/blob/master/image.png)

const Embed = require("./index");

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

console.log(embed.embed);
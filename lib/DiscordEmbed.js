class DiscordEmbed {
    /**
     * @constructor
     */
    constructor() {
        this.embed = {
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
        };
    }

    /**
     * Sets the title of the embed.
     * @param {string} title The title
     * @returns {DiscordEmbed}
     */
    setTitle(title) {
        if (!title) throw new Error("Title shouldn't be empty!");
        if (title.length > 256) throw new Error("Title should be less than 256 characters!");
        this.embed.title = title;
        return this;
    }

    /**
     * Sets the URL of the embed.
     * @param {string}
     * @returns {DiscordEmbed}
     */
    setURL(url) {
        if (!url) throw new Error("URL value shouldn't be empty!");
        this.embed.url = url;
        return this;
    }

    /**
     * Sets the description of the embed.
     * @param {string} description The description
     * @returns {DiscordEmbed}
     */
    setDescription(description) {
        if (!description) throw new Error("Description shouldn't be empty!");
        if (description.length > 2048) throw new Error("Description value should be less than 2048 characters!");
        this.embed.description = description;
        return this;
    }

    /**
     * Sets the image of the embed.
     * @param {string} imageURL The URL of the image
     * @returns {DiscordEmbed}
     */
    setImage(imageURL) {
        if (!imageURL) throw new Error("Image url shouldn't be empty!");
        this.embed.image = {
            url: imageURL
        };
        return this;
    }

    /**
     * Sets the thumbnail of the embed.
     * @param {string} thumbnailURL The URL of the thumbnail
     * @returns {DiscordEmbed}
     */
    setThumbnail(thumbnailURL) {
        if (!thumbnailURL) throw new Error("Thumbnail url shouldn't be empty!");
        this.embed.thumbnail = {
            url: thumbnailURL
        };
        return this;
    }

    /**
     * Sets the footer of the embed.
     * @param {string} text The text of the footer
     * @param {string} iconURL The icon URL of the footer
     * @returns {DiscordEmbed}
     */
    setFooter(text, iconURL) {
        if (!text) throw new Error("Footer text shouldn't be empty!");
        if (text.length > 2048) throw new Error("Footer text should be less than 2048 characters!");
        if (!iconURL) iconURL = null;
        this.embed.footer = {
            text: text,
            icon_url: iconURL
        };
        return this;
    }

    /**
     * Sets the timestamp of the embed.
     * @param {string} timestamp Timestamp of the footer
     * @returns {DiscordEmbed}
     */
    setTimestamp(timestamp) {
        if (!timestamp) timestamp = new Date();
        this.embed.timestamp = timestamp;
        return this;
    }

    /**
     * Sets the author of the embed.
     * @param {string} name The name of the author
     * @param {string} iconURL The icon URL of the author
     * @returns {DiscordEmbed}
     */
    setAuthor(name, iconURL) {
        if (!name) throw new Error("Author name shouldn't be empty!");
        if (name.length > 256) throw new Error("Author name value should be less than 256 characters!");
        if (!iconURL) iconURL = null;
        this.embed.author = {
            name: name,
            icon_url: iconURL
        };
        return this;
    }

    /**
     * Sets the color of the embed.
     * @param {ColorResolvable} color The color of the embed
     * @example Available colors: "RANDOM", "DEFAULT", "BLURPLE", "RED", "GREEN" & Color int
     * @returns {DiscordEmbed}
     */
    setColor(color) {
        if (!color) throw new Error("Embed color shouldn't be empty!");

        if (color === "RANDOM") color = Math.floor(Math.random() * 0xFFFFFF);
        if (color === "DEFAULT") color = null;
        if (color === "BLURPLE") color = 7506394;
        if (color === "RED") color = 16711680;
        if (color === "GREEN") color = 65280;

        this.embed.color = color;
        return this;
    }

    /**
     * Adds a field to the embed.
     * @param {string} name The name of the field
     * @param {string} value The value of the field
     * @param {boolean} [inline=false] Set the field to display inline
     * @returns {DiscordEmbed}
     */
    addField(name, value, inline = false) {
        if (!name) throw new Error("Embed field name shouldn't be empty!");
        if (name.length > 256) throw new Error("Embed field value should be less than 256 characters!");
        if (!value) value = 'undefined';
        if (value.length > 1024) throw new Error("Embed field value should be less than 1024 characters!");
        if (this.embed.fields.length > 25) throw new Error("Embed fields should be less than 25!");
        this.embed.fields.push({
            name,
            value,
            inline: inline ? true : false
        });
        return this;
    }

    /**
    * Adds a blank field to the embed.
    * @param {boolean} [inline=false] Set the field to display inline
    * @returns {DiscordEmbed}
    */
    addBlankField(inline = false) {
        if (this.embed.fields.length > 25) throw new Error("Embed fields should be less than 25!");
        return this.addField('\u200B', '\u200B', inline);
    }
};

module.exports = DiscordEmbed;
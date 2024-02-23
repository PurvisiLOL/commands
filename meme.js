const { SlashCommandBuilder, EmbedBuilder } = require ("discord.js");
const fetch = require ('node-fetch')
const fs = require ("fs");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("meme")
    .setDescription(`Replies with a meme fetched from Reddit`),
  async execute(interaction, client) {
    await interaction.deferReply()
        await fetch('https://www.reddit.com/r/dankmemes/random/.json')
        .then(res => res.json())
        .then(res => {
      
        let permalink = res[0].data.children[0].data.permalink;
        let memeImage = res[0].data.children[0].data.url;
        let memeTitle = res[0].data.children[0].data.title;
      
        const embed = new Discord.EmbedBuilder();
            embed.setTitle(memeTitle)
            embed.setColor('Red')
            embed.setImage(memeImage)
            interaction.editReply({ embeds: [embed] })
      })
  },
};

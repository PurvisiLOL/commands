const { SlashCommandBuilder, EmbedBuilder, Embed } = require ("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('serveravatar')
        .setDescription(`Get the server's icon`),
    async execute(interaction) {
        const avatarurl = interaction.guild.iconURL({ format: ['png', 'gif', 'jpeg', 'jpg'], dynamic: true, size: 1024 });

        const embed = new EmbedBuilder()
            .setColor('Random')

        // Check if avatarurl is null (no custom server icon) :)
        if (avatarurl) {
            embed.setTitle(`${interaction.guild.name}'s Icon`);
            embed.setThumbnail(avatarurl);
            embed.setDescription(`[Click here for image](${avatarurl})`);
            embed.setFooter({ text: `Searched by: ${interaction.user.tag}` });
            interaction.reply({ embeds: [embed] });
        } else {
            embed.setDescription(`<:8916crossmark:1200361991798263858> | Server doesn't have a custom icon and uses the default one, Please add a custom icon to the server.`);
            embed.setColor('Random')
            embed.setTimestamp();
            interaction.reply({ embeds: [embed], ephemeral: true});
        }
    }
}

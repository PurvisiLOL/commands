const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

const mapping = '¡"#$%⅋,)(*+\'-˙/0ƖᄅƐㄣϛ9ㄥ86:;<=>?@∀qƆpƎℲפHIſʞ˥WNOԀQɹS┴∩ΛMX⅄Z[/]^_`ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz{|}~'; // Is VERY essentail
const OFFSET = '!'.charCodeAt(0);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('fliptext')
        .setDescription(`Flip text upside down`)
        .addStringOption(option => option.setName('text').setDescription('The text to flip upside down').setRequired(true)),
    async execute(interaction, client) {

        let text = interaction.options.getString("text");
        interaction.reply({ content: text.split('').map(c => c.charCodeAt(0) - OFFSET).map(c => mapping[c] || ' ').reverse().join('') })

    }
}

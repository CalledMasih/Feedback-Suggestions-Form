/* 
Feedback/Suggestion Form in Discord.js V14
Hope you Enjoy, Made with 🤍 by CalledMasih
Github: https://github.com/calledmasih | Don't forget to ⭐
Website: https://calledmasih.ir/
Copyright Masih 2024 All Right Reserved!
*/

const {
    SlashCommandBuilder,
    ActionRowBuilder,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle,
  } = require("discord.js");
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("suggestion")
      .setDescription("Give your suggestion to the server admins📝"),
    async execute(interaction, client) {
  
      const suggestionModal = new ModalBuilder()
        .setCustomId("suggestionModal")
        .setTitle(`${client.user.username} Suggestions`);
  
      const suggestionInput = new TextInputBuilder()
        .setCustomId("suggestionInput")
        .setLabel("📝Feedback/Suggestion")
        .setPlaceholder("Please enter your feedback/suggestion or idea that you want to reviewed by our admins")
        .setMinLength(1)
        .setMaxLength(4000)
        .setRequired(true)
        .setStyle(TextInputStyle.Paragraph);
  
      const firstActionRow = new ActionRowBuilder().addComponents(suggestionInput);
  
      suggestionModal.addComponents(firstActionRow);
  
      await interaction.showModal(suggestionModal);
    },
  };

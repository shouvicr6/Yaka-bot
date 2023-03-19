module.exports = {
    name: "weebcommands",
    alias: ["weebc", "weebcommands"],
    desc: "Gives Help command list",
    react: "💡",
    category: "Help Menu",
    start: async (Miku, m, { prefix, pushName, args, commands, text }) => {
  
      if (args[0]) {
        let data = []
        let name = args[0].toLowerCase()
        let cmd = commands.get(name) || Array.from(commands.values()).find((v) => v.alias.includes(name))
        if (!cmd || cmd.type == "hide") return m.reply("No Command Found")
        else data.push(`🍁Command : ${cmd.name.replace(/^\w/, c => c.toUpperCase())}`)
        if (cmd.alias) data.push(`👾Alias : ${cmd.alias.join(", ")}`)
        if (cmd.cool) data.push(`⏱️Cooldown: ${cmd.cool}`)
        if (cmd.desc) data.push(`🧾Description : ${cmd.desc}`)
        if (cmd.usage) data.push(`💡Example : ${cmd.usage.replace(/%prefix/gi, prefix).replace(/%command/gi, cmd.name).replace(/%text/gi, text)}`)
        var buttonss = [
          { buttonId: `${prefix}help`, buttonText: { displayText: `Help` }, type: 1 },]
        let buth = {
          text: `ℹ️Command Info\n\n${data.join("\n")}`,
          footer: `${botName}`,
          buttons: buttonss,
          headerType: 1
        }
        return Miku.sendMessage(m.from, buth, { quoted: m })
      } else {
  
        let textHelpMenu = `Hello, I'm *${botName}* Bot..
    
    Here's the list of Weeb Commands.\n
    
      | • ━━━━━━━━━━━━━━
      ╠ •
      ╠ •🧧 ${prefix}ᴀɴɪᴍᴇQᴜᴏᴛᴇ - get a random anime quote.
      ╠ •🧧 ${prefix}ᴄᴏꜱᴘʟᴀʏ - get a cosplay picture.
      ╠ •🧧 ${prefix}ᴄᴏꜱᴘʟᴀʏᴠɪᴅᴇᴏ - get a cosplay video.
      ╠ •🧧 ${prefix}ꜰᴏxɢɪʀʟ- get a foxgirl picture.
      ╠ •🧧 ${prefix}ᴍᴀɪᴅ - get a anime maid picture.
      ╠ •🧧 ${prefix}ᴡᴀʟʟᴘᴀᴘᴇʀ - search a wallpaper.
      ╠ •🧧 ${prefix}ᴡᴀɪꜰᴜ - get an anime wifu piture.
      ╠ •
      | • ━━━━━━━━━━━━━━
    
    \n\n`
  
        textHelpMenu += `*✨ _Help Menu by:_ ${botName} ✨*
    
    ☞ _Owned By_: 𝖄𝖆𝖐𝖆𝖘𝖍𝖎 `;
  
    let buttons = [
      {
        buttonId: `${prefix}reactionc`,
        buttonText: { displayText: "Next Menu List" },
        type: 1,
      }
    ];
  
        let buttonMessage = {
          video: botVideo, gifPlayback: true,
          caption: textHelpMenu,
          footer: `*${botName}*`,
          buttons: buttons,
          headerType: 4,
        };
  
        await Miku.sendMessage(m.from, buttonMessage, { quoted: m });
      }
    }
  }
  
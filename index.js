const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTA5NzU0NzM2Nzg4NTA0NTg2.YZI5Hw.igxkm5b1e-JWtQug8e-TKhYpRWU"

const client = new Discord.Client({
    intents:[
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MESSAGE_REACTIONS"
    ]
})

client.on("ready", () => {
    console.log(`meow ${client.user.tag} is online`)
})

client.on("messageCreate", (message) => {
    if(message.author.bot){
        return
    }

    if(message.content == "hi nana"){
        message.channel.send(`hello ${message.author.username}`)
    }
})

client.login(process.env.TOKEN)
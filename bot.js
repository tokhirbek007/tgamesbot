const TelegramBot = require('node-telegram-bot-api');

// Insert your token obtained from @BotFather here
const token = '7400030584:AAESo0yo0Zrv7nFOPHxhNSXv37FHtzZ76iQ';

// Insert the URLs of your games here
const game1Url = 'https://tokhirbek007.github.io/flappy/';
const game2Url = 'https://tokhirbek007.github.io/snakegame/';

// Create an instance of the bot
const bot = new TelegramBot(token, { polling: true });

// Command handler for /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    // Define button options for Game 1
    const game1Options = {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Play Flappy Bird',
                        url: game1Url
                    }
                ]
            ]
        }
    };

    // Define button options for Game 2
    const game2Options = {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Play Snake Game',
                        url: game2Url
                    }
                ]
            ]
        }
    };

    // Send message with buttons for both games
    bot.sendMessage(chatId, 'Welcome! Choose a game to play:', game1Options);
    bot.sendMessage(chatId, 'Or try another game:', game2Options);
});

console.log('Bot is running...');

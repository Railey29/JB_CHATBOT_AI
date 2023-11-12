alert("This is Under-Constructraction AI!")
    // DOMCOntentLoaded is For mabilisan mag Display sa Body!
document.addEventListener('DOMContentLoaded', function() {
    const chatForm = document.getElementById('chatForm');
    const UserInput = document.getElementById('UserInput');
    const DisplayConvo = document.getElementById('DisplayChatBot');

    chatForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // User and Bot Convo
        const User = UserInput.value.toLowerCase();
        var BotRespones;

        if (User.includes("hi") || User.includes("hello")) {
            BotRespones = "Yo This is AI Made By Rairai";
        } else if (User.includes("are you human?")) {
            BotRespones = "No I'am For General AI But I'am Still Working on my Programmer!"
        } else if (User.includes("thank you!") || User.includes("thank you jb") || User.includes("thanks")) {
            BotRespones = "Ow You Go Left?"
        } else if (User.includes("what is your name?")) {
            BotRespones = "I'am JB"
        } else if (User.includes("yes") || User.includes("yeah") || User.includes("Yep")) {
            BotRespones = "Owwww Okay Bye! Thank You For Using Me My Programmer is Glad To Use her AI!"
        } else if (User.includes("do you know me?")) {
            BotRespones = "Ow I dont know how are you why?"
        } else if (User.includes("what is difference of ai and robot?")) {
            BotRespones = "Sorry But I don't Know what is that!"
        } else if (User.includes("who is rairai?")) {
            BotRespones = "She is My Developer!"
        } else if (User.includes("okay okay") || User.includes("okay")) {
            BotRespones = "Thank you for Understand Me And Sorry!"
        } else if (User.includes("are you ai or chatbot?")) {
            BotRespones = "Ahmm.. I'm ChatBot JB what can i do for you?"
        } else {
            BotRespones = "Ow sorry , that question I don't support. Maybe my programmer is still fixing it!"
        }

        // gumaw ang P tags to add in body display FOR USER
        const messageUser = document.createElement('p'); // create P tags
        messageUser.textContent = `You: ${User}`; // this is Style of display
        messageUser.style.color = 'white';
        // Added to Display Convo
        DisplayConvo.appendChild(messageUser); // added to the div DisplayConvo or DisplayChatBot
        DisplayConvo.scrollTop = DisplayConvo.scrollHeight; // Scroll down to the latest message

        // _______________________________________________________
        // GUMAWA NG P TAGS FOR BOT
        const messageBot = document.createElement('p'); // create P tags
        messageBot.textContent = `Bot: ${BotRespones}` // this is Style of display
        messageBot.style.color = 'white'
        DisplayConvo.appendChild(messageBot); // added to the div DisplayConvo or DisplayChatBot
        UserInput.value = ''; // reset User Respones
        DisplayConvo.scrollTop = DisplayConvo.scrollHeight; // Scroll down to the latest message

    });
});
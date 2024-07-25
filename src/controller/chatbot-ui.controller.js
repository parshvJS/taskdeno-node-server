import { apiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
// job of this api is to setup code that can chat with external api that is responsible to chat with user 
export const chatbotUI = asyncHandler(async (req, res) => {
    const chatbotId = req.query['chatbot-id'];
    if (!chatbotId) {
        res.status(400).json(
            new apiError(400,"Chatbot ID Required !")
        );
        return;
    }

    
    const htmlContent = `
   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chatbot UI</title>
    <style>     
       body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

.chatbot-trigger {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    background-color: #007bff;
    color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.chatbot-panel {
    display: none;
    position: fixed;
    bottom: 90px;
    right: 20px;
    width: 300px;
    height: 400px;
    background-color: white;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    border-radius: 8px;
    padding: 10px;
}

.chatbot-content {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
    </style>
</head>
<body>
<div id="chatbot-trigger" class="chatbot-trigger">💬</div>
    <div id="chatbot-panel" class="chatbot-panel">
    <div id="chatbot-content" class="chatbot-content">
        
    </div>
        <div id="chatbot-content" class="chatbot-content">Loading...</div>
    </div>
    <script>
       document.addEventListener('DOMContentLoaded', function() {
    const chatbotTrigger = document.getElementById('chatbot-trigger');
    const chatbotPanel = document.getElementById('chatbot-panel');
    const chatbotContent = document.getElementById('chatbot-content');

    chatbotTrigger.addEventListener('click', function() {
        chatbotPanel.style.display = chatbotPanel.style.display === 'block' ? 'none' : 'block';
        chatbotContent.innerHTML = 'Loading...';

        // Simulate an API call with setTimeout
        setTimeout(() => {
            chatbotContent.innerHTML = '<p>Welcome to our Chatbot!</p>';
        }, 2000);


    });
});
    </script>
</body>
</html>

`;
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(htmlContent);
});

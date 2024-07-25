import { Router } from "express";
import { chatbotUI } from "../controller/chatbot-ui.controller.js";

const chatbotUi = Router();

chatbotUi.route("/chatbot-ui").get(
    chatbotUI
);

export {chatbotUi}


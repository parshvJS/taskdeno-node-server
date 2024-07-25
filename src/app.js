import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import { chatbotUi } from './routes/chatbot-ui.route.js';

const app = express()

app.use(cors())
app.use(cookieParser());

app.use(express.urlencoded({
    extended: true,
    limit: '16kb'
}))

app.use(express.json({
    limit: '16kb'
}))

app.use(chatbotUi)

export default app
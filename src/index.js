import dotenv from 'dotenv'
import app from './app.js'
import serverless from 'serverless-http';
import connectDB from './db/connectDB.db.js';

dotenv.config();

const port = process.env.port || 8000;
connectDB().then(() => {
    app.get('/',(req,res)=>{
        res.send("I am live ")
    })
    app.listen(port, () => {
        console.log(`Listening to port ${port}`)
    })
}).catch((err) => {
    console.log("Error in index.js (catch) ! ")
    throw err
})

export const handler = serverless(app);
import express from 'express';
import { userRouter } from './Routes/user.route';
  
const app = express();
const PORT:Number=3000;
  
// Handling GET / Requestss
app.get('/', (req, res) => {
    res.send('Welcome to typescript backend!');
})

app.use("/user",userRouter)
// Server setup
app.listen(PORT,() => {
    console.log('The application is listening '
          + 'on port http://localhost:'+PORT);
})
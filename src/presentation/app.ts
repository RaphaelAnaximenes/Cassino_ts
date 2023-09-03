import express, {Request} from "express";

const app = express();
app.use(express.json());

app.get("/game", (req: Request, res: any) =>{
    res.status(200).json({"page": "home"});
});




export default app;
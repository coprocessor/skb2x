import express from "express";
import cors from "cors";

const appExpress = express();
const arrayNumbers = [1, 18, 243, 3240, 43254, 577368, 7706988, 102876480, 1373243544, 18330699168, 244686773808, 3266193870720, 43598688377184, 581975750199168, 7768485393179328, 103697388221736960, 1384201395738071424, 18476969736848122368, 246639261965462754048];
const openPort = 3000;

appExpress.use(cors());
appExpress.get("/task2x",(req, res)=>{
	const shadowNumber = +(req.query.i);
	if (shadowNumber < 0 || shadowNumber > 18) res.send("integer of range");
	res.send(arrayNumbers[shadowNumber].toString());
});

appExpress.listen(openPort, () => {
	console.log(`------------- port on ${openPort} ----------------`);
});

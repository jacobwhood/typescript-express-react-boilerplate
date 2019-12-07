import * as dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import * as path from 'path';

dotenv.config();

const app: express.Application = express();
const port = process.env.PORT || 3000;

app.get('/', (request: Request, response: Response) => {
    response.send('Hello world!');
});

// Start Express server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

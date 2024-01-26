import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

// Configuração para servir arquivos estáticos do React
app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (req: Request, res: Response) => {
  req.is('html');
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server Running at http://localhost:${port}`);
});


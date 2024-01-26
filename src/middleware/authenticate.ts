// middleware/authenticate.ts
import { Request, Response, NextFunction } from 'express';

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  // TODO autenticação, autorização e manipulação de erros
  next();
};

export default authenticate;


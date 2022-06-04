import { Router } from 'express';
import { authenticate } from '../Authentication/auth.js';
import { page, sign, signOut } from '../Controller/controller.js';

const Route = Router();
Route.post("/sign", sign);
Route.get("/test-page", authenticate, page);
Route.post("/sign-out", authenticate, signOut);
export default Route;
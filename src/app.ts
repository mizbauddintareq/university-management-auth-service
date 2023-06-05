import cors from 'cors';
import express, { Application } from 'express';

import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { AcademicSemesterRoutes } from './app/modules/academicSemeste/academicSemester.route';
import { UserRoutes } from './app/modules/user/user.route';
const app: Application = express();
// using cors
app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application routes
app.use('/api/v1/users', UserRoutes);
app.use('/api/v1/academic-semesters', AcademicSemesterRoutes);

// // Testing
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   console.log(x)
// })

// Global error handler
app.use(globalErrorHandler);

export default app;

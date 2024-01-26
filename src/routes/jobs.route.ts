import { Routes } from '@/interfaces/routes.interface';
import { Router } from 'express';
import { JobsController } from '@/controllers/jobs.controller';
import { AuthMiddleware } from '@/middlewares/auth.middleware';
import { ValidationMiddleware } from '@/middlewares/validation.middleware';
import { CreateJobDto } from '@/dtos/job.dto';

export class JobsRoute implements Routes {
  public path = '/jobs';
  public router = Router();
  public jobs = new JobsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.jobs.getJobs);
    this.router.get(`${this.path}/me`, AuthMiddleware, this.jobs.getMyJobs);
    this.router.get(`${this.path}/:id`, AuthMiddleware, this.jobs.getJobById);
    this.router.post(`${this.path}`, AuthMiddleware, ValidationMiddleware(CreateJobDto), this.jobs.createJob);
    this.router
      .route(`${this.path}/:id`)
      .put(AuthMiddleware, ValidationMiddleware(CreateJobDto, true), this.jobs.updateJob)
      .patch(AuthMiddleware, ValidationMiddleware(CreateJobDto, true), this.jobs.updateJob);
    this.router.delete(`${this.path}/:id`, AuthMiddleware, this.jobs.deleteJob);
  }
}

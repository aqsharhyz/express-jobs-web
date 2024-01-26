import { RequestWithUser } from '@/interfaces/auth.interface';
import { JobService } from '@/services/jobs.service';
import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';

export class JobsController {
  public job = Container.get(JobService);

  public getJobs = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllJobsData = await this.job.findAllJob();

      res.status(200).json({ data: findAllJobsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getMyJobs = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const user = req.user;
      const findAllJobsData = await this.job.findAllJob(user);

      res.status(200).json({ data: findAllJobsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getJobById = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const user = req.user;
      const jobId: string = req.params.id;
      const findOneJobData = await this.job.findJobById(user, jobId);

      res.status(200).json({ data: findOneJobData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createJob = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      req.body.createdBy = req.user._id;
      const jobData = req.body;
      const createJobData = await this.job.createJob(jobData);

      res.status(201).json({ data: createJobData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateJob = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const user = req.user;
      const jobId: string = req.params.id;
      const jobData = req.body;
      const updateJobData = await this.job.updateJob(user, jobId, jobData);

      res.status(200).json({ data: updateJobData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteJob = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const user = req.user;
      const jobId: string = req.params.id;
      const deleteJobData = await this.job.deleteJob(user, jobId);

      res.status(200).json({ data: deleteJobData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

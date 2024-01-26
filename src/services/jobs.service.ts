import { HttpException } from '@/exceptions/HttpException';
import { Job } from '@/interfaces/jobs.interface';
import { User } from '@/interfaces/users.interface';
import { JobModel } from '@/models/jobs.model';
import { Service } from 'typedi';

@Service()
export class JobService {
  public async findAllJob(user?: User): Promise<Job[]> {
    let jobs: Job[];
    if (user) {
      const queryObject = {
        createdBy: user._id,
      };
      jobs = await JobModel.find(queryObject);
      return jobs;
    }
    jobs = await JobModel.find();
    return jobs;
  }

  public async findJobById(user: User, jobId: string): Promise<Job> {
    const findJob: Job = await JobModel.findOne({ _id: jobId, createdBy: user._id });
    if (!findJob) throw new HttpException(409, "Job doesn't exist");

    return findJob;
  }

  public async createJob(jobData: Job): Promise<Job> {
    const createJobData: Job = await JobModel.create({ ...jobData });

    return createJobData;
  }

  public async updateJob(user: User, jobId: string, jobData: Job): Promise<Job> {
    const updateDataById = await JobModel.findByIdAndUpdate({ _id: jobId, createdBy: user._id }, { jobData }, { new: true, runValidators: true });
    if (!updateDataById) throw new HttpException(409, "Job doesn't exist");

    return updateDataById;
  }

  public async deleteJob(user: User, jobId: string): Promise<Job> {
    const deleteJobById: Job = await JobModel.findByIdAndDelete({ _id: jobId, createdBy: user._id });
    if (!deleteJobById) throw new HttpException(409, "Job doesn't exist");

    return deleteJobById;
  }
}

import { Schema, Document, model } from 'mongoose';
import { Job } from '@interfaces/jobs.interface';

const JobSchema: Schema = new Schema(
  {
    company: {
      type: String,
      required: [true, 'Please add a company name'],
      maxlength: [50, 'Name cannot be more than 50 characters'],
    },
    position: {
      type: String,
      required: [true, 'Please add a position'],
      maxlength: [100, 'Position cannot be more than 100 characters'],
    },
    status: {
      type: String,
      enum: ['interview', 'declined', 'pending'],
      default: 'pending',
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please add a user'],
    },
    jobType: {
      type: String,
      enum: ['full-time', 'part-time', 'internship', 'remote'],
      default: 'full-time',
    },
    jobLocation: {
      type: String,
      default: 'my city',
      required: [true, 'Please add a job location'],
    },
  },
  { timestamps: true },
);

export const JobModel = model<Job & Document>('Job', JobSchema);

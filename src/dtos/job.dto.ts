import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateJobDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  public company: string;

  @MaxLength(100)
  @IsString()
  @IsNotEmpty()
  public position: string;

  @IsEnum(['interview', 'declined', 'pending'])
  @IsNotEmpty()
  public status: string;

  @IsNotEmpty()
  @IsEnum(['full-time', 'part-time', 'internship', 'remote'])
  public jobType: string;

  @IsNotEmpty()
  @IsString()
  public jobLocation: string;
}

export class UpdateJobDto {
  @IsString()
  @IsOptional()
  @MaxLength(50)
  public company?: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  public position?: string;

  @IsEnum(['interview', 'declined', 'pending'])
  @IsOptional()
  public status?: string;

  @IsEnum(['full-time', 'part-time', 'internship', 'remote'])
  @IsOptional()
  public jobType?: string;

  @IsString()
  @IsOptional()
  public jobLocation?: string;
}

import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateTaskDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsOptional()
  @IsBoolean()
  done?: boolean;

  @IsOptional()
  tags?: {
    id: string;
    name: string;
    colorTag: string;
  }[];
}

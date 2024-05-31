import { IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  public displayName?: string;

  @IsOptional()
  @IsString()
  public avatarUrl?: string;
}

import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUserSettingsDto {
  @IsOptional()
  @IsBoolean()
  public receiveNotifications?: boolean;

  @IsOptional()
  @IsBoolean()
  public receiveEmails?: boolean;

  @IsOptional()
  @IsBoolean()
  public receiveSMS?: boolean;
}

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  public username: string;

  @IsString()
  @IsOptional()
  public displayName?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateUserSettingsDto)
  public settings?: CreateUserSettingsDto;
}

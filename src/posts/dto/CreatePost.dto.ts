import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  public title: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(500)
  public content: string;

  @IsString()
  @IsNotEmpty()
  public userId: string;
}

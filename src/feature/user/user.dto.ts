import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class UserLoginDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  username: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;
}

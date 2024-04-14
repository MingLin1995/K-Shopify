import { ApiProperty } from '@nestjs/swagger';

export class RegisterRequestDto {
  @ApiProperty({
    example: 'test@gmail.com',
    description: '使用者的電子信箱',
  })
  readonly email: string;

  @ApiProperty({
    example: '123456',
    description: '使用者的密碼',
  })
  readonly password: string;
}

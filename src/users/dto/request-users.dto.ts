import { ApiProperty } from '@nestjs/swagger';

export class RequestUsersDto {
  @ApiProperty({
    example: 'user@example.com',
    description: '使用者的電子信箱',
  })
  readonly email: string;

  @ApiProperty({
    example: 'password123',
    description: '使用者的密碼',
  })
  readonly password: string;
}

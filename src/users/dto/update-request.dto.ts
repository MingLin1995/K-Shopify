import { ApiProperty } from '@nestjs/swagger';

export class UpdateRequestDto {
  @ApiProperty({
    example: 'newtest@gmail.com',
    description: '新的使用者的電子信箱',
  })
  readonly email: string;

  @ApiProperty({
    example: 'new123456',
    description: '新的使用者的密碼',
  })
  readonly password: string;
}

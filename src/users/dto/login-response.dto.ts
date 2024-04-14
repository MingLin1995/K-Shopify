import { ApiProperty } from '@nestjs/swagger';

export class LoginResponseDto200 {
  @ApiProperty({
    example: { accessToken: 'jwt.token' },
    description: '登入後取得的 token',
  })
  readonly data: {
    accessToken: string;
  };

  @ApiProperty({
    example: '登入成功',
    description: '操作結果',
  })
  readonly message: string;
}

export class LoginResponseDto400 {
  @ApiProperty({
    example: '登入失敗，帳號或密碼錯誤',
    description: '操作結果',
  })
  readonly message: string;
}

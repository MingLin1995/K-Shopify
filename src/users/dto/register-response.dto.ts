import { ApiProperty } from '@nestjs/swagger';

export class RegisterResponseDto201 {
  @ApiProperty({
    example: { id: 1, email: 'test@gamil.com' },
    description: '建立用戶資訊',
  })
  readonly data: {
    id: number;
    email: string;
  };

  @ApiProperty({
    example: '註冊成功',
    description: '操作結果',
  })
  readonly message: string;
}

export class RegisterResponseDto400 {
  @ApiProperty({
    example: '註冊失敗，格式錯誤',
    description: '操作结果',
  })
  readonly message: string;
}

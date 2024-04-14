import { ApiProperty } from '@nestjs/swagger';

export class UpdateResponseDto200 {
  @ApiProperty({
    example: { id: 1, email: 'newtest@gamil.com' },
    description: '新的用戶資訊',
  })
  readonly data: {
    id: number;
    email: string;
  };

  @ApiProperty({
    example: '更新成功',
    description: '操作結果',
  })
  readonly message: string;
}

export class UpdateResponseDto400 {
  @ApiProperty({
    example: '更新失敗，格式錯誤',
    description: '操作結果',
  })
  readonly message: string;
}

export class UpdateResponseDto403 {
  @ApiProperty({
    example: '更新失敗，權限不足',
    description: '操作結果',
  })
  readonly message: string;
}

export class UpdateResponseDto404 {
  @ApiProperty({
    example: '更新失败，該使用者不存在',
    description: '操作结果',
  })
  readonly message: string;
}

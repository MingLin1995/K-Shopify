import { ApiProperty } from '@nestjs/swagger';

export class getInfoResponseDto200 {
  @ApiProperty({
    example: { id: 1, email: 'test@gmail.com' },
    description: '用戶相關資訊',
  })
  readonly data: {
    id: number;
    email: string;
  };

  @ApiProperty({
    example: '取得用戶資料成功',
    description: '操作結果',
  })
  readonly message: string;
}

export class getInfoResponseDto400 {
  @ApiProperty({
    example: '取得用戶資料失敗，缺少必要參數',
    description: '操作結果',
  })
  readonly message: string;
}

export class getInfoResponseDto401 {
  @ApiProperty({
    example: '取得用戶資料失敗，Token無效',
    description: '操作結果',
  })
  readonly message: string;
}

export class getInfoResponseDto404 {
  @ApiProperty({
    example: '取得用戶資料失敗，未找到用戶資料',
    description: '操作結果',
  })
  readonly message: string;
}

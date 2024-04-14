import { ApiProperty } from '@nestjs/swagger';

export class ResponseUsersDto201 {
  @ApiProperty({
    example: { id: 1, email: 'user@example.com' },
    description: '建立用戶資訊',
  })
  data: {
    id: number;
    email: string;
  };

  @ApiProperty({
    example: '建立成功',
    description: '操作結果',
  })
  message: string;
}

export class ResponseUsersDto403 {
  @ApiProperty({
    example: { id: 1, email: 'user@example.com' },
    description: '建立用戶資訊',
  })
  data: {
    id: number;
    email: string;
  };

  @ApiProperty({
    example: '建立失敗',
    description: '操作結果',
  })
  message: string;
}

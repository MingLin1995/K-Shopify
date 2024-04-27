import { ApiProperty } from '@nestjs/swagger';

export class LogoutResponseDto200 {
  @ApiProperty({
    example: '登出成功',
    description: '操作結果',
  })
  readonly message: string;
}

export class LogoutResponseDto401 {
  @ApiProperty({
    example: '登出失敗，Token無效',
    description: '操作結果',
  })
  readonly message: string;
}

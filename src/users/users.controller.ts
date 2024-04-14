import { Controller, Post, Body, Req } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RequestUsersDto } from './dto/request-users.dto';
import {
  ResponseUsersDto201,
  ResponseUsersDto403,
} from './dto/response-users.dto';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  @Post('register')
  @ApiOperation({ summary: '註冊帳戶' })
  @ApiResponse({
    status: 201,
    description: '註冊成功',
    type: ResponseUsersDto201,
  })
  @ApiResponse({
    status: 403,
    description: '註冊失敗',
    type: ResponseUsersDto403,
  })
  async create(
    @Req() req,
    @Body() requestUsersDto: RequestUsersDto,
  ): Promise<ResponseUsersDto201 | ResponseUsersDto403> {
    return;
  }
}

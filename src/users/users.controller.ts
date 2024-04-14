import { Controller, Post, Body, Req, Get, Param, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';

// 註冊
import { RegisterRequestDto } from './dto/register-request.dto';
import {
  RegisterResponseDto201,
  RegisterResponseDto400,
} from './dto/register-response.dto';

// 登入
import { LoginRequestDto } from './dto/login-request.dto';
import {
  LoginResponseDto200,
  LoginResponseDto400,
} from './dto/login-response.dto';

// 登出
import {
  LogoutResponseDto200,
  LogoutResponseDto401,
} from './dto/logout-response.dto';

// 取得用戶資訊
import {
  getInfoResponseDto200,
  getInfoResponseDto400,
  getInfoResponseDto401,
  getInfoResponseDto404,
} from './dto/getInfo-response.dot';

// 更新用戶資訊
import { UpdateRequestDto } from './dto/update-request.dto';
import {
  UpdateResponseDto200,
  UpdateResponseDto400,
  UpdateResponseDto403,
  UpdateResponseDto404,
} from './dto/update-response.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  // 註冊
  @Post('register')
  @ApiOperation({ summary: '註冊帳戶' })
  @ApiResponse({
    status: 201,
    description: '註冊成功',
    type: RegisterResponseDto201,
  })
  @ApiResponse({
    status: 403,
    description: '註冊失敗',
    type: RegisterResponseDto400,
  })
  async register(
    @Req() req,
    @Body() registerRequestDto: RegisterRequestDto,
  ): Promise<RegisterResponseDto201 | RegisterResponseDto400> {
    return;
  }

  // 登入
  @Post('login')
  @ApiOperation({ summary: '登入帳戶' })
  @ApiResponse({
    status: 200,
    description: '登入成功',
    type: LoginResponseDto200,
  })
  @ApiResponse({
    status: 401,
    description: '登入失敗，帳號或密碼錯誤',
    type: LoginResponseDto400,
  })
  async login(
    @Req() req,
    @Body() loginRequestDto: LoginRequestDto,
  ): Promise<LoginResponseDto200 | LoginResponseDto400> {
    return;
  }

  // 登出
  @Post('logout')
  @ApiOperation({ summary: '登出帳戶' })
  @ApiResponse({
    status: 200,
    description: '登出成功',
    type: LogoutResponseDto200,
  })
  @ApiResponse({
    status: 4010,
    description: '登出失敗，Token無效',
    type: LogoutResponseDto401,
  })
  async logout(
    @Req() req,
  ): Promise<LogoutResponseDto200 | LogoutResponseDto401> {
    return;
  }

  // 取得用戶資訊
  @Get(':id')
  @ApiOperation({ summary: '取得用戶資訊' })
  @ApiResponse({
    status: 200,
    description: '取得用戶資料成功',
    type: getInfoResponseDto200,
  })
  @ApiResponse({
    status: 400,
    description: '取得用戶資料失敗，缺少必要參數',
    type: getInfoResponseDto404,
  })
  @ApiResponse({
    status: 401,
    description: '取得用戶資料失敗，Token無效',
    type: getInfoResponseDto404,
  })
  @ApiResponse({
    status: 404,
    description: '取得用戶資料失敗，未找到用戶資料',
    type: getInfoResponseDto404,
  })
  async getUserInfo(
    @Param('id') id: string,
  ): Promise<
    | getInfoResponseDto200
    | getInfoResponseDto400
    | getInfoResponseDto401
    | getInfoResponseDto404
  > {
    return;
  }

  // 更新用戶資訊
  @Put(':id')
  @ApiOperation({ summary: '更新用戶資訊' })
  @ApiResponse({
    status: 200,
    description: '更新成功',
    type: UpdateResponseDto200,
  })
  @ApiResponse({
    status: 400,
    description: '更新失敗，格式錯誤',
    type: UpdateResponseDto400,
  })
  @ApiResponse({
    status: 403,
    description: '更新失敗，權限不足',
    type: UpdateResponseDto400,
  })
  @ApiResponse({
    status: 404,
    description: '更新失败，該使用者不存在',
    type: UpdateResponseDto400,
  })
  async updateUserInfo(
    @Param('id') id: string,
    @Body() updateRequestDto: UpdateRequestDto,
  ): Promise<
    | UpdateResponseDto200
    | UpdateResponseDto400
    | UpdateResponseDto403
    | UpdateResponseDto404
  > {
    return;
  }
}

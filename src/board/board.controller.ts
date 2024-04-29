import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './DTO/createBoard.dto';
import { UpdateBoardDto } from './DTO/updateBoard.dto';
import { error } from 'console';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Post()
  async createBoard(@Body() createBoardDto: CreateBoardDto) {
    return this.boardService.createBoard(createBoardDto);
  }

  @Get()
  async getAllBoard() {
    return this.boardService.getAllBoard();
  }

  @Get('/:board_id')
  async getOneBoard(@Param('board_id') board_id: number) {
    try {
      const board = await this.boardService.getOneBoard(board_id);
      if (!board) {
        throw new NotFoundException('아이디에 해당하는 게시글이 없어용..ㅠㅠ');
      }
      return board;
    } catch (error) {
      throw new NotFoundException('게시글이 없어용..ㅠㅠ');
    }
  }

  @Patch('/:board_id')
  async updateBoard(
    @Param('board_id') board_id: number,
    @Body() updateBoardDto: UpdateBoardDto,
  ) {
    try {
      await this.boardService.updateBoard(board_id, updateBoardDto);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
    return updateBoardDto;
  }

  @Delete('/:board_id')
  async deleteOneBoard(
    @Param('board_id') board_id: number,
  ): Promise<{ status: number; message: string }> {
    await this.boardService.deleteOneBoard(board_id);
    return { status: 200, message: '해당 게시글이 삭제되었습니다.' };
  }
}

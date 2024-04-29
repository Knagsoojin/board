import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Boards } from './board.entity';
import { Repository } from 'typeorm';
import { UpdateBoardDto } from './DTO/updateBoard.dto';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Boards)
    private readonly boardRepository: Repository<Boards>,
  ) {}

  async createBoard({ title, detail }) {
    return await this.boardRepository.save({
      title,
      detail,
    });
  }

  async getAllBoard(): Promise<Boards[]> {
    return this.boardRepository.find();
  }

  async getOneBoard(board_id: number): Promise<Boards> {
    return this.boardRepository.findOne({ where: { board_id } });
  }

  async deleteOneBoard(board_id: number): Promise<void> {
    const result = await this.boardRepository.delete(board_id);

    if (result.affected == 0) {
      throw new NotFoundException('해당 게시글을 찾을 수 없습니당ㅠㅠ');
    }
  }

  async updateBoard(
    board_id: number,
    updateBoardDto: UpdateBoardDto,
  ): Promise<void> {
    const board = await this.boardRepository.findOne({ where: { board_id } });

    if (!board) {
      throw new NotFoundException('해당 게시글을 찾을 수 없습니당ㅠㅠ');
    }

    if (updateBoardDto.title) {
      board.title = updateBoardDto.title;
    }

    if (updateBoardDto.detail) {
      board.detail = updateBoardDto.detail;
    }

    await this.boardRepository.save(board);
  }
}

import { Boards } from './board.entity';
import { Repository } from 'typeorm';
import { UpdateBoardDto } from './DTO/updateBoard.dto';
export declare class BoardService {
    private readonly boardRepository;
    constructor(boardRepository: Repository<Boards>);
    createBoard({ title, detail }: {
        title: any;
        detail: any;
    }): Promise<{
        title: any;
        detail: any;
    } & Boards>;
    getAllBoard(): Promise<Boards[]>;
    getOneBoard(board_id: number): Promise<Boards>;
    deleteOneBoard(board_id: number): Promise<void>;
    updateBoard(board_id: number, updateBoardDto: UpdateBoardDto): Promise<void>;
}

import { BoardService } from './board.service';
import { CreateBoardDto } from './DTO/createBoard.dto';
import { UpdateBoardDto } from './DTO/updateBoard.dto';
export declare class BoardController {
    private readonly boardService;
    constructor(boardService: BoardService);
    createBoard(createBoardDto: CreateBoardDto): Promise<{
        title: any;
        detail: any;
    } & import("./board.entity").Boards>;
    getAllBoard(): Promise<import("./board.entity").Boards[]>;
    getOneBoard(board_id: number): Promise<import("./board.entity").Boards>;
    updateBoard(board_id: number, updateBoardDto: UpdateBoardDto): Promise<UpdateBoardDto>;
    deleteOneBoard(board_id: number): Promise<{
        status: number;
        message: string;
    }>;
}

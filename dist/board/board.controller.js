"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardController = void 0;
const common_1 = require("@nestjs/common");
const board_service_1 = require("./board.service");
const createBoard_dto_1 = require("./DTO/createBoard.dto");
const updateBoard_dto_1 = require("./DTO/updateBoard.dto");
let BoardController = class BoardController {
    constructor(boardService) {
        this.boardService = boardService;
    }
    async createBoard(createBoardDto) {
        return this.boardService.createBoard(createBoardDto);
    }
    async getAllBoard() {
        return this.boardService.getAllBoard();
    }
    async getOneBoard(board_id) {
        try {
            const board = await this.boardService.getOneBoard(board_id);
            if (!board) {
                throw new common_1.NotFoundException('아이디에 해당하는 게시글이 없어용..ㅠㅠ');
            }
            return board;
        }
        catch (error) {
            throw new common_1.NotFoundException('게시글이 없어용..ㅠㅠ');
        }
    }
    async updateBoard(board_id, updateBoardDto) {
        try {
            await this.boardService.updateBoard(board_id, updateBoardDto);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            throw error;
        }
        return updateBoardDto;
    }
    async deleteOneBoard(board_id) {
        await this.boardService.deleteOneBoard(board_id);
        return { status: 200, message: '해당 게시글이 삭제되었습니다.' };
    }
};
exports.BoardController = BoardController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createBoard_dto_1.CreateBoardDto]),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "createBoard", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "getAllBoard", null);
__decorate([
    (0, common_1.Get)('/:board_id'),
    __param(0, (0, common_1.Param)('board_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "getOneBoard", null);
__decorate([
    (0, common_1.Patch)('/:board_id'),
    __param(0, (0, common_1.Param)('board_id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, updateBoard_dto_1.UpdateBoardDto]),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "updateBoard", null);
__decorate([
    (0, common_1.Delete)('/:board_id'),
    __param(0, (0, common_1.Param)('board_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "deleteOneBoard", null);
exports.BoardController = BoardController = __decorate([
    (0, common_1.Controller)('board'),
    __metadata("design:paramtypes", [board_service_1.BoardService])
], BoardController);
//# sourceMappingURL=board.controller.js.map
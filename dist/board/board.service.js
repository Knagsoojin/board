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
exports.BoardService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const board_entity_1 = require("./board.entity");
const typeorm_2 = require("typeorm");
let BoardService = class BoardService {
    constructor(boardRepository) {
        this.boardRepository = boardRepository;
    }
    async createBoard({ title, detail }) {
        return await this.boardRepository.save({
            title,
            detail,
        });
    }
    async getAllBoard() {
        return this.boardRepository.find();
    }
    async getOneBoard(board_id) {
        return this.boardRepository.findOne({ where: { board_id } });
    }
    async deleteOneBoard(board_id) {
        const result = await this.boardRepository.delete(board_id);
        if (result.affected == 0) {
            throw new common_1.NotFoundException('해당 게시글을 찾을 수 없습니당ㅠㅠ');
        }
    }
    async updateBoard(board_id, updateBoardDto) {
        const board = await this.boardRepository.findOne({ where: { board_id } });
        if (!board) {
            throw new common_1.NotFoundException('해당 게시글을 찾을 수 없습니당ㅠㅠ');
        }
        if (updateBoardDto.title) {
            board.title = updateBoardDto.title;
        }
        if (updateBoardDto.detail) {
            board.detail = updateBoardDto.detail;
        }
        await this.boardRepository.save(board);
    }
};
exports.BoardService = BoardService;
exports.BoardService = BoardService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(board_entity_1.Boards)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BoardService);
//# sourceMappingURL=board.service.js.map
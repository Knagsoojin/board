"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBoardDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const createBoard_dto_1 = require("./createBoard.dto");
class UpdateBoardDto extends (0, mapped_types_1.PartialType)(createBoard_dto_1.CreateBoardDto) {
}
exports.UpdateBoardDto = UpdateBoardDto;
//# sourceMappingURL=updateBoard.dto.js.map
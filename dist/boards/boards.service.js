"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardsService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const boards_model_1 = require("./boards.model");
let BoardsService = class BoardsService {
    constructor() {
        this.boards = [];
    }
    getAllBoards() {
        return this.boards;
    }
    createBoard(CreateBoardDto) {
        const board = {
            id: uuid_1.v1,
            title: CreateBoardDto.title,
            description: CreateBoardDto.description,
            status: boards_model_1.BoardsStatus.PUBLIC,
        };
        this.boards.push(board);
        return board;
    }
    getBoard(id) {
        return this.boards.find((Board) => Board.id === id);
    }
    deleteBoard(id) {
        this.boards = this.boards.filter((Board) => Board.id !== id);
    }
    updateBoard(id, CreateBoardDto) {
        const board = this.getBoard(id);
        board.title = CreateBoardDto.title;
        board.description = CreateBoardDto.description;
        return board;
    }
    updateBoardStatus(id, status) {
        const board = this.getBoard(id);
        board.status = status;
        return board;
    }
};
BoardsService = __decorate([
    (0, common_1.Injectable)()
], BoardsService);
exports.BoardsService = BoardsService;
//# sourceMappingURL=boards.service.js.map
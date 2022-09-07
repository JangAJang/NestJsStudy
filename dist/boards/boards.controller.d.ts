import { Board, BoardsStatus } from './boards.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/CreateBoardDto';
export declare class BoardsController {
    private boardService;
    constructor(boardService: BoardsService);
    getAllBoards(): Board[];
    createBoard(CreateBoardDto: CreateBoardDto): Board;
    getBoard(id: string): Board;
    deleteBoard(id: string): void;
    updateBoard(id: string, CreateBoardDto: CreateBoardDto): Board;
    updateBoardStatus(id: string, status: BoardsStatus): Board;
}

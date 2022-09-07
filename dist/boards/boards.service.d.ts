import { Board, BoardsStatus } from './boards.model';
import { CreateBoardDto } from './dto/CreateBoardDto';
export declare class BoardsService {
    private boards;
    getAllBoards(): Board[];
    createBoard(CreateBoardDto: CreateBoardDto): Board;
    getBoard(id: string): Board;
    deleteBoard(id: string): void;
    updateBoard(id: string, CreateBoardDto: CreateBoardDto): Board;
    updateBoardStatus(id: string, status: BoardsStatus): Board;
}

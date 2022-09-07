import { Injectable } from '@nestjs/common';
import { tmpdir } from 'os';
import {v1 as uuid} from 'uuid';
import { Board, BoardsStatus } from './boards.model';
import { BoardResponseDto } from './dto/BoardResponseDto';
import { CreateBoardDto } from './dto/CreateBoardDto';


@Injectable()
export class BoardsService {

    private boards:Board[] = [];

    getAllBoards():Board[]{
        return this.boards;
    }

    createBoard(CreateBoardDto:CreateBoardDto) : Board{
        const board:Board = {
            id: uuid, 
            title: CreateBoardDto.title, 
            description : CreateBoardDto.description, 
            status : BoardsStatus.PUBLIC,
        };
        this.boards.push(board);
        return board;
    }

    getBoard(id:string) : Board{
        return this.boards.find((Board)=> Board.id===id);
    }
    
    deleteBoard(id:string){
        this.boards = this.boards.filter((Board)=> Board.id !== id);
    }

    updateBoard(id:string, CreateBoardDto:CreateBoardDto) : Board{
        const board = this.getBoard(id);
        board.title = CreateBoardDto.title;
        board.description = CreateBoardDto.description;
        return board;
    }

    updateBoardStatus(id:string, status:BoardsStatus) : Board{
        const board = this.getBoard(id);
        board.status = status;
        return board;
    }
}

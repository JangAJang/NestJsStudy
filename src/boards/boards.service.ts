import { Injectable } from '@nestjs/common';
import { tmpdir } from 'os';
import {v1 as uuid} from 'uuid';
import { Board, BoardsStatus } from './boards.model';
import { CreateBoardDto } from './dto/CreateBoardDto';


@Injectable()
export class BoardsService {

    private boards:Board[] = [];

    getAllBoards():Board[]{
        return this.boards;
    }

    createBoard(CreateBoardDto:CreateBoardDto){
        const board:Board = {
            id: uuid, 
            title: CreateBoardDto.title, 
            description : CreateBoardDto.description, 
            status : BoardsStatus.PUBLIC,
        };
        this.boards.push(board);
        return board;
    }
}

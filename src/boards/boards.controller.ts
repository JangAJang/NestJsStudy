import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Board } from './boards.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/CreateBoardDto';

@Controller('boards')
export class BoardsController {
    constructor(private boardService : BoardsService){}

    @Get('')
    getAllBoards(): Board[]{
        return this.boardService.getAllBoards();
    }

    @Post('/write')
    createBoard(@Body() CreateBoardDto:CreateBoardDto) {
        return this.boardService.createBoard(CreateBoardDto);
    }
}

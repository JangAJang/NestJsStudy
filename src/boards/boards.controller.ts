import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Board } from './boards.model';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
    constructor(private boardService : BoardsService){}

    @Get('')
    getAllBoards(): Board[]{
        return this.boardService.getAllBoards();
    }

    @Post('/write')
    createBoard(@Body('title') title:string, @Body('description') description:string){
        return this.boardService.createBoard(title, description);
    }
}

import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Board, BoardsStatus } from './boards.model';
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

    @Get('/{id}')
    getBoard(@Param('id') id:string){
        return this.boardService.getBoard(id);
    }

    @Delete('/{id}')
    deleteBoard(@Param('id') id:string){
        return this.boardService.deleteBoard(id);
    }

    @Patch('/{id}')
    updateBoard(@Param('id') id:string, @Body() CreateBoardDto:CreateBoardDto){
        return this.boardService.updateBoard(id, CreateBoardDto);
    }

    @Patch('/id:{id}/status')
    updateBoardStatus(@Param('id') id:string, @Body() status:BoardsStatus){
        return this.boardService.updateBoardStatus(id, status);
    }
}

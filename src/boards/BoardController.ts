import { Controller, Get } from "@nestjs/common";

@Controller('/boards')
export class BoardsController{
    @Get('')
    getBoards():string {
        return 'This action returns all boards';
    }

    
}
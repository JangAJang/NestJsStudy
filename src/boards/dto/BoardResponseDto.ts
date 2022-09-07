import { Board } from "../boards.model";

export class BoardResponseDto{
    title:string;
    description:string;

    toDto(board:Board){
        this.title = board.title;
        this.description = this.description;
    }
}
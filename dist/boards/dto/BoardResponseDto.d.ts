import { Board } from "../boards.model";
export declare class BoardResponseDto {
    title: string;
    description: string;
    toDto(board: Board): void;
}

export class Board{
    id:string;
    title:string;
    description:string;
    status: BoardsStatus;
}

export enum BoardsStatus{
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE',
}
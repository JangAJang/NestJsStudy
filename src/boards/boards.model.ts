export class Board{
    id:string;
    title:string;
    description:string;
    status: ;
}

export enum BoardsStatus{
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE',
}
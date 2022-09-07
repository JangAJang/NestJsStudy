export declare class Board {
    id: string;
    title: string;
    description: string;
    status: BoardsStatus;
}
export declare enum BoardsStatus {
    PUBLIC = "PUBLIC",
    PRIVATE = "PRIVATE"
}

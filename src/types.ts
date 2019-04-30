export enum Color {
    Yellow = "Y",
    Blue = "B",
    White = "W",
    Green = "G",
    Red = "R",
    Orange = "O"
}

export class Face {
    bottom : Color
    bottomRight : Color
    right : Color
    topRight : Color
    top : Color
    topLeft : Color
    left : Color
    bottomLeft : Color
    center : Color
}

export class Cube {
    front : Face
    right : Face
    back : Face
    left : Face
    top : Face
    bottom : Face
}
export enum Color {
    Yellow,
    Blue,
    White,
    Green,
    Red,
    Orange
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
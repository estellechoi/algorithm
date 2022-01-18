class Graph<T> {


    constructor() {

    }
}

type Nullable<T> = T | null;

const graph: Nullable<number>[][] = [
    [0, 5, 7],
    [5, 0, null],
    [7, null, 0],
]
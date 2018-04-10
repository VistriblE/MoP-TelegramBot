declare module 'rethinkdb' {
    interface Sequence {
        (name: string): Selection;
        getField(name: string): Selection;
    }
}
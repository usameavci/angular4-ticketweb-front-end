export class Seat{
    
    private _id : number;
    public get id() : number {
        return this._id;
    }
    public set id(v : number) {
        this._id;
    }
    
    private _rowId : number;
    public get rowId() : number {
        return this._rowId;
    }
    public set rowId(v : number) {
        this._rowId;
    }
    
    private _colId : number;
    public get colId() : number {
        return this._colId;
    }
    public set colId(v : number) {
        this._colId;
    }
    
    private _style : string;
    public get style() : string {
        return this._style;
    }
    public set style(v : string) {
        this._style;
    }

    constructor(id:number, rowId:number, colId:number, style?:string){
        this._id = id;
        this._rowId = rowId;
        this._colId = colId;
        if (style != null){
            this._style = style;
        }
    }
    
}
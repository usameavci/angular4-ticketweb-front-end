export class SeatInfo {

  private _id: number;
  public get id(): number {
    return this._id;
  }
  public set id(v: number) {
    this._id;
  }

  private _label: string;
  public get label(): string {
    return this._label;
  }
  public set label(v: string) {
    this._label;
  }

  constructor(id: number, label: string) {
    this.id = id;
    this.label = label;
  }

}

import {
  Component,
  OnInit
} from '@angular/core';
import {
  SeatService
} from "app/services/seat";
import {
  Seat
} from "app/models/seat";
import {
  SeatInfo
} from "app/models/seat-info";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Üsküdar Angular4 Typescript .Net Core!';

  private _RowCount: number = 3;
  private _ColumnCount: number = 5;
  private _seatInfoSelected: SeatInfo;

  public get RowCount(): number {
    return this._RowCount;
  }
  public set RowCount(v: number) {
    this._RowCount = v;
  }
  public get ColumnCount(): number {
    return this._ColumnCount;
  }
  public set ColumnCount(v: number) {
    this._ColumnCount = v;
  }
  public get seatInfoSelected(): SeatInfo {
    return this._seatInfoSelected;
  }
  public set seatInfoSelected(v: SeatInfo) {
    this._seatInfoSelected = v;
  }

  constructor(private seatService: SeatService) {
    this.seatService = seatService;
  }

  seatInfoList = [];
  public ngOnInit() {
    this.seatService
      .getSeatInfoList()
      .subscribe(result => this.seatInfoList = result,
        err => console.log(err),
        () => {
          this.seatInfoSelected = this.seatInfoList.length > 0 ? this.seatInfoList[0].id : null;
        });
  }

  SeatList = [];
  public DrawSeats() {
    let seatId = 0;

    for (var row = 0; row < this.RowCount; row++) {
      let rowSeatList = [];
      for (var col = 0; col < this.ColumnCount; col++) {
        seatId++;
        rowSeatList.push(new Seat(seatId, row, col, "empty"));
      }
      this.SeatList.push(rowSeatList);
    }
  }
}

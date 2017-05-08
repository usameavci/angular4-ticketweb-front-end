import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  Seat
} from "app/models/seat";

@Component({
  moduleId: module.id,
  selector: 'blockseat',
  inputs: ['data'],
  templateUrl: 'blockseat.component.html',
  styleUrls: ['./blockseat.component.css']
})

export class BlockSeatComponent implements OnInit {
  dataSeatList: any;

  @Input() data;
  constructor() {}

  ngOnInit() {
    this.dataSeatList = this.data;
  }
}

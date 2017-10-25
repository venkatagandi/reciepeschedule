import { Component, OnInit,Input } from '@angular/core';
import { ResourceActivityDaily } from '../model/resourceactvitydaily';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {
  @Input()user:ResourceActivityDaily;
  constructor() { }

  ngOnInit() {
  }

}

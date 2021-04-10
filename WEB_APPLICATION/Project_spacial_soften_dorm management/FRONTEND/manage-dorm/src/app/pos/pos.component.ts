import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service'; 


@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss']
})
export class PosComponent implements OnInit {
  pos_data: any = []; 
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getPos().subscribe((res)=>{
      this.pos_data = res['data'];
      console.log(this.pos_data);
    });
  }

}

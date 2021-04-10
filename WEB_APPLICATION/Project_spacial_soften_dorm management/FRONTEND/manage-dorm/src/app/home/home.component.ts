import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service'; 
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any ={};
  announce_data: any = [];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.data= jwt_decode(localStorage.getItem('ACK').toString());
    this.api.getAnnounce().subscribe((res)=>{
      this.announce_data= res['data'];
      console.log(this.announce_data);
    });
  }

}

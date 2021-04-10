import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isShow : boolean = false;
  data: any ={};
  constructor(private auth: AuthService, private router: Router ) {}

  ngOnInit(): void {
    if(localStorage.getItem('RFK')){
      this.isShow=true;
      this.data= jwt_decode(localStorage.getItem('ACK').toString());
    }else{
      this.isShow=false;
    }
  }
  logout(){
    this.auth
    .deleteLogout(localStorage.getItem('RFK').toString())
    .subscribe((res)=>{
      localStorage.removeItem('ACK');
      localStorage.removeItem('RFK');
      this.router.navigate(['']);
    });
  }
}

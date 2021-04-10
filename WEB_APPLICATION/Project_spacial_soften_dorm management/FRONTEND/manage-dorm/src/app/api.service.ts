import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders } from '@angular/common/http';
const url = 'http://45.76.188.138:3000';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}
    getPos(){
      const config = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('ACK').toString()}`,
        }),
    };
    return this.http.get<any>(url + '/pos', config);
   }
   getAnnounce(){
    const config = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('ACK').toString()}`,
      }),
  };
  return this.http.get<any>(url + '/announce', config);
 }
}

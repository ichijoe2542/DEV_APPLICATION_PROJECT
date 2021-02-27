import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  urIAPI: string = 'http://localhost/api';

  constructor(private http: HttpClient) { }
  getAllDorm(){
    return this.http.get(this.urIAPI + '/dorm/index.php')
  }
  getDorm(dorm_id: string){
    return this.http.get(this.urIAPI + '/dorm/index.php?dorm_id='+dorm_id);
  }
  getImageWithId(dorm_id: string){
    return this.http.get(this.urIAPI + '/assets/image/pathIM.php?dorm_id='+ dorm_id);
  }
}

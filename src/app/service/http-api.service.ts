import { Injectable } from '@angular/core';
import { GlobalConstants } from '../globals';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  constructor(private http:HttpClient) { }
  public getAllLaunch():Observable<any> {
    let url = GlobalConstants.apiURL ;
    return this.http.get(url);
  }
  /**
   * getLaunchewithFilter
   */
  public getLaunchewithFilter(year:Number, launch_success:boolean, land_success:boolean):Observable<any> {
    let url:string= GlobalConstants.apiURL;
    if(year){
      url=url.concat( '&launch_year='+year);
    }
   
    if(launch_success !== undefined){
      url=url.concat( '&launch_success='+launch_success);
    }
    if(land_success!== undefined){
      url=url.concat( '&land_success='+land_success);
    }
    return this.http.get(url);
  }
}

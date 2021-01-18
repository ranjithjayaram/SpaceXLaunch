import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }
  public launches= new BehaviorSubject([]);

  /**
   * getfilteredLaunches
   */
  public setfilteredLaunches(launched:any) {
     this.launches= launched;
  }
}

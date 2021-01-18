import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service';
@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {

  constructor(private _appService: AppService) { }
  public launchedResults: any;
  ngOnInit(): void {
    this._appService.launches.subscribe(data => {
     let  new_data:any= data.map((d: any) =>{
        if(d['rocket']['first_stage']['cores']){
          if(d['rocket']['first_stage']['cores'][0]['land_success'])
          d['land_success']= d['rocket']['first_stage']['cores'][0]['land_success'];
          else
          d['land_success']= false;
        }else{
          d['land_success']= false;
        }
        return d;
      })
      this.launchedResults = new_data;
    })
  }

}

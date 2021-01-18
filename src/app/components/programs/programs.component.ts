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
      console.log(data);
      this.launchedResults = data;
    })
  }

}

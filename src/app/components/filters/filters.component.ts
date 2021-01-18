import { Component, OnInit } from '@angular/core';
import { HttpApiService } from '../../service/http-api.service';
import { AppService } from '../../service/app.service';
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor( private _http:HttpApiService, private _appService: AppService) { }
  public yearFiltertoggle:boolean= false;
  public launchFiltertoggle:boolean= false;
  public landingFiltertoggle:boolean= false;
  public selectedYearFilter:any;
  public selectedLaunchFilter:any;
  public selectedLandFilter:any;
  ngOnInit(): void {
    this._http.getAllLaunch().subscribe(data=>{
      this._appService.launches.next(data);
      console.log(data);
    })

   
  }
  /**
   * toggleYear
   */
  public toggleYear() {
    this.yearFiltertoggle = !this.yearFiltertoggle
  }
  /**
   * toggleLaunch
   */
  public toggleLaunch() {
   this.launchFiltertoggle= !this.launchFiltertoggle; 
  }
  /**
   * toggleLanding
   */
  public toggleLanding() {
    this.landingFiltertoggle = !this.landingFiltertoggle;
  }

  /**
   * name
   */
  public selectedYear(year:any) {
    this.toggleYear();
    this.selectedYearFilter= year;
    this.getLaunchwithFilter();
  }

  /**
   * selectedLaunch
   */
  public selectedLaunch(val:boolean) {
    this.toggleLaunch();
    this.selectedLaunchFilter= val;
    this.getLaunchwithFilter();
  }

  /**
   * name
   */
  public selectedLand(val:boolean) {
    this.toggleLanding();
    this.selectedLandFilter= val;
    this.getLaunchwithFilter();
  }

  /**
   * Get Launched details with Filter
   */
  public  getLaunchwithFilter(){
    this._http.getLaunchewithFilter(this.selectedYearFilter, this.selectedLaunchFilter,this.selectedLandFilter).subscribe(data=>{
      this._appService.launches.next(data);
    })
  }

}

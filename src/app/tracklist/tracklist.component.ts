import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl,FormControl} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Commonservices} from "../app.commonservices";


@Component({
  selector: 'app-tracklist',
  templateUrl: './tracklist.component.html',
  styleUrls: ['./tracklist.component.css'],
  providers: [Commonservices],
})
export class TracklistComponent implements OnInit {
  public tracklist:any=[];
  public serverurl;
  public message:any='';
  /*modalRef:BsModalRef;*/
  /*private selectedadminid: any;*/
  //public tracklist;

  constructor(private router: Router,  private _commonservices: Commonservices, private _http: HttpClient) {
    this.serverurl = _commonservices.url;

  }

  ngOnInit() {
    this.gettracklist();
  }
  gettracklist()
  {
    let link = this.serverurl + 'trackdetail?'+new Date().getTime();
    this._http.get(link)
        .subscribe(data => {
          let result;
          result = data;
          this.tracklist = [];
          this.tracklist = result.item;
          console.log(this.tracklist);

        }, error => {
          console.log('Oooops!');
        });

  }
    unixtodatetimeConverter(flag,UNIX_timestamp){
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = (months[a.getMonth()]);
        if(month.toString().length==1) month='0'+month;
        var date = (a.getDate());
        if(date<10) var dates='0'+date.toString();
        else var dates=date.toString();
        var hours = (a.getHours());
        if(hours<10) var hour='0'+hours;
        else var hour=hours.toString();
        var min = (a.getMinutes());
        if(min.toString().length==1) var mins='0'+min;
        else var mins=min.toString();
        var sec = (a.getSeconds());
        if(sec.toString().length==1) var secs='0'+sec;
        else var secs=sec.toString();
        var ampm = ((hours) >= 12) ? "PM" : "AM";
        var time = month + '-' + dates + '-'+year ;
         time +=  hour + ':' + mins + ':' + secs+ " "+ampm ;
        return time;
    }

}

/**
 * Created by kta pc on 7/25/2017.
 */
import {Injectable} from '@angular/core';
//import {Http, Response} from '@angular/http';
import {  HttpClient } from '@angular/common/http';
@Injectable()
export class Commonservices {
    items: Array<any>;
    url: any;
    uploadurl: any;
    fileurl: any;
    public filedeleteurl: string;
    public filepathurl:any;
    public base64encode:any;


   // constructor(private http: Http) {
    constructor(private http: HttpClient) {
      //  this.url = 'http://132.148.90.242/server.php?q=';
       this.url = 'http://132.148.90.242:3031/';
        this.uploadurl = 'http://badmin.givbux.online/php/index.php';
        // this.uploadurl = 'http://132.148.90.242:3031/';
        this.filedeleteurl = 'http://emponboarding.westcoastvg.online/php/scrappage.php';
        this.fileurl = 'https://badmin.givbux.online/php/uploads/';
        this.filepathurl = 'https://badmin.givbux.online/php/uploads/';
        this.base64encode = 'https://badmin.givbux.online/php/index.php?encode=encodefile';
        // this.base64encode = 'http://132.148.90.242/uploads/';
        //this.url = 'http://emponboarding.westcoastvg.online/server2.php?q=';
        //this.url = 'http://132.148.90.242:3031/';
        // this.url = 'https://badmin.givbux.online/php/index.php?q=';
        /*  if (window.location.hostname == 'localhost') {
           this.url = 'http://localhost:3000/';
        } else {
          //  this.url = 'http://influxiq.com:3014/';
            this.url = 'http://geofencedsp.com:3000/';
        }*/
    }
}

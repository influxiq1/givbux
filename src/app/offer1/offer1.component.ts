import { Component, OnInit } from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-offer1',
  templateUrl: './offer1.component.html',
  styleUrls: ['./offer1.component.css']
})
export class Offer1Component implements OnInit {
  public formdata:any;
  public tabledatalis:any[];
  public datasource:any;
  public  sourcecondition:any={};
  public statustype:any='checkbox';

  constructor(public cookie:CookieService) {
    let usertype=this.cookie.get('usertype');
    if(usertype=='brand'){
      this.sourcecondition={branduserid_object:this.cookie.get('userid')};
      this.statustype='hidden';
    }
    this.tabledatalis=[
      {value:'id',name:'Id',role:0,func:'',class:'id',type:'#'},
      {value:'offername',name:'Offer Name',role:0,func:'',class:'offername',type:'text'},
      {value:'description',name:'Description',role:0,func:'',class:'description',type:'text'},
      {value:'image',name:'Image',role:0,func:'',class:'image',type:'image',foldername:'offer'},
      {value:'campaignname',name:'Campaign',role:0,func:'',class:'campaign',type:'text'},
      {value:'status',name:'Status',role:0,func:'',class:'status',type:'checkbox',editrole:['admin','Customerservice']},
    ];
    this.formdata=[
      {inputtype:'text',name:'offername',label:'Offer Name',placeholder:'Enter Offer Name',validationrule:{required:true},validationerrormsg:'is required'},
      {inputtype:'textarea',name:'description',label:'Description',placeholder:'Enter Description',validationrule:{required:true},validationerrormsg:'is required'},
      {inputtype:'hidden',name:'type',label:'type',placeholder:'typeplzz',value:'offers'},
      {inputtype:'image',name:'image',label:'Image',placeholder:'Select Image',buttonname:'Upload Campaign Image',validationrule:{required:true},validationerrormsg:'needs to save first , please click on save button first !',imagefolder:'offer',aspectRatio:962/368,resizeToWidth:481},

      {inputtype:'select',name:'campaign',label:'Campaign',placeholder:'Select Campaign',validationrule:{required:true},validationerrormsg:'is required',sourceview:'campaign_view',defaultchoice:'Select a campaign',selectvalue:'campaignname',defaultval:'userid'},

      {inputtype:this.statustype,name:'status',label:'Status',value:false},
    ];
    this.datasource={table:'offers',objarr:['campaign']};
  }

  ngOnInit() {
    console.log('sourcecondition-------');
    console.log(this.sourcecondition);
  }

}

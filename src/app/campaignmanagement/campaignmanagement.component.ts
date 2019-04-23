import { Component, OnInit } from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-campaignmanagement',
  templateUrl: './campaignmanagement.component.html',
  styleUrls: ['./campaignmanagement.component.css']
})
export class CampaignmanagementComponent implements OnInit {
  public formdata:any;
  public tabledatalis:any[];
  public datasource:any;
  public  sourcecondition:any={};
  public statustype:any={};

  constructor(private cookeiservice: CookieService) {
    let usertype=this.cookeiservice.get('usertype');
    if(usertype=='brand'){
      this.sourcecondition={brand_object:this.cookeiservice.get('userid')};
      this.statustype='hidden';
    }
    this.tabledatalis=[ //table
      {value:'id',name:'ID',role:0,func:'',class:'id',type:'#'},
      {value:'campaignname',name:'Campaign Name',role:0,func:'',class:'campaignname',type:'text'},
      {value:'description',name:'Description',role:0,func:'',class:'description',type:'text'},
      {value:'notes',name:'Notes',role:0,func:'',class:'notes',type:'text'},
      {value:'brandname',name:'Brand',role:0,func:'',class:'brand',type:'text'},
      {value:'daterange',name:'Date Range',role:0,func:'',class:'daterange',type:'daterange'},
      {value:'image',name:'Image',role:0,func:'',class:'image',type:'image',foldername:''},
      {value:'status',name:'Status',role:0,func:'',class:'status',type:'checkbox',editrole:['admin','Customerservice']},
    ];
    this.formdata=[  //formvalue
      {inputtype:'text',name:'campaignname',label:'Campaign Name',placeholder:'Enter Campaign Name',validationrule:{required:true},validationerrormsg:'is required'},
      {inputtype:'textarea',name:'description',label:'Description',placeholder:'Enter Description',validationrule:{required:true},
      validationerrormsg:'is required'},
      {inputtype:'textarea',name:'notes',label:"Notes",placeholder:"Enter Your Notes",validationrule:{required:true},validationerrormsg:'is required'},
      {inputtype:'hidden',name:'type',label:'type',placeholder:'typeplzz',value:'campaign'},

      {inputtype:'select',name:'brand',label:'Brand',placeholder:'Select Brand',validationrule:{required:true},validationerrormsg:'is required',sourceview:'brandview',defaultchoice:'Select a brand',selectvalue:'firstname',role:['admin','Customerservice'],defaultval:'userid'},
      /*{inputtype:'text',name:'daterange',label:'Date Range',placeholder:'Enter Date Range',validationrule:{required:true},validationerrormsg:'is required'},*/
      {inputtype:'daterange',name:'daterange',label:"Date Range",placeholder:"Enter Date Range",validationrule:{required:true},validationerrormsg:'is required'},
      {inputtype:'image',name:'image',label:'Image',placeholder:'Select Image',buttonname:'Upload Campaign Image',validationrule:{required:true},validationerrormsg:'needs to save first , please click on save button first !',imagefolder:'',aspectRatio:962/368,resizeToWidth:481},
      {inputtype:this.statustype,name:'status',label:'Status',value:false},
    ];
    this.datasource={table:'campaign',objarr:['brand']};
  }

  ngOnInit() {
  }

}

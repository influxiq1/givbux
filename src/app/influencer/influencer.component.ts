import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-influencer',
  templateUrl: './influencer.component.html',
  styleUrls: ['./influencer.component.css']
})
export class InfluencerComponent implements OnInit {
  public formdata:any;
  public tabledatalis:any[];
  public datasource:any;
  public  sourcecondition:any={type:'Influencer'};

  constructor()
  {
    this.tabledatalis=[
      {value:'id',name:'ID',role:0,func:'',class:'id',type:'#'},
      {value:'firstname',name:'First Name',role:0,func:'',class:'firstname',type:'text'},
      {value:'lastname',name:'Last Name',role:0,func:'',class:'lastname',type:'text'},
      {value:'email',name:'Email Id',role:0,func:'',class:'email',type:'text'},
      {value:'phone',name:'Phone Number',role:0,func:'',class:'phone',type:'text'},
      {value:'about',name:'About',role:0,func:'',class:'about',type:'text'},
      {value:'facebook',name:'Facebook',role:0,func:'',class:'facebook',type:'text'},
      {value:'twiter',name:'Twiter',role:0,func:'',class:'twiter',type:'text'},
      {value:'instagram',name:'Instagram',role:0,func:'',class:'instagram',type:'text'},
      {value:'youtube',name:'YouTube',role:0,func:'',class:'youtube',type:'text'},
      {value:'linkedin',name:'Linkedin',role:0,func:'',class:'linkedin',type:'text'},
      {value:'status',name:'Status',role:0,func:'',class:'status',type:'text'},
    ];
    this.formdata=[
      {inputtype:'text',name:'firstname',label:'First Name',placeholder:'Enter Your First Name',validationrule:{required:true},validationerrormsg:'is required'},
      {inputtype:'text',name:'lastname',label:'Last Name',placeholder:'Enter Your Last Name',validationrule:{required:true},validationerrormsg:'is required'},
      {inputtype:'email',name:'email',label:'Email Id',placeholder:'Enter Your Email Id',validationrule:{required:true,email:true},validationerrormsg:'is required and should be valid'},
      {inputtype:'text',name:'phone',label:'Phone Number',placeholder:'Enter Your Phone Number',validationrule:{required:true},validationerrormsg:'is required'},
      {inputtype:'hidden',name:'type',label:'type',placeholder:'Enter Your Phone Number',value:'Influencer'},
      {inputtype:'textarea',name:'about',label:'About',placeholder:'About',validationrule:{required:true},validationerrormsg:'is required'},
      {inputtype:'url',name:'facebook',label:'Facebook Url',placeholder:'Enter Your Facebook Url',validationrule:{required:true,url:true},validationerrormsg:'is required and should be valid'},
      {inputtype:'url',name:'twiter',label:'Twiter Url',placeholder:'Enter Your Twiter Url',validationrule:{required:true,url:true},validationerrormsg:'is required and should be valid'},
      {inputtype:'url',name:'instagram',label:'Instagram Url',placeholder:'Enter Your Instagram Url',validationrule:{required:true,url:true},validationerrormsg:'is required and should be valid'},
      {inputtype:'url',name:'youtube',label:'YouTube',placeholder:'Enter Your YouTube Details',validationrule:{required:true,url:true},validationerrormsg:'is required and should be valid'},
      {inputtype:'url',name:'linkedin',label:'Linkedin Url',placeholder:'Enter Your Linkedin Url',validationrule:{required:true,url:true},validationerrormsg:'is required and should be valid'},
      {inputtype:'text',name:'status',label:'Status',placeholder:'Enter Your Status',validationrule:{required:true},validationerrormsg:'is required'},
    ];
    this.datasource={table:'users',objarr:[]};
  }

  ngOnInit() {
  }

}

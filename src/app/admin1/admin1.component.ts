import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin1',
  templateUrl: './admin1.component.html',
  styleUrls: ['./admin1.component.css']
})
export class Admin1Component implements OnInit {
  public formdata:any;
  public tabledatalis:any[];
  public datasource:any;
  public  sourcecondition:any={type:'admin'};

  constructor()
  {
    this.tabledatalis=[
      {value:'id',name:'ID',role:0,func:'',class:'id',type:'#'},
      {value:'firstname',name:'First Name',role:0,func:'',class:'firstname',type:'text'},
      {value:'lastname',name:'Last Name',role:0,func:'',class:'lastname',type:'text'},
      {value:'email',name:'Email Id',role:0,func:'',class:'email',type:'text'},
      {value:'address',name:'Address',role:0,func:'',class:'address',type:'text'},
      {value:'telephoneno',name:'Telephone Number',role:0,func:'',class:'telephoneno',type:'text'},
      {value:'mobileno',name:'Mobile Number',role:0,func:'',class:'mobileno',type:'text'},
    ];
this.formdata=[
  {inputtype:'text',name:'firstname',label:'First Name',placeholder:'Enter Your First Name',validationrule:{required:true},validationerrormsg:'is required'},
  {inputtype:'text',name:'lastname',label:'Last Name',placeholder:'Enter Your Last Name',validationrule:{required:true},validationerrormsg:'is required'},
  {inputtype:'email',name:'email',label:'Email Id',placeholder:'Enter Your Email Id',validationrule:{required:true,email:true},validationerrormsg:'is required and should be valid'},
    {inputtype:'password',name:'password',label:'Password',placeholder:'Enter Password',validationrule:{required:true},validationerrormsg:'is required',isaddonly:true},
  {inputtype:'hidden',name:'type',label:'type',placeholder:'Password',value:'admin'},
  {inputtype:'password',name:'confirmpassword',label:'Confirm Password',placeholder:'Type Your Password Again',validationrule:{required:true,confirmpass:true},validationerrormsg:'is required and should be match with password field',isaddonly:true},
  {inputtype:'text',name:'address',label:'Address',placeholder:'Enter Your Address',validationrule:{required:true},validationerrormsg:'is required'},
  {inputtype:'text',name:'telephoneno',label:'Telephone Number',placeholder:'Enter Your Telephone Number',validationrule:{required:true},validationerrormsg:'is required'},
  {inputtype:'text',name:'mobileno',label:'Mobile Number',placeholder:'Enter Your Mobile Number',validationrule:{required:true},validationerrormsg:'is required'},
];
    this.datasource={table:'users',objarr:[]};


  }

  ngOnInit() {
  }

}

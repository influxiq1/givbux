import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-customerservicelist1',
  templateUrl: './customerservicelist1.component.html',
  styleUrls: ['./customerservicelist1.component.css']
})
export class Customerservicelist1Component implements OnInit {
  public tabledatalis:any=[];
  public formdata:any;
  public datasource:any;
  public sourcecondition:any={type:'Customerservice'};

  constructor()
  {
    this.tabledatalis=[
      {value:'id',name:'ID',role:0,func:'',class:'id',type:'#'},
      {value:'firstname',name:'First Name',role:0,func:'',class:'customerfirstname',type:'text'},
      {value:'lastname',name:'Last Name',role:0,func:'',class:'customerlastname',type:'text'},
      {value:'email',name:'Customer Email Id',role:0,func:'',class:'customeremail',type:'text'},
      {value:'notes',name:'Notes',role:0,func:'',class:'notes',type:'text'},
      {value:'customermobileno',name:'Customer Mobile No',role:0,func:'',class:'customermobileno',type:'text'},
    ];
    this.formdata=[
      {inputtype:'text',name:'firstname',label:"First Name",placeholder:"Enter Your First Name",validationrule:{required:true},validationerrormsg:'is required'},
      {inputtype:'text',name:'lastname',label:"Last Name",placeholder:"Enter Your Last Name",validationrule:{required:true},validationerrormsg:'is required'},
      {inputtype:'email',name:'email',label:"Email Id",placeholder:"Enter Your Email Id",validationrule:{required:true,email:true},validationerrormsg:'is required and should be valid'},
      {inputtype:'password',name:'password',label:"Password",placeholder:"Enter Password",validationrule:{required:true},validationerrormsg:'is required',isaddonly:true},
      {inputtype:'hidden',name:'type',label:"type",placeholder:"Enter Password",value:'Customerservice'},
      {inputtype:'password',name:'confirmpassword',label:"Confirm Password",placeholder:"Retype Password Again",validationrule:{required:true,confirmpass:true},validationerrormsg:'is required and should match password field',isaddonly:true},
      {inputtype:'textarea',name:'notes',label:"Notes",placeholder:"Enter Your Notes",validationrule:{required:true},validationerrormsg:'is required'},
      {inputtype:'text',name:'customermobileno',label:"Customerservice Mobile No",placeholder:"Enter Customerservice Mobile No",validationrule:{required:true},validationerrormsg:'is required'},
    ];
    this.datasource={table:'users',objarr:[]};
  }

  ngOnInit() {
  }

}

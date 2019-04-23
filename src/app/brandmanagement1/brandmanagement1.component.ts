import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brandmanagement1',
  templateUrl: './brandmanagement1.component.html',
  styleUrls: ['./brandmanagement1.component.css']
})
export class Brandmanagement1Component implements OnInit {
  public tabledatalis:any=[];
  public formdata:any;
  public datasource:any;
  public sourcecondition:any={type:'brand'};

  constructor()
  {
    this.tabledatalis=[
      {value:'id',name:'ID',role:0,func:'',class:'id',type:'#'},
      {value:'firstname',name:'Brand Name',role:0,func:'',class:'brandname',type:'text'},
      {value:'notes',name:'Notes',role:0,func:'',class:'notes',type:'text'},
      {value:'description',name:'Description',role:0,func:'',class:'description',type:'text'},
      {value:'brandcontactname',name:'Brand contact Name',role:0,func:'',class:'brandcontact',type:'text'},
      {value:'email',name:'Brand contact Email Id',role:0,func:'',class:'brandcontactemail',type:'text'},
      {value:'brandcontactphone',name:'Brand contact Phone',role:0,func:'',class:'brandcontactphone',type:'text'},
      // {value:'brandbanner',name:'Brand Banner',role:0,func:'',class:'brandbanner',type:'image',foldername:'brand'},
      // {value:'brandlogo',name:'Brand Logo',role:0,func:'',class:'brandlogo',type:'image',foldername:'brand'},
      {value:'status',name:'Status',role:0,func:'',class:'status',type:'checkbox',editrole:['admin','Customerservice']},
    ];

    this.formdata=[
      {inputtype:'text',name:'firstname',label:"Brand Name",placeholder:"Enter Your Brand Name",validationrule:{required:true},validationerrormsg:'is required'},
      // {inputtype:'image',name:'brandbanner',label:'Banner',placeholder:'Select Image',buttonname:'Upload Brand Image',validationrule:{required:true},validationerrormsg:'is required',imagefolder:'brand',aspectRatio:3/2,resizeToWidth:400},
      // {inputtype:'image',name:'brandlogo',label:'Logo',placeholder:'Select Image',buttonname:'Upload Brand Logo',validationrule:{required:true},validationerrormsg:'is required',imagefolder:'brand',aspectRatio:1/1,resizeToWidth:250},
      {inputtype:'textarea',name:'notes',label:"Notes",placeholder:"Enter Your Notes",validationrule:{required:true},validationerrormsg:'is required'},
      {inputtype:'textarea',name:'description',label:"Description",placeholder:"Enter Your Description",validationrule:{required:true},validationerrormsg:'is required'},
      {inputtype:'text',name:'brandcontactname',label:"Brand contact Name",placeholder:"Enter Your Brand contact Name",validationrule:{required:true},validationerrormsg:'is required'},
      {inputtype:'hidden',name:'type',label:"type",placeholder:"Enter Password",value:'brand'},
      {inputtype:'email',name:'email',label:"Brand contact Email Id",placeholder:"Enter Your Brand contact Email Id",validationrule:{required:true,email:true},validationerrormsg:'is required and should be valid'},
      {inputtype:'text',name:'brandcontactphone',label:"Brand contact Phone",placeholder:"Enter Your Brand contact Phone",validationrule:{required:true},validationerrormsg:'is required'},
      {inputtype:'checkbox',name:'status',label:"Active?",placeholder:"Enter Your Brand contact Phone"},
      {inputtype:'password',name:'password',label:"Password",placeholder:"Enter Password",validationrule:{required:true},validationerrormsg:'is required',isaddonly:true},
      {inputtype:'password',name:'confirmpassword',label:"Confirm Password",placeholder:"Retype Password Again",validationrule:{required:true,confirmpass:true},validationerrormsg:'is required and should match password field',isaddonly:true},
    ];
  //  this.datasource='users';
    this.datasource={table:'users',objarr:[]};

  }
  ngOnInit()
  {

  }

}





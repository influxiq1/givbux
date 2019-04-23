import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-das',
  templateUrl: './das.component.html',
  styleUrls: ['./das.component.css']
})
export class DasComponent implements OnInit {

  constructor() { }


  ngAfterContentInit() {
    console.log('in ngAfterContentinit')
  }
  ngOnInit() {
    console.log('in ngOnInit');
    let div1document:any=document.querySelector('.div1');
    div1document.style.color = "blue";
  }

  ngAfterViewChecked(){


  }
  ngAfterViewInit(){


  }
}

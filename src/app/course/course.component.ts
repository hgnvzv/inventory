import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  
   hero = {
    name:'',
    power: 0,
    Image:''
   }

   heros :any[] = [];

   ajout(){
    this.heros.push( this.hero );
    this.hero ={
  
        name:'',
        power: 0,
        Image:''
    }
    console.log(this.heros);
  }


  constructor(){}

  ngOnInit(): void {
  }

}

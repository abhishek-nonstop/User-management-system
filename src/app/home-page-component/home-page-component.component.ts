import { Component,OnInit } from '@angular/core';
import { HomePageService } from './homepage.service';

@Component({
  // selector: 'app-home-page-component',
  templateUrl: './home-page-component.component.html',
  styleUrls: ['./home-page-component.component.css']
})

export class HomePageComponentComponent implements OnInit {
  
  constructor(private userServise : HomePageService){};
  searchField:string="";
  products:any[]=[];
 
  handleClick():void{
    console.log("click handled");
  }
  handleChange():void{
    console.log('change detected',this.searchField)
  }
  private async fetchUser(){
    this.products=await this.userServise.getUser();
  }
  
  ngOnInit(): void {
    this.fetchUser()
    console.log(this.products,"jajksdbjbakj")
  }

  


}

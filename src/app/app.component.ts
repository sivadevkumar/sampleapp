import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string="";
  country:string="";
  users:any[]=[{name:"Siva",country:"India"},{name:"Ajay",country:"Australia"}];
  ss(){
   this.users.push({name:this.name,country:this.country});
   this.name="";
   this.country="";
  }
}
import { Component } from '@angular/core';
import { ConnectionService } from 'ng-connection-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  status:string = "";
  isConnected:any = true;
  conStatus:any;

  constructor(private connectionService : ConnectionService){


    window.addEventListener("focus",(event)=>{
      this.conStatus = navigator.onLine;

      if(this.conStatus == true){
        this.status = "Online";
      }
      else{
        this.status = "Offline";
      }
    })
  }
}

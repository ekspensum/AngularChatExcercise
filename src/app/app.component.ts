import { Component } from '@angular/core';
import * as SockJS from 'sockjs-client';
import { SocketClientService } from './socket-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularChatExcercise';

  constructor(private socketClient: SocketClientService){
    this.socketClient.connectToChat('Some username');
  }
}

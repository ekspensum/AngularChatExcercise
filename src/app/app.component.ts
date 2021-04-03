import { Component } from '@angular/core';
import { SocketClientState } from './socket-client-state.enum';
import { SocketClientService } from './socket-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularChatExcercise';
  connectedToChat: boolean;

  constructor(private socketClient: SocketClientService){
  }

  connect(): void {
    this.socketClient.connectToChat('employee1@gmail.com');
    this.connectedToChat = true;

    console.log(this.connectedToChat);

  }
  sendMessage(): void {
    this.socketClient.sendMsg('FROM', 'employee1@gmail.com', 'Some text message');
  }
  sendMessage2(): void {
    this.socketClient.sendMsg('FROM2', 'employee2@gmail.com', 'To Admin text message');
  }
  disconnect(): void {
    this.socketClient.disconnect();
    this.connectedToChat = false;
  }
}

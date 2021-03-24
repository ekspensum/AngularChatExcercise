import { Injectable } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import { BehaviorSubject, Observable } from 'rxjs';
import * as SockJS from 'sockjs-client';
import { SocketClientState } from './socket-client-state.enum';

@Injectable({
  providedIn: 'root'
})
export class SocketClientService {

  client: any;
  baseURL: string = 'http://localhost:8080';
  state: BehaviorSubject<SocketClientState>;
  data: any;
  socket: any;

  constructor() {
  }
  
  connectToChat(username: string): void {
    this.socket = new SockJS(this.baseURL + '/chat');
    this.client = Stomp.over(this.socket);
    this.client.connect({}, () => {

      // this.state.next(SocketClientState.CONNECTED);
      this.client.subscribe('/topic/message' + username, response => {
        this.data = JSON.parse(response.body);

        console.log('PARSE ', this.data);

      });
    });
   }
}

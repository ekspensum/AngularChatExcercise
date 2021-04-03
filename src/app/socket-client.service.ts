import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompatClient, FrameImpl, IMessage, Stomp } from '@stomp/stompjs';
import { Observable } from 'rxjs';
import * as SockJS from 'sockjs-client';
import { Employee } from './employee';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class SocketClientService {

  client: CompatClient;
  baseURL: string = 'http://localhost:8080';
  data: any;
  socket: any;
  employeeList: Array<Employee>;

  constructor(private userService: UserService) {
  }

  fetchAllEmployee(): void {
    this.userService.getLoggedEmployees().subscribe((response: HttpResponse<any>) => {
      this.employeeList = response.body;
    },
    (error: HttpErrorResponse) => {
      console.log(error);
    });
  }
  connectToChat(username: string): void {
    this.socket = new SockJS(this.baseURL + '/chat');
    this.client = Stomp.over(this.socket);
    this.client.connect({}, (frame: FrameImpl) => {
      console.log(frame);

      this.client.subscribe('/topic/messages/' + username, (response: IMessage) => {

        this.data = JSON.parse(response.body);
        console.log('PARSE ', this.data);

      });
    });
  }
  sendMsg(from: string, selectedUser: string, text: string): void {
    this.client.send('/app/chat/' + selectedUser, {}, JSON.stringify({
      fromLogin: from,
      message: text
    }));
  }
  disconnect(): void {
    if (this.client !== null) {
      this.client.disconnect();
    }
  }

}

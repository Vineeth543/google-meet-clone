import { Injectable } from '@angular/core';
import { Socket, io } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  socket: Socket;

  constructor() {
    this.socket = io('http://localhost:8000');
  }

  listen(eventName: string) {
    return new Promise((resolve) => {
      this.socket.on(eventName, (data: any) => {
        resolve(data);
        this.deRegister(eventName);
      });
    });
  }

  emit(eventName: string, data: any) {
    this.socket.emit(eventName, data);
  }

  deRegister(eventName: string) {
    this.socket.off(eventName);
  }
}

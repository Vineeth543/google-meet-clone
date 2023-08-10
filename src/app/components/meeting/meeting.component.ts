import { WebcamInitError } from 'ngx-webcam';
import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css'],
})
export class MeetingComponent implements OnInit {
  isMicOn = true;
  isVideoOn = true;
  cameraAccess = true;
  isScreenSharingOn = false;
  participants = [1];

  constructor(
    private socketService: SocketService,
    private notifierService: NotifierService
  ) {}

  ngOnInit(): void {
    this.socketService.listen('user-joined').then((data: any) => {
      this.notifierService.notify('success', `${data.name} joined the meeting`);
      this.addParticipant();
    });
  }

  toggleMic() {
    this.isMicOn = !this.isMicOn;
  }

  toggleVideo() {
    if (!this.cameraAccess) return;
    this.isVideoOn = !this.isVideoOn;
  }

  toggleScreenSharing() {
    this.isScreenSharingOn = !this.isScreenSharingOn;
  }

  endOrLeaveMeeting() {}

  addParticipant() {
    this.participants.push(1);
  }

  handleInitError(error: WebcamInitError): void {
    if (
      error.mediaStreamError &&
      error.mediaStreamError.name === 'NotAllowedError'
    ) {
      this.cameraAccess = false;
      console.warn('Camera access was not allowed by user!');
    }
  }
}

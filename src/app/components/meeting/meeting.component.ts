import { Component } from '@angular/core';
import { WebcamInitError } from 'ngx-webcam';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css'],
})
export class MeetingComponent {
  isMicOn = true;
  isVideoOn = true;
  cameraAccess = true;
  isScreenSharingOn = false;
  participants = [1];

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

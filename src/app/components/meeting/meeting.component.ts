import { Component } from '@angular/core';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css'],
})
export class MeetingComponent {
  isMicOn = true;
  isVideoOn = true;
  isScreenSharingOn = false;
  participants = [1];

  toggleMic() {
    this.isMicOn = !this.isMicOn;
  }

  toggleVideo() {
    this.isVideoOn = !this.isVideoOn;
  }

  toggleScreenSharing() {
    this.isScreenSharingOn = !this.isScreenSharingOn;
  }

  endOrLeaveMeeting() {}

  addParticipant() {
    this.participants.push(1);
  }
}

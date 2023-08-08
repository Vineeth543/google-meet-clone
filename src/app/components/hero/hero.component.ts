import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  meetingId: string = '';
  isJoinButtonVisible: boolean = false;

  constructor(private route: Router) {}

  createNewMeeting() {
    const meetingId = Math.random()
      .toString(36)
      .substring(2, 11)
      .match(/.{1,3}/g)
      ?.join('-');
    this.route.navigate([meetingId]);
  }

  joinMeeting() {
    if (this.meetingId.length < 9 || this.meetingId.length > 11) {
      alert('Please enter a valid meeting ID');
      return;
    }
    if (this.meetingId[3] !== '-' || this.meetingId[7] !== '-')
      this.meetingId.match(/.{1,3}/g)?.join('-');
    this.route.navigate([this.meetingId]);
  }
}

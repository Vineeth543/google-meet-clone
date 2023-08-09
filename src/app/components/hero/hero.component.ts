import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  meetingId: string = '';
  isJoinButtonVisible: boolean = false;

  constructor(private route: Router, private socketService: SocketService) {}

  ngOnInit(): void {
    this.socketService.listen('meeting:join').then((data: any) => {
      const { name, meetingId } = data;
      console.log(`Meeting joined by ${name} with meeting ID ${meetingId}`);
    });
  }

  createNewMeeting() {
    const meetingId = Math.random()
      .toString(36)
      .substring(2, 11)
      .match(/.{1,3}/g)
      ?.join('-');
    this.socketService.emit('meeting:join', { name: 'Vineeth', meetingId });
    this.route.navigate([meetingId]);
  }

  joinMeeting() {
    const meetingId = this.meetingId.replace(/-/g, '');
    if (meetingId.length !== 9) {
      alert('Please enter a valid meeting ID');
      return;
    }
    this.socketService.emit('meeting:join', { name: 'Vineeth', meetingId });
    this.route.navigate([meetingId.match(/.{1,3}/g)?.join('-')]);
  }
}

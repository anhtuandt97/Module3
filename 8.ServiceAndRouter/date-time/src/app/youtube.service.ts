import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  playlist = [
    {id: '6jZVsr7q-tE', song: 'The Greatest Showman - Never Enough'},
    {id: 'L0MK7qz13bU', song: 'FROZEN | Let It Go'},
    {id: 'miomuSGoPzI', song: ' Chicken Attack // Song Voyage'},
    {id: 'LlRP32hE32I', song: 'Chicken Pig Attack'},
    {id: '0qvOImHWne8', song: 'Rat Attack - The Yodel of Justice'},
    {id: 'yO7MWuJ7zLA', song: 'Takeo Ischi - New Bibi Hendl (Chicken Yodeling)'}
  ];
  constructor() { }
  find(id: string) {
    return this.playlist.find(item => item.id === id);
  }
}

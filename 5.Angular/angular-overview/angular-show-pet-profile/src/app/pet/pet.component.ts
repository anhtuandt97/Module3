import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {
  petName = 'Nguyễn Văn Dúi';
  petImage = 'https://lh3.googleusercontent.com/proxy/gVx00XRdGAbJkprZj3PuadJjjRDHkkW_-s6lqp8UnNcJRcdfaFiNwqoiI8Na-oxPvJjoqx-zRvopqtNJcnCKQ1hXhBrooqnm5qcvFplpGA';
  constructor() { }
  updateName(name) {
    this.petName = name;
  }

  updateImage(image) {
    this.petImage = image;
  }

  ngOnInit(): void {
  }

}

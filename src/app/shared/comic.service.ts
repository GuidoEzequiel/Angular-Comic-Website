import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ComicService {
  // Dummy data for comic images; replace with your actual image URLs
  private images = [
    'assets/Abstract Pepe.png',
    'assets/Capture.png',
    'assets/Dad.png',
  ];

  constructor() { }

  getImages() {
    return this.images;
  }

  getImage(index: number) {
    return this.images[index];
  }

  getImageCount() {
    return this.images.length;
  }
}
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ComicService } from '../shared/comic.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  images: string[];

  constructor(private router: Router, private comicService: ComicService) {
    this.images = this.comicService.getImages();
  }

  goToComic(index: number) {
    this.router.navigate([''], { queryParams: { index } });
  }
}
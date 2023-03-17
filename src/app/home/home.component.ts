import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComicService } from '../shared/comic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  currentIndex = 0;
  currentImage = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private comicService: ComicService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params['index'] !== undefined) {
        this.currentIndex = Number(params['index']);
      }
      this.currentImage = this.comicService.getImage(this.currentIndex);
    });
  }

  hasPrevious() {
    return this.currentIndex > 0;
  }

  goToPrevious() {
    if (this.hasPrevious()) {
      this.currentIndex--;
      this.currentImage = this.comicService.getImage(this.currentIndex);
    }
  }

  goToFirst() {
    this.currentIndex = 0;
    this.currentImage = this.comicService.getImage(this.currentIndex);
  }

  goToIndex() {
    this.router.navigate(['/index']);
  }

  hasNext() {
    return this.currentIndex < this.comicService.getImageCount() - 1;
  }

  goToNext() {
    if (this.hasNext()) {
      this.currentIndex++;
      this.currentImage = this.comicService.getImage(this.currentIndex);
    }
  }

  goToPresent() {
    this.currentIndex = this.comicService.getImageCount() - 1;
    this.currentImage = this.comicService.getImage(this.currentIndex);
  }
}

import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-image-listing-layout',
  templateUrl: './image-listing-layout.component.html',
  styleUrls: ['./image-listing-layout.component.css'],
})
export class ImageListingLayoutComponent implements OnInit {
  pagenumber = 1; // setting the page to 1 by default
  imagesApiResponse: any = [];

  imagesFilterArr: any = [];

  constructor(private imageFromService: ImageService) {
  }

  ngOnInit(): void {
    this.imageFromService.getDataFromApi().subscribe((output) => (this.imagesApiResponse = output));
  }

  compareImageData(image: any) {
    image.albumId = !image.albumId;
    this.imagesFilterArr.push(image); // pushing to the arr
  }

  removeImageData(id: any, image: any) {
    image.albumId = !image.albumId;
    let userIndex = this.imagesFilterArr.findIndex((output: any) => output.id == id);
    this.imagesFilterArr.splice(userIndex, 1); // removing image from specific index
  }
}

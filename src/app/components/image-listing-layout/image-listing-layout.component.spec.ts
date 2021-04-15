import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageListingLayoutComponent } from './image-listing-layout.component';

describe('ImageListingLayoutComponent', () => {
  let component: ImageListingLayoutComponent;
  let fixture: ComponentFixture<ImageListingLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageListingLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageListingLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

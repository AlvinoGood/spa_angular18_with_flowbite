import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesGalleryComponent } from './services-gallery.component';

describe('ServicesGalleryComponent', () => {
  let component: ServicesGalleryComponent;
  let fixture: ComponentFixture<ServicesGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

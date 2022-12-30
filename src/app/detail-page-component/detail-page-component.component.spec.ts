import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPageComponentComponent } from './detail-page-component.component';

describe('DetailPageComponentComponent', () => {
  let component: DetailPageComponentComponent;
  let fixture: ComponentFixture<DetailPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPageComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

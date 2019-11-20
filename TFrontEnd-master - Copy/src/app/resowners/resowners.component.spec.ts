import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResownersComponent } from './resowners.component';

describe('ResownersComponent', () => {
  let component: ResownersComponent;
  let fixture: ComponentFixture<ResownersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResownersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResownersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

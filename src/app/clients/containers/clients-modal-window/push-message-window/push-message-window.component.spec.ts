import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushMessageWindowComponent } from './push-message-window.component';

describe('PushMessageWindowComponent', () => {
  let component: PushMessageWindowComponent;
  let fixture: ComponentFixture<PushMessageWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PushMessageWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PushMessageWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

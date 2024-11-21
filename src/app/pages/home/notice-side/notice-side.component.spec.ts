import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeSideComponent } from './notice-side.component';

describe('NoticeSideComponent', () => {
  let component: NoticeSideComponent;
  let fixture: ComponentFixture<NoticeSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticeSideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticeSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

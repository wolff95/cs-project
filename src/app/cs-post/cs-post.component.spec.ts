import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsPostComponent } from './cs-post.component';

describe('CsPostComponent', () => {
  let component: CsPostComponent;
  let fixture: ComponentFixture<CsPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

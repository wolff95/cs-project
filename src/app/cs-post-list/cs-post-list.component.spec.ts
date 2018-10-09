import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsPostListComponent } from './cs-post-list.component';

describe('CsPostListComponent', () => {
  let component: CsPostListComponent;
  let fixture: ComponentFixture<CsPostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsPostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsPostDetailsComponent } from './cs-post-details.component';

describe('CsPostDetailsComponent', () => {
  let component: CsPostDetailsComponent;
  let fixture: ComponentFixture<CsPostDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsPostDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsPostDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

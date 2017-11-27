import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiereHeaderComponent } from './premiere-header.component';

describe('PremiereHeaderComponent', () => {
  let component: PremiereHeaderComponent;
  let fixture: ComponentFixture<PremiereHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiereHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiereHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

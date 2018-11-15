import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OemPartenersComponent } from './oem-parteners.component';

describe('OemPartenersComponent', () => {
  let component: OemPartenersComponent;
  let fixture: ComponentFixture<OemPartenersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OemPartenersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OemPartenersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

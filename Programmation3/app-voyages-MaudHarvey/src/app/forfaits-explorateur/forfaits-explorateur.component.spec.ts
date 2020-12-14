import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitsExplorateurComponent } from './forfaits-explorateur.component';

describe('ForfaitsExplorateurComponent', () => {
  let component: ForfaitsExplorateurComponent;
  let fixture: ComponentFixture<ForfaitsExplorateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitsExplorateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForfaitsExplorateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

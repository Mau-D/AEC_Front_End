import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitsToutSudComponent } from './forfaits-tout-sud.component';

describe('ForfaitsToutSudComponent', () => {
  let component: ForfaitsToutSudComponent;
  let fixture: ComponentFixture<ForfaitsToutSudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitsToutSudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForfaitsToutSudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantRacineComponent } from './composant-racine.component';

describe('ComposantRacineComponent', () => {
  let component: ComposantRacineComponent;
  let fixture: ComponentFixture<ComposantRacineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposantRacineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposantRacineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadroHorasComponent } from './quadro-horas.component';

describe('QuadroHorasComponent', () => {
  let component: QuadroHorasComponent;
  let fixture: ComponentFixture<QuadroHorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuadroHorasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuadroHorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

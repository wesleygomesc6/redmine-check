import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvidenciasComponent } from './evidencias.component';

describe('EvidenciasComponent', () => {
  let component: EvidenciasComponent;
  let fixture: ComponentFixture<EvidenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvidenciasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvidenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

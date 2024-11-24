import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialGerarRelatorioComponent } from './tutorial-gerar-relatorio.component';

describe('TutorialGerarRelatorioComponent', () => {
  let component: TutorialGerarRelatorioComponent;
  let fixture: ComponentFixture<TutorialGerarRelatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorialGerarRelatorioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TutorialGerarRelatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuizManagerListComponent } from './quiz-manager-list.component';

describe('QuizManagerListComponent', () => {
  let component: QuizManagerListComponent;
  let fixture: ComponentFixture<QuizManagerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizManagerListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizManagerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

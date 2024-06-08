// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'cts-test-list',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './test-list.component.html',
//   styleUrl: './test-list.component.scss',
// })
// export class TestListComponent {}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cts-test-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss']
})
export class TestListComponent implements OnInit {
  tests = [
    { id: 1, subjectId: 1, name: 'Колоквіум №1', availableUntil: '15.06.2024' },
    { id: 2, subjectId: 2, name: 'Test №2', availableUntil: '01.06.2024' }
  ];
  subjectTests: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const subjectIdParam = this.route.snapshot.paramMap.get('id');
    const subjectId = subjectIdParam ? parseInt(subjectIdParam, 10) : null;
    if (subjectId !== null) {
      this.subjectTests = this.tests.filter(test => test.subjectId === subjectId);
    }
  }

  onSelect(test: any) {
    this.router.navigate(['/testing-form', test.id]);
  }
}

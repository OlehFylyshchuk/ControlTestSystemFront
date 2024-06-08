import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cts-subject-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss'], // Зверніть увагу на 'styleUrls'
})
export class SubjectListComponent {
  subjects = [
    { id: 1, name: 'Технології розробки програмного забезпечення' },
    { id: 2, name: 'Управління проектами' }
  ];

  constructor(private router: Router) {}

  onSelect(subject: any) {
    this.router.navigate(['/tests', subject.id]);
  }
}


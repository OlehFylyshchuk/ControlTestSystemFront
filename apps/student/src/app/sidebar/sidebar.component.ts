import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cts-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  subjects = ['Math', 'Physics', 'Chemistry'];
  tests = ['Test 1', 'Test 2', 'Test 3'];

  onSubjectClick(subject: string) {
    // Логіка для відображення предметів
  }

  onTestClick(test: string) {
    // Перехід до testing-form
  }
}

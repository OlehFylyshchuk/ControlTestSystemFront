import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    // StudentSidebarComponent,
    // StudentSubjectsComponent,
    // StudentTestsComponent,
    // TestWindowComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'student-page';
}

import { Component,  OnInit, ViewChild, ViewContainerRef  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HeaderComponent } from './header/header.component';
import { QuizManagerComponent } from '@cts/quiz-manager';
// import { SidebarComponent } from 'student/Routes';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, HeaderComponent, QuizManagerComponent ],//, SidebarComponent
  selector: 'cts-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent{}
// export class AppComponent implements OnInit {
//   @ViewChild('sidebarPlaceHolder', { read: ViewContainerRef })
//   sidebarViewContainer!: ViewContainerRef;
//   // @ViewChild('footerPlaceHolder', { read: ViewContainerRef })
//   // footerViewContainer!: ViewContainerRef;
//   ngOnInit(): void {
//     this.loadRemotes();
//   }
//   async loadRemotes(): Promise<void> {
//     const { SidebarComponent } = await import('student/SidebarComponent');
//     this.sidebarViewContainer.createComponent(SidebarComponent);
//     //const mf = await import('footer/Component');
//     // this.sidebarViewContainer.createComponent(mh.RemoteEntryComponent);
//     //this.footerViewContainer.createComponent(mf.RemoteEntryComponent);
//   }
// }

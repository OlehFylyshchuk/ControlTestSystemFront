import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'cts-auth-entry',
  template: `<cts-nx-welcome></cts-nx-welcome>`,
})
export class RemoteEntryComponent {}

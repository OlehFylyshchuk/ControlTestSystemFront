import { Component , signal } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-singup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css'
})

export class SignupComponent {
 
}
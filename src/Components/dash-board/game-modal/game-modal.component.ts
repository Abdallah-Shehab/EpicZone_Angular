import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-game-modal',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './game-modal.component.html',
  styleUrl: './game-modal.component.css'
})
export class GameModalComponent implements OnInit {

@Input() game :any;
ngOnInit(): void {
 
 }
}

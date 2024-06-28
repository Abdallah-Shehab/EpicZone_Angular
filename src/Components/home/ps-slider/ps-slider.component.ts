import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ps-slider',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ps-slider.component.html',
  styleUrl: './ps-slider.component.css'
})
export class PsSliderComponent {
  @Input() psproduct:any={};
}

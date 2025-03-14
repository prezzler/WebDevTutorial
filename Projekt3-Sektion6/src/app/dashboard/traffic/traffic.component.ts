import { Component, input } from '@angular/core';

@Component({
  selector: 'app-traffic',
  standalone: true,
  imports: [],
  templateUrl: './traffic.component.html',
  styleUrl: './traffic.component.css'
})
export class TrafficComponent {
  dummyTrafficData = input.required<{id: string; value: number;}[]>();
  maxTraffic = input.required<number>();
}

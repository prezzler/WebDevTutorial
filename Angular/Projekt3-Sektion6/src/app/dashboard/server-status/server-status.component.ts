import { Component, DestroyRef, inject, input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  currentStatus:'online' | 'offline' | 'unknown' = 'offline';
  private destroyRef = inject(DestroyRef);

  ngOnInit(){
    console.log('ON INIT');
    const interval = setInterval(() => {
      const rnd = Math.random(); // 0 - 0.999999
      if(rnd < 0.5){
        this.currentStatus = 'online';
      } else if(rnd < 0.9){
        this.currentStatus = 'offline';
      }else {
        this.currentStatus = 'unknown';
      }
    }, 1000);
    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

}
 
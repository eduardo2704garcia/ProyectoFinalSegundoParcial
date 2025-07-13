import { Component, Input, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats-counter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="stat-item">
      <div class="icon-container">
        <i [class]="iconClass"></i>
      </div>
      <p class="stat-number">{{ currentNumber() }}{{ suffix }}</p>
      <p class="stat-label">{{ label }}</p>
    </div>
  `,
  styleUrls: ['./stats-counter.css']
})
export class StatsCounter implements OnInit, OnDestroy {
  @Input() targetNumber: number = 0;
  @Input() label: string = '';
  @Input() iconClass: string = ''; 
  @Input() duration: number = 2000; 
  @Input() suffix: string = ''; 

  currentNumber = signal(0);
  private intervalId: any;
  private increment: number = 0;

  ngOnInit(): void {
    // Si el número objetivo es 0, no animar
    if (this.targetNumber === 0) {
      this.currentNumber.set(0);
      return;
    }

    // Calcular el incremento por paso (aproximadamente 30fps)
    const frames = this.duration / 33; // 33ms por frame para ~30fps
    this.increment = Math.ceil(this.targetNumber / frames);

    this.intervalId = setInterval(() => {
      const nextNumber = this.currentNumber() + this.increment;
      if (nextNumber >= this.targetNumber) {
        this.currentNumber.set(this.targetNumber);
        clearInterval(this.intervalId);
      } else {
        this.currentNumber.set(nextNumber);
      }
    }, 33); // Actualizar aproximadamente cada 33ms para un conteo suave
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
import { AfterViewInit, Component, Input, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Developer, DEVELOPERS } from '../../data/developers/developers';
import Typed from 'typed.js';

@Component({
  selector: 'app-dev-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dev-profile.html',
  styleUrl: './dev-profile.css'
})
export class DevProfile {
  @Input() developer!: Developer;
  @Input() reverse: boolean = false;

  @ViewChild('typedElement', { static: false }) typedElement!: ElementRef;

  ngAfterViewInit(): void {
    if (this.typedElement && this.developer.titles?.length) {
      new Typed(this.typedElement.nativeElement, {
        strings: this.developer.titles,
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
      });
    }
  }
}

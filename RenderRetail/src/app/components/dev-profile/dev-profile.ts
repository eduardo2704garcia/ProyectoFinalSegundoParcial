import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Developer, DEVELOPERS } from '../../data/developers/developers';

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
}

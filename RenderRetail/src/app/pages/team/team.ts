import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DEVELOPERS } from '../../data/developers/developers';
import { DevProfile } from '../../components/dev-profile/dev-profile';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, DEVELOPERS, DevProfile],
  templateUrl: './team.html',
  styleUrl: './team.css'
})
export class Team {
  developers = DEVELOPERS;
}

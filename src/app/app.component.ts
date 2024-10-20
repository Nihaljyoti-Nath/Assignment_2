import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component'; // Adjust paths as necessary
import { HobbiesComponent } from './hobbies/hobbies.component'; // Adjust paths as necessary
import { FamilyComponent } from './family/family.component'; // Adjust paths as necessary
import { EducationComponent } from './education/education.component'; // Adjust paths as necessary
import { AchievementsComponent } from './achievements/achievements.component'; // Adjust paths as necessary

@Component({
  standalone: true, // Make sure this is set
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    AboutComponent,
    HobbiesComponent,
    FamilyComponent,
    EducationComponent,
    AchievementsComponent // Import all child components here
  ]
})
export class AppComponent {
  // Your component logic
}

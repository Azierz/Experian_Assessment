import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
  selector: 'app-root', // how Angular refers to component in template
  // standalone: false, -> the component require 'ngModule' or not
  // imports: [], -> describe component's dependencies (only for standalone)
  templateUrl: './app.component.html',  // component's HTML markup / layout
  styleUrls: ['./app.component.css'] // component's CSS
})
export class AppComponent {
  title = 'userfrontend';
}


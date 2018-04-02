import { Component } from '@angular/core';
import {Post} from "./post";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Posts';
  posts: Post[] = [
    new Post('Premier post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue vitae nunc pellentesque posuere.'),
    new Post('Deuxième post', 'Nulla iaculis massa leo, at commodo velit rhoncus et. Phasellus nec odio ex.'),
    new Post('Troisième post', 'Sed magna neque, tempor at sapien in, sodales porttitor enim.')
  ];
}

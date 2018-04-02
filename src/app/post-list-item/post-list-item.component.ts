import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../post";

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

  getColor() {
    if(this.post.loveIts > 0) {
      return 'list-group-item-success';
    } else if(this.post.loveIts < 0) {
      return 'list-group-item-danger';
    } else {
      return '';
    }
  }

  loveIt(love: boolean) {
    love ? this.post.loveIts++ : this.post.loveIts--;
  }
}

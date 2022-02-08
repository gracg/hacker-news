import { Component, Input, OnInit } from '@angular/core';
import { HackerHelperService } from 'src/app/services/hacker-helper.service';
import { Comment } from 'src/app/models/Comment';
import { TimeHelperService } from 'src/app/services/time-helper.service';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss']
})
export class CommentItemComponent implements OnInit {

  @Input() comment: Comment|null=null;


  constructor(private hacker: HackerHelperService, private timerHp: TimeHelperService) { }

  ngOnInit(): void {
    console.log(`Post time is ${this.comment?.time}`);
  }

  public getUser() :string {
    return this.comment?.by!;
  }

  public getDateDiff() :string {
    return this.timerHp.getDiffInMinutes(new Date(this.comment?.time!*1000),new Date());
  }

  public getCommentText() :string {
    return this.comment?.text!;
  }

  public getId = () :number => this.comment?.id!;

  public calcDifference() :string {
    let timeDifference :number = Math.floor(Date.now()/1000) - this.comment?.time!;
    let hours :number = timeDifference / 3600;

    if(hours<24) {
      
      return `${Math.floor(hours)} hours ago`;
    }
    return `${Math.floor(hours/24)} days ago`;

  }

  



}

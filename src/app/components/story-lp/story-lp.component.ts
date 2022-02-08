import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Story } from 'src/app/models/Story';
import { HackerHelperService } from 'src/app/services/hacker-helper.service';
import { Comment } from 'src/app/models/Comment';

@Component({
  selector: 'app-story-lp',
  templateUrl: './story-lp.component.html',
  styleUrls: ['./story-lp.component.scss']
})
export class StoryLpComponent implements OnInit {
  private story: Story|null=null;
  private storyId :number|null=null;
  private comments: Comment[]|null=null;

  constructor(private hacker: HackerHelperService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.storyId=Number(this.route.snapshot.paramMap.get("id"));
    
    this.hacker.getStoryItem(this.storyId).subscribe((n :Story) => {
      this.story=n;
      let commentsArr :Comment[]=[];

      this.hacker.getComments(n.kids).subscribe((x :Observable<Comment>) => {
        x.subscribe((z: Comment) => {
          commentsArr.push(z);
        });
      });

      this.comments=commentsArr;
      console.log(commentsArr);
    });
  }

  public getStory() :Story|null {
    return this.story;
  }

  public getTitle() :string {
    return this.story?.title!;
  }

  public getComments() :Comment[] {
    return this.comments!;
  }

}

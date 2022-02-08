import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Story } from 'src/app/models/Story';
import { HackerHelperService } from 'src/app/services/hacker-helper.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
 
  private storyIds: number[]|null=null;
  private stories :Story[]|null=null;
  public pageIndex: number=-1;
  //private paginationNum :number=1;


  constructor(private hacker :HackerHelperService,
              private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    let pageId :string|null = this.route.snapshot.queryParamMap.get("p");
    pageId = pageId==null? "0" :pageId;

    let pageIdNum :number = Number(pageId);
    this.pageIndex= pageIdNum;

    console.log(pageId);

    this.hacker.getStoriesForPage(pageIdNum).subscribe((n :number[]) => {
      this.storyIds=n;


      let storiesArr :Story[] =[];
      this.hacker.getStories(n).forEach((x :Observable<Story>) => {
        x.subscribe((z :Story) => storiesArr.push(z));
      });

      let sortFunc = (b :Story,c :Story) :number => {
        if(b.score>c.score){
          return 1;
        }
        return -1;
      }

      storiesArr.sort(sortFunc);
      this.stories=storiesArr;
    });
  }

  public getStories() :Story[]|null {
    return this.stories;
  }

}

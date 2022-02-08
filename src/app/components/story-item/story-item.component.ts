import { Component, Input, OnInit } from '@angular/core';
import { Story } from 'src/app/models/Story';

@Component({
  selector: 'app-story-item',
  templateUrl: './story-item.component.html',
  styleUrls: ['./story-item.component.scss']
})
export class StoryItemComponent implements OnInit {

  @Input() story: Story|null=null;
  @Input() showIndex :boolean=true;
  public localIndex: number=0;
  public static index :number=0;
  public timestamp :number=0;

  constructor() { }

  ngOnInit(): void {
    StoryItemComponent.index++;
    this.localIndex=StoryItemComponent.index;
    this.timestamp=this.story?.time!;
    this.calcDifference();
  }


  public getComments() :number {
    return this.story?.descendants!;
  }

  public calcDifference() :string {
    let timeDifference :number = Math.floor(Date.now()/1000) - this.timestamp;
    let hours :number = timeDifference / 3600;

    if(hours<24) {
      
      return `${Math.floor(hours)} hours ago`;
    }
    return `${Math.floor(hours/24)} days ago`;

  }

  public getTitle() :string {
    return this.story?.title!;
  }

  public getIndex() :number {
    return this.localIndex;
  }

  public getTitleURL() :string {
    return this.story?.url!;
  }

  public getPoints() :number {
    return this.story?.score!;
  }

  public getUser() :string {
    return this.story?.by!;
  }

  public regexURL() :string {
    return new URL(this.story?.url!).hostname.replace("www.","");
  }

  public getStoryId() :string {
    return this.story?.id.toString()!;
  }

}

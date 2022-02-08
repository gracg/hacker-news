import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import { Story } from '../models/Story';
import { Comment } from '../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class HackerHelperService {

  constructor(private http :HttpClient) { }

  private readonly baseURL = "https://hacker-news.firebaseio.com/v0";

  public getPopularStories() :Observable<number[]> {
    return this.http.get<number[]>(`${this.baseURL}/topstories.json`);
  }

  public getStoryItem(storyId :number) :Observable<Story> {
    return this.http.get<Story>(`${this.baseURL}/item/${storyId}.json`)
  }

  public getStories(storyIds :number[]) :Observable<Observable<Story>> {
    return new Observable(subscriber => {
      for(let story of storyIds) {
        subscriber.next(this.getStoryItem(story));
      }
    });
  }

  public getStoriesForPage(num :number) :Observable<number[]> {
    let resultNumIds :number[]=[];
    let x:Observable<number[]>= new Observable();

    return new Observable(subscriber => {
      this.getPopularStories().subscribe((n :number[]) => {
        let startingIndex :number = 30*num;
        let endingIndex :number = startingIndex+29;

        let sortFunc = (b :Story,c :Story) :number => {
          if(b.score>c.score){
            return 1;
          }
          return -1;
        }
  

        for(let i:number=startingIndex;i<=endingIndex;i++){
          console.log(i);
          resultNumIds.push(n[i]);
        }
        subscriber.next(resultNumIds);
      });
    });
  }

  public getComment(commentId: number) :Observable<Comment> {
    return this.http.get<Comment>(`${this.baseURL}/item/${commentId}.json`);
  }

  public getComments(commentIds :number[]) :Observable<Observable<Comment>> {
    return new Observable(subscriber => {
      for(let id of commentIds) {
        subscriber.next(this.getComment(id));
      }
    });
  }

}

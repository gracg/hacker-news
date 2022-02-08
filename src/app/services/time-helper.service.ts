import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeHelperService {

  constructor() { }

  private getDifference(oldTime :Date, newTime: Date) :number {


    let differnce  = (newTime.getTime()-oldTime.getTime());
    console.log(`oldDate is ${oldTime.getTime()}`);
    console.log(`newDate is ${newTime.getTime()}`)
    console.log(differnce);
    return differnce;
  }

  public getDiffInSeconds(oldTime :Date, newTime :Date) :string {
    let diff :number = this.getDifference(oldTime,newTime);
    return `${(diff / 60)} seconds`;
  }

  public getDiffInMinutes(oldTime :Date, newTime :Date) :string {
    let diff :number = this.getDifference(oldTime,newTime);
    return `${(diff / 60) % 60} minutes`;
  }


  

  
}

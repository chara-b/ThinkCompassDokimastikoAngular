import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  status: string = '';
  keimeno: string = '';
  year: any = 2021;
  month: any = 12;

  filter: string = '';





private behaviorsubjectForStatus = new BehaviorSubject<any>(this.status);
STATUS = this.behaviorsubjectForStatus.asObservable();

private behaviorsubjectForKeimeno = new BehaviorSubject<any>(this.keimeno);
KEIMENO = this.behaviorsubjectForKeimeno.asObservable();

private behaviorsubjectForMONTH = new BehaviorSubject<any>(this.month);
MONTH = this.behaviorsubjectForMONTH.asObservable();

private behaviorsubjectForYear = new BehaviorSubject<any>(this.year);
YEAR = this.behaviorsubjectForYear.asObservable();

private behaviorsubjectForFilter = new BehaviorSubject<any>(this.filter);
FILTER = this.behaviorsubjectForFilter.asObservable();





  constructor() { }

changeStatus(status: string) {
 this.behaviorsubjectForStatus.next(status);
}
changeKeimeno(keimeno: string) {
  this.behaviorsubjectForKeimeno.next(keimeno);
 }
 changeMonth(month: any) {
  this.behaviorsubjectForMONTH.next(month);
 }

changeYear(year: any) {
  this.behaviorsubjectForYear.next(year);
}


changeFilter(filter: any) {
  this.behaviorsubjectForFilter.next(filter);
}



}
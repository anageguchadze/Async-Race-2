import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Winner {
  carNumber: number;
  carName: string;
  timeTaken: number;
  place: number;
  carColor: string;
}

@Injectable({
  providedIn: 'root'
})
export class RaceResultService {
  private winnersListSource = new BehaviorSubject<Winner[]>([]);
  winnersList$ = this.winnersListSource.asObservable();

  constructor() { }

  setWinnersList(winnersList: Winner[]): void {
    this.winnersListSource.next(winnersList);
  }
}

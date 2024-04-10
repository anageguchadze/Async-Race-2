import { Component, OnInit } from '@angular/core';
import { RaceResultService, Winner } from '../race-result.service';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.css']
})
export class WinnersComponent implements OnInit {
  winnersList: Winner[] = [];
  paginatedWinners: Winner[] = [];
  currentPage: number = 1;
  pageSize: number = 7; // Number of winners per page
  totalPages: number = 1;

  faCarSide = faCarSide;

  constructor(private raceResultService: RaceResultService) {}

  ngOnInit(): void {
    this.raceResultService.winnersList$.subscribe(winners => {
      this.winnersList = winners;
      this.totalPages = Math.ceil(this.winnersList.length / this.pageSize);
      this.paginateWinners();
    });
  }

  paginateWinners(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, this.winnersList.length);
    this.paginatedWinners = this.winnersList.slice(startIndex, endIndex);
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginateWinners();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginateWinners();
    }
  }
}

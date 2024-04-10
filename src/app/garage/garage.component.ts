import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';
import { RaceResultService } from '../race-result.service';
import { Router } from '@angular/router';

interface Car {
  name: string;
  color: string;
}

interface Winner {
  carNumber: number;
  carName: string;
  timeTaken: number;
  place: number;
  carColor: string;
  
}

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.css']
})
export class GarageComponent implements OnInit {
  faCarSide = faCarSide;
  brands: Car[] = [];
  currentPage: number = 1;
  pageSize: number = 7; // Number of brands per page
  loading: boolean = false; // Loading indicator
  newBrandName: string = ''; // Brand name input
  newBrandColor: string = '#000000'; // Color input
  updatedBrandName: string = ''; // Updated brand name input
  updatedBrandColor: string = '#000000'; // Updated color input
  selectedCarIndex: number | null = null; // Index of the selected car for editing
  moving: boolean = false; // Tracks whether the car is moving or not
  finishTimes: { carName: string, time: number }[] = [];
  startTime: number = 0;
  winnerName: string | null = null;
  winnersList: Winner[] = []; // List to store winners

  constructor(private http: HttpClient, 
    private raceResultService: RaceResultService, 
    private router: Router,
    private renderer: Renderer2, private el: ElementRef) {}

  navigateToWinnersPage(): void {
    this.router.navigate(['/winners']);
  }

  ngOnInit(): void {
    this.generateBrands();
  }


  
  generateBrands(): void {
    const apiUrl = 'https://rentcar.stepprojects.ge/api/Car';

    this.loading = true;

    this.http.get<any[]>(apiUrl).subscribe(response => {
      this.brands = response.map(car => ({
        name: car.brand,
        color: '#' + Math.floor(Math.random() * 16777215).toString(16)
      }));
      this.loading = false;
      // Reset the winnerName when new brands are generated
      this.winnerName = null;
    });
  }

  getCurrentPageBrands(): Car[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, this.brands.length);
    return this.brands.slice(startIndex, endIndex);
  }
  
  

  get totalPages(): number {
    return Math.ceil(this.brands.length / this.pageSize);
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      console.log('Previous page:', this.currentPage);
    }
  }
  
  nextPage(): void {
    const totalPages = Math.ceil(this.brands.length / this.pageSize);
    if (this.currentPage < totalPages) {
      this.currentPage++;
      console.log('Next page:', this.currentPage);
    }
  }
  

  createCar(): void {
    const newCar: Car = {
      name: this.newBrandName,
      color: this.newBrandColor
    };
    this.brands.push(newCar);
    // Optionally, you can clear the input fields after creating the car
    this.newBrandName = '';
    this.newBrandColor = '#000000';
  }

  editCar(index: number): void {
    this.selectedCarIndex = index;
    // Optionally, you can pre-fill the input fields with the selected car's data for editing
    this.updatedBrandName = this.brands[index].name;
    this.updatedBrandColor = this.brands[index].color;
  }

  updateCar(): void {
    if (this.selectedCarIndex !== null) {
      this.brands[this.selectedCarIndex].name = this.updatedBrandName;
      this.brands[this.selectedCarIndex].color = this.updatedBrandColor;
      // Clear the selected car index and input fields after updating
      this.selectedCarIndex = null;
      this.updatedBrandName = '';
      this.updatedBrandColor = '#000000';
    }
  }

  removeCar(index: number): void {
    this.brands.splice(index, 1);
    // Clear the selected car index after removing
    this.selectedCarIndex = null;
  }

  isCarMoving(index: number): boolean {
    const car = document.querySelector('.card:nth-child(' + (index + 1) + ') fa-icon') as HTMLElement;
    return car ? car.classList.contains('car-move') : false;
  }

  moveIntervals: any[] = []; // Array to store intervals for each car

  startMoving(index: number): void {
    const car = document.querySelector('.card:nth-child(' + (index + 1) + ') fa-icon') as HTMLElement;
    if (car && !this.isCarMoving(index)) {
      car.classList.add('car-move');
      const storedPosition = this.currentPositions[index] || 0;
      this.moveCar(index, storedPosition); // Pass the stored position to moveCar
    }
  }

  raceFinished: boolean = false; // Flag to track whether the race has finished

  stopMoving(index: number): void {
    const car = document.querySelector('.card:nth-child(' + (index + 1) + ') fa-icon') as HTMLElement;
  
    if (car && this.isCarMoving(index)) {
      clearInterval(this.moveIntervals[index]); // Clear the interval
      car.classList.remove('car-move'); // Remove the 'car-move' class to stop the animation
  
      const currentPosition = this.getCurrentPosition(car);
  
      // Check if the car reached the finish line (800px) or the adjusted maximum position
      const reachedFinishLine = currentPosition >= 800;
      const reachedMaxPosition = currentPosition >= (window.innerWidth <= 500 ? 280 : 880);
  
      if (reachedFinishLine || reachedMaxPosition) {
        const finishedCarName = this.brands[index].name;
  
        // Check if it's the first time this car finished
        const isFirstFinish = !this.finishTimes.some(item => item.carName === finishedCarName);
  
        if (isFirstFinish) {
          const timeTakenSeconds = (Date.now() - this.startTime) / 1000;
          this.finishTimes.push({ carName: finishedCarName, time: timeTakenSeconds });
  
          // Update the winnerName property with the winner's name
          if (!this.winnerName) {
            this.winnerName = finishedCarName; // Set the first winner
            // Stop the race if all cars have finished
            if (this.finishTimes.length === this.brands.length) {
              this.raceFinished = true;
            }
          }
  
          // Add winner to winners list
          const winner: Winner = {
            carNumber: index + 1, // Car number is index + 1
            carName: finishedCarName,
            timeTaken: timeTakenSeconds,
            place: this.winnersList.length + 1, // Winning place is the current length of winners list + 1
            carColor: this.brands[index].color
          };
          this.winnersList.push(winner);
        }
      }
    }
  }
  

  getWinnerTime(): string {
    const winnerFinishTime = this.finishTimes.find(item => item.carName === this.winnerName);
    if (winnerFinishTime) {
      const seconds = winnerFinishTime.time;
      const formattedTime = this.formatTime(seconds);
      return formattedTime;
    }
    return '0';
  }

  formatTime(seconds: number): string {
    return seconds.toFixed(1) + ' ';
  }

  resetCars(): void {
  // Reset each car's position to the start
  this.brands.forEach((_, index) => {
    const car = document.querySelector('.card:nth-child(' + (index + 1) + ') fa-icon') as HTMLElement;
    if (car) {
      car.style.transform = 'translateX(0)';
      this.currentPositions[index] = 0; // Reset stored position to 0
    }
  });

  // Reset winner information and related flags
  this.winnerName = null;
  this.finishTimes = [];
  this.raceFinished = false;

  // Clear winners list
  this.winnersList = [];
}


  getCurrentPosition(element: HTMLElement): number {
    const transformValue = window.getComputedStyle(element).getPropertyValue('transform');
    if (transformValue && transformValue !== 'none') {
      const matrix = transformValue.split(', ');
      return parseInt(matrix[4], 10);
    }
    return 0;
  }

  currentPositions: number[] = [];

  moveCar(index: number, startPosition: number = 0): void {
    const container = document.querySelector('.card-container') as HTMLElement;
    const car = document.querySelector('.card:nth-child(' + (index + 1) + ') fa-icon') as HTMLElement;
    if (car && container) {
      const containerWidth = container.clientWidth;
      const carWidth = car.clientWidth;
      let distanceToMove: number;
      let maxPosition: number;

      if (containerWidth <= 500) {
        distanceToMove = 280; // Adjusted distance for smaller screens
        maxPosition = 280;
      } else {
        distanceToMove = containerWidth - carWidth;
        maxPosition = 880;
      }

      let speed = Math.floor(Math.random() * 5) + 1; // Generate random speed between 1 and 5
      let currentPosition = startPosition; // Use the stored position as the starting point

      this.moveIntervals[index] = setInterval(() => {
        if (currentPosition < distanceToMove && currentPosition < maxPosition) {
          currentPosition += speed; // Adjust the movement speed based on the randomly generated speed
          car.style.transform = 'translateX(' + currentPosition + 'px)';
        } else {
          this.stopMoving(index); // Stop moving when reached the end or the specified maximum position
        }
      }, 8 / speed); // Adjust the interval duration based on the speed for smoother movement
    }
}


  race(): void {
    // Reset cars and winners list before starting the race
    this.resetCars();
  
    // Start the race timer
    this.startTime = Date.now();
  
    // Iterate through all brands and start moving each car
    this.brands.forEach((_, index) => {
      this.startMoving(index);
    });
    this.raceResultService.setWinnersList(this.winnersList);
  }
}
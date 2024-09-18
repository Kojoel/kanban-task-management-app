import { Component } from '@angular/core';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {

    constructor(public apiService: ApiService) {}

    ngOnInit() {
      this.apiService.getData().subscribe(items => console.log(items));
    }
}

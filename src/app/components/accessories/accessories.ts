import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ⬅️ ¡Necesario para *ngFor!

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.html',
  styleUrls: ['./accessories.css'],

  standalone: true,
  imports: [
    CommonModule
  ]
})
export class AccessoriesComponent {
  items = [
    { title: 'Maletas', img: 'assets/access1.jpg' },
    { title: 'Chaquetas', img: 'assets/access2.jpg' },
    { title: 'Botas', img: 'assets/access3.jpg' },
    { title: 'Cascos', img: 'assets/access4.jpg' }
  ];
}

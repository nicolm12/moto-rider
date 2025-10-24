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
    { title: 'Maletas', img: 'assets/maleta.png' },
    { title: 'Chaquetas', img: 'assets/chaqueta.png' },
    { title: 'Botas', img: 'assets/botas.png' },
    { title: 'Cascos', img: 'assets/cascos.png' }
  ];
}

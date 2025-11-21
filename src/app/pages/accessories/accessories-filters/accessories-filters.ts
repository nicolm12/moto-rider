import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-accessories-filters',
  templateUrl: './accessories-filters.html',
  styleUrls: ['./accessories-filters.css'],
  imports: [CommonModule],
  standalone: true
})
export class AccessoriesFilters{

  @Output() categoryChange = new EventEmitter<string>();

  categories = [
    { id: 'todos', label: 'TODOS' },
    { id: 'cascos', label: 'CASCOS' },
    { id: 'guantes', label: 'GUANTES' },
    { id: 'chaquetas', label: 'CHAQUETAS' },
    { id: 'botas', label: 'BOTAS' }
  ];

  selectCategory(cat: string) {
    this.categoryChange.emit(cat);
  }
}

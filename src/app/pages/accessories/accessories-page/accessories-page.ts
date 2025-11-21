import { Component, OnInit } from '@angular/core';
import accessoriesData from '../accesories.json';
import { CommonModule } from '@angular/common';
// ⬇ importa los componentes hijos
import { AccessoriesFilters } from '../accessories-filters/accessories-filters';
import { AccessoryCard } from '../accessory-card/accessory-card';

@Component({
  selector: 'app-accessories-page',
  standalone: true,
  imports: [
CommonModule,
    AccessoriesFilters,
    AccessoryCard
  ],
  templateUrl: './accessories-page.html',
  styleUrls: ['./accessories-page.css']
})
export class AccessoriesPageComponent implements OnInit {

  accessories: any[] = [];
  filteredAccessories: any[] = [];

  selectedCategory = 'todos';

  ngOnInit(): void {
    this.accessories = accessoriesData;
    this.filteredAccessories = this.accessories;
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;

    if (category === 'todos') {
      this.filteredAccessories = this.accessories;
    } else {
      this.filteredAccessories = this.accessories.filter(item => item.category === category);
    }
  }
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-accessory-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accessory-card.html',
  styleUrls: ['./accessory-card.css']
})
export class AccessoryCard {

  @Input() item: any;
  addedToCart = false;

  constructor(private cart: CartService) {}

  ngOnInit() {
    this.addedToCart = this.cart.isInCart(this.item.id);
  }

  toggleFavorite() {
    this.item.favorite = !this.item.favorite;
  }

  addToCart() {
    this.cart.addItem({
      id: this.item.id,
    nombre: this.item.name,
    precio: this.item.price,
    imagen: this.item.image,
    cantidad: 1
    });

    this.addedToCart = true;
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, CartItem } from '../../services/cart.service';
import { RouterModule } from '@angular/router'; // Necesario para routerLink

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class CartPage {

  items: CartItem[] = [];
  total: number = 0;

  constructor(private cart: CartService) {}

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.items = this.cart.getItems();
    this.total = this.cart.getTotal();
  }

  increase(item: CartItem) {
    this.cart.updateQuantity(
      item.id,
      item.cantidad + 1,
      item.talla,
      item.color
    );
    this.loadCart();
  }

  decrease(item: CartItem) {
    if (item.cantidad > 1) {
      this.cart.updateQuantity(
        item.id,
        item.cantidad - 1,
        item.talla,
        item.color
      );
    } else {
      this.removeItem(item);
    }
    this.loadCart();
  }

  removeItem(item: CartItem) {
    this.cart.removeItem(item.id);
    this.loadCart();
  }
}

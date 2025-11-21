import { Injectable } from '@angular/core';

export interface CartItem {
  id: number;
  nombre: string;
  precio: number;
  imagen?: string;
  cantidad: number;
  talla?: string;
  color?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private storageKey = 'cart_items';
  private items: CartItem[] = [];

  constructor() {
    this.loadFromStorage();
  }

  private saveToStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.items));
  }

  private loadFromStorage() {
    const data = localStorage.getItem(this.storageKey);
    this.items = data ? JSON.parse(data) : [];
  }

  getItems(): CartItem[] {
    return this.items;
  }

addItem(item: CartItem) {
  const exist = this.items.find(p =>
    p.id === item.id &&
    p.talla === item.talla &&
    p.color === item.color
  );

  if (exist) {
    exist.cantidad += item.cantidad;
  } else {
    this.items.push(item);
  }

  this.saveToStorage();
}


  // ⬇ NUEVO
  isInCart(id: number): boolean {
    return this.items.some(item => item.id === id);
  }

 updateQuantity(id: number, qty: number, talla?: string, color?: string) {
  const item = this.items.find(p =>
    p.id === id &&
    p.talla === talla &&
    p.color === color
  );

  if (item) {
    item.cantidad = qty;
    this.saveToStorage();
  }
}


  removeItem(id: number) {
    this.items = this.items.filter(p => p.id !== id);
    this.saveToStorage();
  }

  clearCart() {
    this.items = [];
    this.saveToStorage();
  }

  getTotal(): number {
    return this.items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    { id: 1, name: 'Laptop', price: 999, description: 'High-performance laptop for professionals.' },
    { id: 2, name: 'Phone', price: 499, description: 'Latest smartphone with advanced features.' },
    { id: 3, name: 'Tablet', price: 299, description: 'Lightweight tablet for reading and browsing.' },
    { id: 4, name: 'Smartwatch', price: 199, description: 'Wearable smartwatch with health tracking.' },
    { id: 5, name: 'Headphones', price: 149, description: 'Noise-canceling over-ear headphones.' },
    { id: 6, name: 'Gaming Console', price: 399, description: 'Next-gen gaming console with 4K support.' },
    { id: 7, name: 'Monitor', price: 179, description: '24-inch Full HD monitor for work and gaming.' },
    { id: 8, name: 'Mechanical Keyboard', price: 129, description: 'RGB mechanical keyboard with fast switches.' },
    { id: 9, name: 'Wireless Mouse', price: 49, description: 'Ergonomic wireless mouse with fast response time.' },
    { id: 10, name: 'External Hard Drive', price: 89, description: '1TB external hard drive for backup storage.' }
  ];

  // ✅ Ensure it returns an Observable with a simulated delay
  getProducts(): Observable<any[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<any> {
    return of(this.products.find(p => p.id === id));
  }
}

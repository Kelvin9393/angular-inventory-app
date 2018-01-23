import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'product-list',
  template: `
  <div class="ui items">
    <product-row 
      *ngFor="let product of productList"
      [product]="product"
      (click)="clicked(product)"
      [class.selected]="isSelected(product)">
    </product-row>
  </div>
  `
})
export class ProductListComponent implements OnInit {

  @Input() productList: Product[];
  @Output() onProductSelected: EventEmitter<Product>;
  private currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  clicked(product: Product) {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product) {
    if (!product || !this.currentProduct) { 
      return false; 
    }
    return product.sku === this.currentProduct.sku;
  }

}

import { Component } from '@angular/core';
import { APIServicesService } from '../../Services/apiservices.service';
@Component({
  selector: 'app-product-master',
  templateUrl: './product-master.component.html',
  styleUrl: './product-master.component.scss',
})
export class ProductMasterComponent {
  // Model for binding with ngModel
  product = {
    name: '',
    brand: '',
    price: 0,
    description: '',
    stock: 0,
    category: '',
    features: [''],
    images: [''],
    reviews: [{ user: '', rating: null, comment: '', date: '' }],
  };
  constructor(private APIServicesService: APIServicesService) {}

  // Add a new feature to the array
  addFeature() {
    this.product.features.push('');
  }

  // Remove a feature from the array
  removeFeature(index: number) {
    this.product.features.splice(index, 1);
  }

  // Add a new image to the array
  addImage() {
    this.product.images.push('');
  }

  // Remove an image from the array
  removeImage(index: number) {
    this.product.images.splice(index, 1);
  }

  // Add a new review
  addReview() {
    this.product.reviews.push({
      user: '',
      rating: null,
      comment: '',
      date: '',
    });
  }

  // Remove a review
  removeReview(index: number) {
    this.product.reviews.splice(index, 1);
  }

  // Submit the form and store the data as a JSON object
  onSubmit() {
    const payload = {
      name: this.product.name,
      brand: this.product.brand,
      price: this.product.price,
      description: this.product.description,
      stock: this.product.stock,
      category: this.product.category,
      features: this.product.features.filter((f) => f.trim() !== ''), // Remove empty features
      images: this.product.images.filter((i) => i.trim() !== ''), // Remove empty images
      reviews: this.product.reviews.filter((r) => r.user && r.rating !== null), // Filter valid reviews
    };
    console.log(payload);
    this.APIServicesService.createProduct(payload).subscribe((res: any) => {
      console.log(res);
    });
    console.log('Form submitted. Data:', JSON.stringify(payload));
  }
}

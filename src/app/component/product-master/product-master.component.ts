import { Component, HostListener } from '@angular/core';
import { APIServicesService } from '../../Services/apiservices.service';

@Component({
  selector: 'app-product-master',
  templateUrl: './product-master.component.html',
  styleUrls: ['./product-master.component.scss'],
})
export class ProductMasterComponent {
  product = {
    id: '',
    title: '',
    description: '',
    category: '',
    price: '',
    discountPercentage: '',
    rating: '',
    stock: '',
    tags: [''],
    brand: '',
    sku: '',
    weight: '',
    features: [''],

    dimensions: {
      width: '',
      height: '',
      depth: '',
    },
    warrantyInformation: '',
    shippingInformation: '',
    availabilityStatus: '',
    returnPolicy: '',
    minimumOrderQuantity: '',
    meta: {
      createdAt: '',
      updatedAt: '',
      barcode: '',
      qrCode: '',
    },
    thumbnail: '',
    images: [''],
    reviews: [{ user: '', rating: null, comment: '', date: '' }],
  };
  eventId: any;

  constructor(private APIServicesService: APIServicesService) {}

  addTag() {
    this.product.tags.push('');
  }

  removeTag(index: number) {
    if (this.product.tags.length > 1) {
      this.product.tags.splice(index, 1);
    }
  }

  addFeature() {
    this.product.features.push('');
  }
  trackByFn(index: number, item: any): number {
    return index;
  }

  removeFeature(index: number) {
    if (this.product.features.length > 1) {
      this.product.features.splice(index, 1);
    }
  }

  addImage() {
    this.product.images.push('');
  }

  removeImage(index: number) {
    if (this.product.images.length > 1) this.product.images.splice(index, 1);
  }

  addReview() {
    this.product.reviews.push({
      user: '',
      rating: null,
      comment: '',
      date: '',
    });
  }

  removeReview(index: number) {
    if (this.product.reviews.length > 1) this.product.reviews.splice(index, 1);
  }

  getEvent(event: any) {
    this.eventId = event;
    // console.log(event);
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.ctrlKey && event.altKey && event.key === 'p') {
      if (this.eventId === 'tag') this.addTag();
      if (this.eventId === 'image') this.addImage();
      if (this.eventId === 'user') this.addReview();
      if (this.eventId === 'feature') this.addFeature();
      event.preventDefault();
    }

    if (event.ctrlKey && event.altKey && event.key === 'c') {
      if (this.product.tags.length > 0) {
        if (this.eventId === 'tag')
          this.removeTag(this.product.tags.length - 1);
        if (this.eventId === 'image')
          this.removeImage(this.product.images.length - 1);
        if (this.eventId === 'user')
          this.removeReview(this.product.reviews.length - 1);
        // this.removeTag(this.product.tags.length - 1);
      }
      event.preventDefault();
    }
  }

  onSubmit() {
    const payload = {
      id: this.product.id,
      title: this.product.title,
      description: this.product.description,
      category: this.product.category,
      price: this.product.price,
      discountPercentage: this.product.discountPercentage,
      rating: this.product.rating,
      stock: this.product.stock,
      tags: this.product.tags.filter((t) => t.trim() !== ''),
      brand: this.product.brand,
      sku: this.product.sku,
      weight: this.product.weight,
      dimensions: this.product.dimensions,
      warrantyInformation: this.product.warrantyInformation,
      shippingInformation: this.product.shippingInformation,
      availabilityStatus: this.product.availabilityStatus,
      returnPolicy: this.product.returnPolicy,
      minimumOrderQuantity: this.product.minimumOrderQuantity,
      meta: this.product.meta,
      thumbnail: this.product.thumbnail,
      images: this.product.images.filter((i) => i.trim() !== ''),
      reviews: this.product.reviews.filter((r) => r.user && r.rating !== null),
    };
    console.log(payload);
    this.APIServicesService.createProduct(payload).subscribe((res: any) => {
      console.log(res);
    });
    console.log('Form submitted. Data:', JSON.stringify(payload));
  }
}
// import { Component } from '@angular/core';
// import { APIServicesService } from '../../Services/apiservices.service';
// @Component({
//   selector: 'app-product-master',
//   templateUrl: './product-master.component.html',
//   styleUrl: './product-master.component.scss',
// })
// export class ProductMasterComponent {
//   // Model for binding with ngModel
//   product = {
//     name: '',
//     brand: '',
//     price: '',
//     description: '',
//     stock: 0,
//     category: '',
//     features: [''],
//     images: [''],
//     reviews: [{ user: '', rating: null, comment: '', date: '' }],
//   };
//   constructor(private APIServicesService: APIServicesService) {}

//   // Add a new feature to the array
//   addFeature() {
//     this.product.features.push('');
//   }

//   // Remove a feature from the array
//   removeFeature(index: number) {
//     if (this.product.features.length > 1) {
//       this.product.features.splice(index, 1);
//     }
//   }

//   // Add a new image to the array
//   addImage() {
//     this.product.images.push('');
//   }

//   // Remove an image from the array
//   removeImage(index: number) {
//     if (this.product.images.length > 1) this.product.images.splice(index, 1);
//   }

//   // Add a new review
//   addReview() {
//     this.product.reviews.push({
//       user: '',
//       rating: null,
//       comment: '',
//       date: '',
//     });
//   }

//   // Remove a review
//   removeReview(index: number) {
//     if (this.product.reviews.length > 1) this.product.reviews.splice(index, 1);
//   }

//   // Submit the form and store the data as a JSON object
//   onSubmit() {
//     const payload = {
//       name: this.product.name,
//       brand: this.product.brand,
//       price: this.product.price,
//       description: this.product.description,
//       stock: this.product.stock,
//       category: this.product.category,
//       features: this.product.features.filter((f) => f.trim() !== ''), // Remove empty features
//       images: this.product.images.filter((i) => i.trim() !== ''), // Remove empty images
//       reviews: this.product.reviews.filter((r) => r.user && r.rating !== null), // Filter valid reviews
//     };
//     console.log(payload);
//     this.APIServicesService.createProduct(payload).subscribe((res: any) => {
//       console.log(res);
//     });
//     console.log('Form submitted. Data:', JSON.stringify(payload));
//   }
// }

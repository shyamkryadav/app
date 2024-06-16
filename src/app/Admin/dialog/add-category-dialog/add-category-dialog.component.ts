import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-category-dialog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-category-dialog.component.html',
  styleUrl: './add-category-dialog.component.css',
})
export class AddCategoryDialogComponent {
  productCategory: any;
  // productCategory: ProductCategory = new ProductCategory();


  constructor(

  ) {}

  ngOnInit(): void {}

  onSubmit() {
  //   this._productcategoryService
  //     .create(this.productCategory)
  //     .subscribe((res) => {
  //       this.dialogRef.close(true);
  //     });
  }
}

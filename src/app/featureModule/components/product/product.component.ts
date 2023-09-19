import { Component, OnInit } from '@angular/core';
import { productInterface } from 'src/app/coreModule/interfaces/product.interface';
import { userServise } from '../../services/user.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: productInterface[] = []
  currentPage = 1
  pagesize = 5
     constructor(private userService: userServise){}

    ngOnInit(): void {
      this.userService.fetchProduct(this.currentPage,this.pagesize).subscribe((data:any)=>{
        console.log('Products',data);
        this.products = data.products
      })
    }
    nextPage() {
      this.currentPage++;
      this.userService.fetchProduct(this.currentPage,this.pagesize).subscribe((data:any)=>{
        console.log('Products',data);
        this.products = data.products
      })
    }
  
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.userService.fetchProduct(this.currentPage,this.pagesize).subscribe((data:any)=>{
          console.log('Products',data);
          this.products = data.products
        })
      }
    }
}

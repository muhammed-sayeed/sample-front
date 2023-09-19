import { Component, OnInit } from '@angular/core';
import { userServise } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
     constructor(private userService: userServise){}

    ngOnInit(): void {
      this.userService.fetchProduct().subscribe((data)=>{
        console.log('Products',data);
        
      })
    }
}

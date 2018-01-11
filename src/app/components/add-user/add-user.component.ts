import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/Item'; 

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  user: User = {
    name: '',
    email:'',
    password: ''
  }

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.user.name != '' && this.user.email != '' && this.user.password !=''){
      this.userService.addUser(this.user);
      this.user.name = '';
      this.user.email = '';
      this.user.password = '';
    }
  }

}

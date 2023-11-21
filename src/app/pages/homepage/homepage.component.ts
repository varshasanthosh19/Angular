import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

constructor(private api:ApiService){}
todos:any;
ngOnInit()
{
this.api.getTodo().subscribe((data:any)=> {
  this.todos=data
})



}
delete(id: any) {
  this.todos = this.todos.filter((e : {id:any})=> e.id !=id)
}


}

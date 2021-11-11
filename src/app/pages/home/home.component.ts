import { Component, OnInit } from '@angular/core';
import { MyListComponent } from '../../components/my-list/my-list.component';
import { MyFormComponent } from '../../components/my-form/my-form.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

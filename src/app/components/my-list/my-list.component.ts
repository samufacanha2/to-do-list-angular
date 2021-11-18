import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss'],
})
export class MyListComponent implements OnInit {
  constructor(private http: HttpClient) {}
  readonly ROOT_URL = 'http://localhost:3330/';
  tasks: any;

  getTasks() {
    this.http.get(this.ROOT_URL + 'get').subscribe((data) => {
      this.tasks = data;
      console.log(this.tasks);
    });
  }

  ngOnInit(): void {
    this.getTasks();
    console.log(this.tasks);
  }
  deleteTask(id: any) {
    this.http.delete(this.ROOT_URL + 'delete' + '/' + id).subscribe(
      (data) => {
        this.getTasks();
      },
      (err) => {
        this.getTasks();
      }
    );
  }
}

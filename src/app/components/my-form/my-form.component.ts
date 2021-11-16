import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Task } from 'src/app/models/task';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, retry } from 'rxjs';
@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss'],
})
export class MyFormComponent implements OnInit {
  formTask: FormGroup;
  params: any;
  id: '';
  title: '';
  description: '';

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  readonly ROOT_URL = 'http://localhost:3330/';

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.title = params['title'];
      this.description = params['description'];
    });
    this.createForm(new Task());
  }

  createForm(task: Task) {
    this.formTask = new FormGroup({
      title: new FormControl(task.title),
      description: new FormControl(task.description),
    });
    if (this.title) {
      this.formTask.setValue({
        title: this.title,
        description: this.description,
      });
    }
    console.log(this.formTask.value);
  }
  @Input() update = false;
  submitForm(e: any) {
    e.preventDefault();
    console.log(this.formTask.value);
    this.http.post(this.ROOT_URL + 'create', this.formTask.value).subscribe();
    window.location.reload();
  }
  goBack(e: any) {
    e.preventDefault();

    this.router.navigate(['/']);
  }

  updateForm(e: any) {
    e.preventDefault();
    try {
      this.http
        .put(this.ROOT_URL + 'update/' + this.id, this.formTask.value)
        .subscribe((response: any) => {
          this.router.navigate(['/']);
        });
    } catch (error) {
      console.log(error);
    }
  }
}

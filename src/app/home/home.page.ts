import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = 'タスク登録';
  task: string;
  tasks: { name: string}[];

  constructor() {}

  ionViewWillEnter() {
    if ('tasks' in localStorage) {
      this.tasks = JSON.parse(localStorage.tasks);
    }
  }

  addTask() {
    this.tasks.push({
      name: this.task
    });
    localStorage.tasks = JSON.stringify(this.tasks);
    this.task = '';
  }

}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {

  taskArray=[{taskName:'Task 1', isCompleted:false}]
  searchTerm:string='';
  isDarkMode=false;

  onSubmit(form:NgForm){
    console.log(form);

    this.taskArray.push({
      taskName:form.controls['task'].value,
      isCompleted:false
    })

    form.reset();

  }
  onDelete(index:number){
      console.log(index);

      this.taskArray.splice(index,1); 
  }

  onCheck(index:number){
    console.log(this.taskArray);

    this.taskArray[index].isCompleted=!this.taskArray[index].isCompleted;
    
  }

  filteredTasks(){
    if(!this.searchTerm){
      return this.taskArray;
    }
    return this.taskArray.filter(task=>
      task.taskName.toLowerCase().includes(this.searchTerm.toLowerCase())
    )
  }

  mode : boolean = true;
  
  toggleDarkMode(){
    this.mode = !this.mode;
    if(this.mode){
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
    }
    else{
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
    }
  }

  get totalTasks(){
    return this.taskArray.length;
  }

  get completedTasks(){
    return this.taskArray.filter(task=>task.isCompleted).length;
  }

}

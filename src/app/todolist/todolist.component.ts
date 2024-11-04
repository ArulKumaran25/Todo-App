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


}

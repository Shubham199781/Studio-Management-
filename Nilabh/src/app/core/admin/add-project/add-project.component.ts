import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  constructor() { 
   
  }
  items:Array<any>=[];
  
  addItem(){
     // push object that you need to be added into array
     this.items.push({title:"Task"});
  }

  removeTask(index:number,e:Event){
    this.items.splice(index,1);
  }
  ngOnInit() {
  }

}

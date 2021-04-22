import {Component} from '@angular/core';

@Component({
  selector:'exercise-1',
  templateUrl:'./exercise.component.html',
  styleUrls:['./exercise.component.css'],
})
//create class for component
export class ExerciseComponent{
  //task1 variable
  inpLen = '';
  showLen = false;
  disableBtn=false;

  //task2 variable
  inpName='';
  inpAge = '';
  inpObj:any= [{name:'',age:''}];
  hideBtn=false;
 
  //task3 variable
  inp2Name = '';
  inp2Age = '';
  inp2Array=[];

  //task4 variable
  oddEvenInp:any = '';

//task 1 methods
  //show length of input and disable btn
  showInputLength(){
    this.showLen = true;

    setTimeout(()=>{this.disableBtn= true;},1000);
  }

//task2 methods
  //display name and age 
  displayObj(){
    this.inpObj.push({name:this.inpName ,age:this.inpAge});
  } 
  //hide and unhide display btn
  hideUnhideDisplayBtn(){
    this.hideBtn = !this.hideBtn;
  }
    
//task3 methods
  displayArray(){
    this.inp2Array.push({name:this.inp2Name,age:this.inp2Age});
  }

}



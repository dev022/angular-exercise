import {Component} from '@angular/core';

@Component({
  selector:'exercise-1',
  templateUrl:'./exercise.component.html'
})
//create class for component
export class ExerciseComponent{

  //task1 variable
  inpLen = '';
  showLen = false;
  disablebtn=false;

  //task2 variable
  inpName='';
  inpAge = '';
  inpObj = {name:'',age:''};
  result='';
  showBtn=true;

  //task3 variable
  inp2Name = '';
  inp2Age = '';
  inp2Array=[];
  result2='';

  //task4 variable
  oddEvenInp:any = '';
  oddEvenStatus='';

//task 1 methods
  //show length of input and disable btn
  showInputLength(){
    this.showLen = true;

    setTimeout(()=>{this.disablebtn= true;},1000);
  }

  //enable the disabled btn 
   enableLengthBtn(){
    this.disablebtn = false;
  }

//task2 methods
  //display name and age 
  displayObj(){
    this.inpObj = {name:this.inpName , age:this.inpAge};

    for( let x in this.inpObj ){
      this.result = this.result+ this.inpObj[x];
    }
  }  

  hideUnhideDisplayBtn(){
    this.showBtn = !this.showBtn;
  }
    
//task3 methods
  displayArray(){
    this.inp2Array=[this.inp2Name,this.inp2Age];
    for( let x in this.inp2Array ){
      this.result2 = this.result2 + this.inp2Array[x]; 
    }
  }

//task4 methods
  
}



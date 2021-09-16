import { invalid } from '@angular/compiler/src/render3/view/util';
import {Component,OnInit} from '@angular/core';

@Component({
    selector: 'app-calc',
    templateUrl: './calc.component.html',
    styleUrls:['./calc.component.scss']
})

export class CalcComponent implements OnInit{
  result='';
  input='';
  clear='c';
  num1='1';
  num2='2';
  num3='3';
  num4='4';
  num5='5';
  num6='6';
  num7='7';
  num8='8';
  num9='9';
  num0='0';
  sum='+';
  mmin='-';
  mult='*';
  div='/';
  eq='=';
  point='.';
  num=''

  presNum(val:string){
     
      this.input+=val;

  }

  solv(){
      
      this.input=eval(this.input)
      
  }

  cl(){
      this.input='';
  }


 

  ngOnInit(){

  }
  
}
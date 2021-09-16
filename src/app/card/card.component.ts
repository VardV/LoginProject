import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import {Component,OnInit} from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
    selector:'app-card',
    templateUrl:'./card.component.html',
    styleUrls:['./card.component.scss']  
})

export class CardComponent implements OnInit{
    l_user='Username :';
    l_pass='Password :';  
    b_submit='Login';
    b_cancel='Cancel';
    username='';
    pass='';
    

  ngOnInit(){

  };
  login(){
     
    if(this.username!=''){
        if(this.pass!=''){
            this.username='';
            this.pass='';
            alert('done');
            AppComponent.prototype.taggle=false;
            

        }
    else
            alert('write username or password')
    }
  };

  cancel(){
    this.username='';
    this.pass='';
  }
        
        


    
}

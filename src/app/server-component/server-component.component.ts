import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-component',
  templateUrl: './server-component.component.html',
  styleUrls: ['./server-component.component.css']
})
export class ServerComponentComponent implements OnInit {

  serverName = '';
  serverList = [];
  isAdded = false;
  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    this.isAdded = true;
    this.serverList.push(this.serverName);
  }

  onDelete(){
    this.serverList.pop();
    if(this.serverList.length === 0){
      console.log('Array is now undefined');
      this.isAdded = false;
    }
  }


}
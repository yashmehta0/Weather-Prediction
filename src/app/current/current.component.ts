import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {
  @Input() current;
  constructor() { }

  ngOnInit() {
  }

}

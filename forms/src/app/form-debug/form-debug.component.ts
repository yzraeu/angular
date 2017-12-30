import { Component, OnInit, Input } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-form-debug',
  templateUrl: './form-debug.component.html',
  styleUrls: ['./form-debug.component.css']
})
export class FormDebugComponent implements OnInit {
  @Input() form: Form;
  constructor() {}

  ngOnInit() {}
}

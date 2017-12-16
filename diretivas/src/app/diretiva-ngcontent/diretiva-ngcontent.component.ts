import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngcontent',
  templateUrl: './diretiva-ngcontent.component.html',
  styleUrls: ['./diretiva-ngcontent.component.css']
})
export class DiretivaNgcontentComponent implements OnInit {
  @Input() msgBotao;

  constructor() {}

  ngOnInit() {}
}

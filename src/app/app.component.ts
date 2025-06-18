import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent implements OnInit {
  title = 'Pruebas Iris';
  ngOnInit() {}
}

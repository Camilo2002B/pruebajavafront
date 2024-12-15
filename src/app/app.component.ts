import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'drogueria';
    items: MenuItem[];

    constructor(private router : Router){}

    ngOnInit() {
        this.items = [
            {
                label: 'Lista de reproducción',
                icon: 'list',
                routerLink: '/PlayList'
            },
        ];
    }
}

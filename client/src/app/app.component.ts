import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nclient';
  isAutorized = false;
  user: any = null;

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit(): void {

    this.httpClient.get('http://localhost:1337/whoami',{
      withCredentials: true
 }).subscribe((s:any) => {
      console.log("🚀 ~ file: app.component.ts ~ line 20 ~ AppComponent ~ this.httpClient.get ~ s", s)
      if(s && s.user) {
        this.user = s;
        this.isAutorized = true
      }
    }, err => {
      if (err && !err.ok) {
        this.isAutorized = false
        this.user = null;
      }


    })

  }
}

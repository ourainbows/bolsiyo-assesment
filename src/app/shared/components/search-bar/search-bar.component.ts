import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass'],
})
export class SearchBarComponent implements OnInit {
  constructor(private router: Router) {}

  public query: string = '';
  public category: string = '';

  public search(): void {
    this.router.navigate(['/images']),
      { queryParams: { query: this.query, category: this.category } };
  }

  ngOnInit(): void {}
}

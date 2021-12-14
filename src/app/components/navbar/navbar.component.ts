import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }



  NavigateTotodos(){
    this.router.navigate(['todos'], {relativeTo:this.route});
  }
  NavigateToHistogram(){
    this.router.navigate(['histogram'], {relativeTo:this.route});
  }
}

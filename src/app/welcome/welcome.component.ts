import { Component, OnInit, HostBinding,
         trigger, transition, animate,
         style, state  } from '@angular/core';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.2s ease-in')
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({
          opacity: 0,
          transform: 'translateY(100%)'
        }))
      ])
    ])
  ]
})
export class WelcomeComponent implements OnInit {
@HostBinding('@routeAnimation') get routeAnimation() {
    return true;}
      @HostBinding('style.display') get display() {
    return 'block';
  }
  constructor() { }

  ngOnInit() {
  }

}


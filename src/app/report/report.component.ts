import { Component, OnInit } from '@angular/core';
import { Encounter } from '../models';
import { Alien } from '../models';
import AliensService from '../services/aliens.service';
import {FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers: [AliensService]
})
export class ReportComponent implements OnInit {

  marsAliens:Alien[];
  registerForm: FormGroup;



  constructor(aliensService: AliensService) {

 aliensService.getAliens().subscribe((aliens) => {
  this.marsAliens = aliens;
  });

}

  ngOnInit() {
  }


}

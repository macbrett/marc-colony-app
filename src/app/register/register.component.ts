import { Component, OnInit } from '@angular/core';

import { Job } from '../models';
import JobsService from '../services/jobs.service';
import {FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import {cantBe} from '../shared/validators';
import EncountersService from '../services/encounters.service';
import {Router} from '@angular/router';
import { Encounter } from '../models';
import { Alien, NewEncounter } from '../models';
import {Colonist, NewColonist} from '../models';
import {ColonistsService} from '../services/colonists.service';
import { HostBinding,
         trigger, transition, animate,
         style, state  } from '@angular/core';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [JobsService,ColonistsService],
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

export class RegisterComponent implements OnInit {
@HostBinding('@routeAnimation') get routeAnimation() {
    return true;}
      @HostBinding('style.display') get display() {
    return 'block';
  }
  marsJobs: Job[];
  registerForm: FormGroup;

  NO_JOB_SELECTED = '';

  constructor(private jobService: JobsService,
  private colonistsService: ColonistsService,private router: Router) {

  jobService.getJobs().subscribe((jobs) => {
  this.marsJobs = jobs;
  });

  }


tooOld(value: number): ValidatorFn{
  return (control: AbstractControl): {[key:string]: any} => {
  return control.value > 100 ? {'too old': {value}}:null;
  };
}

ngOnInit() {

    this.registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    age: new FormControl('', [Validators.required, this.tooOld(100)]),
    job_id: new FormControl(this.NO_JOB_SELECTED, [cantBe(this.NO_JOB_SELECTED)])

});
}

onSubmit(event){
event.preventDefault();
if(this.registerForm.invalid){


} else {

  const name = this.registerForm.get('name').value;
  const age = this.registerForm.get('age').value;
  const job_id = this.registerForm.get('job_id').value;
  const newColonist =  new NewColonist(name,age,job_id);



this.colonistsService.submitColonist(newColonist).subscribe((newColonist) => {
  console.log(newColonist);
  localStorage.setItem("colonist_id", JSON.stringify(newColonist.id));
 
  this.router.navigate(['/encounters']);
}, err => {
  console.log(err)});
}

};
  }


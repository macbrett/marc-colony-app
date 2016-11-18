import { Component, OnInit } from '@angular/core';
import { NewColonist } from '../models';
import { Job } from '../models';
import JobsService from '../services/jobs.service';
import {FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import {cantBe} from '../shared/validators.ts'



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [JobsService]
})

export class RegisterComponent implements OnInit {

  marsJobs: Job[];
  registerForm: FormGroup;

  NO_JOB_SELECTED = '(none)';

  constructor(jobService: JobsService) {

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

  console.log('ok let\'s register this new colonist:', new NewColonist(name,age,job_id));

    }
  }
}

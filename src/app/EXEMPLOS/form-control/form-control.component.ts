import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { invalidTextValidator } from './invalid-text-validator';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-form-control',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.scss'
})
export class FormControlComponent implements OnInit {

  // nome = new FormControl({value: '', disabled: true}, [Validators.required]);
  // nome = new FormControl('', [Validators.required]);
  // nome = new FormControl('inicial', {nonNullable: true, validators:[Validators.required, Validators.minLength(3)]});
  // nome = new FormControl('inicial', {nonNullable: true, validators:[Validators.required, Validators.minLength(6)], updateOn: 'change'});
  nome = new FormControl('inicial', {nonNullable: true, validators:[invalidTextValidator('ramon')], updateOn: 'blur'});

  ngOnInit() {
  //   this.nome.valueChanges.pipe(debounceTime(3000)
  // ).subscribe(value => console.log(value));
  //   console.log(this.nome);

    // this.nome.valueChanges.subscribe( resultado => console.log('valueChanges : ',resultado));

    // this.nome.statusChanges.subscribe( resultado => console.log('statusChanges: ', resultado));
  }

  status() {
    console.log(this.nome);
  }

  alterarValor() {
    this.nome.setValue('Alterado !!!');
  }

  inputAlterado(event: Event) {
    // console.log('require: ' ,this.nome.hasError('required'))
    // console.log('minlenth:' +this.nome.hasError('minlength'))
    console.log(event);
  }

  habilitar() {
    this.nome.enable();
  }

  desabilitar() {
    this.nome.disable();
  }

  // resetar() {
  // this.nome.reset();
  // }
  resetar() {
    this.nome.reset('valor reset');
  }

  setValidator() {
    this.nome.setValidators(Validators.minLength(6));
    this.nome.setValue('Ra');
    this.nome.setValidators(Validators.minLength(6));
    this.nome.updateValueAndValidity();
  }

  addValidator(){
    this.nome.addValidators(Validators.maxLength(7));
    this.nome.updateValueAndValidity();
  }

}

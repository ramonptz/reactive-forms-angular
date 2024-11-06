import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-control',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.scss'
})
export class FormControlComponent implements OnInit {

  ngOnInit() {
    console.log(this.nome);
  }

  nome = new FormControl({value: '', disabled: true}, [Validators.required]);

  status() {
    console.log(this.nome);
  }

  alterarValor() {
    this.nome.setValue('Alterado !!!');
  }

  inputAlterado(event: Event) {
    console.log(event);
  }

  habilitar() {
  this.nome.enable();
  }

  desabilitar() {
  this.nome.disable();
  }

}

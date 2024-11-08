import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { UserValidatorService } from './user-validator.service';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-validador-assincrono',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './validador-assincrono.component.html',
  styleUrl: './validador-assincrono.component.scss'
})
export class ValidadorAssincronoComponent {
  nome = new FormControl('', {
    asyncValidators: [this._userValidatorService.validate.bind(this._userValidatorService)]
  });

  constructor(
    private readonly _userValidatorService: UserValidatorService,
  ){}
}

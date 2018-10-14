import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

export abstract class BaseFormComponent implements OnInit {
  protected form: FormGroup;

  protected abstract createForm(): FormGroup;

  public ngOnInit(): void {
    this.form = this.createForm();
  }
}

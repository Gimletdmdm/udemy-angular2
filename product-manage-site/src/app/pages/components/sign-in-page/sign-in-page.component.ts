import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import { PagesModule } from '../../pages.module';

@Component({
  selector: 'app-sign-in-page',
  standalone: true,
  imports: [
    PagesModule
  ],
  templateUrl: './sign-in-page.component.html',
  styleUrl: './sign-in-page.component.scss'
})
export class SignInPageComponent implements OnInit {

  translateService = inject(TranslateService);
  private formBuilder = inject(FormBuilder);

  signInUserAccount = new FormControl<string>('', [Validators.required]);
  signInUserPassword = new FormControl<string>('', [Validators.required]);

  signInForm = this.formBuilder.group({
    signInUserAccount: this.signInUserAccount,
    signInUserPassword: this.signInUserPassword
  })


  ngOnInit(): void {
    this.setupLanguage();
  }

  private setupLanguage(): void {
    // Setups language using browser settings.
    this.translateService.setDefaultLang(this.getLanguage(navigator.language));
    this.translateService.use(this.getLanguage(navigator.language));
  }

  private getLanguage(language: string): string {
    const CHAR_HYPHEN = '-';
    if (language.indexOf(CHAR_HYPHEN) > 0) {
      const splittedLanguage: string[] = language.split(CHAR_HYPHEN);
      return splittedLanguage[0];
    }
    return language;
  }
}

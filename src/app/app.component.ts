import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recapthaSiteKey: string = '6Lf30VkhAAAAAE9vOpX08nWeyXw2n0ETJm49h6S_'
  //@ts-ignore
  captchform: FormGroup
  constructor(private formbuilder: FormBuilder, private loginService: LoginService) { }
  resolved(captchaResponse: string) {
    // console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
  ngOnInit() {
    this.captchform = this.formbuilder.group({
      username: ['', [Validators.required]],
      passsword: ['', [Validators.required]],
      captchaToken: ['', [Validators.required]]
    })
  }

  submit() {
    console.log(this.captchform.value)
    this.loginService.login(this.captchform.value).subscribe((res) => {console.log(res) }, (err) => {console.log(err) })
  }

  getNames(){
    this.loginService.names().subscribe((res) => {console.log(res) }, (err) => {console.log(err) })
  }
}

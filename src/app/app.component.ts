import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CuponService } from './service/cupon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  configForm: FormGroup;
  cuponList: string[];

  constructor(private cuponService: CuponService) {
    this.configForm = new FormGroup({
      cantidad: new FormControl('', [Validators.required,
      Validators.min(0),
      Validators.max(200)]),
      algoritmo: new FormControl('', [Validators.required]),
      longitud: new FormControl('', [
        Validators.required,
        Validators.max(9),
        Validators.min(0)
      ]),
    })
  }

  ngOnInit(): void {
    this.cuponList = []

  }

  async onSubmit(): Promise<any> {
    try {
      this.cuponList = await this.cuponService.getSecuentialNumbers(this.configForm.value)
    } catch (error) {
      this.deleteCupons()
      console.log(error)
    }
    this.configForm.reset()
  }

  deleteCupons(): void {
    this.cuponList = []
  }


}

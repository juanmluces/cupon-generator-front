import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CuponService {

  private baseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/'
  }

  getSecuentialNumbers(pConfig): Promise<string[]> {
    const body = pConfig
    return this.httpClient.post<string[]>(this.baseUrl, body).toPromise()
  }



}

import { Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChatResponse } from '../../models/ChatResponse.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

    private readonly apiUrl = '/.netlify/functions/chat';
    constructor(private http: HttpClient) {}

    askQuestion(message: string): Observable<ChatResponse> {
     return this.http.post<ChatResponse>(
      this.apiUrl,
      {
        message
      }
     );
    }

}
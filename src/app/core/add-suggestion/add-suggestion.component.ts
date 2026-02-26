import { Component } from '@angular/core';
import { Suggestion } from '../../models/suggestion';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-suggestion',
  templateUrl: './add-suggestion.component.html',
  styleUrl: './add-suggestion.component.css'
})
export class AddSuggestionComponent {
  suggestion: Suggestion = {
    id: 0,
    title: '',
    description: '',
    category: '',
    date: '',
    status: '',
    nbLikes: 0
  }
  suggestionForm!: FormGroup;

  ngOnInit(){
    this.suggestionForm = new FormGroup({
      title: new FormControl(this.suggestion.title, [Validators.required, Validators.minLength(5)]),
      description: new FormControl(this.suggestion.description, Validators.required),
      category: new FormControl(this.suggestion.category, Validators.required),
      date: new FormControl(this.suggestion.date, Validators.required),
      status: new FormControl(this.suggestion.status, Validators.required),
      nbLikes: new FormControl(this.suggestion.nbLikes)
    })
  }

  get title(){ return this.suggestionForm.get('title') }
  get description(){ return this.suggestionForm.get('description') }
  get category(){ return this.suggestionForm.get('category') }
  get date(){ return this.suggestionForm.get('date') }
  get status(){ return this.suggestionForm.get('status') }
}

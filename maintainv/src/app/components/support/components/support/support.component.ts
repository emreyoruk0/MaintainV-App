import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NavigatorComponent } from '../../../../common/components/navigator/navigator.component';
import { FAQModel } from '../../models/faq.model';
import { TopicModel } from '../../models/topic.model';
import { FaqsService } from '../../services/faqs.service';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [NavigatorComponent, CommonModule],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent {

  questions: FAQModel[] = [];
  topics: TopicModel[] = [];
  selectedTopic: string = 'All';

  constructor(
    private _title: Title,
    private _faqsService: FaqsService
  ) {
    this._title.setTitle('Support | Maintain-V');
    this.topics = this._faqsService.topics;
    this.questions = this._faqsService.questions;
   }

   filterFAQS(topic: string){
      this.selectedTopic = topic;
      this.questions = this._faqsService.questions;

      if(topic == 'All'){
        return;
      } else {
        this.questions = this.questions.filter(q => q.topic === this.selectedTopic);
      }
   }
}

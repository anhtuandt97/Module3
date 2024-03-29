import {Component, OnDestroy, OnInit} from '@angular/core';
import {DictionaryService, IWord} from '../dictionary.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.scss']
})
export class DictionaryDetailComponent implements OnInit, OnDestroy {
  word: IWord;
  sub: Subscription;
  constructor( private activatedRoute: ActivatedRoute,
               private dictionaryService: DictionaryService) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const key = paramMap.get('key');
      const meaning = this.dictionaryService.search(key);
      this.word = {
        key,
        meaning
      };
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}

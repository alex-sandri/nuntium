import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService, IArticle } from '../services/api/api.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent
{
  public article?: IArticle;

  constructor(api: ApiService, route: ActivatedRoute)
  {
    route.params.subscribe({
      next: (params) =>
      {
        api.retrieveArticle(params.id).then((response) =>
        {
          this.article = response.data;
        });
      },
    });
  }
}
import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng2-select2';
import { MovieService } from '../../service/movie.service';
import { Discover } from '../../interfaces/discover';
import { DiscoverResponse } from '../../interfaces/discover-response';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.sass']
})
export class MovieComponent implements OnInit {

  public years: Array<Select2OptionData> = [];
  public orderBy: Array<Select2OptionData> = [];
  public genre: Array<Select2OptionData> = [];

  public options: Select2Options;
  public optionsMultiple: Select2Options;
  public discover: Discover;
  public discoverResponse: DiscoverResponse = { results: []};

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.options = {
      multiple: false,
      theme: 'classic',
      minimumResultsForSearch: -1,
      closeOnSelect: false
    }
    this.select2Year();
    this.selct2OrderBy();
    this.select2Genre();

    this.discover = { sort_by: this.orderBy[0].id, primary_release_year: null}
    this.movieService.getDiscover(this.discover).subscribe( (response: DiscoverResponse) => this.discoverResponse = response);
  }


  public select2Year() {
    this.years.push({
      id: '',
      text: 'Nenhum'
    });
    for (let cont = 2019; cont >= 1900; cont--) {
      this.years.push(
        {
          id: cont.toString(),
          text: cont.toString()
        }
      );
    }
  }

  public selct2OrderBy() {
    this.orderBy = [
      { id: 'popularity.desc', text: 'Popularidade (maior)' },
      { id: 'popularity.asc', text: 'Popularidade (menor)' },
      { id: 'vote_average.desc', text: 'Avaliação (melhor)' },
      { id: 'vote_average.asc', text: 'Avaliação (pior)' },
      { id: 'primary_release_date.desc', text: 'Lançamento (novo)' },
      { id: 'primary_release_date.asc', text: 'Lançamento (antigo)' },
      { id: 'title.asc', text: 'Título (A–Z)' },
      { id: 'title.desc', text: 'Título (Z–A)' }
    ];
  }

  public select2Genre() {
    this.optionsMultiple = {
      multiple: true,
      theme: 'classic',
    };

    this.genre = [
      { id: 'Animação', text: 'Animação' },
      { id: 'Aventura', text: 'Aventura' },
      { id: 'Ação', text: 'Ação' },
      { id: 'Cinema', text: 'Cinema' },
      { id: 'TV', text: 'TV' },
      { id: 'Comédia', text: 'Comédia' },
      { id: 'Crime', text: 'Crime' },
      { id: 'Documentário', text: 'Documentário' },
      { id: 'Drama', text: 'Drama' },
      { id: 'Família', text: 'Família' },
      { id: 'Fantasia', text: 'Fantasia' },
      { id: 'Faroeste', text: 'Faroeste' },
      { id: 'Ficção', text: 'Ficção' },
      { id: 'científica', text: 'científica' },
      { id: 'Guerra', text: 'Guerra' },
      { id: 'História', text: 'História' },
      { id: 'Mistério', text: 'Mistério' },
      { id: 'Música', text: 'Música' },
      { id: 'Romance', text: 'Romance' },
      { id: 'Terror', text: 'Terror' },
      { id: 'Thriller', text: 'Thriller' }
    ]
  }

}

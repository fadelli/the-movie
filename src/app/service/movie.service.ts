import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Discover } from '../interfaces/discover';

@Injectable()
export class MovieService extends BaseService {

    constructor(private httpClient: HttpClient) {
        super();
    }

    public getDiscover(discover: Discover) {
        discover.language = 'pt-BR';
        let httpHarams: HttpParams = new HttpParams();
        httpHarams = httpHarams.append('language', discover.language);
        httpHarams = httpHarams.append('sort_by', discover.sort_by);
        httpHarams = httpHarams.append('page', discover.page.toString());
        if (discover.primary_release_year !== null) {
            httpHarams = httpHarams.append('primary_release_year', discover.primary_release_year.toString());
        }
        if (typeof undefined !== typeof discover.with_genres) {
            discover.with_genres.map(item => httpHarams = httpHarams.append('with_genres', item.toString()));
        }

        return this.httpClient.get(this.formatUrl('discover/movie'), {
            params: httpHarams
        });
    }
}

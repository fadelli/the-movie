import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class BaseService {

    constructor() { }

    protected formatUrl(path: string): string {
        return environment.api + path + '?api_key=' + environment.apiKey;
    }

}

import { Discover } from './discover';

export interface DiscoverResponse {
    page?: number;
    total_results?: number;
    total_pages?: number;
    results: Discover[];
}

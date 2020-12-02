
import { CONSTANTS } from "../constants";
import { put } from 'redux-saga/effects';
import {getCharactersAsync} from "../actions/characters";
import {config} from "../config";
import {get} from "common-libs";
import {IHttpResponse} from 'common-libs';

export interface Origin {
    name: string;
    url: string;
}

export interface Location {
    name: string;
    url: string;
}

export interface ICharacter {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: Date;
}

function* getCurrenciesList(): Generator<any, ICharacter[] | undefined, IHttpResponse<ICharacter>> {
    try {
        const characters = yield get<ICharacter[]>(`${config.API_URL}/${CONSTANTS.URLS.CHARACTERS}`);
        yield put(getCharactersAsync.success(characters.results));
        return [];
    } catch (err) {
        console.error(err);
    }
}


export {
    getCurrenciesList,
}

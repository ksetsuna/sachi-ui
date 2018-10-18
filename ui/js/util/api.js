import Promise from 'bluebird';

const root = API_ROOT || '';

import id from './id';


export default function api(endpoint, opts) {
    return Promise.method(fetch)(
        `${root}${endpoint}`,
        {
            method: 'get',
            credentials: 'include',
            ...opts
        }
    );
}
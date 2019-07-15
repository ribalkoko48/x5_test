import {fetch} from 'whatwg-fetch'

export const getJobs = (searchValue = 'new+york', setResponseDate) => {
    const corsServer = 'https://cors-anywhere.herokuapp.com/'
    const url = `${corsServer}https://jobs.github.com/positions.json?search=${searchValue}`

    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (json) {
            console.log('parsed json', json)
            setResponseDate(json, searchValue)
        })
        .catch(function (ex) {
            console.log('parsing failed', ex)
        })
}
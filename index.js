let ResourceRace = (endpoints) => {
    let promises = endpoints.map(endpoint => fetch(endpoint));
    return Promise.race(promises)
        .then(response => response.url)
        .catch(e => Promise.reject(e));
}

export default ResourceRace

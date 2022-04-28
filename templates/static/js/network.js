const URL = 'https://6269d5bbaa65b5d23e897598.mockapi.io/datita';

export default class Network {
    createreg(objetForm) {
        return new Promise ((res, rej) => {
            let setting = {
                method: 'POST',
                body: JSON.stringify(objetForm),
                headers: {'Content-type': 'application/json'}
            }
            fetch(URL, setting).then(resp => {
                resp.json();
            }).then (infoSend => {
                res(infoSend);
            }).catch(err => {
                rej(`Error: ${err}`);
            })
        })
    }
}
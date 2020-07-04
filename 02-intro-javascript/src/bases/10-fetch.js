const apiKey = 'SQnqirgG9WKX0gcT1SsStIpN8lhOAMXd';

const httpClient = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

httpClient
.then(resp => resp.json())
.then(({data}) => {
     const {url} = data.images.original;
     console.log(url);

     const img = document.createElement('img');
     img.src = url;

     document.body.append(img);
     
})
.catch(console.warn)
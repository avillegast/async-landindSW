
const content = null || document.getElementById('content'); 
const urlAPI = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCZGYJFUizSax-yElQaFDp5Q&part=snippet%2Cid&order=date&maxResults=9';


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7bf105dab6msh44a0cec30a0232bp1f1e5djsn2d928c372bdb',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

fetch('', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

async function fetchData(urlAPI){
    const response = await fetch(urlAPI, options);
    const data = await response.json();
    return data;
}

(async ()=> {
    try {
        const videos = await fetchData(urlAPI);
        console.log(videos);
        let view = `
        ${videos.items.map(video =>
          `
          <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${video.snippet.title}
            </h3>
          </div>
        </div>
        
              
          `).slice(0,4).join('')}
    `;
    content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();
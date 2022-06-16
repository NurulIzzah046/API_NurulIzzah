var container = document.querySelector('div.content-wrapper')
var input = document.querySelector('input.input')
var submit = document.querySelector('button.submit')

function getData() {

    submit.innerHTML = 'loading'
    
    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": "https://livescore6.p.rapidapi.com/news/v2/list",
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": "491206e31fmsh6a7e84772316878p1cba33jsnab992c16e696",
            "X-RapidAPI-Host": "livescore6.p.rapidapi.com"
        }
    }).done(function (response) {
        console.log(response.topStories);

        var list = response.topStories.map( (e) => {
            return `
                <div class="col-md-6">
                    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-primary">${e.type}</strong>
                        <h4 class="mb-1">${e.title}</h4>
                        <div class="mb-1 text-muted">di publish pada : ${e.publishedDate}</div>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                        <img style="object-fit: cover;" class="bd-placeholder-img" width="200" height="200"  src="${e.mainMedia.gallery.url}"/>
                    </div>
                    </div>
                </div>
            `
        }).join('')

        container.innerHTML = list

        submit.innerHTML = 'ambil data'
    });
        
}

submit.addEventListener('click', function(){
    getData()
})
export function renderPost(post,options = {}){
    let tag = '';
    if(post.type === 'news'){
        tag = '<li class="tag tag-blue tag-rounded">Новость</li>';
    }else if (post.type === 'note'){
        tag = '<li class="tag tag-rounded">Заметка</li>';
    }else if(post.type === 'internet'){
        tag = '<li class="tag tag-rounded">Интернет</li>';
    }


    let button = (JSON.parse(localStorage.getItem('favorites')) || []).includes(post.id) ? `<button data-id="${post.id}" class="button-round button-small button-danger">Delete</button>` : `<button data-id="${post.id}" class="button-round button-small button-primary">Saved</button>`
    return `<div class="panel">
                  <div class="panel-head">
                    <p class="panel-title">${post.title}</p>
                    <ul class="tags">
                      ${tag}
                    </ul>
                  </div>
                  <div class="panel-body">
                    <p class="multi-line">${post.fulltext}</p>
                  </div>
                  <div class="panel-footer w-panel-footer">
                    <small>${post.date}</small>
                  ${options.withButton ? button : ''}
                  </div>
                </div>`
}
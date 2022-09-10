import {Component} from "../core/component";
import {apiService} from "../services/api.services";
import {TransformService} from '../services/transform.service'
const arrFilter = [
    ['Погнали','Пагнали','погнали','pognali','pagnali']
]
export class InternetComponent extends Component{
    constructor(id,{loader}) {
        super(id);
        this.loader = loader;
    }


    async onShow(){
        this.loader.show();
        const fbData =  await apiService.fetchPost()
        const posts =  TransformService.fbObjectToArray(fbData)
        console.log(posts)
        const poster = ttttt(posts)
        const html = posts.map(post => renderPost(post)).join(' ')
        this.loader.hide();
        this.$el.insertAdjacentHTML('afterbegin',html)
    }

    onHide() {
        this.$el.innerHTML = '';
    }
}

function renderPost(post){

    const  tag = '<li class="tag tag-rounded">Интернет</li>';

    if(post.type === 'internet'){
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
                       
                      </div>
                    </div>`
    }

}
function ttttt(posts){
    console.log(posts.length)
    console.log(posts[1].title)
    let counter = 0;
       for (let i = 0;i < posts.length;i++){
           for (let j = 0; j < arrFilter.length;j++){
               for (let g = 0;g < arrFilter[j].length;g++){
                   if (posts[i].title == arrFilter[j][g]){
                       counter++
                   }
                   if (counter > 1){
                       posts[i].type = ''
                   }
               }
           }
       }
    console.log(posts)
}
import {Component} from "../core/component";
import {apiService} from "../services/api.services";
import {TransformService} from '../services/transform.service'
import {renderPost} from "../temolates/post.template";

export class PostsComponent extends Component{
    constructor(id,{loader}) {
        super(id);
        this.loader = loader;
    }

    init() {
        this.$el.addEventListener('click', buttonHandler.bind(this))
    }

    async onShow(){
        this.loader.show();
        const fbData =  await apiService.fetchPost()
        const posts =  TransformService.fbObjectToArray(fbData)
        const html = posts.map(post => renderPost(post, {withButton : true})).join(' ')
        this.loader.hide();
        this.$el.insertAdjacentHTML('afterbegin',html)
    }

    onHide() {
        this.$el.innerHTML = '';
    }
}



function buttonHandler(event){
    const $el = event.target
    const id = $el.dataset.id

    if (id){
      let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

      if(favorites.includes(id)){
          $el.textContent = 'Saved'
          $el.classList.add('button-primary')
          $el.classList.remove('button-danger')
          favorites = favorites.filter(fId => fId !== id);
      }else{

          $el.classList.remove('button-primary')
          $el.classList.add('button-danger')
          $el.textContent = 'Delete'
          favorites.push(id)
      }
      localStorage.setItem('favorites',JSON.stringify(favorites))
    }
}
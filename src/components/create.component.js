import {Component} from "../core/component";
import {Form} from "../core/form";

export class CreateComponent extends Component{
    constructor(id) {
        super(id);

    }

    init(){
        this.$el.addEventListener('submit', submitHendler.bind(this))

        this.form = new Form(this.$el, {
            title: [],
            fulltext: []
        })

    }
}

function submitHendler(event){
    event.preventDefault();

    const formData = {
        type: this.$el.type.value,
            ...this.form.value()
    }

        console.log(formData)
}
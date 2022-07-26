import {Component} from "../core/component";
import {Form} from "../core/form";
import {Validators} from "../core/validator";

export class CreateComponent extends Component{
    constructor(id) {
        super(id);

    }

    init(){
        this.$el.addEventListener('submit', submitHendler.bind(this))

        this.form = new Form(this.$el, {
            title: [Validators.required],
            fulltext: [Validators.required,Validators.minLength(10)]
        })

    }
}

function submitHendler(event){
    event.preventDefault();
    if (this.form.isValid()){
        const formData = {
            type: this.$el.type.value,
            ...this.form.value()
        }

        this.form.clear()
        console.log(formData)
    }


}
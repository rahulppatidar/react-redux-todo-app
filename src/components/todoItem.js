import React, {Component} from 'react';

class TodoItem extends Component {
  constructor(props){
    super(props);
    this.state={
      isEdit:false,
      isDel:false
    }
  }
  onDelete(id){
    this.props.onDelete(id);
  }
  onEdit(todo){
    this.setState({isEdit:true});
  }
  onSubmitEdit(event){
    event.preventDefault();
    if(this.todotitle.value=="") {
      return;
    }
    const editedTodo={
      id: this.refs.todoid.value,
      title:this.todotitle.value
    };
    this.props.onEdit(editedTodo);
    this.todotitle.value='';
    this.setState({isEdit:false});
  }
  onCancle(){
    this.setState({isEdit:false});
  }
  onCompleteToggle(){
    const isDel = !this.state.isDel;
    this.setState({isDel});
  }
  render(){
    return(
      <div className="todoItemBox">
      {
        this.state.isEdit ?
        (
          <form className="form-inline  edittodoform" ref='edittodo' onSubmit={this.onSubmitEdit.bind(this)}>
            <div className="form-group list-group-item d-flex justify-content-between align-items-center">

            <input className="form-control" type="text" ref={ todotitle => this.todotitle = todotitle } defaultValue={this.props.todo.title} placeholder="Enter Todo"/>
            <input type="hidden" ref="todoid" defaultValue={this.props.todo.id}/>

            <button className="btn btn-outline-success" >Save</button>
            <button className="btn btn-outline-secondary" onClick={this.onCancle.bind(this)}>Cancle</button>

            </div>
          </form>

        )
        :
        (
          <div className="list-group-item d-flex justify-content-between align-items-center todoItem ">
            <span ref="title_without_del" onClick={this.onCompleteToggle.bind(this)} style={ {display: this.state.isDel?'none':'block'  } }>{this.props.todo.title}</span>
            <span ref="title_with_del" onClick={this.onCompleteToggle.bind(this)} style={{display: this.state.isDel?'block':'none'}}><del>{this.props.todo.title}</del></span>
            <span className="d-flex">
            <button className="btn btn-outline-danger btn-sm" onClick={this.onDelete.bind(this,this.props.todo.id)}>Del</button>
            <button className="btn btn-outline-info btn-sm" onClick={this.onEdit.bind(this,this.props.todo)}>Edit</button>
            <button  style={ {display: this.state.isDel?'none':'block'  } } className="btn btn-outline-warning btn-sm" onClick={this.onCompleteToggle.bind(this)}>Complete</button>
            <button  style={{display: this.state.isDel?'block':'none'}} className="btn btn-outline-warning btn-sm" onClick={this.onCompleteToggle.bind(this)}>Resume</button>
            </span>
          </div>
        )
      }
      </div>

    );
  }

}
export default TodoItem;

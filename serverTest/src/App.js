import './App.css';
import React, { Component } from 'react';
import TOC from "./component/TOC";
import ReadContent from './component/ReadContent';
import CreateContent from './component/CreateContent';
import Subject from './component/Subject';
import Control from './component/Control';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode:'create',
      selected_content_id: 2,
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      subject:{title:"WEB", sub:"World Wide Web!"},
      contents:[
        {id:1, title:'HTML', desc:'HTML is Hyper Text...'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
  render() {
    console.log("App render()")
    var _title, _desc, _article = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc = {_desc} ></ReadContent>;
    } else if (this.state.mode === 'read'){
      var i = 0;      
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
      _article = <ReadContent title={_title} desc = {_desc} ></ReadContent>;
    } else if (this.state.mode === 'create'){
      _article = <CreateContent></CreateContent>;
    }
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage = {function(){
            this.setState({mode:'welcome'});
          }.bind(this)}
        >
        </Subject>
        <TOC 
          onChangePage = {function(id){
            this.setState({
              mode:'read',
              selected_content_id: Number(id)
            });
          }.bind(this)}
          data ={this.state.contents} 
        ></TOC>
        <Control onChangeMode={function(_mode){
          this.setState({
            mode:_mode
          });
        }.bind(this)}></Control>
        {_article}
      </div>
    );
  }
}

export default App;

//npm install -g serve
// 1. 둔산북로 41 맛집 검색
// 2. 지도 API 결과 여러개가 나옴
// 3. 위생등급 API 검색 결과, 3개가 나옴
// 4. 해당 맵에서 
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(t,e,a){t.exports=a(25)},25:function(t,e,a){"use strict";a.r(e);var n=a(7),r=a(8),i=a(10),o=a(9),s=a(11),c=a(0),l=a.n(c),p=a(18),u=a.n(p),d=a(19),m=a.n(d),h=a(22),f=a(20),b=a(23),g=function(t){function e(){return Object(n.a)(this,e),Object(i.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t="//reddit.com/r/"+this.props.permalink,e="//i.redd.it/"+this.props.url,a="/explore/"+this.props.subreddit;return l.a.createElement(f.a,{style:{padding:"5px"}},l.a.createElement("div",{className:"card",style:{height:"100%"}},l.a.createElement("a",{href:t,target:"_blank"},l.a.createElement("img",{className:"card-img-top img-fluid",src:e,alt:e,style:{maxHeight:"15rem",objectFit:"cover"}})),l.a.createElement("div",{className:"card-body bg-light",style:{padding:"10px"}},l.a.createElement("span",{className:"card-text",style:{fontSize:"1rem"}},l.a.createElement("a",{href:a},"r/",this.props.subreddit),": ",this.props.caption))))}}]),e}(c.Component),j=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(i.a)(this,Object(o.a)(e).call(this,t))).shuffle=function(t){for(var e=t.length-1;e>0;e--){var a=Math.floor(Math.random()*(e+1)),n=[t[a],t[e]];t[e]=n[0],t[a]=n[1]}return t},a.state={annotations:[]},a}return Object(s.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){var t=this;u.a.get("static/homepage_sample.json").then(function(e){e.data=t.shuffle(e.data).slice(0,5),e.data.map(function(e){t.state.annotations.push(l.a.createElement(g,{image_id:e[0],url:e[1],permalink:e[2],caption:e[3],subreddit:e[4]}))}),t.setState({annotations:t.state.annotations})}).catch(function(t){console.log(t)})}},{key:"render",value:function(){return l.a.createElement(h.a,{style:{paddingTop:"5px"}},l.a.createElement(b.a,null,this.state.annotations))}}]),e}(c.Component),v=document.getElementById("root");m.a.render(l.a.createElement(j,null),v)}},[[24,2,1]]]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-650bb419"],{"0caa":function(t,e,c){"use strict";c("6107")},6107:function(t,e,c){},9503:function(t,e,c){"use strict";c.r(e);c("a4d3"),c("e01a");var n=c("7a23"),o={key:0,class:"edit-form"},d=Object(n["f"])("h4",null,"Kbdoc",-1),u={class:"form-group"},i=Object(n["f"])("label",{for:"title"},"Title",-1),r={class:"form-group"},l=Object(n["f"])("label",{for:"description"},"Description",-1),b={class:"form-group"},a=Object(n["f"])("label",null,[Object(n["f"])("strong",null,"Status:")],-1),s={key:1},f=Object(n["f"])("br",null,null,-1),p=Object(n["f"])("p",null,"Please click on a Kbdoc...",-1);function h(t,e,c,h,g,j){return g.currentKbdoc?(Object(n["o"])(),Object(n["d"])("div",o,[d,Object(n["f"])("form",null,[Object(n["f"])("div",u,[i,Object(n["A"])(Object(n["f"])("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[1]||(e[1]=function(t){return g.currentKbdoc.title=t})},null,512),[[n["x"],g.currentKbdoc.title]])]),Object(n["f"])("div",r,[l,Object(n["A"])(Object(n["f"])("input",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":e[2]||(e[2]=function(t){return g.currentKbdoc.description=t})},null,512),[[n["x"],g.currentKbdoc.description]])]),Object(n["f"])("div",b,[a,Object(n["e"])(" "+Object(n["v"])(g.currentKbdoc.published?"Published":"Pending"),1)])]),g.currentKbdoc.published?(Object(n["o"])(),Object(n["d"])("button",{key:0,class:"badge badge-primary mr-2",onClick:e[3]||(e[3]=function(t){return j.updatePublished(!1)})}," UnPublish ")):(Object(n["o"])(),Object(n["d"])("button",{key:1,class:"badge badge-primary mr-2",onClick:e[4]||(e[4]=function(t){return j.updatePublished(!0)})}," Publish ")),Object(n["f"])("button",{class:"badge badge-danger mr-2",onClick:e[5]||(e[5]=function(){return j.deleteKbdoc&&j.deleteKbdoc.apply(j,arguments)})}," Delete "),Object(n["f"])("button",{type:"submit",class:"badge badge-success",onClick:e[6]||(e[6]=function(){return j.updateKbdoc&&j.updateKbdoc.apply(j,arguments)})}," Update "),Object(n["f"])("p",null,Object(n["v"])(g.message),1)])):(Object(n["o"])(),Object(n["d"])("div",s,[f,p]))}var g=c("9a44"),j={name:"Kbdoc",data:function(){return{currentKbdoc:null,message:""}},methods:{getKbdoc:function(t){var e=this;g["a"].get(t).then((function(t){e.currentKbdoc=t.data,console.log(t.data)})).catch((function(t){console.log(t)}))},updatePublished:function(t){var e=this,c={id:this.currentKbdoc.id,title:this.currentKbdoc.title,description:this.currentKbdoc.description,published:t};g["a"].update(this.currentKbdoc.id,c).then((function(c){e.currentKbdoc.published=t,console.log(c.data)})).catch((function(t){console.log(t)}))},updateKbdoc:function(){var t=this;g["a"].update(this.currentKbdoc.id,this.currentKbdoc).then((function(e){console.log(e.data),t.message="The Kbdoc was updated successfully!"})).catch((function(t){console.log(t)}))},deleteKbdoc:function(){var t=this;g["a"].delete(this.currentKbdoc.id).then((function(e){console.log(e.data),t.$router.push({name:"kbdocs"})})).catch((function(t){console.log(t)}))}},mounted:function(){this.message="",this.getKbdoc(this.$route.params.id)}};c("0caa");j.render=h;e["default"]=j}}]);
//# sourceMappingURL=chunk-650bb419.01e1def7.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"1t8K":function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".modal[data-v-13c28099] {\n  display: block;\n  background-color: rgba(0, 0, 0, 0.5);\n  transition: opacity 0.3s ease;\n}\n.modal-header[data-v-13c28099] {\n  padding-bottom: 25px;\n  border: none;\n}\n.modal-dialog[data-v-13c28099] {\n  vertical-align: middle;\n  margin: 30px auto;\n}\n.modal-content[data-v-13c28099] {\n  background-color: #fff;\n  border-radius: 5px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);\n  transition: all 0.3s ease;\n  font-family: Helvetica, Arial, sans-serif;\n}\n.modal-enter .modal-content[data-v-13c28099],\n.modal-leave-active .modal-content[data-v-13c28099] {\n  transform: scale(1.1);\n}",""])},Nc0F:function(t,e,a){var s=a("uZxc");"string"==typeof s&&(s=[[t.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,o);s.locals&&(t.exports=s.locals)},"Sn/z":function(t,e,a){"use strict";var s=a("jPxZ");a.n(s).a},aUqo:function(t,e,a){"use strict";var s=a("Nc0F");a.n(s).a},eYl2:function(t,e,a){"use strict";var s={props:{show:{type:Boolean,default:!1},title:{type:String,default:"Modal"},small:{type:Boolean,default:!1},large:{type:Boolean,default:!1},full:{type:Boolean,default:!1},force:{type:Boolean,default:!1},confirmText:{type:String,default:"OK"},cancelText:{type:String,default:"Cancel"},confirmClass:{type:String,default:"btn btn-info"},cancelClass:{type:String,default:"btn btn-light"},closeWhenConfirm:{type:Boolean,default:!1},showFooter:{type:Boolean,default:!1}},data:function(){return{duration:null}},computed:{modalClass:function(){return{"modal-lg":this.large,"modal-sm":this.small,"modal-full":this.full}}},created:function(){this.show&&(document.body.className+=" modal-open")},beforeDestroy:function(){document.body.className=document.body.className.replace(/\s?modal-open/,"")},watch:{show:function(t){t?document.body.className+=" modal-open":(this.duration||(this.duration=1e3*window.getComputedStyle(this.$el)["transition-duration"].replace("s","")),window.setTimeout((function(){document.body.className=document.body.className.replace(/\s?modal-open/,"")}),this.duration||0))}},methods:{confirm:function(){this.$emit("confirm")},cancel:function(){this.$emit("cancel")},clickMask:function(){this.force||this.cancel()}}},o=(a("Sn/z"),a("KHd+")),n=Object(o.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.show?a("transition",{attrs:{name:"modal"}},[a("div",{staticClass:"modal",on:{click:function(e){return e.target!==e.currentTarget?null:t.clickMask(e)}}},[a("div",{staticClass:"modal-dialog",class:t.modalClass},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[t._t("header",[a("h4",{staticClass:"modal-title"},[t._t("title",[t._v("\n                "+t._s(t.title)+"\n              ")])],2),t._v(" "),a("a",{staticClass:"close",on:{click:t.cancel}},[a("i",{staticClass:"fas fa-times-circle"})])])],2),t._v(" "),a("div",{staticClass:"modal-body"},[t._t("default")],2),t._v(" "),t.showFooter?a("div",{staticClass:"modal-footer"},[t._t("footer",[a("button",{class:t.cancelClass,attrs:{type:"button"},on:{click:t.cancel}},[t._v(t._s(t.cancelText))]),t._v(" "),a("button",{class:t.confirmClass,attrs:{type:"button"},on:{click:t.confirm}},[t._v(t._s(t.confirmText))])])],2):t._e()])])])]):t._e()}),[],!1,null,"13c28099",null);e.a=n.exports},g6D4:function(t,e,a){"use strict";a.r(e);var s={components:{Modal:a("eYl2").a},data:function(){return{folder:"",files:null,file_name:"",path:"",upload:{},showFolder:!1,showFile:!1,showImage:!1,preview_image:"",fields:[{name:"name",title:"ID",titleClass:"text-center",dataClass:"text-center"},{name:"user",title:"User Name",titleClass:"text-center",dataClass:"text-center",callback:"username"},{name:"title",title:"Title"},{name:"content",title:"Content",callback:"content"},{name:"status",title:"Status",titleClass:"text-center",dataClass:"text-center",callback:"status"},{name:"created_at",title:"Created At"},{name:"__actions",dataClass:"text-center"}]}},mounted:function(){this.getFileInfo(this.$route.query.folder)},methods:{preview:function(t){this.showImage=!0,this.preview_image=t},confirm:function(){var t=this;if(this.folder){var e="/"==this.upload.folder?"":this.upload.folder;this.path=e+"/"+this.folder,this.$http.post("folder",{folder:this.path}).then((function(e){toastr.success("You create a new folder success!"),t.showFolder=!1,t.$set(t.upload.subfolders,t.path,t.folder),t.folder=""})).catch((function(t){var e=t.response;toastr.error(e.status+" : "+e.statusText)}))}else toastr.error("The folder name must be required!")},change:function(t){this.files=t.target.files},uploadFile:function(){var t=this;if(this.files){var e=new FormData;e.append("file",this.files[0]),e.append("name",this.file_name),e.append("folder",this.upload.folder),this.$http.post("upload",e).then((function(e){toastr.success("You upload a file success!");var a={fullPath:e.data.real_path,mimeType:e.data.mime,name:e.data.original_name,size:e.data.size,webPath:e.data.url};t.upload.files.push(a),t.file_name="",t.showFile=!1})).catch((function(t){var e=t.response;e.data.error?toastr.error(e.data.error.message):toastr.error(e.status+" : Resource "+e.statusText)}))}else toastr.error("The file must be required")},deleteFolder:function(t){var e=this,a="/"==this.upload.folder?"":this.upload.folder;this.$http.post("folder/delete",{del_folder:t,folder:this.upload.folder}).then((function(s){toastr.success("You delete a folder success!"),e.$delete(e.upload.subfolders,a+"/"+t)})).catch((function(t){var e=t.response;e.data.error?toastr.error(e.data.error.http_code+" : Resource "+e.data.error.message):toastr.error(e.status+" : Resource "+e.statusText)}))},deleteFile:function(t,e){var a=this;this.$http.post("file/delete",{path:t.fullPath}).then((function(t){toastr.success("You delete a file success!"),a.upload.files.splice(e,1)})).catch((function(t){var e=t.response;toastr.error(e.status+" : Resource "+e.statusText)}))},getFileInfo:function(t){var e=this,a="upload";t?a=a+"?folder="+t:t="/",this.$http.get(a).then((function(a){e.upload=a.data.data,e.upload.subfolders instanceof Array&&(e.upload.subfolders={}),e.$router.push({name:"dashboard.file",query:{folder:t}})}))},checkImageType:function(t){return null!=t&&-1!=t.indexOf("image/")}}},o=(a("aUqo"),a("KHd+")),n=Object(o.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"box"},[a("div",{staticClass:"box-title"},[a("div",{staticClass:"row d-flex m-0"},[a("div",{staticClass:"col-md-6 d-flex align-items-center p-0"},[a("h5",{staticClass:"align-self-center"},[t._v(t._s(t.$t("page.files"))+"  ")]),t._v(" "),a("div",{staticClass:"float-left"},[a("nav",{attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb"},[t._l(t.upload.breadcrumbs,(function(e,s){return a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.getFileInfo(s)}}},[t._v("\n                    "+t._s(e)+"\n                  ")])])})),t._v(" "),a("li",{staticClass:"breadcrumb-item active"},[t._v(t._s(t.upload.folderName))])],2)])])]),t._v(" "),a("div",{staticClass:"col-md-6 align-items-center p-0 text-right"},[a("small",[t.checkPermission("CREATE_FILE_FOLDER")?a("button",{staticClass:"btn btn-success btn-sm",attrs:{type:"button"},on:{click:function(e){t.showFolder=!0}}},[a("i",{staticClass:"fas fa-plus-circle"}),t._v(" "+t._s(t.$t("table.new_folder"))+"\n            ")]):t._e(),t._v(" "),t.checkPermission("UPLOAD_FILE")?a("button",{staticClass:"btn btn-primary btn-sm",attrs:{type:"button"},on:{click:function(e){t.showFile=!0}}},[a("i",{staticClass:"fas fa-inbox"}),t._v(" "+t._s(t.$t("table.upload"))+"\n            ")]):t._e()])])])]),t._v(" "),a("div",{staticClass:"box-content p-0"},[a("table",{staticClass:"table table-striped table-hover",attrs:{id:"uploads-table"}},[a("tbody",[a("tr",[a("th",[t._v(t._s(t.$t("table.name")))]),t._v(" "),a("th",[t._v(t._s(t.$t("table.type")))]),t._v(" "),a("th",[t._v(t._s(t.$t("table.date")))]),t._v(" "),a("th",[t._v(t._s(t.$t("table.size")))]),t._v(" "),a("th",[t._v(t._s(t.$t("table.action")))])]),t._v(" "),t._l(t.upload.subfolders,(function(e,s){return a("tr",[a("td",[a("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.getFileInfo(s)}}},[a("i",{staticClass:"fas fa-folder"}),t._v("\n                "+t._s(e)+"\n              ")])]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[a("a",{staticClass:"btn btn-sm btn-secondary",attrs:{href:"javascript:;"},on:{click:function(e){return t.getFileInfo(s)}}},[a("i",{staticClass:"fas fa-folder-open"})]),t._v(" "),t.checkPermission("DESTROY_FILE")?a("button",{staticClass:"btn btn-sm btn-danger",attrs:{type:"button"},on:{click:function(a){return t.deleteFolder(e)}}},[a("i",{staticClass:"fas fa-trash-alt"})]):t._e()])])})),t._v(" "),t._l(t.upload.files,(function(e,s){return a("tr",["folder"==e.type?[a("td",[a("a",{attrs:{href:"javascript:;"},on:{click:function(a){return t.getFileInfo(e.fullPath)}}},[a("i",{staticClass:"fas fa-folder"}),t._v("\n                  "+t._s(e.name)+"\n                ")])]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[a("a",{staticClass:"btn btn-sm btn-secondary",attrs:{href:"javascript:;"},on:{click:function(a){return t.getFileInfo(e.fullPath)}}},[a("i",{staticClass:"fas fa-folder-open"})]),t._v(" "),t.checkPermission("DESTROY_FILE")?a("button",{staticClass:"btn btn-sm btn-danger",attrs:{type:"button"},on:{click:function(a){return t.deleteFolder(e.fullPath)}}},[a("i",{staticClass:"fas fa-trash-alt"})]):t._e()])]:[a("td",[a("a",{attrs:{target:"_blank",href:e.webPath}},[t.checkImageType(e.mimeType)?a("i",{staticClass:"fas fa-image"}):a("i",{staticClass:"fas fa-file-alt"}),t._v("\n                  "+t._s(e.name)+"\n                ")])]),t._v(" "),a("td",[t._v(t._s(e.mimeType))]),t._v(" "),a("td",[t._v(t._s(e.modified))]),t._v(" "),a("td",[t._v(t._s(e.size))]),t._v(" "),a("td",[t.checkImageType(e.mimeType)?a("button",{staticClass:"btn btn-sm btn-info",attrs:{type:"button"},on:{click:function(a){return t.preview(e.webPath)}}},[a("i",{staticClass:"fas fa-eye"})]):t._e(),t._v(" "),t.checkPermission("DESTROY_FILE")?a("button",{staticClass:"btn btn-sm btn-danger",attrs:{type:"button"},on:{click:function(a){return t.deleteFile(e,s)}}},[a("i",{staticClass:"fas fa-trash-alt"})]):t._e()])]],2)}))],2)])])]),t._v(" "),a("modal",{attrs:{show:t.showFolder,"show-footer":""},on:{confirm:t.confirm,cancel:function(e){t.showFolder=!1}}},[a("template",{slot:"title"},[t._v(t._s(t.$t("form.create_folder")))]),t._v(" "),a("form",[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-form-label col-sm-3",attrs:{for:"folder"}},[t._v(t._s(t.$t("form.folder_name")))]),t._v(" "),a("div",{staticClass:"col-sm-8"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.folder,expression:"folder"}],staticClass:"form-control",attrs:{type:"text",id:"folder",placeholder:t.$t("form.folder_name")},domProps:{value:t.folder},on:{input:function(e){e.target.composing||(t.folder=e.target.value)}}})])])])],2),t._v(" "),a("modal",{attrs:{show:t.showFile,"show-footer":""},on:{confirm:t.uploadFile,cancel:function(e){t.showFile=!1}}},[a("template",{slot:"title"},[t._v(t._s(t.$t("form.upload_file")))]),t._v(" "),a("form",{attrs:{enctype:"multipart/form-data"}},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-form-label col-sm-3",attrs:{for:"file"}},[t._v(t._s(t.$t("form.file")))]),t._v(" "),a("div",{staticClass:"col-sm-8 file-upload"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v(t._s(t.$t("table.upload")))]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"file",id:"file",name:"file"},on:{change:t.change}})])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-form-label col-sm-3",attrs:{for:"file_name"}},[t._v(t._s(t.$t("form.file_name")))]),t._v(" "),a("div",{staticClass:"col-sm-8"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.file_name,expression:"file_name"}],staticClass:"form-control",attrs:{type:"text",id:"file_name",name:"file_name",placeholder:t.$t("form.file_name")},domProps:{value:t.file_name},on:{input:function(e){e.target.composing||(t.file_name=e.target.value)}}})])])])],2),t._v(" "),a("modal",{attrs:{show:t.showImage},on:{confirm:t.confirm,cancel:function(e){t.showImage=!1}}},[a("template",{slot:"title"},[t._v(t._s(t.$t("form.image")))]),t._v(" "),a("div",{staticClass:"col-sm-12 text-center"},[a("img",{staticClass:"preview-size",attrs:{src:t.preview_image}})])],2)],1)}),[],!1,null,"1e2714d4",null);e.default=n.exports},jPxZ:function(t,e,a){var s=a("1t8K");"string"==typeof s&&(s=[[t.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,o);s.locals&&(t.exports=s.locals)},uZxc:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".box-content .btn[data-v-1e2714d4] {\n  display: inline-block;\n  border-radius: 50%;\n  width: 2.2rem;\n  height: 2.2rem;\n  line-height: 2.2rem;\n  padding: 0;\n  margin-left: 5px;\n  margin-right: 5px;\n}\nh5[data-v-1e2714d4] {\n  margin-bottom: 0;\n  font-weight: 400;\n}\n.breadcrumb[data-v-1e2714d4] {\n  padding: 0.25rem 0.7rem !important;\n  margin: 0;\n}\n.box-body button[data-v-1e2714d4],\n.box-body button[data-v-1e2714d4]:hover {\n  padding: 0;\n  border-radius: 50%;\n  width: 2.5em;\n  height: 2.5em;\n  outline: none;\n}\n.preview-size[data-v-1e2714d4] {\n  width: 100%;\n}\n.file-upload input[data-v-1e2714d4] {\n  width: 71px;\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  opacity: 0;\n}",""])}}]);
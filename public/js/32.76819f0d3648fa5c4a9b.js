(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{O9r4:function(t,e,a){"use strict";a.r(e);var s={data:function(){return{fields:[{name:"id",trans:"table.id",titleClass:"width-5-percent text-center",dataClass:"text-center"},{name:"tag",trans:"table.tag"},{name:"title",trans:"table.title"},{name:"meta_description",trans:"table.meta_description"},{name:"created_at",trans:"table.created_at"},{name:"__actions",trans:"table.action",titleClass:"text-center",dataClass:"text-center"}]}},methods:{tableActions:function(t,e){var a=this;"edit-item"==t?this.$router.push({name:"dashboard.tag.edit",params:{id:e.id}}):"delete-item"==t&&this.$http.delete("tag/"+e.id).then((function(t){toastr.success("You delete the tag success!"),a.$emit("reload")})).catch((function(t){var e=t.response;toastr.error(e.status+" : Resource "+e.statusText)}))}}},n=a("KHd+"),r=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("vue-table",{attrs:{title:t.$t("page.tags"),fields:t.fields,"api-url":"tag","show-paginate":""},on:{"table-action":t.tableActions}},[a("template",{slot:"buttons"},[t.checkPermission("CREATE_TAG")?a("router-link",{staticClass:"btn btn-sm btn-success",attrs:{to:{name:"dashboard.tag.create"}}},[t._v(t._s(t.$t("page.create")))]):t._e()],1)],2)],1)}),[],!1,null,null,null);e.default=r.exports}}]);
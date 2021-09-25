(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{675:function(s,a,t){"use strict";t.r(a);var n=t(5),r=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"创建或修改-etc-docker-daemon-json-文件-并写入以下内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建或修改-etc-docker-daemon-json-文件-并写入以下内容"}},[s._v("#")]),s._v(" 创建或修改 /etc/docker/daemon.json 文件，并写入以下内容：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/docker/daemon.json\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"registry-mirrors"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://0hgxc31r.mirror.aliyuncs.com"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://docker.mirrors.ustc.edu.cn/"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://hub-mirror.c.163.com/"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://reg-mirror.qiniu.com"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://mirror.ccs.tencentyun.com"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h1",{attrs:{id:"依次执行以下命令-重新启动-docker-服务。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#依次执行以下命令-重新启动-docker-服务。"}},[s._v("#")]),s._v(" 依次执行以下命令，重新启动 Docker 服务。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("systemctl daemon-reload\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" docker restart\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h1",{attrs:{id:"检查是否生效"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检查是否生效"}},[s._v("#")]),s._v(" 检查是否生效")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker info\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h1",{attrs:{id:"在返回信息最底下有如下信息则表示成功"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在返回信息最底下有如下信息则表示成功"}},[s._v("#")]),s._v(" 在返回信息最底下有如下信息则表示成功")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Registry Mirrors:\n   https://0hgxc31r.mirror.aliyuncs.com\n   https://docker.mirrors.ustc.edu.cn/\n   https://hub-mirror.c.163.com/\n   https://reg-mirror.qiniu.com\n   https://mirror.ccs.tencentyun.com\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);
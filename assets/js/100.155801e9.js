(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{672:function(s,e,n){"use strict";n.r(e);var t=n(5),a=Object(t.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("You can connect to a Docker container using SSH (Secure Shell). Normally, SSH is used to connect remotely over a network to a server. The technology works the same when connecting to a virtual Docker container on your system.")]),s._v(" "),n("h1",{attrs:{id:"step-1-enable-ssh-on-system"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#step-1-enable-ssh-on-system"}},[s._v("#")]),s._v(" Step 1: Enable SSH on System")]),s._v(" "),n("p",[s._v("Start by installing and enabling the SSH service:")]),s._v(" "),n("h2",{attrs:{id:"enable-ssh-on-ubuntu-18-04"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#enable-ssh-on-ubuntu-18-04"}},[s._v("#")]),s._v(" Enable SSH on Ubuntu 18.04:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("sudo apt-get install ssh\nsudo systemctl ssh start\nsudo systemctl ssh enable\nservice ssh status\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"enable-ssh-on-centos-7"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#enable-ssh-on-centos-7"}},[s._v("#")]),s._v(" Enable SSH on CentOS 7:")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("yum –y "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" openssh-server openssh-clients\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" sshd start\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" sshd "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" sshd status\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("Step 2: Get IP Address of Container\nGet the container’s IP address by using the docker inspect command and filtering out the results.")]),s._v(" "),n("p",[s._v("For modern Docker engines, use the command:")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker inspect -f "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{{ .NetworkSettings.IPAddress }}"')]),s._v(" container_name\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("For older Docker engines, run:")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("docker inspect -f "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}'")]),s._v(" container_name\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])}),[],!1,null,null,null);e.default=a.exports}}]);
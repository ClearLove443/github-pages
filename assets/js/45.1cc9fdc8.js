(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{618:function(a,s,t){"use strict";t.r(s);var n=t(5),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[t("a",{attrs:{href:"https://developer.aliyun.com/article/708980",target:"_blank",rel:"noopener noreferrer"}},[a._v("Spring boot"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"方法一"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法一"}},[a._v("#")]),a._v(" 方法一")]),a._v(" "),t("p",[a._v("运行")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker run -d -p "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'9090:9090'")]),a._v(" --name springboot-demo -v D:/Workspace/SpringBootDemo/target/SpringBootDemo-0.0.1-SNAPSHOT.war:/app.jar openjdk:11.0.11-jre-slim java -jar /app.jar\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"方法二"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法二"}},[a._v("#")]),a._v(" 方法二")]),a._v(" "),t("p",[a._v("先制作镜像，\nDockerfile设置")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('# 添加 Java 8 镜像来源\n# FROM openjdk:11.0.11-jre-slim\nFROM openjdk:8u322-jre-slim-buster\n\n# 添加参数\nARG JAR_FILE\n\n# 添加 Spring Boot 包\nADD demo-0.0.1-SNAPSHOT.war app.jar\n\n# 执行启动命令\nENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br")])]),t("p",[a._v("制作镜像命令")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker build -t tomcat:v1 "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("运行实例命令")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker run -p "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")]),a._v(":8080 -d tomcat:v1\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("powershell 执行")]),a._v(" "),t("div",{staticClass:"language-powershell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\\gradlew build "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" docker build "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("t tomcat:v1 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" docker run "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("p 8080:8080 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("d tomcat:v1 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"方法三"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法三"}},[a._v("#")]),a._v(" 方法三")]),a._v(" "),t("p",[a._v("docker-compose")]),a._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("services")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("springboot")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" openjdk"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("latest\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("restart")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" always\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("container_name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" springboot\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" 8080"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" ./app/app.jar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("/app/app.jar\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("command")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" java "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("jar /app/app.jar\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br")])]),t("p",[a._v("运行")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker-compose up -d\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);
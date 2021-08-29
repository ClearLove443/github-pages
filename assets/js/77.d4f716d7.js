(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{653:function(t,s,a){"use strict";a.r(s);var e=a(7),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("ol",[a("li",[t._v("vi或vim")])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# vim file1.txt  //直接创建并打开一个文件file1.txt")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("用vim 编辑器编辑文本后，如果是新创建的文件，默认保存在当前目录下，如果想保存到指定目录下，可以在vim 编辑器中，按Esc键切换到命令模式，然后用w命令写到指定目录下的指定新建文件，如写到/tmp/test.txt文件，则在vi命令模式下输入:w /tmp/test.txt写好后，在/tmp目录下新的文件test.txt就被创建了。")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("touch")])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# touch file2.txt  //创建新的空文件file2.txt")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("touch的另一个作用是更改一个文件或目录的时间。")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("echo")])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# echo "this is a new file" > file3.txt   //创建文件file3.txt并将this is a new file写入')]),t._v("\n（说明：使用"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("指令覆盖文件原内容并重新输入内容，若文件不存在则创建文件。）\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# echo "add contents" >>file3.txt    //在已存在的文件补充写入新内容add contents')]),t._v("\n（说明：使用"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v("指令向文件追加内容，原内容将保存。）\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("拓展： Linux中输出重定向>和>>的区别，>是覆盖，>>是追加")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("> 会重写文件，如果文件里面有内容会覆盖。\n>> 追加文件。也就是如果文件里面有内容会把新内容追加到文件尾\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("less 、more 、cat\n三者都是将文件内容输出到标准输出，其中less和more可以分页显示，cat是显示全部。\n三者可以根据已经存在的文件创建新的文件。假设已经存在文件1.txt。\ncat 1.txt > 2.txt\nless 1.txt > 3.txt\nmore 1.txt > 4.txt\n此时创建的文件内容都和1.txt中文件内容相同。")])]),t._v(" "),a("p",[t._v("cat命令可以一次显示整个文件，如果文件比较大，使用不是很方便；适用于文件内容少的情况。\ncat主要有三大功能：\n1）一次显示整个文件:cat filename\n2）从键盘创建一个文件:cat > filename 只能创建新文件,不能编辑已有文件.\n3）将几个文件合并为一个文件:cat file1 file2 > file")]),t._v(" "),a("p",[t._v("more命令可以让屏幕在显示满一屏幕时暂停，此时可按空格健继续显示下一个画面，或按Q键停止显示。")]),t._v(" "),a("p",[t._v("less命令也可以分页显示文件，和more命令的区别就在于它支持上下键卷动屏幕，当结束浏览时，只要在less命令的提示符“: ”下按Q键即可。")]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("cd")])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cd > file3.txt  //创建新的空文件file3.txt")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cd >> file4.txt  //创建新的空文件file3.txt")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("cd最主要的作用是切换目录，在cd后面跟>或>>再加上文件名就可以创建一个内容为空的文件。它和echo的区别之处在于echo可写文件内容，而cd并不能。")])])}),[],!1,null,null,null);s.default=n.exports}}]);
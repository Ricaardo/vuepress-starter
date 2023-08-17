<template><div><h2 id="基础概念与常识" tabindex="-1"><a class="header-anchor" href="#基础概念与常识" aria-hidden="true">#</a> 基础概念与常识</h2>
<h3 id="java-语言有哪些特点" tabindex="-1"><a class="header-anchor" href="#java-语言有哪些特点" aria-hidden="true">#</a> Java 语言有哪些特点?</h3>
<ol>
<li>简单易学；</li>
<li>面向对象（封装，继承，多态）；</li>
<li>平台无关性（ Java 虚拟机实现平台无关性）；</li>
<li>支持多线程（ C++ 语言没有内置的多线程机制，因此必须调用操作系统的多线程功能来进行多线程程序设计，而 Java 语言却提供了多线程支持）；</li>
<li>可靠性；</li>
<li>安全性；</li>
<li>支持网络编程并且很方便（ Java 语言诞生本身就是为简化网络编程设计的，因此 Java 语言不仅支持网络编程而且很方便）；</li>
<li>编译与解释并存；</li>
</ol>
<blockquote>
<p><strong>🐛 修正（参见： <a href="https://github.com/Snailclimb/JavaGuide/issues/544" target="_blank" rel="noopener noreferrer">issue#544<ExternalLinkIcon/></a>）</strong> ：C++11 开始（2011 年的时候）,C++就引入了多线程库，在 windows、linux、macos 都可以使用<code v-pre>std::thread</code>和<code v-pre>std::async</code>来创建线程。参考链接：http://www.cplusplus.com/reference/thread/thread/?kw=thread</p>
</blockquote>
<h3 id="jvm-vs-jdk-vs-jre" tabindex="-1"><a class="header-anchor" href="#jvm-vs-jdk-vs-jre" aria-hidden="true">#</a> JVM vs JDK vs JRE</h3>
<h4 id="jvm" tabindex="-1"><a class="header-anchor" href="#jvm" aria-hidden="true">#</a> JVM</h4>
<p>Java 虚拟机（JVM）是运行 Java 字节码的虚拟机。JVM 有针对不同系统的特定实现（Windows，Linux，macOS），目的是使用相同的字节码，它们都会给出相同的结果。</p>
<p><strong>什么是字节码?采用字节码的好处是什么?</strong></p>
<blockquote>
<p>在 Java 中，JVM 可以理解的代码就叫做<code v-pre>字节码</code>（即扩展名为 <code v-pre>.class</code> 的文件），它不面向任何特定的处理器，只面向虚拟机。Java 语言通过字节码的方式，在一定程度上解决了传统解释型语言执行效率低的问题，同时又保留了解释型语言可移植的特点。所以 Java 程序运行时比较高效，而且，由于字节码并不针对一种特定的机器，因此，Java 程序无须重新编译便可在多种不同操作系统的计算机上运行。</p>
</blockquote>
<p><strong>Java 程序从源代码到运行一般有下面 3 步：</strong></p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/Java 程序运行过程.png" alt="Java程序运行过程"></p>
<p>我们需要格外注意的是 .class-&gt;机器码 这一步。在这一步 JVM 类加载器首先加载字节码文件，然后通过解释器逐行解释执行，这种方式的执行速度会相对比较慢。而且，有些方法和代码块是经常需要被调用的(也就是所谓的热点代码)，所以后面引进了 JIT 编译器，而 JIT 属于运行时编译。当 JIT 编译器完成第一次编译后，其会将字节码对应的机器码保存下来，下次可以直接使用。而我们知道，机器码的运行效率肯定是高于 Java 解释器的。这也解释了我们为什么经常会说 Java 是编译与解释共存的语言。</p>
<blockquote>
<p>HotSpot 采用了惰性评估(Lazy Evaluation)的做法，根据二八定律，消耗大部分系统资源的只有那一小部分的代码（热点代码），而这也就是 JIT 所需要编译的部分。JVM 会根据代码每次被执行的情况收集信息并相应地做出一些优化，因此执行的次数越多，它的速度就越快。JDK 9 引入了一种新的编译模式 AOT(Ahead of Time Compilation)，它是直接将字节码编译成机器码，这样就避免了 JIT 预热等各方面的开销。JDK 支持分层编译和 AOT 协作使用。但是 ，AOT 编译器的编译质量是肯定比不上 JIT 编译器的。</p>
</blockquote>
<p><strong>总结：</strong></p>
<p>Java 虚拟机（JVM）是运行 Java 字节码的虚拟机。JVM 有针对不同系统的特定实现（Windows，Linux，macOS），目的是使用相同的字节码，它们都会给出相同的结果。字节码和不同系统的 JVM 实现是 Java 语言“一次编译，随处可以运行”的关键所在。</p>
<h4 id="jdk-和-jre" tabindex="-1"><a class="header-anchor" href="#jdk-和-jre" aria-hidden="true">#</a> JDK 和 JRE</h4>
<p>JDK 是 Java Development Kit 缩写，它是功能齐全的 Java SDK。它拥有 JRE 所拥有的一切，还有编译器（javac）和工具（如 javadoc 和 jdb）。它能够创建和编译程序。</p>
<p>JRE 是 Java 运行时环境。它是运行已编译 Java 程序所需的所有内容的集合，包括 Java 虚拟机（JVM），Java 类库，java 命令和其他的一些基础构件。但是，它不能用于创建新程序。</p>
<p>如果你只是为了运行一下 Java 程序的话，那么你只需要安装 JRE 就可以了。如果你需要进行一些 Java 编程方面的工作，那么你就需要安装 JDK 了。但是，这不是绝对的。有时，即使您不打算在计算机上进行任何 Java 开发，仍然需要安装 JDK。例如，如果要使用 JSP 部署 Web 应用程序，那么从技术上讲，您只是在应用程序服务器中运行 Java 程序。那你为什么需要 JDK 呢？因为应用程序服务器会将 JSP 转换为 Java servlet，并且需要使用 JDK 来编译 servlet。</p>
<h3 id="为什么说-java-语言-编译与解释并存" tabindex="-1"><a class="header-anchor" href="#为什么说-java-语言-编译与解释并存" aria-hidden="true">#</a> 为什么说 Java 语言“编译与解释并存”？</h3>
<p>高级编程语言按照程序的执行方式分为编译型和解释型两种。简单来说，编译型语言是指编译器针对特定的操作系统将源代码一次性翻译成可被该平台执行的机器码；解释型语言是指解释器对源程序逐行解释成特定平台的机器码并立即执行。比如，你想阅读一本英文名著，你可以找一个英文翻译人员帮助你阅读，
有两种选择方式，你可以先等翻译人员将全本的英文名著（也就是源码）都翻译成汉语，再去阅读，也可以让翻译人员翻译一段，你在旁边阅读一段，慢慢把书读完。</p>
<p>Java 语言既具有编译型语言的特征，也具有解释型语言的特征，因为 Java 程序要经过先编译，后解释两个步骤，由 Java 编写的程序需要先经过编译步骤，生成字节码（<code v-pre>*.class</code> 文件），这种字节码必须由 Java 解释器来解释执行。因此，我们可以认为 Java 语言编译与解释并存。</p>
<h3 id="oracle-jdk-和-openjdk-的对比" tabindex="-1"><a class="header-anchor" href="#oracle-jdk-和-openjdk-的对比" aria-hidden="true">#</a> Oracle JDK 和 OpenJDK 的对比</h3>
<p>可能在看这个问题之前很多人和我一样并没有接触和使用过 OpenJDK 。那么 Oracle JDK 和 OpenJDK 之间是否存在重大差异？下面我通过收集到的一些资料，为你解答这个被很多人忽视的问题。</p>
<p>对于 Java 7，没什么关键的地方。OpenJDK 项目主要基于 Sun 捐赠的 HotSpot 源代码。此外，OpenJDK 被选为 Java 7 的参考实现，由 Oracle 工程师维护。关于 JVM，JDK，JRE 和 OpenJDK 之间的区别，Oracle 博客帖子在 2012 年有一个更详细的答案：</p>
<blockquote>
<p>问：OpenJDK 存储库中的源代码与用于构建 Oracle JDK 的代码之间有什么区别？</p>
<p>答：非常接近 - 我们的 Oracle JDK 版本构建过程基于 OpenJDK 7 构建，只添加了几个部分，例如部署代码，其中包括 Oracle 的 Java 插件和 Java WebStart 的实现，以及一些闭源的第三方组件，如图形光栅化器，一些开源的第三方组件，如 Rhino，以及一些零碎的东西，如附加文档或第三方字体。展望未来，我们的目的是开源 Oracle JDK 的所有部分，除了我们考虑商业功能的部分。</p>
</blockquote>
<p><strong>总结：</strong></p>
<ol>
<li>Oracle JDK 大概每 6 个月发一次主要版本，而 OpenJDK 版本大概每三个月发布一次。但这不是固定的，我觉得了解这个没啥用处。详情参见：<a href="https://blogs.oracle.com/java-platform-group/update-and-faq-on-the-java-se-release-cadence" target="_blank" rel="noopener noreferrer">https://blogs.oracle.com/java-platform-group/update-and-faq-on-the-java-se-release-cadence<ExternalLinkIcon/></a> 。</li>
<li>OpenJDK 是一个参考模型并且是完全开源的，而 Oracle JDK 是 OpenJDK 的一个实现，并不是完全开源的；</li>
<li>Oracle JDK 比 OpenJDK 更稳定。OpenJDK 和 Oracle JDK 的代码几乎相同，但 Oracle JDK 有更多的类和一些错误修复。因此，如果您想开发企业/商业软件，我建议您选择 Oracle JDK，因为它经过了彻底的测试和稳定。某些情况下，有些人提到在使用 OpenJDK 可能会遇到了许多应用程序崩溃的问题，但是，只需切换到 Oracle JDK 就可以解决问题；</li>
<li>在响应性和 JVM 性能方面，Oracle JDK 与 OpenJDK 相比提供了更好的性能；</li>
<li>Oracle JDK 不会为即将发布的版本提供长期支持，用户每次都必须通过更新到最新版本获得支持来获取最新版本；</li>
<li>Oracle JDK 使用 BCL/OTN 协议获得许可，而 OpenJDK 根据 GPL v2 许可获得许可。</li>
</ol>
<p>🌈 拓展一下：</p>
<ul>
<li>BCL 协议（Oracle Binary Code License Agreement）： 可以使用JDK（支持商用），但是不能进行修改。</li>
<li>OTN 协议（Oracle Technology Network License Agreement）： 11 及之后新发布的JDK用的都是这个协议，可以自己私下用，但是商用需要付费。</li>
</ul>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/java-guide-blog/20210425151835918.png" alt=""></p>
<p>相关阅读👍：<a href="https://www.baeldung.com/oracle-jdk-vs-openjdk" target="_blank" rel="noopener noreferrer">《Differences Between Oracle JDK and OpenJDK》<ExternalLinkIcon/></a></p>
<h3 id="java-和-c-的区别" tabindex="-1"><a class="header-anchor" href="#java-和-c-的区别" aria-hidden="true">#</a> Java 和 C++的区别?</h3>
<p>我知道很多人没学过 C++，但是面试官就是没事喜欢拿咱们 Java 和 C++ 比呀！没办法！！！就算没学过 C++，也要记下来！</p>
<ul>
<li>都是面向对象的语言，都支持封装、继承和多态</li>
<li>Java 不提供指针来直接访问内存，程序内存更加安全</li>
<li>Java 的类是单继承的，C++ 支持多重继承；虽然 Java 的类不可以多继承，但是接口可以多继承。</li>
<li>Java 有自动内存管理垃圾回收机制(GC)，不需要程序员手动释放无用内存。</li>
<li>C ++同时支持方法重载和操作符重载，但是 Java 只支持方法重载（操作符重载增加了复杂性，这与 Java 最初的设计思想不符）。</li>
<li>......</li>
</ul>
<h3 id="import-java-和-javax-有什么区别" tabindex="-1"><a class="header-anchor" href="#import-java-和-javax-有什么区别" aria-hidden="true">#</a> import java 和 javax 有什么区别？</h3>
<p>刚开始的时候 JavaAPI 所必需的包是 java 开头的包，javax 当时只是扩展 API 包来使用。然而随着时间的推移，javax 逐渐地扩展成为 Java API 的组成部分。但是，将扩展从 javax 包移动到 java 包确实太麻烦了，最终会破坏一堆现有的代码。因此，最终决定 javax 包将成为标准 API 的一部分。</p>
<p>所以，实际上 java 和 javax 没有区别。这都是一个名字。</p>
<h2 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法" aria-hidden="true">#</a> 基本语法</h2>
<h3 id="字符型常量和字符串常量的区别" tabindex="-1"><a class="header-anchor" href="#字符型常量和字符串常量的区别" aria-hidden="true">#</a> 字符型常量和字符串常量的区别?</h3>
<ol>
<li>
<p><strong>形式</strong> : 字符常量是单引号引起的一个字符，字符串常量是双引号引起的 0 个或若干个字符</p>
</li>
<li>
<p><strong>含义</strong> : 字符常量相当于一个整型值( ASCII 值),可以参加表达式运算; 字符串常量代表一个地址值(该字符串在内存中存放位置)</p>
</li>
<li>
<p><strong>占内存大小</strong> ： 字符常量只占 2 个字节; 字符串常量占若干个字节 (<strong>注意： char 在 Java 中占两个字节</strong>),</p>
<blockquote>
<p>字符封装类 <code v-pre>Character</code> 有一个成员常量 <code v-pre>Character.SIZE</code> 值为 16,单位是<code v-pre>bits</code>,该值除以 8(<code v-pre>1byte=8bits</code>)后就可以得到 2 个字节</p>
</blockquote>
</li>
</ol>
<blockquote>
<p>java 编程思想第四版：2.2.2 节
<img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/18-9-15/86735519.jpg" alt=""></p>
</blockquote>
<h3 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h3>
<p>Java 中的注释有三种：</p>
<ol>
<li>
<p>单行注释</p>
</li>
<li>
<p>多行注释</p>
</li>
<li>
<p>文档注释。</p>
</li>
</ol>
<p>在我们编写代码的时候，如果代码量比较少，我们自己或者团队其他成员还可以很轻易地看懂代码，但是当项目结构一旦复杂起来，我们就需要用到注释了。注释并不会执行(编译器在编译代码之前会把代码中的所有注释抹掉,字节码中不保留注释)，是我们程序员写给自己看的，注释是你的代码说明书，能够帮助看代码的人快速地理清代码之间的逻辑关系。因此，在写程序的时候随手加上注释是一个非常好的习惯。</p>
<p>《Clean Code》这本书明确指出：</p>
<blockquote>
<p><strong>代码的注释不是越详细越好。实际上好的代码本身就是注释，我们要尽量规范和美化自己的代码来减少不必要的注释。</strong></p>
<p><strong>若编程语言足够有表达力，就不需要注释，尽量通过代码来阐述。</strong></p>
<p>举个例子：</p>
<p>去掉下面复杂的注释，只需要创建一个与注释所言同一事物的函数即可</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// check to see if the employee is eligible for full benefits</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>employee<span class="token punctuation">.</span>flags <span class="token operator">&amp;</span> <span class="token constant">HOURLY_FLAG</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>employee<span class="token punctuation">.</span>age <span class="token operator">></span> <span class="token number">65</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>应替换为</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>employee<span class="token punctuation">.</span><span class="token function">isEligibleForFullBenefits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote>
<h3 id="标识符和关键字的区别是什么" tabindex="-1"><a class="header-anchor" href="#标识符和关键字的区别是什么" aria-hidden="true">#</a> 标识符和关键字的区别是什么？</h3>
<p>在我们编写程序的时候，需要大量地为程序、类、变量、方法等取名字，于是就有了标识符，简单来说，标识符就是一个名字。但是有一些标识符，Java 语言已经赋予了其特殊的含义，只能用于特定的地方，这种特殊的标识符就是关键字。因此，关键字是被赋予特殊含义的标识符。比如，在我们的日常生活中 ，“警察局”这个名字已经被赋予了特殊的含义，所以如果你开一家店，店的名字不能叫“警察局”，“警察局”就是我们日常生活中的关键字。</p>
<h3 id="java-中有哪些常见的关键字" tabindex="-1"><a class="header-anchor" href="#java-中有哪些常见的关键字" aria-hidden="true">#</a> Java 中有哪些常见的关键字？</h3>
<table>
<thead>
<tr>
<th style="text-align:left">分类</th>
<th>关键字</th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">访问控制</td>
<td>private</td>
<td>protected</td>
<td>public</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td style="text-align:left">类，方法和变量修饰符</td>
<td>abstract</td>
<td>class</td>
<td>extends</td>
<td>final</td>
<td>implements</td>
<td>interface</td>
<td>native</td>
</tr>
<tr>
<td style="text-align:left"></td>
<td>new</td>
<td>static</td>
<td>strictfp</td>
<td>synchronized</td>
<td>transient</td>
<td>volatile</td>
<td></td>
</tr>
<tr>
<td style="text-align:left">程序控制</td>
<td>break</td>
<td>continue</td>
<td>return</td>
<td>do</td>
<td>while</td>
<td>if</td>
<td>else</td>
</tr>
<tr>
<td style="text-align:left"></td>
<td>for</td>
<td>instanceof</td>
<td>switch</td>
<td>case</td>
<td>default</td>
<td></td>
<td></td>
</tr>
<tr>
<td style="text-align:left">错误处理</td>
<td>try</td>
<td>catch</td>
<td>throw</td>
<td>throws</td>
<td>finally</td>
<td></td>
<td></td>
</tr>
<tr>
<td style="text-align:left">包相关</td>
<td>import</td>
<td>package</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td style="text-align:left">基本类型</td>
<td>boolean</td>
<td>byte</td>
<td>char</td>
<td>double</td>
<td>float</td>
<td>int</td>
<td>long</td>
</tr>
<tr>
<td style="text-align:left"></td>
<td>short</td>
<td>null</td>
<td>true</td>
<td>false</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td style="text-align:left">变量引用</td>
<td>super</td>
<td>this</td>
<td>void</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td style="text-align:left">保留字</td>
<td>goto</td>
<td>const</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="自增自减运算符" tabindex="-1"><a class="header-anchor" href="#自增自减运算符" aria-hidden="true">#</a> 自增自减运算符</h3>
<p>在写代码的过程中，常见的一种情况是需要某个整数类型变量增加 1 或减少 1，Java 提供了一种特殊的运算符，用于这种表达式，叫做自增运算符（++)和自减运算符（--）。</p>
<p>++和--运算符可以放在变量之前，也可以放在变量之后，当运算符放在变量之前时(前缀)，先自增/减，再赋值；当运算符放在变量之后时(后缀)，先赋值，再自增/减。例如，当 <code v-pre>b = ++a</code> 时，先自增（自己增加 1），再赋值（赋值给 b）；当 <code v-pre>b = a++</code> 时，先赋值(赋值给 b)，再自增（自己增加 1）。也就是，++a 输出的是 a+1 的值，a++输出的是 a 值。用一句口诀就是：“符号在前就先加/减，符号在后就后加/减”。</p>
<h3 id="continue、break、和-return-的区别是什么" tabindex="-1"><a class="header-anchor" href="#continue、break、和-return-的区别是什么" aria-hidden="true">#</a> continue、break、和 return 的区别是什么？</h3>
<p>在循环结构中，当循环条件不满足或者循环次数达到要求时，循环会正常结束。但是，有时候可能需要在循环的过程中，当发生了某种条件之后 ，提前终止循环，这就需要用到下面几个关键词：</p>
<ol>
<li>continue ：指跳出当前的这一次循环，继续下一次循环。</li>
<li>break ：指跳出整个循环体，继续执行循环下面的语句。</li>
</ol>
<p>return 用于跳出所在方法，结束该方法的运行。return 一般有两种用法：</p>
<ol>
<li><code v-pre>return;</code> ：直接使用 return 结束方法执行，用于没有返回值函数的方法</li>
<li><code v-pre>return value;</code> ：return 一个特定值，用于有返回值函数的方法</li>
</ol>
<h3 id="java-泛型了解么-什么是类型擦除-介绍一下常用的通配符" tabindex="-1"><a class="header-anchor" href="#java-泛型了解么-什么是类型擦除-介绍一下常用的通配符" aria-hidden="true">#</a> Java 泛型了解么？什么是类型擦除？介绍一下常用的通配符？</h3>
<p>Java 泛型（generics）是 JDK 5 中引入的一个新特性, 泛型提供了编译时类型安全检测机制，该机制允许程序员在编译时检测到非法的类型。泛型的本质是参数化类型，也就是说所操作的数据类型被指定为一个参数。</p>
<p>Java 的泛型是伪泛型，这是因为 Java 在运行期间，所有的泛型信息都会被擦掉，这也就是通常所说类型擦除 。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//这里直接添加会报错</span>
list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">List</span><span class="token punctuation">></span></span> clazz <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Method</span> add <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getDeclaredMethod</span><span class="token punctuation">(</span><span class="token string">"add"</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//但是通过反射添加，是可以的</span>
add<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> <span class="token string">"kl"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>泛型一般有三种使用方式:泛型类、泛型接口、泛型方法。</p>
<p><strong>1.泛型类</strong>：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//此处T可以随便写为任意标识，常见的如T、E、K、V等形式的参数常用于表示泛型</span>
<span class="token comment">//在实例化泛型类时，必须指定T的具体类型</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Generic</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">T</span> key<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Generic</span><span class="token punctuation">(</span><span class="token class-name">T</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>key <span class="token operator">=</span> key<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> key<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如何实例化泛型类：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">Generic</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> genericInteger <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Generic</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token number">123456</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2.泛型接口</strong> ：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Generator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现泛型接口，不指定类型：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">GeneratorImpl</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token keyword">implements</span> <span class="token class-name">Generator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现泛型接口，指定类型：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">GeneratorImpl</span> <span class="token keyword">implements</span> <span class="token class-name">Generator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"hello"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3.泛型方法</strong> ：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> <span class="token keyword">void</span> <span class="token function">printArray</span><span class="token punctuation">(</span><span class="token class-name">E</span><span class="token punctuation">[</span><span class="token punctuation">]</span> inputArray<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">E</span> element <span class="token operator">:</span> inputArray<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%s "</span><span class="token punctuation">,</span> element<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 创建不同类型数组： Integer, Double 和 Character</span>
<span class="token class-name">Integer</span><span class="token punctuation">[</span><span class="token punctuation">]</span> intArray <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> stringArray <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">"Hello"</span><span class="token punctuation">,</span> <span class="token string">"World"</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">printArray</span><span class="token punctuation">(</span>intArray<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">printArray</span><span class="token punctuation">(</span>stringArray<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>常用的通配符为： T，E，K，V，？</strong></p>
<ul>
<li>？ 表示不确定的 java 类型</li>
<li>T (type) 表示具体的一个 java 类型</li>
<li>K V (key value) 分别代表 java 键值中的 Key Value</li>
<li>E (element) 代表 Element</li>
</ul>
<h3 id="和-equals-的区别" tabindex="-1"><a class="header-anchor" href="#和-equals-的区别" aria-hidden="true">#</a> ==和 equals 的区别</h3>
<p>对于基本数据类型来说，==比较的是值。对于引用数据类型来说，==比较的是对象的内存地址。</p>
<blockquote>
<p>因为 Java 只有值传递，所以，对于 == 来说，不管是比较基本数据类型，还是引用数据类型的变量，其本质比较的都是值，只是引用类型变量存的值是对象的地址。</p>
</blockquote>
<p><strong><code v-pre>equals()</code></strong> 作用不能用于判断基本数据类型的变量，只能用来判断两个对象是否相等。<code v-pre>equals()</code>方法存在于<code v-pre>Object</code>类中，而<code v-pre>Object</code>类是所有类的直接或间接父类。</p>
<p><code v-pre>Object</code> 类 <code v-pre>equals()</code> 方法：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">==</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>equals()</code> 方法存在两种使用情况：</p>
<ul>
<li><strong>类没有覆盖 <code v-pre>equals()</code>方法</strong> ：通过<code v-pre>equals()</code>比较该类的两个对象时，等价于通过“==”比较这两个对象，使用的默认是 <code v-pre>Object</code>类<code v-pre>equals()</code>方法。</li>
<li><strong>类覆盖了 <code v-pre>equals()</code>方法</strong> ：一般我们都覆盖 <code v-pre>equals()</code>方法来比较两个对象中的属性是否相等；若它们的属性相等，则返回 true(即，认为这两个对象相等)。</li>
</ul>
<p><strong>举个例子：</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> test1 <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">"ab"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a 为一个引用</span>
        <span class="token class-name">String</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">"ab"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// b为另一个引用,对象的内容一样</span>
        <span class="token class-name">String</span> aa <span class="token operator">=</span> <span class="token string">"ab"</span><span class="token punctuation">;</span> <span class="token comment">// 放在常量池中</span>
        <span class="token class-name">String</span> bb <span class="token operator">=</span> <span class="token string">"ab"</span><span class="token punctuation">;</span> <span class="token comment">// 从常量池中查找</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>aa <span class="token operator">==</span> bb<span class="token punctuation">)</span> <span class="token comment">// true</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"aa==bb"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">==</span> b<span class="token punctuation">)</span> <span class="token comment">// false，非同一对象</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"a==b"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"aEQb"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">42</span> <span class="token operator">==</span> <span class="token number">42.0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// true</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"true"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>说明：</strong></p>
<ul>
<li><code v-pre>String</code> 中的 <code v-pre>equals</code> 方法是被重写过的，因为 <code v-pre>Object</code> 的 <code v-pre>equals</code> 方法是比较的对象的内存地址，而 <code v-pre>String</code> 的 <code v-pre>equals</code> 方法比较的是对象的值。</li>
<li>当创建 <code v-pre>String</code> 类型的对象时，虚拟机会在常量池中查找有没有已经存在的值和要创建的值相同的对象，如果有就把它赋给当前引用。如果没有就在常量池中重新创建一个 <code v-pre>String</code> 对象。</li>
</ul>
<p><code v-pre>String</code>类<code v-pre>equals()</code>方法：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> anObject<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">==</span> anObject<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>anObject <span class="token keyword">instanceof</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> anotherString <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span>anObject<span class="token punctuation">;</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> value<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> anotherString<span class="token punctuation">.</span>value<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">char</span> v1<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
            <span class="token keyword">char</span> v2<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> anotherString<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
            <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>n<span class="token operator">--</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>v1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> v2<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
                    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                i<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hashcode-与-equals" tabindex="-1"><a class="header-anchor" href="#hashcode-与-equals" aria-hidden="true">#</a> hashCode()与 equals()</h3>
<p>面试官可能会问你：“你重写过 <code v-pre>hashcode</code> 和 <code v-pre>equals</code>么，为什么重写 <code v-pre>equals</code> 时必须重写 <code v-pre>hashCode</code> 方法？”</p>
<p><strong>1)hashCode()介绍:</strong></p>
<p><code v-pre>hashCode()</code> 的作用是获取哈希码，也称为散列码；它实际上是返回一个 int 整数。这个哈希码的作用是确定该对象在哈希表中的索引位置。<code v-pre>hashCode()</code>定义在 JDK 的 <code v-pre>Object</code> 类中，这就意味着 Java 中的任何类都包含有 <code v-pre>hashCode()</code> 函数。另外需要注意的是： <code v-pre>Object</code> 的 hashcode 方法是本地方法，也就是用 c 语言或 c++ 实现的，该方法通常用来将对象的 内存地址 转换为整数之后返回。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">native</span> <span class="token keyword">int</span> <span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>散列表存储的是键值对(key-value)，它的特点是：能根据“键”快速的检索出对应的“值”。这其中就利用到了散列码！（可以快速找到所需要的对象）</p>
<p><strong>2)为什么要有 hashCode？</strong></p>
<p>我们以“<code v-pre>HashSet</code> 如何检查重复”为例子来说明为什么要有 hashCode？</p>
<p>当你把对象加入 <code v-pre>HashSet</code> 时，<code v-pre>HashSet</code> 会先计算对象的 hashcode 值来判断对象加入的位置，同时也会与其他已经加入的对象的 hashcode 值作比较，如果没有相符的 hashcode，<code v-pre>HashSet</code> 会假设对象没有重复出现。但是如果发现有相同 hashcode 值的对象，这时会调用 <code v-pre>equals()</code> 方法来检查 hashcode 相等的对象是否真的相同。如果两者相同，<code v-pre>HashSet</code> 就不会让其加入操作成功。如果不同的话，就会重新散列到其他位置。（摘自我的 Java 启蒙书《Head First Java》第二版）。这样我们就大大减少了 equals 的次数，相应就大大提高了执行速度。</p>
<p><strong>3)为什么重写 <code v-pre>equals</code> 时必须重写 <code v-pre>hashCode</code> 方法？</strong></p>
<p>如果两个对象相等，则 hashcode 一定也是相同的。两个对象相等,对两个对象分别调用 equals 方法都返回 true。但是，两个对象有相同的 hashcode 值，它们也不一定是相等的 。<strong>因此，equals 方法被覆盖过，则 <code v-pre>hashCode</code> 方法也必须被覆盖。</strong></p>
<blockquote>
<p><code v-pre>hashCode()</code>的默认行为是对堆上的对象产生独特值。如果没有重写 <code v-pre>hashCode()</code>，则该 class 的两个对象无论如何都不会相等（即使这两个对象指向相同的数据）</p>
</blockquote>
<p><strong>4)为什么两个对象有相同的 hashcode 值，它们也不一定是相等的？</strong></p>
<p>在这里解释一位小伙伴的问题。以下内容摘自《Head Fisrt Java》。</p>
<p>因为 <code v-pre>hashCode()</code> 所使用的哈希算法也许刚好会让多个对象传回相同的哈希值。越糟糕的哈希算法越容易碰撞，但这也与数据值域分布的特性有关（所谓碰撞也就是指的是不同的对象得到相同的 <code v-pre>hashCode</code> )。</p>
<p>我们刚刚也提到了 <code v-pre>HashSet</code>,如果 <code v-pre>HashSet</code> 在对比的时候，同样的 hashcode 有多个对象，它会使用 <code v-pre>equals()</code> 来判断是否真的相同。也就是说 <code v-pre>hashcode</code> 只是用来缩小查找成本。</p>
<p>更多关于 <code v-pre>hashcode()</code> 和 <code v-pre>equals()</code> 的内容可以查看：<a href="https://www.cnblogs.com/skywang12345/p/3324958.html" target="_blank" rel="noopener noreferrer">Java hashCode() 和 equals()的若干问题解答<ExternalLinkIcon/></a></p>
<h2 id="基本数据类型" tabindex="-1"><a class="header-anchor" href="#基本数据类型" aria-hidden="true">#</a> 基本数据类型</h2>
<h3 id="java-中的几种基本数据类型是什么-对应的包装类型是什么-各自占用多少字节呢" tabindex="-1"><a class="header-anchor" href="#java-中的几种基本数据类型是什么-对应的包装类型是什么-各自占用多少字节呢" aria-hidden="true">#</a> Java 中的几种基本数据类型是什么？对应的包装类型是什么？各自占用多少字节呢？</h3>
<p>Java 中有 8 种基本数据类型，分别为：</p>
<ol>
<li>6 种数字类型 ：<code v-pre>byte</code>、<code v-pre>short</code>、<code v-pre>int</code>、<code v-pre>long</code>、<code v-pre>float</code>、<code v-pre>double</code></li>
<li>1 种字符类型：<code v-pre>char</code></li>
<li>1 种布尔型：<code v-pre>boolean</code>。</li>
</ol>
<p>这 8 种基本数据类型的默认值以及所占空间的大小如下：</p>
<table>
<thead>
<tr>
<th style="text-align:left">基本类型</th>
<th style="text-align:left">位数</th>
<th style="text-align:left">字节</th>
<th style="text-align:left">默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>int</code></td>
<td style="text-align:left">32</td>
<td style="text-align:left">4</td>
<td style="text-align:left">0</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>short</code></td>
<td style="text-align:left">16</td>
<td style="text-align:left">2</td>
<td style="text-align:left">0</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>long</code></td>
<td style="text-align:left">64</td>
<td style="text-align:left">8</td>
<td style="text-align:left">0L</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>byte</code></td>
<td style="text-align:left">8</td>
<td style="text-align:left">1</td>
<td style="text-align:left">0</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>char</code></td>
<td style="text-align:left">16</td>
<td style="text-align:left">2</td>
<td style="text-align:left">'u0000'</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>float</code></td>
<td style="text-align:left">32</td>
<td style="text-align:left">4</td>
<td style="text-align:left">0f</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>double</code></td>
<td style="text-align:left">64</td>
<td style="text-align:left">8</td>
<td style="text-align:left">0d</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>boolean</code></td>
<td style="text-align:left">1</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
</tr>
</tbody>
</table>
<p>另外，对于 <code v-pre>boolean</code>，官方文档未明确定义，它依赖于 JVM 厂商的具体实现。逻辑上理解是占用 1 位，但是实际中会考虑计算机高效存储因素。</p>
<p><strong>注意：</strong></p>
<ol>
<li>Java 里使用 <code v-pre>long</code> 类型的数据一定要在数值后面加上 <strong>L</strong>，否则将作为整型解析。</li>
<li><code v-pre>char a = 'h'</code>char :单引号，<code v-pre>String a = &quot;hello&quot;</code> :双引号。</li>
</ol>
<p>这八种基本类型都有对应的包装类分别为：<code v-pre>Byte</code>、<code v-pre>Short</code>、<code v-pre>Integer</code>、<code v-pre>Long</code>、<code v-pre>Float</code>、<code v-pre>Double</code>、<code v-pre>Character</code>、<code v-pre>Boolean</code> 。</p>
<p>包装类型不赋值就是 <code v-pre>Null</code> ，而基本类型有默认值且不是 <code v-pre>Null</code>。</p>
<p>另外，这个问题建议还可以先从 JVM 层面来分析。</p>
<p>基本数据类型直接存放在 Java 虚拟机栈中的局部变量表中，而包装类型属于对象类型，我们知道对象实例都存在于堆中。相比于对象类型， 基本数据类型占用的空间非常小。</p>
<blockquote>
<p>《深入理解 Java 虚拟机》 ：局部变量表主要存放了编译期可知的基本数据类型 <strong>（boolean、byte、char、short、int、float、long、double）</strong>、<strong>对象引用</strong>（reference 类型，它不同于对象本身，可能是一个指向对象起始地址的引用指针，也可能是指向一个代表对象的句柄或其他与此对象相关的位置）。</p>
</blockquote>
<h3 id="自动装箱与拆箱" tabindex="-1"><a class="header-anchor" href="#自动装箱与拆箱" aria-hidden="true">#</a> 自动装箱与拆箱</h3>
<ul>
<li><strong>装箱</strong>：将基本类型用它们对应的引用类型包装起来；</li>
<li><strong>拆箱</strong>：将包装类型转换为基本数据类型；</li>
</ul>
<p>举例：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">Integer</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>  <span class="token comment">//装箱</span>
<span class="token keyword">int</span> n <span class="token operator">=</span> i<span class="token punctuation">;</span>   <span class="token comment">//拆箱</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这两行代码对应的字节码为：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>   <span class="token constant">L1</span>

    <span class="token constant">LINENUMBER</span> <span class="token number">8</span> <span class="token constant">L1</span>

    <span class="token constant">ALOAD</span> <span class="token number">0</span>

    <span class="token constant">BIPUSH</span> <span class="token number">10</span>

    <span class="token constant">INVOKESTATIC</span> java<span class="token operator">/</span>lang<span class="token operator">/</span><span class="token class-name">Integer</span><span class="token punctuation">.</span>valueOf <span class="token punctuation">(</span><span class="token class-name">I</span><span class="token punctuation">)</span><span class="token class-name">Ljava</span><span class="token operator">/</span>lang<span class="token operator">/</span><span class="token class-name">Integer</span><span class="token punctuation">;</span>

    <span class="token constant">PUTFIELD</span> <span class="token class-name">AutoBoxTest</span><span class="token punctuation">.</span>i <span class="token operator">:</span> <span class="token class-name">Ljava</span><span class="token operator">/</span>lang<span class="token operator">/</span><span class="token class-name">Integer</span><span class="token punctuation">;</span>

   <span class="token constant">L2</span>

    <span class="token constant">LINENUMBER</span> <span class="token number">9</span> <span class="token constant">L2</span>

    <span class="token constant">ALOAD</span> <span class="token number">0</span>

    <span class="token constant">ALOAD</span> <span class="token number">0</span>

    <span class="token constant">GETFIELD</span> <span class="token class-name">AutoBoxTest</span><span class="token punctuation">.</span>i <span class="token operator">:</span> <span class="token class-name">Ljava</span><span class="token operator">/</span>lang<span class="token operator">/</span><span class="token class-name">Integer</span><span class="token punctuation">;</span>

    <span class="token constant">INVOKEVIRTUAL</span> java<span class="token operator">/</span>lang<span class="token operator">/</span><span class="token class-name">Integer</span><span class="token punctuation">.</span>intValue <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token class-name">I</span>

    <span class="token constant">PUTFIELD</span> <span class="token class-name">AutoBoxTest</span><span class="token punctuation">.</span>n <span class="token operator">:</span> <span class="token class-name">I</span>

    <span class="token constant">RETURN</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从字节码中，我们发现装箱其实就是调用了 包装类的<code v-pre>valueOf()</code>方法，拆箱其实就是调用了 <code v-pre>xxxValue()</code>方法。</p>
<p>因此，</p>
<ul>
<li><code v-pre>Integer i = 10</code> 等价于 <code v-pre>Integer i = Integer.valueOf(10)</code></li>
<li><code v-pre>int n = i</code> 等价于 <code v-pre>int n = i.intValue()</code>;</li>
</ul>
<h3 id="_8-种基本类型的包装类和常量池" tabindex="-1"><a class="header-anchor" href="#_8-种基本类型的包装类和常量池" aria-hidden="true">#</a> 8 种基本类型的包装类和常量池</h3>
<p>Java 基本类型的包装类的大部分都实现了常量池技术。<code v-pre>Byte</code>,<code v-pre>Short</code>,<code v-pre>Integer</code>,<code v-pre>Long</code> 这 4 种包装类默认创建了数值 <strong>[-128，127]</strong> 的相应类型的缓存数据，<code v-pre>Character</code> 创建了数值在[0,127]范围的缓存数据，<code v-pre>Boolean</code> 直接返回 <code v-pre>True</code> Or <code v-pre>False</code>。</p>
<p><strong>Integer 缓存源码：</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**

*此方法将始终缓存-128 到 127（包括端点）范围内的值，并可以缓存此范围之外的其他值。

*/</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Integer</span> <span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">>=</span> <span class="token class-name">IntegerCache</span><span class="token punctuation">.</span>low <span class="token operator">&amp;&amp;</span> i <span class="token operator">&lt;=</span> <span class="token class-name">IntegerCache</span><span class="token punctuation">.</span>high<span class="token punctuation">)</span>

      <span class="token keyword">return</span> <span class="token class-name">IntegerCache</span><span class="token punctuation">.</span>cache<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token operator">-</span><span class="token class-name">IntegerCache</span><span class="token punctuation">.</span>low<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">IntegerCache</span> <span class="token punctuation">{</span>

    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> low <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">128</span><span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> high<span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Integer</span> cache<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code v-pre>Character</code> 缓存源码:</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Character</span> <span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token keyword">char</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">&lt;=</span> <span class="token number">127</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// must cache</span>

      <span class="token keyword">return</span> <span class="token class-name">CharacterCache</span><span class="token punctuation">.</span>cache<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>c<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Character</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>



<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">CharacterCache</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">CharacterCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>



    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Character</span> cache<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Character</span><span class="token punctuation">[</span><span class="token number">127</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token punctuation">{</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> cache<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>

            cache<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Character</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code v-pre>Boolean</code> 缓存源码：</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Boolean</span> <span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>b <span class="token operator">?</span> <span class="token constant">TRUE</span> <span class="token operator">:</span> <span class="token constant">FALSE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果超出对应范围仍然会去创建新的对象，缓存的范围区间的大小只是在性能和资源之间的权衡。</p>
<p>两种浮点数类型的包装类 <code v-pre>Float</code>,<code v-pre>Double</code> 并没有实现常量池技术。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">Integer</span> i1 <span class="token operator">=</span> <span class="token number">33</span><span class="token punctuation">;</span>

<span class="token class-name">Integer</span> i2 <span class="token operator">=</span> <span class="token number">33</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i1 <span class="token operator">==</span> i2<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 输出 true</span>

<span class="token class-name">Float</span> i11 <span class="token operator">=</span> <span class="token number">333f</span><span class="token punctuation">;</span>

<span class="token class-name">Float</span> i22 <span class="token operator">=</span> <span class="token number">333f</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i11 <span class="token operator">==</span> i22<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 输出 false</span>

<span class="token class-name">Double</span> i3 <span class="token operator">=</span> <span class="token number">1.2</span><span class="token punctuation">;</span>

<span class="token class-name">Double</span> i4 <span class="token operator">=</span> <span class="token number">1.2</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i3 <span class="token operator">==</span> i4<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 输出 false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面我们来看一下问题。下面的代码的输出结果是 <code v-pre>true</code> 还是 <code v-pre>flase</code> 呢？</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">Integer</span> i1 <span class="token operator">=</span> <span class="token number">40</span><span class="token punctuation">;</span>

<span class="token class-name">Integer</span> i2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i1<span class="token operator">==</span>i2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>Integer i1=40</code> 这一行代码会发生装箱，也就是说这行代码等价于 <code v-pre>Integer i1=Integer.valueOf(40)</code> 。因此，<code v-pre>i1</code> 直接使用的是常量池中的对象。而<code v-pre>Integer i1 = new Integer(40)</code> 会直接创建新的对象。</p>
<p>因此，答案是 <code v-pre>false</code> 。你答对了吗？</p>
<p>记住：<strong>所有整型包装类对象之间值的比较，全部使用 equals 方法比较</strong>。</p>
<p><img src="https://img-blog.csdnimg.cn/20210422164544846.png" alt=""></p>
<h2 id="方法-函数" tabindex="-1"><a class="header-anchor" href="#方法-函数" aria-hidden="true">#</a> 方法（函数）</h2>
<h3 id="什么是方法的返回值" tabindex="-1"><a class="header-anchor" href="#什么是方法的返回值" aria-hidden="true">#</a> 什么是方法的返回值?</h3>
<p>方法的返回值是指我们获取到的某个方法体中的代码执行后产生的结果！（前提是该方法可能产生结果）。返回值的作用是接收出结果，使得它可以用于其他的操作！</p>
<h3 id="方法有哪几种类型" tabindex="-1"><a class="header-anchor" href="#方法有哪几种类型" aria-hidden="true">#</a> 方法有哪几种类型？</h3>
<p><strong>1.无参数无返回值的方法</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 无参数无返回值的方法(如果方法没有返回值，不能不写，必须写void，表示没有返回值)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"无参数无返回值的方法"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.有参数无返回值的方法</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
* 有参数无返回值的方法
* 参数列表由零组到多组“参数类型+形参名”组合而成，多组参数之间以英文逗号（,）隔开，形参类型和形参名之间以英文空格隔开
*/</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">f2</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token class-name">String</span> b<span class="token punctuation">,</span> <span class="token keyword">int</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">+</span> <span class="token string">"-->"</span> <span class="token operator">+</span> b <span class="token operator">+</span> <span class="token string">"-->"</span> <span class="token operator">+</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3.有返回值无参数的方法</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 有返回值无参数的方法（返回值可以是任意的类型,在函数里面必须有return关键字返回对应的类型）</span>
<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">f3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"有返回值无参数的方法"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4.有返回值有参数的方法</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 有返回值有参数的方法</span>
<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">f4</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">*</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>5.return 在无返回值方法的特殊使用</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// return在无返回值方法的特殊使用</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">f5</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">></span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span><span class="token comment">//表示结束所在方法 （f5方法）的执行,下方的输出语句不会执行</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在一个静态方法内调用一个非静态成员为什么是非法的" tabindex="-1"><a class="header-anchor" href="#在一个静态方法内调用一个非静态成员为什么是非法的" aria-hidden="true">#</a> 在一个静态方法内调用一个非静态成员为什么是非法的?</h3>
<p>这个需要结合 JVM 的相关知识，静态方法是属于类的，在类加载的时候就会分配内存，可以通过类名直接访问。而非静态成员属于实例对象，只有在对象实例化之后才存在，然后通过类的实例对象去访问。在类的非静态成员不存在的时候静态成员就已经存在了，此时调用在内存中还不存在的非静态成员，属于非法操作。</p>
<h3 id="静态方法和实例方法有何不同" tabindex="-1"><a class="header-anchor" href="#静态方法和实例方法有何不同" aria-hidden="true">#</a> 静态方法和实例方法有何不同？</h3>
<p><strong>1、调用方式</strong></p>
<p>在外部调用静态方法时，可以使用 <code v-pre>类名.方法名</code> 的方式，也可以使用 <code v-pre>对象.方法名</code> 的方式，而实例方法只有后面这种方式。也就是说，<strong>调用静态方法可以无需创建对象</strong> 。</p>
<p>不过，需要注意的是一般不建议使用 <code v-pre>对象.方法名</code> 的方式来调用静态方法。这种方式非常容易造成混淆，静态方法不属于类的某个对象而是属于这个类。</p>
<p>因此，一般建议使用  <code v-pre>类名.方法名</code> 的方式来调用静态方法。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
      <span class="token comment">//......</span>
    <span class="token punctuation">}</span>
 
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">staicMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token comment">//......</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Person</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 调用实例方法</span>
        person<span class="token punctuation">.</span><span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
        <span class="token comment">// 调用静态方法</span>
        <span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token function">staicMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2、访问类成员是否存在限制</strong></p>
<p>静态方法在访问本类的成员时，只允许访问静态成员（即静态成员变量和静态方法），不允许访问实例成员（即实例成员变量和实例方法），而实例方法不存在这个限制。</p>
<h3 id="为什么-java-中只有值传递" tabindex="-1"><a class="header-anchor" href="#为什么-java-中只有值传递" aria-hidden="true">#</a> 为什么 Java 中只有值传递？</h3>
<p>首先，我们回顾一下在程序设计语言中有关将参数传递给方法（或函数）的一些专业术语。</p>
<p><strong>按值调用(call by value)</strong> 表示方法接收的是调用者提供的值，<strong>按引用调用（call by reference)</strong> 表示方法接收的是调用者提供的变量地址。一个方法可以修改传递引用所对应的变量值，而不能修改传递值调用所对应的变量值。它用来描述各种程序设计语言（不只是 Java）中方法参数传递方式。</p>
<p><strong>Java 程序设计语言总是采用按值调用。也就是说，方法得到的是所有参数值的一个拷贝，也就是说，方法不能修改传递给它的任何参数变量的内容。</strong></p>
<p><strong>下面通过 3 个例子来给大家说明</strong></p>
<blockquote>
<p><strong>example 1</strong></p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> num1 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> num2 <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>

    <span class="token function">swap</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"num1 = "</span> <span class="token operator">+</span> num1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"num2 = "</span> <span class="token operator">+</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> temp <span class="token operator">=</span> a<span class="token punctuation">;</span>
    a <span class="token operator">=</span> b<span class="token punctuation">;</span>
    b <span class="token operator">=</span> temp<span class="token punctuation">;</span>

    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"a = "</span> <span class="token operator">+</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"b = "</span> <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>结果：</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>a = 20
b = 10
num1 = 10
num2 = 20
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解析：</strong></p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/18-9-27/22191348.jpg" alt="example 1 "></p>
<p>在 swap 方法中，a、b 的值进行交换，并不会影响到 num1、num2。因为，a、b 中的值，只是从 num1、num2 的复制过来的。也就是说，a、b 相当于 num1、num2 的副本，副本的内容无论怎么修改，都不会影响到原件本身。</p>
<p><strong>通过上面例子，我们已经知道了一个方法不能修改一个基本数据类型的参数，而对象引用作为参数就不一样，请看 example2.</strong></p>
<blockquote>
<p><strong>example 2</strong></p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">change</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">change</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 将数组的第一个元素变为0</span>
		array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>结果：</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1
0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解析：</strong></p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/18-9-27/3825204.jpg" alt="example 2"></p>
<p>array 被初始化 arr 的拷贝也就是一个对象的引用，也就是说 array 和 arr 指向的是同一个数组对象。 因此，外部对引用对象的改变会反映到所对应的对象上。</p>
<p><strong>通过 example2 我们已经看到，实现一个改变对象参数状态的方法并不是一件难事。理由很简单，方法得到的是对象引用的拷贝，对象引用及其他的拷贝同时引用同一个对象。</strong></p>
<p><strong>很多程序设计语言（特别是，C++和 Pascal)提供了两种参数传递的方式：值调用和引用调用。有些程序员（甚至本书的作者）认为 Java 程序设计语言对对象采用的是引用调用，实际上，这种理解是不对的。由于这种误解具有一定的普遍性，所以下面给出一个反例来详细地阐述一下这个问题。</strong></p>
<blockquote>
<p><strong>example 3</strong></p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// TODO Auto-generated method stub</span>
		<span class="token class-name">Student</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">"小张"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">Student</span> s2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">"小李"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">Test</span><span class="token punctuation">.</span><span class="token function">swap</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"s1:"</span> <span class="token operator">+</span> s1<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"s2:"</span> <span class="token operator">+</span> s2<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token class-name">Student</span> x<span class="token punctuation">,</span> <span class="token class-name">Student</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">Student</span> temp <span class="token operator">=</span> x<span class="token punctuation">;</span>
		x <span class="token operator">=</span> y<span class="token punctuation">;</span>
		y <span class="token operator">=</span> temp<span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"x:"</span> <span class="token operator">+</span> x<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"y:"</span> <span class="token operator">+</span> y<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>结果：</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>x:小李
y:小张
s1:小张
s2:小李
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解析：</strong></p>
<p>交换之前：</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/18-9-27/88729818.jpg" alt=""></p>
<p>交换之后：</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/18-9-27/34384414.jpg" alt=""></p>
<p>通过上面两张图可以很清晰的看出： <strong>方法并没有改变存储在变量 s1 和 s2 中的对象引用。swap 方法的参数 x 和 y 被初始化为两个对象引用的拷贝，这个方法交换的是这两个拷贝</strong></p>
<blockquote>
<p><strong>总结</strong></p>
</blockquote>
<p>Java 程序设计语言对对象采用的不是引用调用，实际上，对象引用是按
值传递的。</p>
<p>下面再总结一下 Java 中方法参数的使用情况：</p>
<ul>
<li>一个方法不能修改一个基本数据类型的参数（即数值型或布尔型）。</li>
<li>一个方法可以改变一个对象参数的状态。</li>
<li>一个方法不能让对象参数引用一个新的对象。</li>
</ul>
<p><strong>参考：</strong></p>
<p>《Java 核心技术卷 Ⅰ》基础知识第十版第四章 4.5 小节</p>
<h3 id="重载和重写的区别" tabindex="-1"><a class="header-anchor" href="#重载和重写的区别" aria-hidden="true">#</a> 重载和重写的区别</h3>
<blockquote>
<p>重载就是同样的一个方法能够根据输入数据的不同，做出不同的处理</p>
<p>重写就是当子类继承自父类的相同方法，输入数据一样，但要做出有别于父类的响应时，你就要覆盖父类方法</p>
</blockquote>
<h4 id="重载" tabindex="-1"><a class="header-anchor" href="#重载" aria-hidden="true">#</a> 重载</h4>
<p>发生在同一个类中（或者父类和子类之间），方法名必须相同，参数类型不同、个数不同、顺序不同，方法返回值和访问修饰符可以不同。</p>
<p>下面是《Java 核心技术》对重载这个概念的介绍：</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/bg/desktopjava核心技术-重载.jpg" alt=""></p>
<p>综上：重载就是同一个类中多个同名方法根据不同的传参来执行不同的逻辑处理。</p>
<h4 id="重写" tabindex="-1"><a class="header-anchor" href="#重写" aria-hidden="true">#</a> 重写</h4>
<p>重写发生在运行期，是子类对父类的允许访问的方法的实现过程进行重新编写。</p>
<ol>
<li>返回值类型、方法名、参数列表必须相同，抛出的异常范围小于等于父类，访问修饰符范围大于等于父类。</li>
<li>如果父类方法访问修饰符为 <code v-pre>private/final/static</code> 则子类就不能重写该方法，但是被 static 修饰的方法能够被再次声明。</li>
<li>构造方法无法被重写</li>
</ol>
<p>综上：重写就是子类对父类方法的重新改造，外部样子不能改变，内部逻辑可以改变</p>
<p>暖心的 Guide 哥最后再来个图表总结一下！</p>
<table>
<thead>
<tr>
<th style="text-align:left">区别点</th>
<th style="text-align:left">重载方法</th>
<th style="text-align:left">重写方法</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">发生范围</td>
<td style="text-align:left">同一个类</td>
<td style="text-align:left">子类</td>
</tr>
<tr>
<td style="text-align:left">参数列表</td>
<td style="text-align:left">必须修改</td>
<td style="text-align:left">一定不能修改</td>
</tr>
<tr>
<td style="text-align:left">返回类型</td>
<td style="text-align:left">可修改</td>
<td style="text-align:left">子类方法返回值类型应比父类方法返回值类型更小或相等</td>
</tr>
<tr>
<td style="text-align:left">异常</td>
<td style="text-align:left">可修改</td>
<td style="text-align:left">子类方法声明抛出的异常类应比父类方法声明抛出的异常类更小或相等；</td>
</tr>
<tr>
<td style="text-align:left">访问修饰符</td>
<td style="text-align:left">可修改</td>
<td style="text-align:left">一定不能做更严格的限制（可以降低限制）</td>
</tr>
<tr>
<td style="text-align:left">发生阶段</td>
<td style="text-align:left">编译期</td>
<td style="text-align:left">运行期</td>
</tr>
</tbody>
</table>
<p><strong>方法的重写要遵循“两同两小一大”</strong>（以下内容摘录自《疯狂 Java 讲义》,<a href="https://github.com/Snailclimb/JavaGuide/issues/892" target="_blank" rel="noopener noreferrer">issue#892<ExternalLinkIcon/></a> ）：</p>
<ul>
<li>“两同”即方法名相同、形参列表相同；</li>
<li>“两小”指的是子类方法返回值类型应比父类方法返回值类型更小或相等，子类方法声明抛出的异常类应比父类方法声明抛出的异常类更小或相等；</li>
<li>“一大”指的是子类方法的访问权限应比父类方法的访问权限更大或相等。</li>
</ul>
<p>⭐️ 关于 <strong>重写的返回值类型</strong> 这里需要额外多说明一下，上面的表述不太清晰准确：如果方法的返回类型是 void 和基本数据类型，则返回值重写时不可修改。但是如果方法的返回值是引用类型，重写时是可以返回该引用类型的子类的。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Hero</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"超级英雄"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SuperMan</span> <span class="token keyword">extends</span> <span class="token class-name">Hero</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"超人"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">Hero</span> <span class="token function">hero</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Hero</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SuperSuperMan</span> <span class="token keyword">extends</span> <span class="token class-name">SuperMan</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"超级超级英雄"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">SuperMan</span> <span class="token function">hero</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">SuperMan</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="深拷贝-vs-浅拷贝" tabindex="-1"><a class="header-anchor" href="#深拷贝-vs-浅拷贝" aria-hidden="true">#</a> 深拷贝 vs 浅拷贝</h3>
<ol>
<li><strong>浅拷贝</strong>：对基本数据类型进行值传递，对引用数据类型进行引用传递般的拷贝，此为浅拷贝。</li>
<li><strong>深拷贝</strong>：对基本数据类型进行值传递，对引用数据类型，创建一个新的对象，并复制其内容，此为深拷贝。</li>
</ol>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-7/java-deep-and-shallow-copy.jpg" alt="deep and shallow copy"></p>
<h2 id="java-面向对象" tabindex="-1"><a class="header-anchor" href="#java-面向对象" aria-hidden="true">#</a> Java 面向对象</h2>
<h3 id="面向对象和面向过程的区别" tabindex="-1"><a class="header-anchor" href="#面向对象和面向过程的区别" aria-hidden="true">#</a> 面向对象和面向过程的区别</h3>
<ul>
<li><strong>面向过程</strong> ：<strong>面向过程性能比面向对象高。</strong> 因为类调用时需要实例化，开销比较大，比较消耗资源，所以当性能是最重要的考量因素的时候，比如单片机、嵌入式开发、Linux/Unix 等一般采用面向过程开发。但是，<strong>面向过程没有面向对象易维护、易复用、易扩展。</strong></li>
<li><strong>面向对象</strong> ：<strong>面向对象易维护、易复用、易扩展。</strong> 因为面向对象有封装、继承、多态性的特性，所以可以设计出低耦合的系统，使系统更加灵活、更加易于维护。但是，<strong>面向对象性能比面向过程低</strong>。</li>
</ul>
<p>参见 issue : <a href="https://github.com/Snailclimb/JavaGuide/issues/431" target="_blank" rel="noopener noreferrer">面向过程 ：面向过程性能比面向对象高？？<ExternalLinkIcon/></a></p>
<blockquote>
<p>这个并不是根本原因，面向过程也需要分配内存，计算内存偏移量，Java 性能差的主要原因并不是因为它是面向对象语言，而是 Java 是半编译语言，最终的执行代码并不是可以直接被 CPU 执行的二进制机械码。</p>
<p>而面向过程语言大多都是直接编译成机械码在电脑上执行，并且其它一些面向过程的脚本语言性能也并不一定比 Java 好。</p>
</blockquote>
<h3 id="成员变量与局部变量的区别有哪些" tabindex="-1"><a class="header-anchor" href="#成员变量与局部变量的区别有哪些" aria-hidden="true">#</a> 成员变量与局部变量的区别有哪些？</h3>
<ol>
<li>从语法形式上看，成员变量是属于类的，而局部变量是在代码块或方法中定义的变量或是方法的参数；成员变量可以被 <code v-pre>public</code>,<code v-pre>private</code>,<code v-pre>static</code> 等修饰符所修饰，而局部变量不能被访问控制修饰符及 <code v-pre>static</code> 所修饰；但是，成员变量和局部变量都能被 <code v-pre>final</code> 所修饰。</li>
<li>从变量在内存中的存储方式来看,如果成员变量是使用 <code v-pre>static</code> 修饰的，那么这个成员变量是属于类的，如果没有使用 <code v-pre>static</code> 修饰，这个成员变量是属于实例的。而对象存在于堆内存，局部变量则存在于栈内存。</li>
<li>从变量在内存中的生存时间上看，成员变量是对象的一部分，它随着对象的创建而存在，而局部变量随着方法的调用而自动消失。</li>
<li>从变量是否有默认值来看，成员变量如果没有被赋初，则会自动以类型的默认值而赋值（一种情况例外:被 <code v-pre>final</code> 修饰的成员变量也必须显式地赋值），而局部变量则不会自动赋值。</li>
</ol>
<h3 id="创建一个对象用什么运算符-对象实体与对象引用有何不同" tabindex="-1"><a class="header-anchor" href="#创建一个对象用什么运算符-对象实体与对象引用有何不同" aria-hidden="true">#</a> 创建一个对象用什么运算符?对象实体与对象引用有何不同?</h3>
<p>new 运算符，new 创建对象实例（对象实例在堆内存中），对象引用指向对象实例（对象引用存放在栈内存中）。</p>
<p>一个对象引用可以指向 0 个或 1 个对象（一根绳子可以不系气球，也可以系一个气球）;一个对象可以有 n 个引用指向它（可以用 n 条绳子系住一个气球）。</p>
<h3 id="对象的相等与指向他们的引用相等-两者有什么不同" tabindex="-1"><a class="header-anchor" href="#对象的相等与指向他们的引用相等-两者有什么不同" aria-hidden="true">#</a> 对象的相等与指向他们的引用相等,两者有什么不同?</h3>
<p>对象的相等，比的是内存中存放的内容是否相等。而引用相等，比较的是他们指向的内存地址是否相等。</p>
<h3 id="一个类的构造方法的作用是什么-若一个类没有声明构造方法-该程序能正确执行吗-为什么" tabindex="-1"><a class="header-anchor" href="#一个类的构造方法的作用是什么-若一个类没有声明构造方法-该程序能正确执行吗-为什么" aria-hidden="true">#</a> 一个类的构造方法的作用是什么? 若一个类没有声明构造方法，该程序能正确执行吗? 为什么?</h3>
<p>构造方法主要作用是完成对类对象的初始化工作。</p>
<p>如果一个类没有声明构造方法，也可以执行！因为一个类即使没有声明构造方法也会有默认的不带参数的构造方法。如果我们自己添加了类的构造方法（无论是否有参），Java 就不会再添加默认的无参数的构造方法了，这时候，就不能直接 new 一个对象而不传递参数了，所以我们一直在不知不觉地使用构造方法，这也是为什么我们在创建对象的时候后面要加一个括号（因为要调用无参的构造方法）。如果我们重载了有参的构造方法，记得都要把无参的构造方法也写出来（无论是否用到），因为这可以帮助我们在创建对象的时候少踩坑。</p>
<h3 id="构造方法有哪些特点-是否可被-override" tabindex="-1"><a class="header-anchor" href="#构造方法有哪些特点-是否可被-override" aria-hidden="true">#</a> 构造方法有哪些特点？是否可被 override?</h3>
<p>特点：</p>
<ol>
<li>名字与类名相同。</li>
<li>没有返回值，但不能用 void 声明构造函数。</li>
<li>生成类的对象时自动执行，无需调用。</li>
</ol>
<p>构造方法不能被 override（重写）,但是可以 overload（重载）,所以你可以看到一个类中有多个构造函数的情况。</p>
<h3 id="面向对象三大特征" tabindex="-1"><a class="header-anchor" href="#面向对象三大特征" aria-hidden="true">#</a> 面向对象三大特征</h3>
<h4 id="封装" tabindex="-1"><a class="header-anchor" href="#封装" aria-hidden="true">#</a> 封装</h4>
<p>封装是指把一个对象的状态信息（也就是属性）隐藏在对象内部，不允许外部对象直接访问对象的内部信息。但是可以提供一些可以被外界访问的方法来操作属性。就好像我们看不到挂在墙上的空调的内部的零件信息（也就是属性），但是可以通过遥控器（方法）来控制空调。如果属性不想被外界访问，我们大可不必提供方法给外界访问。但是如果一个类没有提供给外界访问的方法，那么这个类也没有什么意义了。就好像如果没有空调遥控器，那么我们就无法操控空凋制冷，空调本身就没有意义了（当然现在还有很多其他方法 ，这里只是为了举例子）。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> id<span class="token punctuation">;</span><span class="token comment">//id属性私有化</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span><span class="token comment">//name属性私有化</span>

    <span class="token comment">//获取id的方法</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//设置id的方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setId</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//获取name的方法</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//设置name的方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h4>
<p>不同类型的对象，相互之间经常有一定数量的共同点。例如，小明同学、小红同学、小李同学，都共享学生的特性（班级、学号等）。同时，每一个对象还定义了额外的特性使得他们与众不同。例如小明的数学比较好，小红的性格惹人喜爱；小李的力气比较大。继承是使用已存在的类的定义作为基础建立新类的技术，新类的定义可以增加新的数据或新的功能，也可以用父类的功能，但不能选择性地继承父类。通过使用继承，可以快速地创建新的类，可以提高代码的重用，程序的可维护性，节省大量创建新类的时间 ，提高我们的开发效率。</p>
<p><strong>关于继承如下 3 点请记住：</strong></p>
<ol>
<li>子类拥有父类对象所有的属性和方法（包括私有属性和私有方法），但是父类中的私有属性和方法子类是无法访问，<strong>只是拥有</strong>。</li>
<li>子类可以拥有自己属性和方法，即子类可以对父类进行扩展。</li>
<li>子类可以用自己的方式实现父类的方法。（以后介绍）。</li>
</ol>
<h4 id="多态" tabindex="-1"><a class="header-anchor" href="#多态" aria-hidden="true">#</a> 多态</h4>
<p>多态，顾名思义，表示一个对象具有多种的状态。具体表现为父类的引用指向子类的实例。</p>
<p><strong>多态的特点:</strong></p>
<ul>
<li>对象类型和引用类型之间具有继承（类）/实现（接口）的关系；</li>
<li>引用类型变量发出的方法调用的到底是哪个类中的方法，必须在程序运行期间才能确定；</li>
<li>多态不能调用“只在子类存在但在父类不存在”的方法；</li>
<li>如果子类重写了父类的方法，真正执行的是子类覆盖的方法，如果子类没有覆盖父类的方法，执行的是父类的方法。</li>
</ul>
<h3 id="string-stringbuffer-和-stringbuilder-的区别是什么-string-为什么是不可变的" tabindex="-1"><a class="header-anchor" href="#string-stringbuffer-和-stringbuilder-的区别是什么-string-为什么是不可变的" aria-hidden="true">#</a> String StringBuffer 和 StringBuilder 的区别是什么? String 为什么是不可变的?</h3>
<p><strong>可变性</strong></p>
<p>简单的来说：<code v-pre>String</code> 类中使用 final 关键字修饰字符数组来保存字符串，<code v-pre>private final char value[]</code>，所以<code v-pre>String</code> 对象是不可变的。</p>
<blockquote>
<p>补充（来自<a href="https://github.com/Snailclimb/JavaGuide/issues/675" target="_blank" rel="noopener noreferrer">issue 675<ExternalLinkIcon/></a>）：在 Java 9 之后，String 、<code v-pre>StringBuilder</code> 与 <code v-pre>StringBuffer</code> 的实现改用 byte 数组存储字符串 <code v-pre>private final byte[] value</code></p>
</blockquote>
<p>而 <code v-pre>StringBuilder</code> 与 <code v-pre>StringBuffer</code> 都继承自 <code v-pre>AbstractStringBuilder</code> 类，在 <code v-pre>AbstractStringBuilder</code> 中也是使用字符数组保存字符串<code v-pre>char[]value</code> 但是没有用 <code v-pre>final</code> 关键字修饰，所以这两种对象都是可变的。</p>
<p><code v-pre>StringBuilder</code> 与 <code v-pre>StringBuffer</code> 的构造方法都是调用父类构造方法也就是<code v-pre>AbstractStringBuilder</code> 实现的，大家可以自行查阅源码。</p>
<p><code v-pre>AbstractStringBuilder.java</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractStringBuilder</span> <span class="token keyword">implements</span> <span class="token class-name">Appendable</span><span class="token punctuation">,</span> <span class="token class-name">CharSequence</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * The value is used for character storage.
     */</span>
    <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> value<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * The count is the number of characters used.
     */</span>
    <span class="token keyword">int</span> count<span class="token punctuation">;</span>

    <span class="token class-name">AbstractStringBuilder</span><span class="token punctuation">(</span><span class="token keyword">int</span> capacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        value <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">char</span><span class="token punctuation">[</span>capacity<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>线程安全性</strong></p>
<p><code v-pre>String</code> 中的对象是不可变的，也就可以理解为常量，线程安全。<code v-pre>AbstractStringBuilder</code> 是 <code v-pre>StringBuilder</code> 与 <code v-pre>StringBuffer</code> 的公共父类，定义了一些字符串的基本操作，如 <code v-pre>expandCapacity</code>、<code v-pre>append</code>、<code v-pre>insert</code>、<code v-pre>indexOf</code> 等公共方法。<code v-pre>StringBuffer</code> 对方法加了同步锁或者对调用的方法加了同步锁，所以是线程安全的。<code v-pre>StringBuilder</code> 并没有对方法进行加同步锁，所以是非线程安全的。</p>
<p><strong>性能</strong></p>
<p>每次对 <code v-pre>String</code> 类型进行改变的时候，都会生成一个新的 <code v-pre>String</code> 对象，然后将指针指向新的 <code v-pre>String</code> 对象。<code v-pre>StringBuffer</code> 每次都会对 <code v-pre>StringBuffer</code> 对象本身进行操作，而不是生成新的对象并改变对象引用。相同情况下使用 <code v-pre>StringBuilder</code> 相比使用 <code v-pre>StringBuffer</code> 仅能获得 10%~15% 左右的性能提升，但却要冒多线程不安全的风险。</p>
<p><strong>对于三者使用的总结：</strong></p>
<ol>
<li>操作少量的数据: 适用 <code v-pre>String</code></li>
<li>单线程操作字符串缓冲区下操作大量数据: 适用 <code v-pre>StringBuilder</code></li>
<li>多线程操作字符串缓冲区下操作大量数据: 适用 <code v-pre>StringBuffer</code></li>
</ol>
<h3 id="object-类的常见方法总结" tabindex="-1"><a class="header-anchor" href="#object-类的常见方法总结" aria-hidden="true">#</a> Object 类的常见方法总结</h3>
<p>Object 类是一个特殊的类，是所有类的父类。它主要提供了以下 11 个方法：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">native</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> <span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//native方法，用于返回当前运行时对象的Class对象，使用了final关键字修饰，故不允许子类重写。</span>

<span class="token keyword">public</span> <span class="token keyword">native</span> <span class="token keyword">int</span> <span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//native方法，用于返回对象的哈希码，主要使用在哈希表中，比如JDK中的HashMap。</span>
<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span><span class="token comment">//用于比较2个对象的内存地址是否相等，String类对该方法进行了重写用户比较字符串的值是否相等。</span>

<span class="token keyword">protected</span> <span class="token keyword">native</span> <span class="token class-name">Object</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">CloneNotSupportedException</span><span class="token comment">//naitive方法，用于创建并返回当前对象的一份拷贝。一般情况下，对于任何对象 x，表达式 x.clone() != x 为true，x.clone().getClass() == x.getClass() 为true。Object本身没有实现Cloneable接口，所以不重写clone方法并且进行调用的话会发生CloneNotSupportedException异常。</span>

<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//返回类的名字@实例的哈希码的16进制的字符串。建议Object所有的子类都重写这个方法。</span>

<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">native</span> <span class="token keyword">void</span> <span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//native方法，并且不能重写。唤醒一个在此对象监视器上等待的线程(监视器相当于就是锁的概念)。如果有多个线程在等待只会任意唤醒一个。</span>

<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">native</span> <span class="token keyword">void</span> <span class="token function">notifyAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//native方法，并且不能重写。跟notify一样，唯一的区别就是会唤醒在此对象监视器上等待的所有线程，而不是一个线程。</span>

<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">native</span> <span class="token keyword">void</span> <span class="token function">wait</span><span class="token punctuation">(</span><span class="token keyword">long</span> timeout<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span><span class="token comment">//native方法，并且不能重写。暂停线程的执行。注意：sleep方法没有释放锁，而wait方法释放了锁 。timeout是等待时间。</span>

<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">wait</span><span class="token punctuation">(</span><span class="token keyword">long</span> timeout<span class="token punctuation">,</span> <span class="token keyword">int</span> nanos<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span><span class="token comment">//多了nanos参数，这个参数表示额外时间（以毫微秒为单位，范围是 0-999999）。 所以超时的时间还需要加上nanos毫秒。</span>

<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span><span class="token comment">//跟之前的2个wait方法一样，只不过该方法一直等待，没有超时时间这个概念</span>

<span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">finalize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token comment">//实例被垃圾回收器回收的时候触发的操作</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反射" tabindex="-1"><a class="header-anchor" href="#反射" aria-hidden="true">#</a> 反射</h2>
<h3 id="何为反射" tabindex="-1"><a class="header-anchor" href="#何为反射" aria-hidden="true">#</a> 何为反射？</h3>
<p>如果说大家研究过框架的底层原理或者咱们自己写过框架的话，一定对反射这个概念不陌生。</p>
<p>反射之所以被称为框架的灵魂，主要是因为它赋予了我们在运行时分析类以及执行类中方法的能力。</p>
<p>通过反射你可以获取任意一个类的所有属性和方法，你还可以调用这些方法和属性。</p>
<h3 id="反射机制优缺点" tabindex="-1"><a class="header-anchor" href="#反射机制优缺点" aria-hidden="true">#</a> 反射机制优缺点</h3>
<ul>
<li><strong>优点</strong> ： 可以让咱们的代码更加灵活、为各种框架提供开箱即用的功能提供了便利</li>
<li><strong>缺点</strong> ：让我们在运行时有了分析操作类的能力，这同样也增加了安全问题。比如可以无视泛型参数的安全检查（泛型参数的安全检查发生在编译时）。另外，反射的性能也要稍差点，不过，对于框架来说实际是影响不大的。<a href="https://stackoverflow.com/questions/1392351/java-reflection-why-is-it-so-slow" target="_blank" rel="noopener noreferrer">Java Reflection: Why is it so slow?<ExternalLinkIcon/></a></li>
</ul>
<h3 id="反射的应用场景" tabindex="-1"><a class="header-anchor" href="#反射的应用场景" aria-hidden="true">#</a> 反射的应用场景</h3>
<p>像咱们平时大部分时候都是在写业务代码，很少会接触到直接使用反射机制的场景。</p>
<p>但是，这并不代表反射没有用。相反，正是因为反射，你才能这么轻松地使用各种框架。像 Spring/Spring Boot、MyBatis 等等框架中都大量使用了反射机制。</p>
<p><strong>这些框架中也大量使用了动态代理，而动态代理的实现也依赖反射。</strong></p>
<p>比如下面是通过 JDK 实现动态代理的示例代码，其中就使用了反射类 <code v-pre>Method</code> 来调用指定的方法。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DebugInvocationHandler</span> <span class="token keyword">implements</span> <span class="token class-name">InvocationHandler</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 代理类中的真实对象
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Object</span> target<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">DebugInvocationHandler</span><span class="token punctuation">(</span><span class="token class-name">Object</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>target <span class="token operator">=</span> target<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">invoke</span><span class="token punctuation">(</span><span class="token class-name">Object</span> proxy<span class="token punctuation">,</span> <span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InvocationTargetException</span><span class="token punctuation">,</span> <span class="token class-name">IllegalAccessException</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"before method "</span> <span class="token operator">+</span> method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> result <span class="token operator">=</span> method<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"after method "</span> <span class="token operator">+</span> method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，像 Java 中的一大利器 <strong>注解</strong> 的实现也用到了反射。</p>
<p>为什么你使用 Spring 的时候 ，一个<code v-pre>@Component</code>注解就声明了一个类为 Spring Bean 呢？为什么你通过一个 <code v-pre>@Value</code>注解就读取到配置文件中的值呢？究竟是怎么起作用的呢？</p>
<p>这些都是因为你可以基于反射分析类，然后获取到类/属性/方法/方法的参数上的注解。你获取到注解之后，就可以做进一步的处理。</p>
<h2 id="异常" tabindex="-1"><a class="header-anchor" href="#异常" aria-hidden="true">#</a> 异常</h2>
<h3 id="java-异常类层次结构图" tabindex="-1"><a class="header-anchor" href="#java-异常类层次结构图" aria-hidden="true">#</a> Java 异常类层次结构图</h3>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-12/Java异常类层次结构图.png" alt=""></p>
<p style="font-size:13px;text-align:right">图片来自：https://simplesnippets.tech/exception-handling-in-java-part-1/</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-12/Java异常类层次结构图2.png" alt=""></p>
<p style="font-size:13px;text-align:right">图片来自：https://chercher.tech/java-programming/exceptions-java</p>
<p>在 Java 中，所有的异常都有一个共同的祖先 <code v-pre>java.lang</code> 包中的 <code v-pre>Throwable</code> 类。<code v-pre>Throwable</code> 类有两个重要的子类 <code v-pre>Exception</code>（异常）和 <code v-pre>Error</code>（错误）。<code v-pre>Exception</code> 能被程序本身处理(<code v-pre>try-catch</code>)， <code v-pre>Error</code> 是无法处理的(只能尽量避免)。</p>
<p><code v-pre>Exception</code> 和 <code v-pre>Error</code> 二者都是 Java 异常处理的重要子类，各自都包含大量子类。</p>
<ul>
<li><strong><code v-pre>Exception</code></strong> :程序本身可以处理的异常，可以通过 <code v-pre>catch</code> 来进行捕获。<code v-pre>Exception</code> 又可以分为 受检查异常(必须处理) 和 不受检查异常(可以不处理)。</li>
<li><strong><code v-pre>Error</code></strong> ：<code v-pre>Error</code> 属于程序无法处理的错误 ，我们没办法通过 <code v-pre>catch</code> 来进行捕获 。例如，Java 虚拟机运行错误（<code v-pre>Virtual MachineError</code>）、虚拟机内存不够错误(<code v-pre>OutOfMemoryError</code>)、类定义错误（<code v-pre>NoClassDefFoundError</code>）等 。这些异常发生时，Java 虚拟机（JVM）一般会选择线程终止。</li>
</ul>
<p><strong>受检查异常</strong></p>
<p>Java 代码在编译过程中，如果受检查异常没有被 <code v-pre>catch</code>/<code v-pre>throw</code> 处理的话，就没办法通过编译 。比如下面这段 IO 操作的代码。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-12/check-exception.png" alt="check-exception"></p>
<p>除了<code v-pre>RuntimeException</code>及其子类以外，其他的<code v-pre>Exception</code>类及其子类都属于受检查异常 。常见的受检查异常有： IO 相关的异常、<code v-pre>ClassNotFoundException</code> 、<code v-pre>SQLException</code>...。</p>
<p><strong>不受检查异常</strong></p>
<p>Java 代码在编译过程中 ，我们即使不处理不受检查异常也可以正常通过编译。</p>
<p><code v-pre>RuntimeException</code> 及其子类都统称为非受检查异常，例如：<code v-pre>NullPointerException</code>、<code v-pre>NumberFormatException</code>（字符串转换为数字）、<code v-pre>ArrayIndexOutOfBoundsException</code>（数组越界）、<code v-pre>ClassCastException</code>（类型转换错误）、<code v-pre>ArithmeticException</code>（算术错误）等。</p>
<h3 id="throwable-类常用方法" tabindex="-1"><a class="header-anchor" href="#throwable-类常用方法" aria-hidden="true">#</a> Throwable 类常用方法</h3>
<ul>
<li><strong><code v-pre>public String getMessage()</code></strong>:返回异常发生时的简要描述</li>
<li><strong><code v-pre>public String toString()</code></strong>:返回异常发生时的详细信息</li>
<li><strong><code v-pre>public String getLocalizedMessage()</code></strong>:返回异常对象的本地化信息。使用 <code v-pre>Throwable</code> 的子类覆盖这个方法，可以生成本地化信息。如果子类没有覆盖该方法，则该方法返回的信息与 <code v-pre>getMessage()</code>返回的结果相同</li>
<li><strong><code v-pre>public void printStackTrace()</code></strong>:在控制台上打印 <code v-pre>Throwable</code> 对象封装的异常信息</li>
</ul>
<h3 id="try-catch-finally" tabindex="-1"><a class="header-anchor" href="#try-catch-finally" aria-hidden="true">#</a> try-catch-finally</h3>
<ul>
<li><strong><code v-pre>try</code>块：</strong> 用于捕获异常。其后可接零个或多个 <code v-pre>catch</code> 块，如果没有 <code v-pre>catch</code> 块，则必须跟一个 <code v-pre>finally</code> 块。</li>
<li><strong><code v-pre>catch</code>块：</strong> 用于处理 try 捕获到的异常。</li>
<li><strong><code v-pre>finally</code> 块：</strong> 无论是否捕获或处理异常，<code v-pre>finally</code> 块里的语句都会被执行。当在 <code v-pre>try</code> 块或 <code v-pre>catch</code> 块中遇到 <code v-pre>return</code> 语句时，<code v-pre>finally</code> 语句块将在方法返回之前被执行。</li>
</ul>
<p><strong>在以下 3 种特殊情况下，<code v-pre>finally</code> 块不会被执行：</strong></p>
<ol>
<li>在 <code v-pre>try</code> 或 <code v-pre>finally</code>块中用了 <code v-pre>System.exit(int)</code>退出程序。但是，如果 <code v-pre>System.exit(int)</code> 在异常语句之后，<code v-pre>finally</code> 还是会被执行</li>
<li>程序所在的线程死亡。</li>
<li>关闭 CPU。</li>
</ol>
<p>下面这部分内容来自 issue:<a href="https://github.com/Snailclimb/JavaGuide/issues/190" target="_blank" rel="noopener noreferrer">https://github.com/Snailclimb/JavaGuide/issues/190<ExternalLinkIcon/></a>。</p>
<p><strong>注意：</strong> 当 try 语句和 finally 语句中都有 return 语句时，在方法返回之前，finally 语句的内容将被执行，并且 finally 语句的返回值将会覆盖原始的返回值。如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">int</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> value <span class="token operator">*</span> value<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果调用 <code v-pre>f(2)</code>，返回值将是 0，因为 finally 语句的返回值覆盖了 try 语句块的返回值。</p>
<h3 id="使用-try-with-resources-来代替try-catch-finally" tabindex="-1"><a class="header-anchor" href="#使用-try-with-resources-来代替try-catch-finally" aria-hidden="true">#</a> 使用 <code v-pre>try-with-resources</code> 来代替<code v-pre>try-catch-finally</code></h3>
<ol>
<li><strong>适用范围（资源的定义）：</strong> 任何实现 <code v-pre>java.lang.AutoCloseable</code>或者 <code v-pre>java.io.Closeable</code> 的对象</li>
<li><strong>关闭资源和 finally 块的执行顺序：</strong> 在 <code v-pre>try-with-resources</code> 语句中，任何 catch 或 finally 块在声明的资源关闭后运行</li>
</ol>
<p>《Effecitve Java》中明确指出：</p>
<blockquote>
<p>面对必须要关闭的资源，我们总是应该优先使用 <code v-pre>try-with-resources</code> 而不是<code v-pre>try-finally</code>。随之产生的代码更简短，更清晰，产生的异常对我们也更有用。<code v-pre>try-with-resources</code>语句让我们更容易编写必须要关闭的资源的代码，若采用<code v-pre>try-finally</code>则几乎做不到这点。</p>
</blockquote>
<p>Java 中类似于<code v-pre>InputStream</code>、<code v-pre>OutputStream</code> 、<code v-pre>Scanner</code> 、<code v-pre>PrintWriter</code>等的资源都需要我们调用<code v-pre>close()</code>方法来手动关闭，一般情况下我们都是通过<code v-pre>try-catch-finally</code>语句来实现这个需求，如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>        <span class="token comment">//读取文本文件的内容</span>
        <span class="token class-name">Scanner</span> scanner <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            scanner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"D://read.txt"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>scanner<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>scanner<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">FileNotFoundException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>scanner <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                scanner<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 Java 7 之后的 <code v-pre>try-with-resources</code> 语句改造上面的代码:</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">Scanner</span> scanner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"test.txt"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>scanner<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>scanner<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">FileNotFoundException</span> fnfe<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fnfe<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然多个资源需要关闭的时候，使用 <code v-pre>try-with-resources</code> 实现起来也非常简单，如果你还是用<code v-pre>try-catch-finally</code>可能会带来很多问题。</p>
<p>通过使用分号分隔，可以在<code v-pre>try-with-resources</code>块中声明多个资源。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">BufferedInputStream</span> bin <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedInputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"test.txt"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token class-name">BufferedOutputStream</span> bout <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedOutputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"out.txt"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> b<span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>b <span class="token operator">=</span> bin<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                bout<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="i-o-流" tabindex="-1"><a class="header-anchor" href="#i-o-流" aria-hidden="true">#</a> I/O 流</h2>
<h3 id="什么是序列化-什么是反序列化" tabindex="-1"><a class="header-anchor" href="#什么是序列化-什么是反序列化" aria-hidden="true">#</a> 什么是序列化?什么是反序列化?</h3>
<p>如果我们需要持久化 Java 对象比如将 Java 对象保存在文件中，或者在网络传输 Java 对象，这些场景都需要用到序列化。</p>
<p>简单来说：</p>
<ul>
<li><strong>序列化</strong>： 将数据结构或对象转换成二进制字节流的过程</li>
<li><strong>反序列化</strong>：将在序列化过程中所生成的二进制字节流转换成数据结构或者对象的过程</li>
</ul>
<p>对于 Java 这种面向对象编程语言来说，我们序列化的都是对象（Object）也就是实例化后的类(Class)，但是在 C++这种半面向对象的语言中，struct(结构体)定义的是数据结构类型，而 class 对应的是对象类型。</p>
<p>维基百科是如是介绍序列化的：</p>
<blockquote>
<p><strong>序列化</strong>（serialization）在计算机科学的数据处理中，是指将数据结构或对象状态转换成可取用格式（例如存成文件，存于缓冲，或经由网络中发送），以留待后续在相同或另一台计算机环境中，能恢复原先状态的过程。依照序列化格式重新获取字节的结果时，可以利用它来产生与原始对象相同语义的副本。对于许多对象，像是使用大量引用的复杂对象，这种序列化重建的过程并不容易。面向对象中的对象序列化，并不概括之前原始对象所关系的函数。这种过程也称为对象编组（marshalling）。从一系列字节提取数据结构的反向操作，是反序列化（也称为解编组、deserialization、unmarshalling）。</p>
</blockquote>
<p>综上：<strong>序列化的主要目的是通过网络传输对象或者说是将对象存储到文件系统、数据库、内存中。</strong></p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2020-8/a478c74d-2c48-40ae-9374-87aacf05188c.png" alt=""></p>
<p style="text-align:right;font-size:13px;color:gray">https://www.corejavaguru.com/java/serialization/interview-questions-1</p>
<h3 id="java-序列化中如果有些字段不想进行序列化-怎么办" tabindex="-1"><a class="header-anchor" href="#java-序列化中如果有些字段不想进行序列化-怎么办" aria-hidden="true">#</a> Java 序列化中如果有些字段不想进行序列化，怎么办？</h3>
<p>对于不想进行序列化的变量，使用 <code v-pre>transient</code> 关键字修饰。</p>
<p><code v-pre>transient</code> 关键字的作用是：阻止实例中那些用此关键字修饰的的变量序列化；当对象被反序列化时，被 <code v-pre>transient</code> 修饰的变量值不会被持久化和恢复。</p>
<p>关于 <code v-pre>transient</code> 还有几点注意：</p>
<ul>
<li><code v-pre>transient</code> 只能修饰变量，不能修饰类和方法。</li>
<li><code v-pre>transient</code> 修饰的变量，在反序列化后变量值将会被置成类型的默认值。例如，如果是修饰 <code v-pre>int</code> 类型，那么反序列后结果就是 <code v-pre>0</code>。</li>
<li><code v-pre>static</code> 变量因为不属于任何对象(Object)，所以无论有没有 <code v-pre>transient</code> 关键字修饰，均不会被序列化。</li>
</ul>
<h3 id="获取用键盘输入常用的两种方法" tabindex="-1"><a class="header-anchor" href="#获取用键盘输入常用的两种方法" aria-hidden="true">#</a> 获取用键盘输入常用的两种方法</h3>
<p>方法 1：通过 <code v-pre>Scanner</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">Scanner</span> input <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s  <span class="token operator">=</span> input<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
input<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法 2：通过 <code v-pre>BufferedReader</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">BufferedReader</span> input <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s <span class="token operator">=</span> input<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="java-中-io-流分为几种" tabindex="-1"><a class="header-anchor" href="#java-中-io-流分为几种" aria-hidden="true">#</a> Java 中 IO 流分为几种?</h3>
<ul>
<li>按照流的流向分，可以分为输入流和输出流；</li>
<li>按照操作单元划分，可以划分为字节流和字符流；</li>
<li>按照流的角色划分为节点流和处理流。</li>
</ul>
<p>Java IO 流共涉及 40 多个类，这些类看上去很杂乱，但实际上很有规则，而且彼此之间存在非常紧密的联系， Java IO 流的 40 多个类都是从如下 4 个抽象类基类中派生出来的。</p>
<ul>
<li>InputStream/Reader: 所有的输入流的基类，前者是字节输入流，后者是字符输入流。</li>
<li>OutputStream/Writer: 所有输出流的基类，前者是字节输出流，后者是字符输出流。</li>
</ul>
<p>按操作方式分类结构图：</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/IO-操作方式分类.png" alt="IO-操作方式分类"></p>
<p>按操作对象分类结构图：</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/IO-操作对象分类.png" alt="IO-操作对象分类"></p>
<h3 id="既然有了字节流-为什么还要有字符流" tabindex="-1"><a class="header-anchor" href="#既然有了字节流-为什么还要有字符流" aria-hidden="true">#</a> 既然有了字节流,为什么还要有字符流?</h3>
<p>问题本质想问：<strong>不管是文件读写还是网络发送接收，信息的最小存储单元都是字节，那为什么 I/O 流操作要分为字节流操作和字符流操作呢？</strong></p>
<p>回答：字符流是由 Java 虚拟机将字节转换得到的，问题就出在这个过程还算是非常耗时，并且，如果我们不知道编码类型就很容易出现乱码问题。所以， I/O 流就干脆提供了一个直接操作字符的接口，方便我们平时对字符进行流操作。如果音频文件、图片等媒体文件用字节流比较好，如果涉及到字符的话使用字符流比较好。</p>
<h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>
<ul>
<li>https://stackoverflow.com/questions/1906445/what-is-the-difference-between-jdk-and-jre</li>
<li>https://www.educba.com/oracle-vs-openjdk/</li>
<li>https://stackoverflow.com/questions/22358071/differences-between-oracle-jdk-and-openjdk 基础概念与常识</li>
</ul>
</div></template>



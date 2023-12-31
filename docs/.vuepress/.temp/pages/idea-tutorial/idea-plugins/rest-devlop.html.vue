<template><div><p>开始推荐这个 IDEA 插件之前，我觉得有必要花一小会时间简单聊聊 <strong>REST</strong> 这个我们经常打交道的概念。</p>
<h2 id="rest-相关概念解读" tabindex="-1"><a class="header-anchor" href="#rest-相关概念解读" aria-hidden="true">#</a> REST 相关概念解读</h2>
<h3 id="何为-rest" tabindex="-1"><a class="header-anchor" href="#何为-rest" aria-hidden="true">#</a> 何为 REST？</h3>
<p>REST 即 <strong>REpresentational State Transfer</strong> 的缩写。这个词组的翻译过来就是&quot;<strong>表现层状态转化</strong>&quot;。</p>
<p>这样理解起来甚是晦涩，实际上 REST 的全称是 <strong>Resource Representational State Transfer</strong> ，直白地翻译过来就是 <strong>“资源”在网络传输中以某种“表现形式”进行“状态转移”</strong> 。</p>
<p><strong>有没有感觉很难理解？</strong></p>
<p>没关系，看了我对 REST 涉及到的一些概念的解读之后你没准就能理解了！</p>
<ul>
<li><strong>资源（Resource）</strong> ：我们可以把真实的对象数据称为资源。一个资源既可以是一个集合，也可以是单个个体。比如我们的班级 classes 是代表一个集合形式的资源，而特定的 class 代表单个个体资源。每一种资源都有特定的 URI（统一资源定位符）与之对应，如果我们需要获取这个资源，访问这个 URI 就可以了，比如获取特定的班级：<code v-pre>/class/12</code>。另外，资源也可以包含子资源，比如 <code v-pre>/classes/classId/teachers</code>：列出某个指定班级的所有老师的信息</li>
<li><strong>表现形式（Representational）</strong>：&quot;资源&quot;是一种信息实体，它可以有多种外在表现形式。我们把&quot;资源&quot;具体呈现出来的形式比如 json，xml，image,txt 等等叫做它的&quot;表现层/表现形式&quot;。</li>
<li><strong>状态转移（State Transfer）</strong> ：大家第一眼看到这个词语一定会很懵逼？内心 BB：这尼玛是啥啊？ <strong>大白话来说 REST 中的状态转移更多地描述的服务器端资源的状态，比如你通过增删改查（通过 HTTP 动词实现）引起资源状态的改变。</strong> （HTTP 协议是一个无状态的，所有的资源状态都保存在服务器端）</li>
</ul>
<h3 id="何为-restful-架构" tabindex="-1"><a class="header-anchor" href="#何为-restful-架构" aria-hidden="true">#</a> 何为 RESTful 架构？</h3>
<p>满足 REST 风格的架构设计就可以称为 RESTful 架构：</p>
<ol>
<li>每一个 URI 代表一种资源；</li>
<li>客户端和服务器之间，传递这种资源的某种表现形式比如 json，xml，image,txt 等等；</li>
<li>客户端通过特定的 HTTP 动词，对服务器端资源进行操作，实现&quot;表现层状态转化&quot;。</li>
</ol>
<h3 id="何为-restful-web-服务" tabindex="-1"><a class="header-anchor" href="#何为-restful-web-服务" aria-hidden="true">#</a> 何为 RESTful Web 服务？</h3>
<p>基于 REST 架构的 Web 服务就被称为 RESTful Web 服务。</p>
<h2 id="restful-web-服务辅助开发工具" tabindex="-1"><a class="header-anchor" href="#restful-web-服务辅助开发工具" aria-hidden="true">#</a> RESTful Web 服务辅助开发工具</h2>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>
<p>这个插件的名字叫做 “<strong>RestfulToolkit</strong>” 。我们直接在 IDEA 的插件市场即可找到这个插件。如下图所示。</p>
<blockquote>
<p>如果你因为网络问题没办法使用 IDEA 自带的插件市场的话，也可以通过<a href="https://plugins.jetbrains.com/idea" target="_blank" rel="noopener noreferrer">IDEA 插件市场的官网<ExternalLinkIcon/></a>手动下载安装。</p>
</blockquote>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/41a9bfa18920403ba4db83e324f8621e~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p>
<h3 id="简单使用" tabindex="-1"><a class="header-anchor" href="#简单使用" aria-hidden="true">#</a> 简单使用</h3>
<h4 id="url-跳转到对应方法" tabindex="-1"><a class="header-anchor" href="#url-跳转到对应方法" aria-hidden="true">#</a> URL 跳转到对应方法</h4>
<p>根据 URL 直接跳转到对应的方法定义 (Windows: <code v-pre>ctrl+\</code> or <code v-pre>ctrl+alt+n</code> Mac:<code v-pre>command+\</code> or <code v-pre>command+alt+n</code> )并且提供了一个服务的树形可视化显示窗口。 如下图所示。</p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c26ea05ad472488fbf9eb21627964bee~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p>
<h4 id="作为-http-请求工具" tabindex="-1"><a class="header-anchor" href="#作为-http-请求工具" aria-hidden="true">#</a> 作为 HTTP 请求工具</h4>
<p>这个插件还可以作为一个简单的 http 请求工具来使用。如下图所示。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/javaguide/RestfulToolkit2.png" alt=""></p>
<h4 id="复制生成-url、复制方法参数" tabindex="-1"><a class="header-anchor" href="#复制生成-url、复制方法参数" aria-hidden="true">#</a> 复制生成 URL、复制方法参数...</h4>
<p>这个插件还提供了生成 URL、查询参数、请求体（RequestBody）等功能。</p>
<p>举个例子。我们选中 <code v-pre>Controller</code> 中的某个请求对应的方法右击，你会发现多了几个可选项。当你选择<code v-pre>Generate &amp; Copy Full URL</code>的话，就可以把整个请求的路径直接复制下来。eg：<code v-pre>http://localhost:9333/api/users?pageNum=1&amp;pageSize=1</code> 。</p>
<p><img src="pictures/RestfulToolkit3.png" alt=""></p>
<h4 id="将-java-类转换为对应的-json-格式" tabindex="-1"><a class="header-anchor" href="#将-java-类转换为对应的-json-格式" aria-hidden="true">#</a> 将 Java 类转换为对应的 JSON 格式</h4>
<p>这个插件还为 Java 类上添加了 <strong>Convert to JSON</strong> 功能 。</p>
<p>我们选中的某个类对应的方法然后右击，你会发现多了几个可选项。</p>
<p><img src="pictures/RestfulToolkit4.png" alt=""></p>
<p>当我们选择<code v-pre>Convert to JSON</code>的话，你会得到如下 json 类型的数据：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"username"</span><span class="token operator">:</span> <span class="token string">"demoData"</span><span class="token punctuation">,</span>
  <span class="token property">"password"</span><span class="token operator">:</span> <span class="token string">"demoData"</span><span class="token punctuation">,</span>
  <span class="token property">"rememberMe"</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="后记" tabindex="-1"><a class="header-anchor" href="#后记" aria-hidden="true">#</a> 后记</h2>
<p>RESTFulToolkit 原作者不更新了，IDEA.201 及以上版本不再适配。</p>
<p>因此，国内就有一个大佬参考 RESTFulToolkit 开发了一款类似的插件——RestfulTool（功能较少一些，不过够用了）。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/javaguide/image-20210830112030237.png" alt=""></p>
</div></template>



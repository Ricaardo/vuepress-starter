<template><div><h1 id="idea-插件开发入门" tabindex="-1"><a class="header-anchor" href="#idea-插件开发入门" aria-hidden="true">#</a> IDEA 插件开发入门</h1>
<p>我这个人没事就喜欢推荐一些好用的 <a href="https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&amp;album_id=1319419426898329600&amp;__biz=Mzg2OTA0Njk0OA==#wechat_redirect" target="_blank" rel="noopener noreferrer">IDEA 插件<ExternalLinkIcon/></a>给大家。这些插件极大程度上提高了我们的生产效率以及编码舒适度。</p>
<p><strong>不知道大家有没有想过自己开发一款 IDEA 插件呢？</strong></p>
<p>我自己想过，但是没去尝试过。刚好有一位读者想让我写一篇入门 IDEA 开发的文章，所以，我在周末就花了一会时间简单了解一下。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-11/image-20201118071711216.png" alt=""></p>
<p>不过，<strong>这篇文章只是简单带各位小伙伴入门一下 IDEA 插件开发</strong>，个人精力有限，暂时不会深入探讨太多。如果你已经有 IDEA 插件开发的相关经验的话，这篇文章就可以不用看了，因为会浪费你 3 分钟的时间。</p>
<p>好的废话不多说！咱们直接开始!</p>
<h2 id="_01-新建一个基于-gradle-的插件项目" tabindex="-1"><a class="header-anchor" href="#_01-新建一个基于-gradle-的插件项目" aria-hidden="true">#</a> 01 新建一个基于 Gradle 的插件项目</h2>
<p>这里我们基于 Gradle 进行插件开发，这也是 IntelliJ 官方的推荐的插件开发解决方案。</p>
<p><strong>第一步，选择 Gradle 项目类型并勾选上相应的依赖。</strong></p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-11/1.png" alt="选择 Gradle 项目类型并勾选上相应的依赖"></p>
<p><strong>第二步，填写项目相关的属性比如 GroupId、ArtifactId。</strong></p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-11/2.png" alt="填写项目相关的属性"></p>
<p><strong>第三步，静静等待项目下载相关依赖。</strong></p>
<p>第一次创建 IDEA 插件项目的话，这一步会比较慢。因为要下载 IDEA 插件开发所需的 SDK 。</p>
<h2 id="_02-插件项目结构概览" tabindex="-1"><a class="header-anchor" href="#_02-插件项目结构概览" aria-hidden="true">#</a> 02 插件项目结构概览</h2>
<p>新建完成的项目结构如下图所示。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-11/插件项目结构概览.png" alt="插件项目结构概览"></p>
<p>这里需要额外注意的是下面这两个配置文件。</p>
<p><strong><code v-pre>plugin.xml</code> ：插件的核心配置文件。通过它可以配置插件名称、插件介绍、插件作者信息、Action 等信息。</strong></p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>idea-plugin</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">></span></span>github.javaguide.my-first-idea-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--插件的名称--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>Beauty<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--插件的作者相关信息--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vendor</span> <span class="token attr-name">email</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>koushuangbwcx@163.com<span class="token punctuation">"</span></span> <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://github.com/Snailclimb<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>JavaGuide<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vendor</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--插件的介绍--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>description</span><span class="token punctuation">></span></span><span class="token cdata">&lt;![CDATA[
     Guide哥代码开发的第一款IDEA插件&lt;br>
    &lt;em>这尼玛是什么垃圾插件！！！&lt;/em>
    ]]></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>description</span><span class="token punctuation">></span></span>

    <span class="token comment">&lt;!-- please see https://www.jetbrains.org/intellij/sdk/docs/basics/getting_started/plugin_compatibility.html
         on how to target different products --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>depends</span><span class="token punctuation">></span></span>com.intellij.modules.platform<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>depends</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>extensions</span> <span class="token attr-name">defaultExtensionNs</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.intellij<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- Add your extensions here --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>extensions</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>actions</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- Add your actions here --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>actions</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>idea-plugin</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code v-pre>build.gradle</code> ：项目依赖配置文件。通过它可以配置项目第三方依赖、插件版本、插件版本更新记录等信息。</strong></p>
<div class="language-groovy line-numbers-mode" data-ext="groovy"><pre v-pre class="language-groovy"><code>plugins <span class="token punctuation">{</span>
    id <span class="token string">'java'</span>
    id <span class="token string">'org.jetbrains.intellij'</span> version <span class="token string">'0.6.3'</span>
<span class="token punctuation">}</span>

group <span class="token string">'github.javaguide'</span>
<span class="token comment">// 当前插件版本</span>
version <span class="token string">'1.0-SNAPSHOT'</span>

repositories <span class="token punctuation">{</span>
    <span class="token function">mavenCentral</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 项目依赖</span>
dependencies <span class="token punctuation">{</span>
    testCompile group<span class="token punctuation">:</span> <span class="token string">'junit'</span><span class="token punctuation">,</span> name<span class="token punctuation">:</span> <span class="token string">'junit'</span><span class="token punctuation">,</span> version<span class="token punctuation">:</span> <span class="token string">'4.12'</span>
<span class="token punctuation">}</span>

<span class="token comment">// See https://github.com/JetBrains/gradle-intellij-plugin/</span>
<span class="token comment">// 当前开发该插件的 IDEA 版本</span>
intellij <span class="token punctuation">{</span>
    version <span class="token string">'2020.1.2'</span>
<span class="token punctuation">}</span>
patchPluginXml <span class="token punctuation">{</span>
    <span class="token comment">// 版本更新记录</span>
    changeNotes <span class="token interpolation-string"><span class="token string">"""
      Add change notes here.&lt;br>
      &lt;em>most HTML tags may be used&lt;/em>"""</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>没有开发过 IDEA 插件的小伙伴直接看这两个配置文件内容可能会有点蒙。所以，我专门找了一个 IDEA 插件市场提供的现成插件来说明一下。小伙伴们对照下面这张图来看下面的配置文件内容就非常非常清晰了。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-11/iShot2020-11-13 16.15.53.png" alt="插件信息"></p>
<p>这就非常贴心了！如果这都不能让你点赞，我要这文章有何用!</p>
<p><img src="http://wx1.sinaimg.cn/large/006BkP2Hly1fsxxff7zd9g304g0480td.gif" alt=""></p>
<h2 id="_03-手动创建-action" tabindex="-1"><a class="header-anchor" href="#_03-手动创建-action" aria-hidden="true">#</a> 03 手动创建 Action</h2>
<p>我们可以把 Action 看作是 IDEA 提高的事件响应处理器，通过 Action 我们可以自定义一些事件处理逻辑/动作。比如说你点击某个菜单的时候，我们进行一个展示对话框的操作。</p>
<p><strong>第一步，右键<code v-pre>java</code>目录并选择 new 一个 Action</strong></p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-11/新建action (1).png" alt=""></p>
<p><strong>第二步，配置 Action 相关信息比如展示名称。</strong></p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-11/配置动作属性 (1).png" alt="配置动作属性 (1)"></p>
<p>创建完成之后，我们的 <code v-pre>plugin.xml</code> 的 <code v-pre>&lt;actions&gt;</code>节点下会自动生成我们刚刚创建的 Action 信息：</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>actions</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- Add your actions here --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>action</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>test.hello<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>HelloAction<span class="token punctuation">"</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Hello<span class="token punctuation">"</span></span> <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IDEA插件入门<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>add-to-group</span> <span class="token attr-name">group-id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ToolsMenu<span class="token punctuation">"</span></span> <span class="token attr-name">anchor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>first<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>action</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>actions</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>并且 <code v-pre>java</code> 目录下为生成一个叫做 <code v-pre>HelloAction</code> 的类。并且，这个类继承了 <code v-pre>AnAction</code> ，并覆盖了 <code v-pre>actionPerformed()</code> 方法。这个 <code v-pre>actionPerformed</code> 方法就好比 JS 中的 <code v-pre>onClick</code> 方法，会在你点击的时候被触发对应的动作。</p>
<p>我简单对<code v-pre>actionPerformed</code> 方法进行了修改，添加了一行代码。这行代码很简单，就是显示 1 个对话框并展示一些信息。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloAction</span> <span class="token keyword">extends</span> <span class="token class-name">AnAction</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">actionPerformed</span><span class="token punctuation">(</span><span class="token class-name">AnActionEvent</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//显示对话框并展示对应的信息</span>
        <span class="token class-name">Messages</span><span class="token punctuation">.</span><span class="token function">showInfoMessage</span><span class="token punctuation">(</span><span class="token string">"素材不够，插件来凑！"</span><span class="token punctuation">,</span> <span class="token string">"Hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，我们上面也说了，每个动作都会归属到一个 Group 中，这个 Group 可以简单看作 IDEA 中已经存在的菜单。</p>
<p>举个例子。我上面创建的 Action 的所属 Group 是 <strong>ToolsMenu(Tools)</strong> 。这样的话，我们创建的 Action 所在的位置就在 Tools 这个菜单下。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-11/image-20201113192255689.png" alt=""></p>
<p>再举个例子。加入我上面创建的 Action 所属的 Group 是<strong>MainMenu</strong> （IDEA 最上方的主菜单栏）下的 <strong>FileMenu(File)</strong> 的话。</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>actions</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- Add your actions here --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>action</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>test.hello<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>HelloAction<span class="token punctuation">"</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Hello<span class="token punctuation">"</span></span> <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IDEA插件入门<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>add-to-group</span> <span class="token attr-name">group-id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>FileMenu<span class="token punctuation">"</span></span> <span class="token attr-name">anchor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>first<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>action</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>actions</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们创建的 Action 所在的位置就在 File 这个菜单下。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-11/image-20201113201634643.png" alt=""></p>
<h2 id="_04-验收成果" tabindex="-1"><a class="header-anchor" href="#_04-验收成果" aria-hidden="true">#</a> 04 验收成果</h2>
<p>点击 <code v-pre>Gradle -&gt; runIde</code> 就会启动一个默认了这个插件的 IDEA。然后，你可以在这个 IDEA 上实际使用这个插件了。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-11/image-20201118075912490.png" alt="点击 runIde 就会启动一个默认了这个插件的 IDEA"></p>
<p>效果如下：</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-11/image-20201118080358764.png" alt="点击 runIde 就会启动一个默认了这个插件的 IDEA"></p>
<p>我们点击自定义的 Hello Action 的话就会弹出一个对话框并展示出我们自定义的信息。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-11/IDEA插件HelloWorld.png" alt="IDEA插件HelloWorld"></p>
<h2 id="_05-完善一下" tabindex="-1"><a class="header-anchor" href="#_05-完善一下" aria-hidden="true">#</a> 05 完善一下</h2>
<p>想要弄点界面花里胡哨一下， 我们还可以通过 Swing 来写一个界面。</p>
<p>这里我们简单实现一个聊天机器人。代码的话，我是直接参考的我大二刚学 Java 那会写的一个小项目（<em>当时写的代码实在太烂了！就很菜！</em>）。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-11/image-20201114100213337.png" alt=""></p>
<p>首先，你需要在<a href="http://www.tuling123.com/" title="图灵机器人官网" target="_blank" rel="noopener noreferrer">图灵机器人官网<ExternalLinkIcon/></a>申请一个机器人。（<em>其他机器人也一样，感觉这个图灵机器人没有原来好用了，并且免费调用次数也不多</em>）</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-11/image-20201118075453172.png" alt=""></p>
<p>然后，简单写一个方法来请求调用机器人。由于代码比较简单，我这里就不放出来了，大家简单看一下效果就好。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-11/image-20201118075803163.png" alt=""></p>
<h2 id="_06-深入学习" tabindex="-1"><a class="header-anchor" href="#_06-深入学习" aria-hidden="true">#</a> 06 深入学习</h2>
<p>如果你想要深入学习的 IDEA 插件的话，可以看一下官网文档：<a href="https://jetbrains.org/intellij/sdk/docs/basics/basics.html" title="https://jetbrains.org/intellij/sdk/docs/basics/basics.html " target="_blank" rel="noopener noreferrer">https://jetbrains.org/intellij/sdk/docs/basics/basics.html <ExternalLinkIcon/></a> 。</p>
<p>这方面的资料还是比较少的。除了官方文档的话，你还可以简单看看下面这几篇文章：</p>
<ul>
<li><a href="https://developer.aliyun.com/article/777850?spm=a2c6h.12873581.0.dArticle777850.118d6446r096V4&amp;groupCode=alitech" title="8 条经验轻松上手 IDEA 插件开发" target="_blank" rel="noopener noreferrer">8 条经验轻松上手 IDEA 插件开发<ExternalLinkIcon/></a></li>
<li><a href="https://blog.xiaohansong.com/idea-plugin-development.html" title="IDEA 插件开发入门教程" target="_blank" rel="noopener noreferrer">IDEA 插件开发入门教程<ExternalLinkIcon/></a></li>
</ul>
<h2 id="_07-后记" tabindex="-1"><a class="header-anchor" href="#_07-后记" aria-hidden="true">#</a> 07 后记</h2>
<p>我们开发 IDEA 插件主要是为了让 IDEA 更加好用，比如有些框架使用之后可以减少重复代码的编写、有些主题类型的插件可以让你的 IDEA 更好看。</p>
<p>我这篇文章的这个案例说实话只是为了让大家简单入门一下 IDEA 开发，没有任何实际应用意义。<strong>如果你想要开发一个不错的 IDEA 插件的话，还要充分发挥想象，利用 IDEA 插件平台的能力。</strong></p>
</div></template>



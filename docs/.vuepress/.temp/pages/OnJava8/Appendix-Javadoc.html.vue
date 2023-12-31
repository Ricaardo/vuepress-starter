<template><div><p>[TOC]</p>
<!-- Appendix: Javadoc -->
<h1 id="附录-文档注释" tabindex="-1"><a class="header-anchor" href="#附录-文档注释" aria-hidden="true">#</a> 附录:文档注释</h1>
<p>编写代码文档的最大问题可能是维护该文档。如果文档和代码是分开的，每次更改代码时都要很繁琐地再去更改文档。解决方案似乎很简单：将代码链接到文档。最简单的方法是将所有内容放在同一个文件中。然而，要完成这个任务，需要一个特殊的注释语法来标记文档，以及一个工具将这些注释提取为有用的形式，这就是Java所做的。</p>
<p>提取注释的工具称为Javadoc，它是 JDK 安装的一部分。它使用Java编译器中的一些技术来寻找特殊的注释标记。它不仅提取由这些标记所标记的信息，还提取与注释相邻的类名或方法名。通过这种方式，您就可以用最少的工作量来生成合适的程序文档。</p>
<p>Javadoc的输出是一个html文件，可以用web浏览器查看它。有了Javadoc，就有一个简单的标准来创建文档，因此你可以期望所有Java库都有文档。</p>
<p>此外，你可以编写自己的Javadoc处理程序doclet，对javadoc处理的信息做特殊的处理（例如以不同的格式生成输出）。</p>
<p>以下是对Javadoc基础知识的介绍和概述。在 JDK 文档中可以找到完整的描述。</p>
<h2 id="句法规则" tabindex="-1"><a class="header-anchor" href="#句法规则" aria-hidden="true">#</a> 句法规则</h2>
<p>所有Javadoc指令都发生在以 <code v-pre>/**</code> 开头(但仍然以 <code v-pre>*/</code>)结尾)的注释中。使用Javadoc有两种主要方法：嵌入HTML或使用“doc标签”。独立的doc标签是以 <strong>@</strong> 开头并且放在注释行的开头的指令(注释行开头的<code v-pre>*</code>将被忽略)。内联的doc标签可以出现在Javadoc注释的任何位置，它也以 <code v-pre>@</code> 开头，但被花括号包围。</p>
<p>有三种类型的注释文档，它们对应于注释前面的元素:类、字段或方法。也就是说，类注释出现在类定义之前，字段注释出现在字段定义之前，方法注释出现在方法定义之前。举个简单的例子:</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// javadoc/Documentation1.java</span>
<span class="token doc-comment comment">/** 一个类注释 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Documentation1</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** 一个属性注释 */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> i<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 一个方法注释 */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Javadoc仅处理 <strong>公共成员</strong> 和 <strong>继承访问权限成员</strong> 的注释文档。 默认情况下，将忽略对 <strong>私有成员</strong> 和<strong>包访问权限成员</strong>的注释（请参阅<RouterLink to="/07-Implementation-Hiding.html">&quot;隐藏实现&quot;</RouterLink>一章），并且你将看不到任何输出。 这是有道理的，因为从客户端程序员的视角看，在文件外部只有 <strong>公共成员</strong> 和 <strong>继承访问权限成员</strong> 是可用的。 你可以使用 <strong>-private</strong> 标志来包含 <strong>私有成员</strong>。</p>
<p>要通过Javadoc处理前面的代码，命令是：</p>
<div class="language-cmd line-numbers-mode" data-ext="cmd"><pre v-pre class="language-cmd"><code>javadoc Documentation1.java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这将产生一组HTML文件。如果你在浏览器中打开index.html，将看到输出的结果与其他Java文档具有相同的标准格式，因此使用者对这种格式很熟悉，并可以轻松地浏览你的类。</p>
<h2 id="内嵌-html" tabindex="-1"><a class="header-anchor" href="#内嵌-html" aria-hidden="true">#</a> 内嵌 HTML</h2>
<p>Javadoc不作修改地将HTML代码传递到生成的HTML文档。这使你可以充分利用HTML。但是这样做的主要目的是让你格式化代码，例如：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// javadoc/Documentation2.java</span>
<span class="token doc-comment comment">/** <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">></span></span>
<span class="token code-section">* <span class="token line"><span class="token code language-java"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span></span>
*</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">></span></span>
*/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Documentation2</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你也可以像在其他任何Web文档中一样使用HTML来格式化说明中的文字：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// javadoc/Documentation3.java</span>
<span class="token doc-comment comment">/** You can <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span><span class="token punctuation">></span></span>even<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">></span></span> insert a list:
* <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">></span></span>
* <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span> Item one
* <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span> Item two
* <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span> Item three
* <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">></span></span>
*/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Documentation3</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意，在文档注释中，Javadoc会删除行首的星号以及前导空格。 Javadoc重新格式化了所有内容，使其符合文档的标准外观。不要将<code v-pre>&lt;h1&gt;</code> 和<code v-pre>&lt;hr&gt;</code> 之类的标题用作嵌入式HTML，因为Javadoc会插入自己的标题，你插入的标题将对其产生干扰。</p>
<p>所有类型的注释文档（类，字段和方法）都可以支持嵌入式HTML。</p>
<h2 id="示例标签" tabindex="-1"><a class="header-anchor" href="#示例标签" aria-hidden="true">#</a> 示例标签</h2>
<p>以下是一些可用于代码文档的Javadoc标记。在尝试使用Javadoc进行任何认真的操作之前，请查阅JDK文档中的Javadoc参考，以了解使用Javadoc的所有不同方法。</p>
<h3 id="see" tabindex="-1"><a class="header-anchor" href="#see" aria-hidden="true">#</a> @see</h3>
<p>这个标签可以将其它的类链接到本文档中。Javadoc 用 <code v-pre>@see</code> 标签产生链接到其它类的的HTML。格式为：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@see</span> classname
<span class="token annotation punctuation">@see</span> fully<span class="token operator">-</span>qualified<span class="token operator">-</span>classname
<span class="token annotation punctuation">@see</span> fully<span class="token operator">-</span>qualified<span class="token operator">-</span>classname#method<span class="token operator">-</span>name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每个都向生成的文档中添加超链接的“另请参阅”条目。 Javadoc 不会检查超链接的有效性。</p>
<h3 id="link-package-class-member-label" tabindex="-1"><a class="header-anchor" href="#link-package-class-member-label" aria-hidden="true">#</a> {@link package.class#member label}</h3>
<p>和 @see 非常相似，不同之处在于它可以内联使用，并使用标签作为超链接文本，而不是“另请参阅”。</p>
<h3 id="docroot" tabindex="-1"><a class="header-anchor" href="#docroot" aria-hidden="true">#</a> {@docRoot}</h3>
<p>生成文档根目录的相对路径。对于显式超链接到文档树中的页面很有用。</p>
<h3 id="inheritdoc" tabindex="-1"><a class="header-anchor" href="#inheritdoc" aria-hidden="true">#</a> {@inheritDoc}</h3>
<p>将文档从此类的最近基类继承到当前文档注释中。</p>
<h3 id="version" tabindex="-1"><a class="header-anchor" href="#version" aria-hidden="true">#</a> @version</h3>
<p>其形式为：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@version</span> version<span class="token operator">-</span>information
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中 version-information 是你认为适合包含的任何重要信息。当在Javadoc命令行上放置 -version 标志时，特别在生成的HTML文档中用于生成version信息。</p>
<h3 id="author" tabindex="-1"><a class="header-anchor" href="#author" aria-hidden="true">#</a> @author</h3>
<p>其形式为：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>@author author-information
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>author-information 大概率是你的名字，但是一样可以包含你的 email 地址或者其他合适的信息。当在 Javadoc 命令行上放置 -author 标志的时候，在生成的HTML文档中特别注明了作者信息。</p>
<p>你可以对作者列表使用多个作者标签，但是必须连续放置它们。所有作者信息都集中在生成的HTML中的单个段落中。</p>
<h3 id="since" tabindex="-1"><a class="header-anchor" href="#since" aria-hidden="true">#</a> @since</h3>
<p>此标记指示此代码的版本开始使用特定功能。例如，它出现在HTML Java文档中，以指示功能首次出现的JDK版本。</p>
<h3 id="param" tabindex="-1"><a class="header-anchor" href="#param" aria-hidden="true">#</a> @param</h3>
<p>这将生成有关方法参数的文档：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@param</span> parameter<span class="token operator">-</span>name description
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中 <code v-pre>parameter-name</code> 是方法参数列表中的标识符， <code v-pre>description</code> 是可以在后续行中继续的文本。当遇到新的文档标签时，这个说明被视为结束。<code v-pre>@param</code>标签可以使用任意次，大概每个参数使用一次。</p>
<h3 id="return" tabindex="-1"><a class="header-anchor" href="#return" aria-hidden="true">#</a> @return</h3>
<p>这记录了返回值：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@return</span> description
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中description给出了返回值的含义。它可延续到后面的行内。</p>
<h3 id="throws" tabindex="-1"><a class="header-anchor" href="#throws" aria-hidden="true">#</a> @throws</h3>
<p>一个方法可以产生许多不同类型的异常，所有这些异常都需要描述。异常标记的形式为：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@throws</span> fully<span class="token operator">-</span>qualified<span class="token operator">-</span><span class="token keyword">class</span><span class="token operator">-</span>name description
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>fully-qualified-class-name</em> 给出异常类的确切名称，并且 description （可在后面的行内继续展开）告诉你为什么这个特定类型的异常会在方法调用后出现。</p>
<h3 id="deprecated" tabindex="-1"><a class="header-anchor" href="#deprecated" aria-hidden="true">#</a> @deprecated</h3>
<p>表示已被改进的功能取代的功能。deprecated 标记建议你不要再使用此功能，因为将来它有可能被删除。使用标记为 <code v-pre>@deprecated</code> 的方法会使编译器发出警告。在Java 5中，<code v-pre>@deprecated</code>  Javadoc 标记被 <code v-pre>@Deprecated</code> <em>注解</em> 取代（在<a href="">注解</a>一章中进行了描述）。</p>
<h2 id="文档示例" tabindex="-1"><a class="header-anchor" href="#文档示例" aria-hidden="true">#</a> 文档示例</h2>
<p><strong>objects/HelloDate.java</strong> 是带有文档注释的例子。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// javadoc/HelloDateDoc.java</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/** The first On Java 8 example program.
 * Displays a String and today's date.
 * <span class="token keyword">@author</span> Bruce Eckel
 * <span class="token keyword">@author</span> www.MindviewInc.com
 * <span class="token keyword">@version</span> 5.0
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloDateDoc</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** Entry point to class &amp; application.
     * <span class="token keyword">@param</span> <span class="token parameter">args</span> array of String arguments
     * <span class="token keyword">@throws</span> exceptions No exceptions thrown
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello, it's: "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/* Output:
Hello, it's:
Tue May 09 06:07:27 MDT 2017
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以在Java标准库的源代码中找到许多Javadoc注释文档的示例。</p>
<!-- 分页 -->
<div style="page-break-after: always;"></div>
</div></template>



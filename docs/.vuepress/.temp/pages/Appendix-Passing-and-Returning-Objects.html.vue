<template><div><p>[TOC]</p>
<!-- Appendix: Passing and Returning Objects -->
<h1 id="附录-对象传递和返回" tabindex="-1"><a class="header-anchor" href="#附录-对象传递和返回" aria-hidden="true">#</a> 附录:对象传递和返回</h1>
<blockquote>
<p>到现在为止，你已经对“传递”对象实际上是传递引用这一想法想法感到满意。</p>
</blockquote>
<p>在许多编程语言中，你可以使用该语言的“常规”方式来传递对象，并且大多数情况下一切正常。 但是通常会出现这种情况，你必须做一些不平常的事情，突然事情变得更加复杂。 Java也不例外，当您传递对象并对其进行操作时，准确了解正在发生的事情很重要。 本附录提供了这种见解。</p>
<p>提出本附录问题的另一种方法是，如果你之前使用类似C++的编程语言，则是“ Java是否有指针？” Java中的每个对象标识符（除原语外）都是这些指针之一，但它们的用法是不仅受编译器的约束，而且受运行时系统的约束。 换一种说法，Java有指针，但没有指针算法。 这些就是我一直所说的“引用”，您可以将它们视为“安全指针”，与小学的安全剪刀不同-它们不敏锐，因此您不费吹灰之力就无法伤害自己，但是它们有时可能很乏味。</p>
<!-- Passing References -->
<h2 id="传递引用" tabindex="-1"><a class="header-anchor" href="#传递引用" aria-hidden="true">#</a> 传递引用</h2>
<!-- Making Local Copies -->
<p>当你将引用传递给方法时，它仍指向同一对象。 一个简单的实验演示了这一点：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// references/PassReferences.java</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PassReferences</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token class-name">PassReferences</span> h<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"h inside f(): "</span> <span class="token operator">+</span> h<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">PassReferences</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PassReferences</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"p inside main(): "</span> <span class="token operator">+</span> p<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">f</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/* Output:
p inside main(): PassReferences@15db9742
h inside f(): PassReferences@15db9742
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法  <code v-pre>toString() </code> 在打印语句中自动调用，并且 <code v-pre>PassReferences</code> 直接从 <code v-pre>Object</code> 继承而无需重新定义 <code v-pre>toString（）</code> 。 因此，使用的是 <code v-pre>Object</code> 的 <code v-pre>toString（）</code> 版本，它打印出对象的类，然后打印出该对象所在的地址（不是引用，而是实际的对象存储）。</p>
<h2 id="本地拷贝" tabindex="-1"><a class="header-anchor" href="#本地拷贝" aria-hidden="true">#</a> 本地拷贝</h2>
<!-- Controlling Cloneability -->
<h2 id="控制克隆" tabindex="-1"><a class="header-anchor" href="#控制克隆" aria-hidden="true">#</a> 控制克隆</h2>
<!-- Immutable Classes -->
<h2 id="不可变类" tabindex="-1"><a class="header-anchor" href="#不可变类" aria-hidden="true">#</a> 不可变类</h2>
<!-- Summary -->
<h2 id="本章小结" tabindex="-1"><a class="header-anchor" href="#本章小结" aria-hidden="true">#</a> 本章小结</h2>
<!-- 分页 -->
<div style="page-break-after: always;"></div></div></template>



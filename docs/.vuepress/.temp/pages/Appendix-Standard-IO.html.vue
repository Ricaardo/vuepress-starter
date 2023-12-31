<template><div><p>[TOC]</p>
<!-- Appendix: Standard I/O -->
<h1 id="附录-标准io" tabindex="-1"><a class="header-anchor" href="#附录-标准io" aria-hidden="true">#</a> 附录:标准IO</h1>
<blockquote>
<p><em>标准 I/O</em>这个术语参考Unix中的概念，指程序所使用的单一信息流（这种思想在大多数操作系统中，也有相似形式的实现）。</p>
</blockquote>
<p>程序的所有输入都可以来自于<em>标准输入</em>，其所有输出都可以流向<em>标准输出</em>，并且其所有错误信息均可以发送到<em>标准错误</em>。<em>标准 I/O</em> 的意义在于程序之间可以很容易地连接起来，一个程序的标准输出可以作为另一个程序的标准输入。这是一个非常强大的工具。</p>
<h2 id="从标准输入中读取" tabindex="-1"><a class="header-anchor" href="#从标准输入中读取" aria-hidden="true">#</a> 从标准输入中读取</h2>
<p>遵循标准 I/O 模型，Java 提供了标准输入流 <code v-pre>System.in</code>、标准输出流 <code v-pre>System.out</code> 和标准错误流 <code v-pre>System.err</code>。在本书中，你已经了解到如何使用 <code v-pre>System.out</code>将数据写到标准输出。 <code v-pre>System.out</code> 已经预先包装<a href="%E8%AF%91%E8%80%85%E6%B3%A8%EF%BC%9A%E8%BF%99%E9%87%8C%E7%94%A8%E5%88%B0%E4%BA%86**%E8%A3%85%E9%A5%B0%E5%99%A8%E6%A8%A1%E5%BC%8F**%E3%80%82">^1</a>成了 <code v-pre>PrintStream</code> 对象。标准错误流 <code v-pre>System.err</code> 也预先包装为 <code v-pre>PrintStream</code> 对象，但是标准输入流 <code v-pre>System.in</code> 是原生的没有经过包装的 <code v-pre>InputStream</code>。这意味着尽管可以直接使用标准输出流 <code v-pre>System.out</code> 和标准错误流 <code v-pre>System.err</code>，但是在读取 <code v-pre>System.in</code> 之前必须先对其进行包装。</p>
<p>我们通常一次一行地读取输入。为了实现这个功能，将 <code v-pre>System.in</code> 包装成 <code v-pre>BufferedReader</code> 来使用，这要求我们用 <code v-pre>InputStreamReader</code> 把 <code v-pre>System.in</code> 转换<a href="%E8%AF%91%E8%80%85%E6%B3%A8%EF%BC%9A%E8%BF%99%E9%87%8C%E7%94%A8%E5%88%B0%E4%BA%86**%E9%80%82%E9%85%8D%E5%99%A8%E6%A8%A1%E5%BC%8F**%E3%80%82">^2</a>成 <code v-pre>Reader</code> 。下面这个例子将键入的每一行显示出来：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// standardio/Echo.java</span>
<span class="token comment">// How to read from standard input</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">onjava<span class="token punctuation">.</span></span><span class="token class-name">TimedAbort</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Echo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">TimedAbort</span> abort <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TimedAbort</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span>
                <span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">lines</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span>ln <span class="token operator">-></span> abort<span class="token punctuation">.</span><span class="token function">restart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// Ctrl-Z or two seconds inactivity</span>
        <span class="token comment">// terminates the program</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>BufferedReader</code> 提供了 <code v-pre>lines()</code> 方法，返回类型是 <code v-pre>Stream&lt;String&gt;</code> 。这显示出流模型的的灵活性：仅使用标准输入就能很好地工作。 <code v-pre>peek()</code> 方法重启 <code v-pre>TimeAbort</code>，只要保证至少每隔两秒有输入就能够使程序保持开启状态。</p>
<h2 id="将-system-out-转换成-printwriter" tabindex="-1"><a class="header-anchor" href="#将-system-out-转换成-printwriter" aria-hidden="true">#</a> 将 System.out 转换成 PrintWriter</h2>
<p><code v-pre>System.out</code> 是一个 <code v-pre>PrintStream</code>，而 <code v-pre>PrintStream</code> 是一个<code v-pre>OutputStream</code>。 <code v-pre>PrintWriter</code> 有一个把 <code v-pre>OutputStream</code> 作为参数的构造器。因此，如果你需要的话，可以使用这个构造器把 <code v-pre>System.out</code> 转换成 <code v-pre>PrintWriter</code> 。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// standardio/ChangeSystemOut.java</span>
<span class="token comment">// Turn System.out into a PrintWriter</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ChangeSystemOut</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">PrintWriter</span> out <span class="token operator">=</span>
                <span class="token keyword">new</span> <span class="token class-name">PrintWriter</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello, world"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Hello, world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>要使用 <code v-pre>PrintWriter</code> 带有两个参数的构造器，并设置第二个参数为 <code v-pre>true</code>，从而使能自动刷新到输出缓冲区的功能；否则，可能无法看到打印输出。</p>
<h2 id="重定向标准-i-o" tabindex="-1"><a class="header-anchor" href="#重定向标准-i-o" aria-hidden="true">#</a> 重定向标准 I/O</h2>
<p>Java的 <code v-pre>System</code> 类提供了简单的 <code v-pre>static</code> 方法调用，从而能够重定向标准输入流、标准输出流和标准错误流：</p>
<ul>
<li>setIn（InputStream）</li>
<li>setOut（PrintStream）</li>
<li>setErr(PrintStream)</li>
</ul>
<p>如果我们突然需要在显示器上创建大量的输出，而这些输出滚动的速度太快以至于无法阅读时，重定向输出就显得格外有用，可把输出内容重定向到文件中供后续查看。对于我们想重复测试特定的用户输入序列的命令行程序来说，重定向输入就很有价值。下例简单演示了这些方法的使用：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// standardio/Redirecting.java</span>
<span class="token comment">// Demonstrates standard I/O redirection</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Redirecting</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">PrintStream</span> console <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">(</span>
                <span class="token class-name">BufferedInputStream</span> in <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedInputStream</span><span class="token punctuation">(</span>
                        <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">"Redirecting.java"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">PrintStream</span> out <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PrintStream</span><span class="token punctuation">(</span>
                        <span class="token keyword">new</span> <span class="token class-name">BufferedOutputStream</span><span class="token punctuation">(</span>
                                <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">"Redirecting.txt"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">setIn</span><span class="token punctuation">(</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">setOut</span><span class="token punctuation">(</span>out<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">setErr</span><span class="token punctuation">(</span>out<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span>
                    <span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">lines</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">setOut</span><span class="token punctuation">(</span>console<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该程序将文件中内容载入到标准输入，并把标准输出和标准错误重定向到另一个文件。它在程序的开始保存了最初对 <code v-pre>System.out</code> 对象的引用，并且在程序结束时将系统输出恢复到了该对象上。</p>
<p>I/O重定向操作的是字节流而不是字符流，因此使用 <code v-pre>InputStream</code> 和 <code v-pre>OutputStream</code>，而不是 <code v-pre>Reader</code> 和 <code v-pre>Writer</code>。</p>
<!-- Process Control -->
<h2 id="执行控制" tabindex="-1"><a class="header-anchor" href="#执行控制" aria-hidden="true">#</a> 执行控制</h2>
<p>你经常需要在Java内部直接执行操作系统的程序，并控制这些程序的输入输出，Java类库提供了执行这些操作的类。</p>
<p>一项常见的任务是运行程序并将输出结果发送到控制台。本节包含了一个可以简化此任务的实用工具。</p>
<p>在使用这个工具时可能会产生两种类型的错误：导致异常的普通错误——对于这些错误我们只需要重新抛出一个 <code v-pre>RuntimeException</code> 即可，以及进程自身的执行过程中导致的错误——我们需要用单独的异常来报告这些错误：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// onjava/OSExecuteException.java</span>
<span class="token keyword">package</span> <span class="token namespace">onjava</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OSExecuteException</span> <span class="token keyword">extends</span> <span class="token class-name">RuntimeException</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">OSExecuteException</span><span class="token punctuation">(</span><span class="token class-name">String</span> why<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>why<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了运行程序，我们需要传递给 <code v-pre>OSExecute.command()</code> 一个 <code v-pre>String command</code>，我们可以在控制台键入同样的指令运行程序。该命令传递给 <code v-pre>java.lang.ProcessBuilder</code> 的构造器（需要将其作为 <code v-pre>String</code> 对象的序列），然后启动生成的 <code v-pre>ProcessBuilder</code> 对象。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// onjava/OSExecute.java</span>
<span class="token comment">// Run an operating system command</span>
<span class="token comment">// and send the output to the console</span>
<span class="token keyword">package</span> <span class="token namespace">onjava</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OSExecute</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">command</span><span class="token punctuation">(</span><span class="token class-name">String</span> command<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">boolean</span> err <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Process</span> process <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ProcessBuilder</span><span class="token punctuation">(</span>
                    command<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">try</span> <span class="token punctuation">(</span>
                    <span class="token class-name">BufferedReader</span> results <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span>
                            <span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span>
                                    process<span class="token punctuation">.</span><span class="token function">getInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name">BufferedReader</span> errors <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span>
                            <span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span>
                                    process<span class="token punctuation">.</span><span class="token function">getErrorStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">)</span> <span class="token punctuation">{</span>
                results<span class="token punctuation">.</span><span class="token function">lines</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                err <span class="token operator">=</span> errors<span class="token punctuation">.</span><span class="token function">lines</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>err<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">OSExecuteException</span><span class="token punctuation">(</span>
                    <span class="token string">"Errors executing "</span> <span class="token operator">+</span> command<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了捕获在程序执行时产生的标准输出流，我们可以调用 <code v-pre>getInputStream()</code>。这是因为 <code v-pre>InputStream</code> 是我们可以从中读取信息的流。</p>
<p>这里这些行只是被打印了出来，但是你也可以从 <code v-pre>command()</code> 捕获和返回它们。</p>
<p>该程序的错误被发送到了标准错误流，可以调用 <code v-pre>getErrorStream()</code> 捕获。如果存在任何错误，它们都会被打印并且抛出 <code v-pre>OSExcuteException</code> ，以便调用程序处理这个问题。</p>
<p>下面是展示如何使用 <code v-pre>OSExecute</code> 的示例：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// standardio/OSExecuteDemo.java</span>
<span class="token comment">// Demonstrates standard I/O redirection</span>
<span class="token comment">// {javap -cp build/classes/main OSExecuteDemo}</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">onjava<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OSExecuteDemo</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里使用 <code v-pre>javap</code> 反编译器（随JDK发布）来反编译程序，编译结果：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Compiled from "OSExecuteDemo.java"
public class OSExecuteDemo {
  public OSExecuteDemo();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- 分页 -->
<div style="page-break-after: always;"></div>
</div></template>



<template><div><p>[TOC]</p>
<!-- Appendix: Data Compression -->
<h1 id="附录-数据压缩" tabindex="-1"><a class="header-anchor" href="#附录-数据压缩" aria-hidden="true">#</a> 附录:数据压缩</h1>
<p>Java I/O 类库提供了可以读写压缩格式流的类。你可以将其他 I/O 类包装起来用于提供压缩功能。</p>
<p>这些类不是从 <strong>Reader</strong> 和 <strong>Writer</strong> 类派生的，而是 <strong>InputStream</strong> 和 <strong>OutputStream</strong> 层级结构的一部分。这是由于压缩库处理的是字节，而不是字符。但是，你可能会被迫混合使用两种类型的流（请记住，你可以使用 <strong>InputStreamReader</strong> 和 <strong>OutputStreamWriter</strong>，这两个类可以在字节类型和字符类型之间轻松转换）。</p>
<table>
<thead>
<tr>
<th>压缩类</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>CheckedInputStream</strong></td>
<td><code v-pre>getCheckSum()</code> 可以对任意 <strong>InputStream</strong> 计算校验和（而不只是解压）</td>
</tr>
<tr>
<td><strong>CheckedOutputStream</strong></td>
<td><code v-pre>getCheckSum()</code> 可以对任意 <strong>OutputStream</strong> 计算校验和（而不只是压缩）</td>
</tr>
<tr>
<td><strong>DeflaterOutputStream</strong></td>
<td>压缩类的基类</td>
</tr>
<tr>
<td><strong>ZipOutputStream</strong></td>
<td><strong>DeflaterOutputStream</strong> 类的一种，用于压缩数据到 Zip 文件结构</td>
</tr>
<tr>
<td><strong>GZIPOutputStream</strong></td>
<td><strong>DeflaterOutputStream</strong> 类的一种，用于压缩数据到 GZIP 文件结构</td>
</tr>
<tr>
<td><strong>InflaterInputStream</strong></td>
<td>解压类的基类</td>
</tr>
<tr>
<td><strong>ZipInputStream</strong></td>
<td><strong>InflaterInputStream</strong> 类的一种，用于解压 Zip 文件结构的数据</td>
</tr>
<tr>
<td><strong>GZIPInputStream</strong></td>
<td><strong>InflaterInputStream</strong> 类的一种，用于解压 GZIP 文件结构的数据</td>
</tr>
</tbody>
</table>
<p>尽管存在很多压缩算法，但是 Zip 和 GZIP 可能是最常见的。你可以使用许多用于读取和写入这些格式的工具，来轻松操作压缩数据。</p>
<!-- Simple Compression with GZIP -->
<h2 id="使用-gzip-简单压缩" tabindex="-1"><a class="header-anchor" href="#使用-gzip-简单压缩" aria-hidden="true">#</a> 使用 Gzip 简单压缩</h2>
<!-- Multifile Storage with Zip -->
<p>GZIP 接口十分简单，因此当你有一个需要压缩的数据流（而不是一个包含不同数据分片的容器）时，使用 GZIP 更为合适。如下是一个压缩单个文件的示例：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// compression/GZIPcompress.java</span>
<span class="token comment">// (c)2017 MindView LLC: see Copyright.txt</span>
<span class="token comment">// We make no guarantees that this code is fit for any purpose.</span>
<span class="token comment">// Visit http://OnJava8.com for more book information.</span>
<span class="token comment">// {java GZIPcompress GZIPcompress.java}</span>
<span class="token comment">// {VisuallyInspectOutput}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GZIPcompress</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>args<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>
                    <span class="token string">"Usage: \nGZIPcompress file\n"</span> <span class="token operator">+</span>
                            <span class="token string">"\tUses GZIP compression to compress "</span> <span class="token operator">+</span>
                            <span class="token string">"the file to test.gz"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">try</span> <span class="token punctuation">(</span>
                <span class="token class-name">InputStream</span> in <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedInputStream</span><span class="token punctuation">(</span>
                        <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">BufferedOutputStream</span> out <span class="token operator">=</span>
                        <span class="token keyword">new</span> <span class="token class-name">BufferedOutputStream</span><span class="token punctuation">(</span>
                                <span class="token keyword">new</span> <span class="token class-name">GZIPOutputStream</span><span class="token punctuation">(</span>
                                        <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">"test.gz"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Writing file"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> c<span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>c <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
                out<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Reading file"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">(</span>
                <span class="token class-name">BufferedReader</span> in2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span>
                        <span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">GZIPInputStream</span><span class="token punctuation">(</span>
                                <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">"test.gz"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            in2<span class="token punctuation">.</span><span class="token function">lines</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用压缩类非常简单，你只需要把你的输出流包装在 <strong>GZIPOutputStream</strong> 或 <strong>ZipOutputStream</strong> 中，将输入流包装在 <strong>GZIPInputStream</strong> 或 <strong>ZipInputStream</strong>。其他的一切就只是普通的 I/O 读写。这是面向字符流和面向字节流的混合示例；in 使用 Reader 类，而 <strong>GZIPOutputStreams</strong> 构造函数只能接受 <strong>OutputStream</strong> 对象，而不能接受 <strong>Writer</strong> 对象。当打开文件的时候，<strong>GZIPInputStream</strong> 会转换成为 <strong>Reader</strong>。</p>
<h2 id="使用-zip-多文件存储" tabindex="-1"><a class="header-anchor" href="#使用-zip-多文件存储" aria-hidden="true">#</a> 使用 zip 多文件存储</h2>
<p>支持 Zip 格式的库比 GZIP 库更广泛。有了它，你可以轻松存储多个文件，甚至还有一个单独的类可以轻松地读取 Zip 文件。该库使用标准 Zip 格式，因此它可以与当前可在 Internet 上下载的所有 Zip 工具无缝协作。以下示例与前一个示例具有相同的形式，但它可以根据需要处理任意数量的命令行参数。此外，它还显示了 <strong>Checksum</strong> 类计算和验证文件的校验和。有两种校验和类型：Adler32（更快）和 CRC32（更慢但更准确）。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// compression/ZipCompress.java</span>
<span class="token comment">// (c)2017 MindView LLC: see Copyright.txt</span>
<span class="token comment">// We make no guarantees that this code is fit for any purpose.</span>
<span class="token comment">// Visit http://OnJava8.com for more book information.</span>
<span class="token comment">// Uses Zip compression to compress any</span>
<span class="token comment">// number of files given on the command line</span>
<span class="token comment">// {java ZipCompress ZipCompress.java}</span>
<span class="token comment">// {VisuallyInspectOutput}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ZipCompress</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">(</span>
                <span class="token class-name">FileOutputStream</span> f <span class="token operator">=</span>
                        <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">"test.zip"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">CheckedOutputStream</span> csum <span class="token operator">=</span>
                        <span class="token keyword">new</span> <span class="token class-name">CheckedOutputStream</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Adler32</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">ZipOutputStream</span> zos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ZipOutputStream</span><span class="token punctuation">(</span>csum<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">BufferedOutputStream</span> out <span class="token operator">=</span>
                        <span class="token keyword">new</span> <span class="token class-name">BufferedOutputStream</span><span class="token punctuation">(</span>zos<span class="token punctuation">)</span>
        <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            zos<span class="token punctuation">.</span><span class="token function">setComment</span><span class="token punctuation">(</span><span class="token string">"A test of Java Zipping"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// No corresponding getComment(), though.</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> arg <span class="token operator">:</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Writing file "</span> <span class="token operator">+</span> arg<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">try</span> <span class="token punctuation">(</span>
                        <span class="token class-name">InputStream</span> in <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedInputStream</span><span class="token punctuation">(</span>
                                <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    zos<span class="token punctuation">.</span><span class="token function">putNextEntry</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ZipEntry</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">int</span> c<span class="token punctuation">;</span>
                    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>c <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
                        out<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                out<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// Checksum valid only after the file is closed!</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>
                    <span class="token string">"Checksum: "</span> <span class="token operator">+</span> csum<span class="token punctuation">.</span><span class="token function">getChecksum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// Now extract the files:</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Reading file"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">(</span>
                <span class="token class-name">FileInputStream</span> fi <span class="token operator">=</span>
                        <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">"test.zip"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">CheckedInputStream</span> csumi <span class="token operator">=</span>
                        <span class="token keyword">new</span> <span class="token class-name">CheckedInputStream</span><span class="token punctuation">(</span>fi<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Adler32</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">ZipInputStream</span> in2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ZipInputStream</span><span class="token punctuation">(</span>csumi<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">BufferedInputStream</span> bis <span class="token operator">=</span>
                        <span class="token keyword">new</span> <span class="token class-name">BufferedInputStream</span><span class="token punctuation">(</span>in2<span class="token punctuation">)</span>
        <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">ZipEntry</span> ze<span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>ze <span class="token operator">=</span> in2<span class="token punctuation">.</span><span class="token function">getNextEntry</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Reading file "</span> <span class="token operator">+</span> ze<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">int</span> x<span class="token punctuation">;</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>x <span class="token operator">=</span> bis<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>args<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>
                        <span class="token string">"Checksum: "</span> <span class="token operator">+</span> csumi<span class="token punctuation">.</span><span class="token function">getChecksum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// Alternative way to open and read Zip files:</span>
        <span class="token keyword">try</span> <span class="token punctuation">(</span>
                <span class="token class-name">ZipFile</span> zf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ZipFile</span><span class="token punctuation">(</span><span class="token string">"test.zip"</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Enumeration</span> e <span class="token operator">=</span> zf<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">hasMoreElements</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">ZipEntry</span> ze2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">ZipEntry</span><span class="token punctuation">)</span> e<span class="token punctuation">.</span><span class="token function">nextElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"File: "</span> <span class="token operator">+</span> ze2<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// ... and extract the data as before</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于要添加到存档的每个文件，必须调用 <code v-pre>putNextEntry()</code> 并传递 <strong>ZipEntry</strong> 对象。 <strong>ZipEntry</strong> 对象包含一个扩展接口，用于获取和设置 Zip 文件中该特定条目的所有可用数据：名称，压缩和未压缩大小，日期，CRC 校验和，额外字段数据，注释，压缩方法以及它是否是目录条目。但是，即使 Zip 格式有设置密码的方法，Java 的 Zip 库也不支持。虽然 <strong>CheckedInputStream</strong> 和 <strong>CheckedOutputStream</strong> 都支持 Adler32 和 CRC32 校验和，但 <strong>ZipEntry</strong> 类仅支持 CRC 接口。这是对基础 Zip 格式的限制，但它可能会限制你使用更快的 Adler32。</p>
<p>要提取文件，<strong>ZipInputStream</strong> 有一个 <code v-pre>getNextEntry()</code> 方法，这个方法在有文件存在的情况下调用，会返回下一个 <strong>ZipEntry</strong>。作为一个更简洁的替代方法，你可以使用 <strong>ZipFile</strong> 对象读取该文件，该对象具有方法 entries() 返回一个包裹 <strong>ZipEntries</strong> 的 <strong>Enumeration</strong>。</p>
<p>要读取校验和，你必须以某种方式访问关联的 <strong>Checksum</strong> 对象。这里保留了对 <strong>CheckedOutputStream</strong> 和 <strong>CheckedInputStream</strong> 对象的引用，但你也可以保持对 <strong>Checksum</strong> 对象的引用。 Zip 流中的一个令人困惑的方法是 <code v-pre>setComment()</code>。如 <strong>ZipCompress</strong> 所示。在 Java 中，你可以在编写文件时设置注释，但是没有办法恢复 <strong>ZipInputStream</strong> 中的注释。注释似乎仅通过 <strong>ZipEntry</strong> 在逐个条目的基础上完全支持。</p>
<p>使用 GZIP 或 Zip 库时，你不仅被限制于文件——你可以压缩任何内容，包括通过网络连接发送的数据。</p>
<!-- Java Archives (Jars) -->
<h2 id="java-的-jar" tabindex="-1"><a class="header-anchor" href="#java-的-jar" aria-hidden="true">#</a> Java 的 jar</h2>
<p>Zip 格式也用于 JAR（Java ARchive）文件格式，这是一种将一组文件收集到单个压缩文件中的方法，就像 Zip 一样。但是，与 Java 中的其他所有内容一样，JAR 文件是跨平台的，因此你不必担心平台问题。你还可以将音频和图像文件像类文件一样包含在其中。</p>
<p>JAR 文件由一个包含压缩文件集合的文件和一个描述它们的“清单（manifest）”组成。（你可以创建自己的清单文件；否则，jar 程序将为你执行此操作。）你可以在 JDK 文档中，找到更多关于 JAR 清单的信息。</p>
<p>JDK 附带的 jar 工具会自动压缩你选择的文件。你可以在命令行上调用它：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>jar <span class="token punctuation">[</span>options<span class="token punctuation">]</span> destination <span class="token punctuation">[</span>manifest<span class="token punctuation">]</span> inputfile<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>选项是一组字母（不需要连字符或任何其他指示符）。 Unix / Linux 用户会注意到这些选项与 tar 命令选项的相似性。这些是：</p>
<table>
<thead>
<tr>
<th>选项</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>c</strong></td>
<td>创建一个新的或者空的归档文件</td>
</tr>
<tr>
<td><strong>t</strong></td>
<td>列出内容目录</td>
</tr>
<tr>
<td><strong>x</strong></td>
<td>提取所有文件</td>
</tr>
<tr>
<td><strong>x</strong> file</td>
<td>提取指定的文件</td>
</tr>
<tr>
<td><strong>f</strong></td>
<td>这代表着，“传递文件的名称。”如果你不使用它，jar 假定它的输入将来自标准输入，或者，如果它正在创建一个文件，它的输出将转到标准输出。</td>
</tr>
<tr>
<td><strong>m</strong></td>
<td>代表第一个参数是用户创建的清单文件的名称。</td>
</tr>
<tr>
<td><strong>v</strong></td>
<td>生成详细的输出用于表述 jar 所作的事情</td>
</tr>
<tr>
<td><strong>0</strong></td>
<td>仅存储文件;不压缩文件（用于创建放在类路径中的 JAR 文件）。</td>
</tr>
<tr>
<td><strong>M</strong></td>
<td>不要自动创建清单文件</td>
</tr>
</tbody>
</table>
<p>如果放入 JAR 文件的文件中包含子目录，则会自动添加该子目录，包括其所有子目录等。还会保留路径信息。</p>
<p>以下是一些调用 jar 的典型方法。以下命令创建名为 myJarFile 的 JAR 文件。 jar 包含当前目录中的所有类文件，以及自动生成的清单文件：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>jar cf myJarFile.jar *.class
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下一个命令与前面的示例类似，但它添加了一个名为 myManifestFile.mf 的用户创建的清单文件。 ：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>jar cmf myJarFile.jar myManifestFile.mf *.class
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个命令输出了 myJarFile.jar 中的文件目录：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>jar tf myJarFile.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如下添加了一个“verbose”的标志，用于生成更多关于 myJarFile.jar 中文件的详细信息：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>jar tvf myJarFile.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>假设 audio，classes 和 image 都是子目录，它将所有子目录组合到文件 myApp.jar 中。还包括“verbose”标志，以便在 jar 程序工作时提供额外的反馈：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>jar cvf myApp.jar audio classes image
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你在创建 JAR 文件时使用了 0（零） 选项，该文件将会被替换在你的类路径（CLASSPATH）中：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span><span class="token string">"lib1.jar;lib2.jar;"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后 Java 可以搜索到 lib1.jar 和 lib2.jar 的类文件。</p>
<p>jar 工具不像 Zip 实用程序那样通用。例如，你无法将文件添加或更新到现有 JAR 文件；只能从头开始创建 JAR 文件。</p>
<p>此外，你无法将文件移动到 JAR 文件中，在移动文件时将其删除。</p>
<p>但是，在一个平台上创建的 JAR 文件可以通过任何其他平台上的 jar 工具透明地读取（这个问题有时会困扰 Zip 实用程序）。</p>
<!-- 分页 -->
<div style="page-break-after: always;"></div></div></template>



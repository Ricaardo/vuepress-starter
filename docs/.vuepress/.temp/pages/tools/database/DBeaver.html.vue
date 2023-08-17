<template><div><h1 id="dbeaver-开源数据库管理工具。" tabindex="-1"><a class="header-anchor" href="#dbeaver-开源数据库管理工具。" aria-hidden="true">#</a> DBeaver:开源数据库管理工具。</h1>
<p><a href="https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&amp;mid=2247489523&amp;idx=1&amp;sn=4e96972842bdcea2e05cb267d17c5e8e&amp;chksm=cea25838f9d5d12e45a9939370eccf2bff7177038e70437ea0e01d64030118852ee66ae72284&amp;token=2000865596&amp;lang=zh_CN#rd" target="_blank" rel="noopener noreferrer">《再见，Navicat！同事安利的这个IDEA的兄弟，真香！》<ExternalLinkIcon/></a>    这篇文章发了之后很多人抱怨Datagrip 的占用内存太大，很多人推荐了  DBeaver 这款开源免费的数据库管理工具。于是，我昨夜简单体验了一下 DBeaver ，然后写了这篇文章。</p>
<h2 id="dbeaver-概览" tabindex="-1"><a class="header-anchor" href="#dbeaver-概览" aria-hidden="true">#</a> DBeaver 概览</h2>
<p>DBeaver 是一个基于 Java 开发 ，并且支持几乎所有的数据库产品的开源数据库管理工具。</p>
<p>DBeaver 社区版不光支持关系型数据库比如MySQL、PostgreSQL、MariaDB、SQLite、Oracle、Db2、SQL Server，还比如 SQLite、H2这些内嵌数据库。还支持常见的全文搜索引擎比如 Elasticsearch 和 Solr、大数据相关的工具比如Hive和 Spark。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-8/未命名拼图.jpg" alt="DBeaver 支持的数据库概览"></p>
<p>甚至说，DBeaver 的商业版本还支持各种 NoSQL  数据库。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-8/image-20200803074546854.png" alt="DBeaver 的商业版本还支持各种 NoSQL  数据库"></p>
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2>
<p><strong>DBeaver 虽然小巧，但是功能还是十分强大的。基本的表设计、SQL执行、ER图、数据导入导出等等常用功能都不在话下。</strong></p>
<p><strong>我下面只简单演示一下基本的数据库的创建以及表的创建。</strong></p>
<h3 id="下载安装" tabindex="-1"><a class="header-anchor" href="#下载安装" aria-hidden="true">#</a> 下载安装</h3>
<p>官方网提供的下载地址：https://dbeaver.io/download/ ，你可以根据自己的操作系统选择合适的版本进行下载安装。</p>
<p>比较简单，这里就不演示了。</p>
<h3 id="连接数据库" tabindex="-1"><a class="header-anchor" href="#连接数据库" aria-hidden="true">#</a> 连接数据库</h3>
<p><strong>1.选择自己想要的连接的数据库，然后点击下一步即可（第一次连接可能需要下载相关驱动）。</strong></p>
<p>我这里以MySQL为例。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-8/image-20200803082419586.png" alt="image-20200803082419586"></p>
<p><strong>2.输入数据库的地址、用户名和密码等信息，然后点击完成即可连接</strong></p>
<p>点击完成之前，你可以先通过左下方的测试连接来看一下数据库是否可以被成功连接上。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-8/image-20200803082107033.png" alt=""></p>
<h3 id="新建数据库" tabindex="-1"><a class="header-anchor" href="#新建数据库" aria-hidden="true">#</a> 新建数据库</h3>
<p>右键-&gt; 新建数据库（MySQL 用户记得使用 utf8mb4而不是 utf8）</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-8/image-20200812200954000.png" alt=""></p>
<h3 id="数据库表相关操作" tabindex="-1"><a class="header-anchor" href="#数据库表相关操作" aria-hidden="true">#</a> 数据库表相关操作</h3>
<h4 id="新建表" tabindex="-1"><a class="header-anchor" href="#新建表" aria-hidden="true">#</a> 新建表</h4>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-8/image-20200812201130467.png" alt=""></p>
<h4 id="新建列" tabindex="-1"><a class="header-anchor" href="#新建列" aria-hidden="true">#</a> 新建列</h4>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-8/image-20200812203427352.png" alt=""></p>
<h4 id="创建约束-主键、唯一键" tabindex="-1"><a class="header-anchor" href="#创建约束-主键、唯一键" aria-hidden="true">#</a> 创建约束（主键、唯一键）</h4>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-8/image-20200812202618448.png" alt=""></p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-8/image-20200812204054048.png" alt=""></p>
<h4 id="插入数据" tabindex="-1"><a class="header-anchor" href="#插入数据" aria-hidden="true">#</a> 插入数据</h4>
<p>我们通过 SQL 编辑器插入数据：</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-8/image-20200812205208540.png" alt=""></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token constant">INSERT</span> into <span class="token function">user</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span>name<span class="token punctuation">,</span>phone<span class="token punctuation">,</span>password<span class="token punctuation">)</span> values <span class="token punctuation">(</span><span class="token char">'A00001'</span><span class="token punctuation">,</span><span class="token char">'guide哥'</span><span class="token punctuation">,</span>'<span class="token number">181631312315</span><span class="token char">','</span><span class="token number">123456</span>'<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token constant">INSERT</span> into <span class="token function">user</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span>name<span class="token punctuation">,</span>phone<span class="token punctuation">,</span>password<span class="token punctuation">)</span> values <span class="token punctuation">(</span><span class="token char">'A00002'</span><span class="token punctuation">,</span>'guide哥<span class="token number">2</span><span class="token char">','</span><span class="token number">181631312313</span><span class="token char">','</span><span class="token number">123456</span>'<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token constant">INSERT</span> into <span class="token function">user</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span>name<span class="token punctuation">,</span>phone<span class="token punctuation">,</span>password<span class="token punctuation">)</span> values <span class="token punctuation">(</span><span class="token char">'A00003'</span><span class="token punctuation">,</span>'guide哥<span class="token number">3</span><span class="token char">','</span><span class="token number">181631312312</span><span class="token char">','</span><span class="token number">123456</span>'<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>总的来说，简单体验之后感觉还是很不错的，占用内存也确实比 DataGrip 确实要小很多。</p>
<p>各位小伙伴可以自行体验一下。毕竟免费并且开源，还是很香的！</p>
</div></template>



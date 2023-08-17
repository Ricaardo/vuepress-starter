<template><div><blockquote>
<p>本文由 <a href="https://github.com/Snailclimb" target="_blank" rel="noopener noreferrer">SnailClimb<ExternalLinkIcon/></a> 和 <a href="https://github.com/guang19" target="_blank" rel="noopener noreferrer">guang19<ExternalLinkIcon/></a> 共同完成。</p>
</blockquote>
<h2 id="事务隔离级别-图文详解" tabindex="-1"><a class="header-anchor" href="#事务隔离级别-图文详解" aria-hidden="true">#</a> 事务隔离级别(图文详解)</h2>
<h3 id="什么是事务" tabindex="-1"><a class="header-anchor" href="#什么是事务" aria-hidden="true">#</a> 什么是事务?</h3>
<p>事务是逻辑上的一组操作，要么都执行，要么都不执行。</p>
<p>事务最经典也经常被拿出来说例子就是转账了。假如小明要给小红转账1000元，这个转账会涉及到两个关键操作就是：将小明的余额减少1000元，将小红的余额增加1000元。万一在这两个操作之间突然出现错误比如银行系统崩溃，导致小明余额减少而小红的余额没有增加，这样就不对了。事务就是保证这两个关键操作要么都成功，要么都要失败。</p>
<h3 id="事务的特性-acid" tabindex="-1"><a class="header-anchor" href="#事务的特性-acid" aria-hidden="true">#</a> 事务的特性(ACID)</h3>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/事务特性.png" alt="事务的特性"></p>
<ol>
<li><strong>原子性：</strong> 事务是最小的执行单位，不允许分割。事务的原子性确保动作要么全部完成，要么完全不起作用；</li>
<li><strong>一致性：</strong> 执行事务前后，数据保持一致，例如转账业务中，无论事务是否成功，转账者和收款人的总额应该是不变的；</li>
<li><strong>隔离性：</strong> 并发访问数据库时，一个用户的事务不被其他事务所干扰，各并发事务之间数据库是独立的；</li>
<li><strong>持久性：</strong> 一个事务被提交之后。它对数据库中数据的改变是持久的，即使数据库发生故障也不应该对其有任何影响。</li>
</ol>
<h3 id="并发事务带来的问题" tabindex="-1"><a class="header-anchor" href="#并发事务带来的问题" aria-hidden="true">#</a> 并发事务带来的问题</h3>
<p>在典型的应用程序中，多个事务并发运行，经常会操作相同的数据来完成各自的任务（多个用户对统一数据进行操作）。并发虽然是必须的，但可能会导致以下的问题。</p>
<ul>
<li><strong>脏读（Dirty read）:</strong> 当一个事务正在访问数据并且对数据进行了修改，而这种修改还没有提交到数据库中，这时另外一个事务也访问了这个数据，然后使用了这个数据。因为这个数据是还没有提交的数据，那么另外一个事务读到的这个数据是“脏数据”，依据“脏数据”所做的操作可能是不正确的。</li>
<li><strong>丢失修改（Lost to modify）:</strong> 指在一个事务读取一个数据时，另外一个事务也访问了该数据，那么在第一个事务中修改了这个数据后，第二个事务也修改了这个数据。这样第一个事务内的修改结果就被丢失，因此称为丢失修改。	例如：事务1读取某表中的数据A=20，事务2也读取A=20，事务1修改A=A-1，事务2也修改A=A-1，最终结果A=19，事务1的修改被丢失。</li>
<li><strong>不可重复读（Unrepeatableread）:</strong> 指在一个事务内多次读同一数据。在这个事务还没有结束时，另一个事务也访问该数据。那么，在第一个事务中的两次读数据之间，由于第二个事务的修改导致第一个事务两次读取的数据可能不太一样。这就发生了在一个事务内两次读到的数据是不一样的情况，因此称为不可重复读。</li>
<li><strong>幻读（Phantom read）:</strong> 幻读与不可重复读类似。它发生在一个事务（T1）读取了几行数据，接着另一个并发事务（T2）插入了一些数据时。在随后的查询中，第一个事务（T1）就会发现多了一些原本不存在的记录，就好像发生了幻觉一样，所以称为幻读。</li>
</ul>
<p><strong>不可重复度和幻读区别：</strong></p>
<p>不可重复读的重点是修改，幻读的重点在于新增或者删除。</p>
<p>例1（同样的条件, 你读取过的数据, 再次读取出来发现值不一样了 ）：事务1中的A先生读取自己的工资为     1000的操作还没完成，事务2中的B先生就修改了A的工资为2000，导        致A再读自己的工资时工资变为  2000；这就是不可重复读。</p>
<p>例2（同样的条件, 第1次和第2次读出来的记录数不一样 ）：假某工资单表中工资大于3000的有4人，事务1读取了所有工资大于3000的人，共查到4条记录，这时事务2 又插入了一条工资大于3000的记录，事务1再次读取时查到的记录就变为了5条，这样就导致了幻读。</p>
<h3 id="事务隔离级别" tabindex="-1"><a class="header-anchor" href="#事务隔离级别" aria-hidden="true">#</a> 事务隔离级别</h3>
<p><strong>SQL 标准定义了四个隔离级别：</strong></p>
<ul>
<li><strong>READ-UNCOMMITTED(读取未提交)：</strong> 最低的隔离级别，允许读取尚未提交的数据变更，<strong>可能会导致脏读、幻读或不可重复读</strong>。</li>
<li><strong>READ-COMMITTED(读取已提交)：</strong> 允许读取并发事务已经提交的数据，<strong>可以阻止脏读，但是幻读或不可重复读仍有可能发生</strong>。</li>
<li><strong>REPEATABLE-READ(可重复读)：</strong>  对同一字段的多次读取结果都是一致的，除非数据是被本身事务自己所修改，<strong>可以阻止脏读和不可重复读，但幻读仍有可能发生</strong>。</li>
<li><strong>SERIALIZABLE(可串行化)：</strong> 最高的隔离级别，完全服从ACID的隔离级别。所有的事务依次逐个执行，这样事务之间就完全不可能产生干扰，也就是说，<strong>该级别可以防止脏读、不可重复读以及幻读</strong>。</li>
</ul>
<hr>
<table>
<thead>
<tr>
<th style="text-align:center">隔离级别</th>
<th style="text-align:center">脏读</th>
<th style="text-align:center">不可重复读</th>
<th style="text-align:center">幻影读</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">READ-UNCOMMITTED</td>
<td style="text-align:center">√</td>
<td style="text-align:center">√</td>
<td style="text-align:center">√</td>
</tr>
<tr>
<td style="text-align:center">READ-COMMITTED</td>
<td style="text-align:center">×</td>
<td style="text-align:center">√</td>
<td style="text-align:center">√</td>
</tr>
<tr>
<td style="text-align:center">REPEATABLE-READ</td>
<td style="text-align:center">×</td>
<td style="text-align:center">×</td>
<td style="text-align:center">√</td>
</tr>
<tr>
<td style="text-align:center">SERIALIZABLE</td>
<td style="text-align:center">×</td>
<td style="text-align:center">×</td>
<td style="text-align:center">×</td>
</tr>
</tbody>
</table>
<p>MySQL InnoDB 存储引擎的默认支持的隔离级别是 <strong>REPEATABLE-READ（可重读）</strong>。我们可以通过<code v-pre>SELECT @@tx_isolation;</code>命令来查看，MySQL 8.0 该命令改为<code v-pre>SELECT @@transaction_isolation;</code></p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>mysql<span class="token operator">></span> <span class="token keyword">SELECT</span> @<span class="token variable">@tx_isolation</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">-----------------+</span>
<span class="token operator">|</span> @<span class="token variable">@tx_isolation</span>  <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------------+</span>
<span class="token operator">|</span> <span class="token keyword">REPEATABLE</span><span class="token operator">-</span><span class="token keyword">READ</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------------+</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><s>这里需要注意的是：与 SQL 标准不同的地方在于 InnoDB 存储引擎在 <strong>REPEATABLE-READ（可重读）</strong> 事务隔离级别下使用的是 Next-Key Lock 锁算法，因此可以避免幻读的产生，这与其他数据库系统(如 SQL Server)是不同的。所以说 InnoDB 存储引擎的默认支持的隔离级别是 <strong>REPEATABLE-READ（可重读）</strong> 已经可以完全保证事务的隔离性要求，即达到了 SQL 标准的 <strong>SERIALIZABLE(可串行化)</strong> 隔离级别。</s></p>
<p>🐛 问题更正：<strong>MySQL InnoDB 的 REPEATABLE-READ（可重读）并不保证避免幻读，需要应用使用加锁读来保证。而这个加锁度使用到的机制就是 Next-Key Locks。</strong></p>
<p>因为隔离级别越低，事务请求的锁越少，所以大部分数据库系统的隔离级别都是 <strong>READ-COMMITTED(读取提交内容)</strong> ，但是你要知道的是 InnoDB 存储引擎默认使用 <strong>REPEATABLE-READ（可重读）</strong> 并不会有任何性能损失。</p>
<p>InnoDB 存储引擎在 <strong>分布式事务</strong> 的情况下一般会用到 <strong>SERIALIZABLE(可串行化)</strong> 隔离级别。</p>
<p>🌈 拓展一下(以下内容摘自《MySQL 技术内幕：InnoDB 存储引擎(第 2 版)》7.7 章)：</p>
<blockquote>
<p>InnoDB 存储引擎提供了对 XA 事务的支持，并通过 XA 事务来支持分布式事务的实现。分布式事务指的是允许多个独立的事务资源（transactional resources）参与到一个全局的事务中。事务资源通常是关系型数据库系统，但也可以是其他类型的资源。全局事务要求在其中的所有参与的事务要么都提交，要么都回滚，这对于事务原有的 ACID 要求又有了提高。另外，在使用分布式事务时，InnoDB 存储引擎的事务隔离级别必须设置为 SERIALIZABLE。</p>
</blockquote>
<h3 id="实际情况演示" tabindex="-1"><a class="header-anchor" href="#实际情况演示" aria-hidden="true">#</a> 实际情况演示</h3>
<p>在下面我会使用 2 个命令行mysql ，模拟多线程（多事务）对同一份数据的脏读问题。</p>
<p>MySQL 命令行的默认配置中事务都是自动提交的，即执行SQL语句后就会马上执行 COMMIT 操作。如果要显式地开启一个事务需要使用命令：<code v-pre>START TARNSACTION</code>。</p>
<p>我们可以通过下面的命令来设置隔离级别。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SET</span> <span class="token punctuation">[</span><span class="token keyword">SESSION</span><span class="token operator">|</span><span class="token keyword">GLOBAL</span><span class="token punctuation">]</span> <span class="token keyword">TRANSACTION</span> <span class="token keyword">ISOLATION</span> <span class="token keyword">LEVEL</span> <span class="token punctuation">[</span><span class="token keyword">READ</span> <span class="token keyword">UNCOMMITTED</span><span class="token operator">|</span><span class="token keyword">READ</span> <span class="token keyword">COMMITTED</span><span class="token operator">|</span><span class="token keyword">REPEATABLE</span> <span class="token keyword">READ</span><span class="token operator">|</span><span class="token keyword">SERIALIZABLE</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们再来看一下我们在下面实际操作中使用到的一些并发控制语句:</p>
<ul>
<li><code v-pre>START TARNSACTION</code> |<code v-pre>BEGIN</code>：显式地开启一个事务。</li>
<li><code v-pre>COMMIT</code>：提交事务，使得对数据库做的所有修改成为永久性。</li>
<li><code v-pre>ROLLBACK</code>：回滚会结束用户的事务，并撤销正在进行的所有未提交的修改。</li>
</ul>
<h4 id="脏读-读未提交" tabindex="-1"><a class="header-anchor" href="#脏读-读未提交" aria-hidden="true">#</a> 脏读(读未提交)</h4>
<div align="center">  
<img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-31-1脏读(读未提交)实例.jpg" width="800px"/>
</div>
<h4 id="避免脏读-读已提交" tabindex="-1"><a class="header-anchor" href="#避免脏读-读已提交" aria-hidden="true">#</a> 避免脏读(读已提交)</h4>
<div align="center">  
<img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-31-2读已提交实例.jpg" width="800px"/>
</div>
<h4 id="不可重复读" tabindex="-1"><a class="header-anchor" href="#不可重复读" aria-hidden="true">#</a> 不可重复读</h4>
<p>还是刚才上面的读已提交的图，虽然避免了读未提交，但是却出现了，一个事务还没有结束，就发生了 不可重复读问题。</p>
<div align="center">  
<img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-32-1不可重复读实例.jpg"/>
</div>
<h4 id="可重复读" tabindex="-1"><a class="header-anchor" href="#可重复读" aria-hidden="true">#</a> 可重复读</h4>
<div align="center">  
<img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-33-2可重复读.jpg"/>
</div>
<h4 id="防止幻读-可重复读" tabindex="-1"><a class="header-anchor" href="#防止幻读-可重复读" aria-hidden="true">#</a> 防止幻读(可重复读)</h4>
<div align="center">  
<img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-33防止幻读(使用可重复读).jpg"/>
</div>
<p>一个事务对数据库进行操作，这种操作的范围是数据库的全部行，然后第二个事务也在对这个数据库操作，这种操作可以是插入一行记录或删除一行记录，那么第一个是事务就会觉得自己出现了幻觉，怎么还有没有处理的记录呢? 或者 怎么多处理了一行记录呢?</p>
<p>幻读和不可重复读有些相似之处 ，但是不可重复读的重点是修改，幻读的重点在于新增或者删除。</p>
<h3 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h3>
<ul>
<li>《MySQL技术内幕：InnoDB存储引擎》</li>
<li><a href="https://dev.mysql.com/doc/refman/5.7/en/" target="_blank" rel="noopener noreferrer">https://dev.mysql.com/doc/refman/5.7/en/<ExternalLinkIcon/></a></li>
<li><a href="https://tech.youzan.com/seven-questions-about-the-lock-of-mysql/" target="_blank" rel="noopener noreferrer">Mysql 锁：灵魂七拷问<ExternalLinkIcon/></a></li>
<li><a href="https://tech.meituan.com/2014/08/20/innodb-lock.html" target="_blank" rel="noopener noreferrer">Innodb 中的事务隔离级别和锁的关系<ExternalLinkIcon/></a></li>
</ul>
</div></template>



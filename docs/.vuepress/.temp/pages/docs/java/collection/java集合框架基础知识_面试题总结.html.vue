<template><div><h1 id="java集合框架基础知识-面试题总结" tabindex="-1"><a class="header-anchor" href="#java集合框架基础知识-面试题总结" aria-hidden="true">#</a> Java集合框架基础知识&amp;面试题总结</h1>
<h2 id="集合概述" tabindex="-1"><a class="header-anchor" href="#集合概述" aria-hidden="true">#</a> 集合概述</h2>
<h3 id="java-集合概览" tabindex="-1"><a class="header-anchor" href="#java-集合概览" aria-hidden="true">#</a> Java 集合概览</h3>
<p>Java 集合， 也叫作容器，主要是由两大接口派生而来：一个是 <code v-pre>Collecton</code>接口，主要用于存放单一元素；另一个是 <code v-pre>Map</code> 接口，主要用于存放键值对。对于<code v-pre>Collection</code> 接口，下面又有三个主要的子接口：<code v-pre>List</code>、<code v-pre>Set</code> 和 <code v-pre>Queue</code>。</p>
<p>Java 集合框架如下图所示：</p>
<p><img src="@source/docs/java/collection/images/java-collection-hierarchy.png" alt=""></p>
<p>注：图中只列举了主要的继承派生关系，并没有列举所有关系。比方省略了<code v-pre>AbstractList</code>, <code v-pre>NavigableSet</code>等抽象类以及其他的一些辅助类，如想深入了解，可自行查看源码。</p>
<h3 id="说说-list-set-queue-map-四者的区别" tabindex="-1"><a class="header-anchor" href="#说说-list-set-queue-map-四者的区别" aria-hidden="true">#</a> 说说 List, Set, Queue, Map 四者的区别？</h3>
<ul>
<li><code v-pre>List</code>(对付顺序的好帮手): 存储的元素是有序的、可重复的。</li>
<li><code v-pre>Set</code>(注重独一无二的性质): 存储的元素是无序的、不可重复的。</li>
<li><code v-pre>Queue</code>(实现排队功能的叫号机): 按特定的排队规则来确定先后顺序，存储的元素是有序的、可重复的。</li>
<li><code v-pre>Map</code>(用 key 来搜索的专家): 使用键值对（key-value）存储，类似于数学上的函数 y=f(x)，&quot;x&quot; 代表 key，&quot;y&quot; 代表 value，key 是无序的、不可重复的，value 是无序的、可重复的，每个键最多映射到一个值。</li>
</ul>
<h3 id="集合框架底层数据结构总结" tabindex="-1"><a class="header-anchor" href="#集合框架底层数据结构总结" aria-hidden="true">#</a> 集合框架底层数据结构总结</h3>
<p>先来看一下 <code v-pre>Collection</code> 接口下面的集合。</p>
<h4 id="list" tabindex="-1"><a class="header-anchor" href="#list" aria-hidden="true">#</a> List</h4>
<ul>
<li><code v-pre>Arraylist</code>： <code v-pre>Object[]</code> 数组</li>
<li><code v-pre>Vector</code>：<code v-pre>Object[]</code> 数组</li>
<li><code v-pre>LinkedList</code>： 双向链表(JDK1.6 之前为循环链表，JDK1.7 取消了循环)</li>
</ul>
<h4 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> Set</h4>
<ul>
<li><code v-pre>HashSet</code>(无序，唯一): 基于 <code v-pre>HashMap</code> 实现的，底层采用 <code v-pre>HashMap</code> 来保存元素</li>
<li><code v-pre>LinkedHashSet</code>: <code v-pre>LinkedHashSet</code> 是 <code v-pre>HashSet</code> 的子类，并且其内部是通过 <code v-pre>LinkedHashMap</code> 来实现的。有点类似于我们之前说的 <code v-pre>LinkedHashMap</code> 其内部是基于 <code v-pre>HashMap</code> 实现一样，不过还是有一点点区别的</li>
<li><code v-pre>TreeSet</code>(有序，唯一): 红黑树(自平衡的排序二叉树)</li>
</ul>
<h4 id="queue" tabindex="-1"><a class="header-anchor" href="#queue" aria-hidden="true">#</a> Queue</h4>
<ul>
<li><code v-pre>PriorityQueue</code>: <code v-pre>Object[]</code> 数组来实现二叉堆</li>
<li><code v-pre>ArrayQueue</code>: <code v-pre>Object[]</code> 数组 + 双指针</li>
</ul>
<p>再来看看 <code v-pre>Map</code> 接口下面的集合。</p>
<h4 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> Map</h4>
<ul>
<li><code v-pre>HashMap</code>： JDK1.8 之前 <code v-pre>HashMap</code> 由数组+链表组成的，数组是 <code v-pre>HashMap</code> 的主体，链表则是主要为了解决哈希冲突而存在的（“拉链法”解决冲突）。JDK1.8 以后在解决哈希冲突时有了较大的变化，当链表长度大于阈值（默认为 8）（将链表转换成红黑树前会判断，如果当前数组的长度小于 64，那么会选择先进行数组扩容，而不是转换为红黑树）时，将链表转化为红黑树，以减少搜索时间</li>
<li><code v-pre>LinkedHashMap</code>： <code v-pre>LinkedHashMap</code> 继承自 <code v-pre>HashMap</code>，所以它的底层仍然是基于拉链式散列结构即由数组和链表或红黑树组成。另外，<code v-pre>LinkedHashMap</code> 在上面结构的基础上，增加了一条双向链表，使得上面的结构可以保持键值对的插入顺序。同时通过对链表进行相应的操作，实现了访问顺序相关逻辑。详细可以查看：<a href="https://www.imooc.com/article/22931" target="_blank" rel="noopener noreferrer">《LinkedHashMap 源码详细分析（JDK1.8）》<ExternalLinkIcon/></a></li>
<li><code v-pre>Hashtable</code>： 数组+链表组成的，数组是 <code v-pre>Hashtable</code> 的主体，链表则是主要为了解决哈希冲突而存在的</li>
<li><code v-pre>TreeMap</code>： 红黑树（自平衡的排序二叉树）</li>
</ul>
<h3 id="如何选用集合" tabindex="-1"><a class="header-anchor" href="#如何选用集合" aria-hidden="true">#</a> 如何选用集合?</h3>
<p>主要根据集合的特点来选用，比如我们需要根据键值获取到元素值时就选用 <code v-pre>Map</code> 接口下的集合，需要排序时选择 <code v-pre>TreeMap</code>,不需要排序时就选择 <code v-pre>HashMap</code>,需要保证线程安全就选用 <code v-pre>ConcurrentHashMap</code>。</p>
<p>当我们只需要存放元素值时，就选择实现<code v-pre>Collection</code> 接口的集合，需要保证元素唯一时选择实现 <code v-pre>Set</code> 接口的集合比如 <code v-pre>TreeSet</code> 或 <code v-pre>HashSet</code>，不需要就选择实现 <code v-pre>List</code> 接口的比如 <code v-pre>ArrayList</code> 或 <code v-pre>LinkedList</code>，然后再根据实现这些接口的集合的特点来选用。</p>
<h3 id="为什么要使用集合" tabindex="-1"><a class="header-anchor" href="#为什么要使用集合" aria-hidden="true">#</a> 为什么要使用集合？</h3>
<p>当我们需要保存一组类型相同的数据的时候，我们应该是用一个容器来保存，这个容器就是数组，但是，使用数组存储对象具有一定的弊端，
因为我们在实际开发中，存储的数据的类型是多种多样的，于是，就出现了“集合”，集合同样也是用来存储多个数据的。</p>
<p>数组的缺点是一旦声明之后，长度就不可变了；同时，声明数组时的数据类型也决定了该数组存储的数据的类型；而且，数组存储的数据是有序的、可重复的，特点单一。
但是集合提高了数据存储的灵活性，Java 集合不仅可以用来存储不同类型不同数量的对象，还可以保存具有映射关系的数据。</p>
<h2 id="collection-子接口之-list" tabindex="-1"><a class="header-anchor" href="#collection-子接口之-list" aria-hidden="true">#</a> Collection 子接口之 List</h2>
<h3 id="arraylist-和-vector-的区别" tabindex="-1"><a class="header-anchor" href="#arraylist-和-vector-的区别" aria-hidden="true">#</a> Arraylist 和 Vector 的区别?</h3>
<ul>
<li><code v-pre>ArrayList</code> 是 <code v-pre>List</code> 的主要实现类，底层使用 <code v-pre>Object[ ]</code>存储，适用于频繁的查找工作，线程不安全 ；</li>
<li><code v-pre>Vector</code> 是 <code v-pre>List</code> 的古老实现类，底层使用<code v-pre>Object[ ]</code> 存储，线程安全的。</li>
</ul>
<h3 id="arraylist-与-linkedlist-区别" tabindex="-1"><a class="header-anchor" href="#arraylist-与-linkedlist-区别" aria-hidden="true">#</a> Arraylist 与 LinkedList 区别?</h3>
<ol>
<li><strong>是否保证线程安全：</strong> <code v-pre>ArrayList</code> 和 <code v-pre>LinkedList</code> 都是不同步的，也就是不保证线程安全；</li>
<li><strong>底层数据结构：</strong> <code v-pre>Arraylist</code> 底层使用的是 <strong><code v-pre>Object</code> 数组</strong>；<code v-pre>LinkedList</code> 底层使用的是 <strong>双向链表</strong> 数据结构（JDK1.6 之前为循环链表，JDK1.7 取消了循环。注意双向链表和双向循环链表的区别，下面有介绍到！）</li>
<li><strong>插入和删除是否受元素位置的影响：</strong>
<ul>
<li><code v-pre>ArrayList</code> 采用数组存储，所以插入和删除元素的时间复杂度受元素位置的影响。 比如：执行<code v-pre>add(E e)</code>方法的时候， <code v-pre>ArrayList</code> 会默认在将指定的元素追加到此列表的末尾，这种情况时间复杂度就是 O(1)。但是如果要在指定位置 i 插入和删除元素的话（<code v-pre>add(int index, E element)</code>）时间复杂度就为 O(n-i)。因为在进行上述操作的时候集合中第 i 和第 i 个元素之后的(n-i)个元素都要执行向后位/向前移一位的操作。</li>
<li><code v-pre>LinkedList</code> 采用链表存储，所以，如果是在头尾插入或者删除元素不受元素位置的影响（<code v-pre>add(E e)</code>、<code v-pre>addFirst(E e)</code>、<code v-pre>addLast(E e)</code>、<code v-pre>removeFirst()</code> 、 <code v-pre>removeLast()</code>），近似 O(1)，如果是要在指定位置 <code v-pre>i</code> 插入和删除元素的话（<code v-pre>add(int index, E element)</code>，<code v-pre>remove(Object o)</code>） 时间复杂度近似为 O(n) ，因为需要先移动到指定位置再插入。</li>
</ul>
</li>
<li><strong>是否支持快速随机访问：</strong> <code v-pre>LinkedList</code> 不支持高效的随机元素访问，而 <code v-pre>ArrayList</code> 支持。快速随机访问就是通过元素的序号快速获取元素对象(对应于<code v-pre>get(int index)</code>方法)。</li>
<li><strong>内存空间占用：</strong> ArrayList 的空 间浪费主要体现在在 list 列表的结尾会预留一定的容量空间，而 LinkedList 的空间花费则体现在它的每一个元素都需要消耗比 ArrayList 更多的空间（因为要存放直接后继和直接前驱以及数据）。</li>
</ol>
<h4 id="补充内容-双向链表和双向循环链表" tabindex="-1"><a class="header-anchor" href="#补充内容-双向链表和双向循环链表" aria-hidden="true">#</a> 补充内容:双向链表和双向循环链表</h4>
<p><strong>双向链表：</strong> 包含两个指针，一个 prev 指向前一个节点，一个 next 指向后一个节点。</p>
<blockquote>
<p>另外推荐一篇把双向链表讲清楚的文章：<a href="https://juejin.cn/post/6844903648154271757" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6844903648154271757<ExternalLinkIcon/></a></p>
</blockquote>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/双向链表.png" alt="双向链表"></p>
<p><strong>双向循环链表：</strong> 最后一个节点的 next 指向 head，而 head 的 prev 指向最后一个节点，构成一个环。</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/双向循环链表.png" alt="双向循环链表"></p>
<h4 id="补充内容-randomaccess-接口" tabindex="-1"><a class="header-anchor" href="#补充内容-randomaccess-接口" aria-hidden="true">#</a> 补充内容:RandomAccess 接口</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">RandomAccess</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查看源码我们发现实际上 <code v-pre>RandomAccess</code> 接口中什么都没有定义。所以，在我看来 <code v-pre>RandomAccess</code> 接口不过是一个标识罢了。标识什么？ 标识实现这个接口的类具有随机访问功能。</p>
<p>在 <code v-pre>binarySearch（)</code> 方法中，它要判断传入的 list 是否 <code v-pre>RamdomAccess</code> 的实例，如果是，调用<code v-pre>indexedBinarySearch()</code>方法，如果不是，那么调用<code v-pre>iteratorBinarySearch()</code>方法</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span>
    <span class="token keyword">int</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Comparable</span><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> <span class="token class-name">T</span><span class="token punctuation">></span><span class="token punctuation">></span></span> list<span class="token punctuation">,</span> <span class="token class-name">T</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>list <span class="token keyword">instanceof</span> <span class="token class-name">RandomAccess</span> <span class="token operator">||</span> list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token constant">BINARYSEARCH_THRESHOLD</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">indexedBinarySearch</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span>
            <span class="token keyword">return</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">iteratorBinarySearch</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>ArrayList</code> 实现了 <code v-pre>RandomAccess</code> 接口， 而 <code v-pre>LinkedList</code> 没有实现。为什么呢？我觉得还是和底层数据结构有关！<code v-pre>ArrayList</code> 底层是数组，而 <code v-pre>LinkedList</code> 底层是链表。数组天然支持随机访问，时间复杂度为 O(1)，所以称为快速随机访问。链表需要遍历到特定位置才能访问特定位置的元素，时间复杂度为 O(n)，所以不支持快速随机访问。，<code v-pre>ArrayList</code> 实现了 <code v-pre>RandomAccess</code> 接口，就表明了他具有快速随机访问功能。 <code v-pre>RandomAccess</code> 接口只是标识，并不是说 <code v-pre>ArrayList</code> 实现 <code v-pre>RandomAccess</code> 接口才具有快速随机访问功能的！</p>
<h3 id="说一说-arraylist-的扩容机制吧" tabindex="-1"><a class="header-anchor" href="#说一说-arraylist-的扩容机制吧" aria-hidden="true">#</a> 说一说 ArrayList 的扩容机制吧</h3>
<p>详见笔主的这篇文章:<a href="https://snailclimb.gitee.io/javaguide/#/docs/java/collection/ArrayList%E6%BA%90%E7%A0%81+%E6%89%A9%E5%AE%B9%E6%9C%BA%E5%88%B6%E5%88%86%E6%9E%90" target="_blank" rel="noopener noreferrer">通过源码一步一步分析 ArrayList 扩容机制<ExternalLinkIcon/></a></p>
<h2 id="collection-子接口之-set" tabindex="-1"><a class="header-anchor" href="#collection-子接口之-set" aria-hidden="true">#</a> Collection 子接口之 Set</h2>
<h3 id="comparable-和-comparator-的区别" tabindex="-1"><a class="header-anchor" href="#comparable-和-comparator-的区别" aria-hidden="true">#</a> comparable 和 Comparator 的区别</h3>
<ul>
<li><code v-pre>comparable</code> 接口实际上是出自<code v-pre>java.lang</code>包 它有一个 <code v-pre>compareTo(Object obj)</code>方法用来排序</li>
<li><code v-pre>comparator</code>接口实际上是出自 java.util 包它有一个<code v-pre>compare(Object obj1, Object obj2)</code>方法用来排序</li>
</ul>
<p>一般我们需要对一个集合使用自定义排序时，我们就要重写<code v-pre>compareTo()</code>方法或<code v-pre>compare()</code>方法，当我们需要对某一个集合实现两种排序方式，比如一个 song 对象中的歌名和歌手名分别采用一种排序方法的话，我们可以重写<code v-pre>compareTo()</code>方法和使用自制的<code v-pre>Comparator</code>方法或者以两个 Comparator 来实现歌名排序和歌星名排序，第二种代表我们只能使用两个参数版的 <code v-pre>Collections.sort()</code>.</p>
<h4 id="comparator-定制排序" tabindex="-1"><a class="header-anchor" href="#comparator-定制排序" aria-hidden="true">#</a> Comparator 定制排序</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> arrayList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arrayList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arrayList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arrayList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arrayList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arrayList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arrayList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arrayList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arrayList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"原始数组:"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arrayList<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// void reverse(List list)：反转</span>
        <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span>arrayList<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Collections.reverse(arrayList):"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arrayList<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// void sort(List list),按自然排序的升序排序</span>
        <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>arrayList<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Collections.sort(arrayList):"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arrayList<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 定制排序的用法</span>
        <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>arrayList<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> o1<span class="token punctuation">,</span> <span class="token class-name">Integer</span> o2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> o2<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>o1<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"定制排序后："</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arrayList<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>原始数组:
[-1, 3, 3, -5, 7, 4, -9, -7]
Collections.reverse(arrayList):
[-7, -9, 4, 7, -5, 3, 3, -1]
Collections.sort(arrayList):
[-9, -7, -5, -1, 3, 3, 4, 7]
定制排序后：
[7, 4, 3, 3, -1, -5, -7, -9]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="重写-compareto-方法实现按年龄来排序" tabindex="-1"><a class="header-anchor" href="#重写-compareto-方法实现按年龄来排序" aria-hidden="true">#</a> 重写 compareTo 方法实现按年龄来排序</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// person对象没有实现Comparable接口，所以必须实现，这样才不会出错，才可以使treemap中的数据按顺序排列</span>
<span class="token comment">// 前面一个例子的String类已经默认实现了Comparable接口，详细可以查看String类的API文档，另外其他</span>
<span class="token comment">// 像Integer类等都已经实现了Comparable接口，所以不需要另外实现了</span>
<span class="token keyword">public</span>  <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token keyword">implements</span> <span class="token class-name">Comparable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * T重写compareTo方法实现按年龄来排序
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token class-name">Person</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">></span> o<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">&lt;</span> o<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">TreeMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> pdata <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pdata<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"张三"</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"zhangsan"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pdata<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"李四"</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"lisi"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pdata<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"王五"</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"wangwu"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pdata<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"小红"</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"xiaohong"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 得到key的值的同时得到key所对应的值</span>
        <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">></span></span> keys <span class="token operator">=</span> pdata<span class="token punctuation">.</span><span class="token function">keySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Person</span> key <span class="token operator">:</span> keys<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>key<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"-"</span> <span class="token operator">+</span> key<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>5-小红
10-王五
20-李四
30-张三
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="无序性和不可重复性的含义是什么" tabindex="-1"><a class="header-anchor" href="#无序性和不可重复性的含义是什么" aria-hidden="true">#</a> 无序性和不可重复性的含义是什么</h3>
<p>1、什么是无序性？无序性不等于随机性 ，无序性是指存储的数据在底层数组中并非按照数组索引的顺序添加 ，而是根据数据的哈希值决定的。</p>
<p>2、什么是不可重复性？不可重复性是指添加的元素按照 equals()判断时 ，返回 false，需要同时重写 equals()方法和 HashCode()方法。</p>
<h3 id="比较-hashset、linkedhashset-和-treeset-三者的异同" tabindex="-1"><a class="header-anchor" href="#比较-hashset、linkedhashset-和-treeset-三者的异同" aria-hidden="true">#</a> 比较 HashSet、LinkedHashSet 和 TreeSet 三者的异同</h3>
<ul>
<li><code v-pre>HashSet</code>、<code v-pre>LinkedHashSet</code> 和 <code v-pre>TreeSet</code> 都是 <code v-pre>Set</code> 接口的实现类，都能保证元素唯一，并且都不是线程安全的。</li>
<li><code v-pre>HashSet</code>、<code v-pre>LinkedHashSet</code> 和 <code v-pre>TreeSet</code> 的主要区别在于底层数据结构不同。<code v-pre>HashSet</code> 的底层数据结构是哈希表（基于 <code v-pre>HashMap</code> 实现）。<code v-pre>LinkedHashSet</code> 的底层数据结构是链表和哈希表，元素的插入和取出顺序满足 FIFO。<code v-pre>TreeSet</code> 底层数据结构是红黑树，元素是有序的，排序的方式有自然排序和定制排序。</li>
<li>底层数据结构不同又导致这三者的应用场景不同。<code v-pre>HashSet</code> 用于不需要保证元素插入和取出顺序的场景，<code v-pre>LinkHashSet</code> 用于保证元素的插入和取出顺序满足 FIFO 的场景，<code v-pre>TreeSet</code> 用于支持对元素自定义排序规则的场景。</li>
</ul>
<h2 id="collection-子接口之-queue" tabindex="-1"><a class="header-anchor" href="#collection-子接口之-queue" aria-hidden="true">#</a> Collection 子接口之 Queue</h2>
<h3 id="queue-与-deque-的区别" tabindex="-1"><a class="header-anchor" href="#queue-与-deque-的区别" aria-hidden="true">#</a> Queue 与 Deque 的区别</h3>
<p><code v-pre>Queue</code> 是单端队列，只能从一端插入元素，另一端删除元素，实现上一般遵循 <strong>先进先出（FIFO）</strong> 规则。</p>
<p><code v-pre>Queue</code> 扩展了 <code v-pre>Collection</code> 的接口，根据 <strong>因为容量问题而导致操作失败后处理方式的不同</strong> 可以分为两类方法: 一种在操作失败后会抛出异常，另一种则会返回特殊值。</p>
<table>
<thead>
<tr>
<th><code v-pre>Queue</code> 接口</th>
<th>抛出异常</th>
<th>返回特殊值</th>
</tr>
</thead>
<tbody>
<tr>
<td>插入队尾</td>
<td>add(E e)</td>
<td>offer(E e)</td>
</tr>
<tr>
<td>删除队首</td>
<td>remove()</td>
<td>poll()</td>
</tr>
<tr>
<td>查询队首元素</td>
<td>element()</td>
<td>peek()</td>
</tr>
</tbody>
</table>
<p><code v-pre>Deque</code> 是双端队列，在队列的两端均可以插入或删除元素。</p>
<p><code v-pre>Deque</code> 扩展了 <code v-pre>Queue</code> 的接口, 增加了在队首和队尾进行插入和删除的方法，同样根据失败后处理方式的不同分为两类：</p>
<table>
<thead>
<tr>
<th><code v-pre>Deque</code> 接口</th>
<th>抛出异常</th>
<th>返回特殊值</th>
</tr>
</thead>
<tbody>
<tr>
<td>插入队首</td>
<td>addFirst(E e)</td>
<td>offerFirst(E e)</td>
</tr>
<tr>
<td>插入队尾</td>
<td>addLast(E e)</td>
<td>offerLast(E e)</td>
</tr>
<tr>
<td>删除队首</td>
<td>removeFirst()</td>
<td>pollFirst()</td>
</tr>
<tr>
<td>删除队尾</td>
<td>removeLast()</td>
<td>pollLast()</td>
</tr>
<tr>
<td>查询队首元素</td>
<td>getFirst()</td>
<td>peekFirst()</td>
</tr>
<tr>
<td>查询队尾元素</td>
<td>getLast()</td>
<td>peekLast()</td>
</tr>
</tbody>
</table>
<p>事实上，<code v-pre>Deque</code> 还提供有 <code v-pre>push()</code> 和 <code v-pre>pop()</code> 等其他方法，可用于模拟栈。</p>
<h3 id="arraydeque-与-linkedlist-的区别" tabindex="-1"><a class="header-anchor" href="#arraydeque-与-linkedlist-的区别" aria-hidden="true">#</a> ArrayDeque 与 LinkedList 的区别</h3>
<p><code v-pre>ArrayDeque</code> 和 <code v-pre>LinkedList</code> 都实现了 <code v-pre>Deque</code> 接口，两者都具有队列的功能，但两者有什么区别呢？</p>
<ul>
<li>
<p><code v-pre>ArrayDeque</code> 是基于可变长的数组和双指针来实现，而 <code v-pre>LinkedList</code> 则通过链表来实现。</p>
</li>
<li>
<p><code v-pre>ArrayDeque</code> 不支持存储 <code v-pre>NULL</code> 数据，但 <code v-pre>LinkedList</code> 支持。</p>
</li>
<li>
<p><code v-pre>ArrayDeque</code> 是在 JDK1.6 才被引入的，而<code v-pre>LinkedList</code> 早在 JDK1.2 时就已经存在。</p>
</li>
<li>
<p><code v-pre>ArrayDeque</code> 插入时可能存在扩容过程, 不过均摊后的插入操作依然为 O(1)。虽然 <code v-pre>LinkedList</code> 不需要扩容，但是每次插入数据时均需要申请新的堆空间，均摊性能相比更慢。</p>
</li>
</ul>
<p>从性能的角度上，选用 <code v-pre>ArrayDeque</code> 来实现队列要比 <code v-pre>LinkedList</code> 更好。此外，<code v-pre>ArrayDeque</code> 也可以用于实现栈。</p>
<h3 id="说一说-priorityqueue" tabindex="-1"><a class="header-anchor" href="#说一说-priorityqueue" aria-hidden="true">#</a> 说一说 PriorityQueue</h3>
<p><code v-pre>PriorityQueue</code> 是在 JDK1.5 中被引入的, 其与 <code v-pre>Queue</code> 的区别在于元素出队顺序是与优先级相关的，即总是优先级最高的元素先出队。</p>
<p>这里列举其相关的一些要点：</p>
<ul>
<li><code v-pre>PriorityQueue</code> 利用了二叉堆的数据结构来实现的，底层使用可变长的数组来存储数据</li>
<li><code v-pre>PriorityQueue</code> 通过堆元素的上浮和下沉，实现了在 O(logn) 的时间复杂度内插入元素和删除堆顶元素。</li>
<li><code v-pre>PriorityQueue</code> 是非线程安全的，且不支持存储 <code v-pre>NULL</code> 和 <code v-pre>non-comparable</code> 的对象。</li>
<li><code v-pre>PriorityQueue</code> 默认是小顶堆，但可以接收一个 <code v-pre>Comparator</code> 作为构造参数，从而来自定义元素优先级的先后。</li>
</ul>
<p><code v-pre>PriorityQueue</code> 在面试中可能更多的会出现在手撕算法的时候，典型例题包括堆排序、求第K大的数、带权图的遍历等，所以需要会熟练使用才行。</p>
<h2 id="map-接口" tabindex="-1"><a class="header-anchor" href="#map-接口" aria-hidden="true">#</a> Map 接口</h2>
<h3 id="hashmap-和-hashtable-的区别" tabindex="-1"><a class="header-anchor" href="#hashmap-和-hashtable-的区别" aria-hidden="true">#</a> HashMap 和 Hashtable 的区别</h3>
<ol>
<li><strong>线程是否安全：</strong> <code v-pre>HashMap</code> 是非线程安全的，<code v-pre>Hashtable</code> 是线程安全的,因为 <code v-pre>Hashtable</code> 内部的方法基本都经过<code v-pre>synchronized</code> 修饰。（如果你要保证线程安全的话就使用 <code v-pre>ConcurrentHashMap</code> 吧！）；</li>
<li><strong>效率：</strong> 因为线程安全的问题，<code v-pre>HashMap</code> 要比 <code v-pre>Hashtable</code> 效率高一点。另外，<code v-pre>Hashtable</code> 基本被淘汰，不要在代码中使用它；</li>
<li><strong>对 Null key 和 Null value 的支持：</strong> <code v-pre>HashMap</code> 可以存储 null 的 key 和 value，但 null 作为键只能有一个，null 作为值可以有多个；Hashtable 不允许有 null 键和 null 值，否则会抛出 <code v-pre>NullPointerException</code>。</li>
<li><strong>初始容量大小和每次扩充容量大小的不同 ：</strong> ① 创建时如果不指定容量初始值，<code v-pre>Hashtable</code> 默认的初始大小为 11，之后每次扩充，容量变为原来的 2n+1。<code v-pre>HashMap</code> 默认的初始化大小为 16。之后每次扩充，容量变为原来的 2 倍。② 创建时如果给定了容量初始值，那么 Hashtable 会直接使用你给定的大小，而 <code v-pre>HashMap</code> 会将其扩充为 2 的幂次方大小（<code v-pre>HashMap</code> 中的<code v-pre>tableSizeFor()</code>方法保证，下面给出了源代码）。也就是说 <code v-pre>HashMap</code> 总是使用 2 的幂作为哈希表的大小,后面会介绍到为什么是 2 的幂次方。</li>
<li><strong>底层数据结构：</strong> JDK1.8 以后的 <code v-pre>HashMap</code> 在解决哈希冲突时有了较大的变化，当链表长度大于阈值（默认为 8）（将链表转换成红黑树前会判断，如果当前数组的长度小于 64，那么会选择先进行数组扩容，而不是转换为红黑树）时，将链表转化为红黑树，以减少搜索时间。Hashtable 没有这样的机制。</li>
</ol>
<p><strong><code v-pre>HashMap</code> 中带有初始容量的构造函数：</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token keyword">int</span> initialCapacity<span class="token punctuation">,</span> <span class="token keyword">float</span> loadFactor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>initialCapacity <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">"Illegal initial capacity: "</span> <span class="token operator">+</span>
                                               initialCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>initialCapacity <span class="token operator">></span> <span class="token constant">MAXIMUM_CAPACITY</span><span class="token punctuation">)</span>
            initialCapacity <span class="token operator">=</span> <span class="token constant">MAXIMUM_CAPACITY</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>loadFactor <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token operator">||</span> <span class="token class-name">Float</span><span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span>loadFactor<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">"Illegal load factor: "</span> <span class="token operator">+</span>
                                               loadFactor<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>loadFactor <span class="token operator">=</span> loadFactor<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>threshold <span class="token operator">=</span> <span class="token function">tableSizeFor</span><span class="token punctuation">(</span>initialCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
     <span class="token keyword">public</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token keyword">int</span> initialCapacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">(</span>initialCapacity<span class="token punctuation">,</span> <span class="token constant">DEFAULT_LOAD_FACTOR</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面这个方法保证了 <code v-pre>HashMap</code> 总是使用 2 的幂作为哈希表的大小。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * Returns a power of two size for the given target capacity.
     */</span>
    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">tableSizeFor</span><span class="token punctuation">(</span><span class="token keyword">int</span> cap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> cap <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        n <span class="token operator">|=</span> n <span class="token operator">>>></span> <span class="token number">1</span><span class="token punctuation">;</span>
        n <span class="token operator">|=</span> n <span class="token operator">>>></span> <span class="token number">2</span><span class="token punctuation">;</span>
        n <span class="token operator">|=</span> n <span class="token operator">>>></span> <span class="token number">4</span><span class="token punctuation">;</span>
        n <span class="token operator">|=</span> n <span class="token operator">>>></span> <span class="token number">8</span><span class="token punctuation">;</span>
        n <span class="token operator">|=</span> n <span class="token operator">>>></span> <span class="token number">16</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token punctuation">(</span>n <span class="token operator">>=</span> <span class="token constant">MAXIMUM_CAPACITY</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token constant">MAXIMUM_CAPACITY</span> <span class="token operator">:</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hashmap-和-hashset-区别" tabindex="-1"><a class="header-anchor" href="#hashmap-和-hashset-区别" aria-hidden="true">#</a> HashMap 和 HashSet 区别</h3>
<p>如果你看过 <code v-pre>HashSet</code> 源码的话就应该知道：<code v-pre>HashSet</code> 底层就是基于 <code v-pre>HashMap</code> 实现的。（<code v-pre>HashSet</code> 的源码非常非常少，因为除了 <code v-pre>clone()</code>、<code v-pre>writeObject()</code>、<code v-pre>readObject()</code>是 <code v-pre>HashSet</code> 自己不得不实现之外，其他方法都是直接调用 <code v-pre>HashMap</code> 中的方法。</p>
<table>
<thead>
<tr>
<th style="text-align:center"><code v-pre>HashMap</code></th>
<th style="text-align:center"><code v-pre>HashSet</code></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">实现了 <code v-pre>Map</code> 接口</td>
<td style="text-align:center">实现 <code v-pre>Set</code> 接口</td>
</tr>
<tr>
<td style="text-align:center">存储键值对</td>
<td style="text-align:center">仅存储对象</td>
</tr>
<tr>
<td style="text-align:center">调用 <code v-pre>put()</code>向 map 中添加元素</td>
<td style="text-align:center">调用 <code v-pre>add()</code>方法向 <code v-pre>Set</code> 中添加元素</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>HashMap</code> 使用键（Key）计算 <code v-pre>hashcode</code></td>
<td style="text-align:center"><code v-pre>HashSet</code> 使用成员对象来计算 <code v-pre>hashcode</code> 值，对于两个对象来说 <code v-pre>hashcode</code> 可能相同，所以<code v-pre>equals()</code>方法用来判断对象的相等性</td>
</tr>
</tbody>
</table>
<h3 id="hashmap-和-treemap-区别" tabindex="-1"><a class="header-anchor" href="#hashmap-和-treemap-区别" aria-hidden="true">#</a> HashMap 和 TreeMap 区别</h3>
<p><code v-pre>TreeMap</code> 和<code v-pre>HashMap</code> 都继承自<code v-pre>AbstractMap</code> ，但是需要注意的是<code v-pre>TreeMap</code>它还实现了<code v-pre>NavigableMap</code>接口和<code v-pre>SortedMap</code> 接口。</p>
<p><img src="@source/docs/java/collection/images/TreeMap继承结构.png" alt=""></p>
<p>实现 <code v-pre>NavigableMap</code> 接口让 <code v-pre>TreeMap</code> 有了对集合内元素的搜索的能力。</p>
<p>实现<code v-pre>SortedMap</code>接口让 <code v-pre>TreeMap</code> 有了对集合中的元素根据键排序的能力。默认是按 key 的升序排序，不过我们也可以指定排序的比较器。示例代码如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> shuang.kou
 * <span class="token keyword">@createTime</span> 2020年06月15日 17:02:00
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">TreeMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> treeMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token class-name">Person</span> person1<span class="token punctuation">,</span> <span class="token class-name">Person</span> person2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">int</span> num <span class="token operator">=</span> person1<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> person2<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        treeMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"person1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        treeMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"person2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        treeMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token number">35</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"person3"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        treeMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"person4"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        treeMap<span class="token punctuation">.</span><span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>personStringEntry <span class="token operator">-></span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>personStringEntry<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>person1
person4
person2
person3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出，<code v-pre>TreeMap</code> 中的元素已经是按照 <code v-pre>Person</code> 的 age 字段的升序来排列了。</p>
<p>上面，我们是通过传入匿名内部类的方式实现的，你可以将代码替换成 Lambda 表达式实现的方式：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">TreeMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> treeMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>person1<span class="token punctuation">,</span> person2<span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> num <span class="token operator">=</span> person1<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> person2<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>综上，相比于<code v-pre>HashMap</code>来说 <code v-pre>TreeMap</code> 主要多了对集合中的元素根据键排序的能力以及对集合内元素的搜索的能力。</strong></p>
<h3 id="hashset-如何检查重复" tabindex="-1"><a class="header-anchor" href="#hashset-如何检查重复" aria-hidden="true">#</a> HashSet 如何检查重复</h3>
<p>以下内容摘自我的 Java 启蒙书《Head first java》第二版：</p>
<p>当你把对象加入<code v-pre>HashSet</code>时，<code v-pre>HashSet</code> 会先计算对象的<code v-pre>hashcode</code>值来判断对象加入的位置，同时也会与其他加入的对象的 <code v-pre>hashcode</code> 值作比较，如果没有相符的 <code v-pre>hashcode</code>，<code v-pre>HashSet</code> 会假设对象没有重复出现。但是如果发现有相同 <code v-pre>hashcode</code> 值的对象，这时会调用<code v-pre>equals()</code>方法来检查 <code v-pre>hashcode</code> 相等的对象是否真的相同。如果两者相同，<code v-pre>HashSet</code> 就不会让加入操作成功。</p>
<p>在openjdk8中，<code v-pre>HashSet</code>的<code v-pre>add()</code>方法只是简单的调用了<code v-pre>HashMap</code>的<code v-pre>put()</code>方法，并且判断了一下返回值以确保是否有重复元素。直接看一下<code v-pre>HashSet</code>中的源码：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// Returns: true if this set did not already contain the specified element</span>
<span class="token comment">// 返回值：当set中没有包含add的元素时返回真</span>
<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">E</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> <span class="token constant">PRESENT</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而在<code v-pre>HashMap</code>的<code v-pre>putVal()</code>方法中也能看到如下说明：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// Returns : previous value, or null if none</span>
<span class="token comment">// 返回值：如果插入位置没有元素返回null，否则返回上一个元素</span>
<span class="token keyword">final</span> <span class="token class-name">V</span> <span class="token function">putVal</span><span class="token punctuation">(</span><span class="token keyword">int</span> hash<span class="token punctuation">,</span> <span class="token class-name">K</span> key<span class="token punctuation">,</span> <span class="token class-name">V</span> value<span class="token punctuation">,</span> <span class="token keyword">boolean</span> onlyIfAbsent<span class="token punctuation">,</span>
                   <span class="token keyword">boolean</span> evict<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也就是说，在openjdk8中，实际上无论<code v-pre>HashSet</code>中是否已经存在了某元素，<code v-pre>HashSet</code>都会直接插入，只是会在<code v-pre>add()</code>方法的返回值处告诉我们插入前是否存在相同元素。</p>
<p><strong><code v-pre>hashCode()</code>与 <code v-pre>equals()</code> 的相关规定：</strong></p>
<ol>
<li>如果两个对象相等，则 <code v-pre>hashcode</code> 一定也是相同的</li>
<li>两个对象相等,对两个 <code v-pre>equals()</code> 方法返回 true</li>
<li>两个对象有相同的 <code v-pre>hashcode</code> 值，它们也不一定是相等的</li>
<li>综上，<code v-pre>equals()</code> 方法被覆盖过，则 <code v-pre>hashCode()</code> 方法也必须被覆盖</li>
<li><code v-pre>hashCode()</code>的默认行为是对堆上的对象产生独特值。如果没有重写 <code v-pre>hashCode()</code>，则该 class 的两个对象无论如何都不会相等（即使这两个对象指向相同的数据）。</li>
</ol>
<p><strong>==与 equals 的区别</strong></p>
<p>对于基本类型来说，== 比较的是值是否相等；</p>
<p>对于引用类型来说，== 比较的是两个引用是否指向同一个对象地址（两者在内存中存放的地址（堆内存地址）是否指向同一个地方）；</p>
<p>对于引用类型（包括包装类型）来说，equals 如果没有被重写，对比它们的地址是否相等；如果 equals()方法被重写（例如 String），则比较的是地址里的内容。</p>
<h3 id="hashmap-的底层实现" tabindex="-1"><a class="header-anchor" href="#hashmap-的底层实现" aria-hidden="true">#</a> HashMap 的底层实现</h3>
<h4 id="jdk1-8-之前" tabindex="-1"><a class="header-anchor" href="#jdk1-8-之前" aria-hidden="true">#</a> JDK1.8 之前</h4>
<p>JDK1.8 之前 <code v-pre>HashMap</code> 底层是 <strong>数组和链表</strong> 结合在一起使用也就是 <strong>链表散列</strong>。<strong>HashMap 通过 key 的 hashCode 经过扰动函数处理过后得到 hash 值，然后通过 (n - 1) &amp; hash 判断当前元素存放的位置（这里的 n 指的是数组的长度），如果当前位置存在元素的话，就判断该元素与要存入的元素的 hash 值以及 key 是否相同，如果相同的话，直接覆盖，不相同就通过拉链法解决冲突。</strong></p>
<p><strong>所谓扰动函数指的就是 HashMap 的 hash 方法。使用 hash 方法也就是扰动函数是为了防止一些实现比较差的 hashCode() 方法 换句话说使用扰动函数之后可以减少碰撞。</strong></p>
<p><strong>JDK 1.8 HashMap 的 hash 方法源码:</strong></p>
<p>JDK 1.8 的 hash 方法 相比于 JDK 1.7 hash 方法更加简化，但是原理不变。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">hash</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">int</span> h<span class="token punctuation">;</span>
      <span class="token comment">// key.hashCode()：返回散列值也就是hashcode</span>
      <span class="token comment">// ^ ：按位异或</span>
      <span class="token comment">// >>>:无符号右移，忽略符号位，空位都以0补齐</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>key <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> <span class="token punctuation">(</span>h <span class="token operator">=</span> key<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">^</span> <span class="token punctuation">(</span>h <span class="token operator">>>></span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对比一下 JDK1.7 的 HashMap 的 hash 方法源码.</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">hash</span><span class="token punctuation">(</span><span class="token keyword">int</span> h<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// This function ensures that hashCodes that differ only by</span>
    <span class="token comment">// constant multiples at each bit position have a bounded</span>
    <span class="token comment">// number of collisions (approximately 8 at default load factor).</span>

    h <span class="token operator">^=</span> <span class="token punctuation">(</span>h <span class="token operator">>>></span> <span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">^</span> <span class="token punctuation">(</span>h <span class="token operator">>>></span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> h <span class="token operator">^</span> <span class="token punctuation">(</span>h <span class="token operator">>>></span> <span class="token number">7</span><span class="token punctuation">)</span> <span class="token operator">^</span> <span class="token punctuation">(</span>h <span class="token operator">>>></span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相比于 JDK1.8 的 hash 方法 ，JDK 1.7 的 hash 方法的性能会稍差一点点，因为毕竟扰动了 4 次。</p>
<p>所谓 <strong>“拉链法”</strong> 就是：将链表和数组相结合。也就是说创建一个链表数组，数组中每一格就是一个链表。若遇到哈希冲突，则将冲突的值加到链表中即可。</p>
<p><img src="images/jdk1.8之前的内部结构-HashMap.png" alt="jdk1.8之前的内部结构-HashMap"></p>
<h4 id="jdk1-8-之后" tabindex="-1"><a class="header-anchor" href="#jdk1-8-之后" aria-hidden="true">#</a> JDK1.8 之后</h4>
<p>相比于之前的版本， JDK1.8 之后在解决哈希冲突时有了较大的变化，当链表长度大于阈值（默认为 8）（将链表转换成红黑树前会判断，如果当前数组的长度小于 64，那么会选择先进行数组扩容，而不是转换为红黑树）时，将链表转化为红黑树，以减少搜索时间。</p>
<p><img src="images/jdk1.8之后的内部结构-HashMap.png" alt="jdk1.8之后的内部结构-HashMap"></p>
<blockquote>
<p>TreeMap、TreeSet 以及 JDK1.8 之后的 HashMap 底层都用到了红黑树。红黑树就是为了解决二叉查找树的缺陷，因为二叉查找树在某些情况下会退化成一个线性结构。</p>
</blockquote>
<h3 id="hashmap-的长度为什么是-2-的幂次方" tabindex="-1"><a class="header-anchor" href="#hashmap-的长度为什么是-2-的幂次方" aria-hidden="true">#</a> HashMap 的长度为什么是 2 的幂次方</h3>
<p>为了能让 HashMap 存取高效，尽量较少碰撞，也就是要尽量把数据分配均匀。我们上面也讲到了过了，Hash 值的范围值-2147483648 到 2147483647，前后加起来大概 40 亿的映射空间，只要哈希函数映射得比较均匀松散，一般应用是很难出现碰撞的。但问题是一个 40 亿长度的数组，内存是放不下的。所以这个散列值是不能直接拿来用的。用之前还要先做对数组的长度取模运算，得到的余数才能用来要存放的位置也就是对应的数组下标。这个数组下标的计算方法是“ <code v-pre>(n - 1) &amp; hash</code>”。（n 代表数组长度）。这也就解释了 HashMap 的长度为什么是 2 的幂次方。</p>
<p><strong>这个算法应该如何设计呢？</strong></p>
<p>我们首先可能会想到采用%取余的操作来实现。但是，重点来了：<strong>“取余(%)操作中如果除数是 2 的幂次则等价于与其除数减一的与(&amp;)操作（也就是说 hash%length==hash&amp;(length-1)的前提是 length 是 2 的 n 次方；）。”</strong> 并且 <strong>采用二进制位操作 &amp;，相对于%能够提高运算效率，这就解释了 HashMap 的长度为什么是 2 的幂次方。</strong></p>
<h3 id="hashmap-多线程操作导致死循环问题" tabindex="-1"><a class="header-anchor" href="#hashmap-多线程操作导致死循环问题" aria-hidden="true">#</a> HashMap 多线程操作导致死循环问题</h3>
<p>主要原因在于并发下的 Rehash 会造成元素之间会形成一个循环链表。不过，jdk 1.8 后解决了这个问题，但是还是不建议在多线程下使用 HashMap,因为多线程下使用 HashMap 还是会存在其他问题比如数据丢失。并发环境下推荐使用 ConcurrentHashMap 。</p>
<p>详情请查看：<a href="https://coolshell.cn/articles/9606.html" target="_blank" rel="noopener noreferrer">https://coolshell.cn/articles/9606.html<ExternalLinkIcon/></a></p>
<h3 id="hashmap-有哪几种常见的遍历方式" tabindex="-1"><a class="header-anchor" href="#hashmap-有哪几种常见的遍历方式" aria-hidden="true">#</a> HashMap 有哪几种常见的遍历方式?</h3>
<p><a href="https://mp.weixin.qq.com/s/zQBN3UvJDhRTKP6SzcZFKw" target="_blank" rel="noopener noreferrer">HashMap 的 7 种遍历方式与性能分析！<ExternalLinkIcon/></a></p>
<h3 id="concurrenthashmap-和-hashtable-的区别" tabindex="-1"><a class="header-anchor" href="#concurrenthashmap-和-hashtable-的区别" aria-hidden="true">#</a> ConcurrentHashMap 和 Hashtable 的区别</h3>
<p><code v-pre>ConcurrentHashMap</code> 和 <code v-pre>Hashtable</code> 的区别主要体现在实现线程安全的方式上不同。</p>
<ul>
<li><strong>底层数据结构：</strong> JDK1.7 的 <code v-pre>ConcurrentHashMap</code> 底层采用 <strong>分段的数组+链表</strong> 实现，JDK1.8 采用的数据结构跟 <code v-pre>HashMap1.8</code> 的结构一样，数组+链表/红黑二叉树。<code v-pre>Hashtable</code> 和 JDK1.8 之前的 <code v-pre>HashMap</code> 的底层数据结构类似都是采用 <strong>数组+链表</strong> 的形式，数组是 HashMap 的主体，链表则是主要为了解决哈希冲突而存在的；</li>
<li><strong>实现线程安全的方式（重要）：</strong> ① <strong>在 JDK1.7 的时候，<code v-pre>ConcurrentHashMap</code>（分段锁）</strong> 对整个桶数组进行了分割分段(<code v-pre>Segment</code>)，每一把锁只锁容器其中一部分数据，多线程访问容器里不同数据段的数据，就不会存在锁竞争，提高并发访问率。 <strong>到了 JDK1.8 的时候已经摒弃了 <code v-pre>Segment</code> 的概念，而是直接用 <code v-pre>Node</code> 数组+链表+红黑树的数据结构来实现，并发控制使用 <code v-pre>synchronized</code> 和 CAS 来操作。（JDK1.6 以后 对 <code v-pre>synchronized</code> 锁做了很多优化）</strong> 整个看起来就像是优化过且线程安全的 <code v-pre>HashMap</code>，虽然在 JDK1.8 中还能看到 <code v-pre>Segment</code> 的数据结构，但是已经简化了属性，只是为了兼容旧版本；② <strong><code v-pre>Hashtable</code>(同一把锁)</strong> :使用 <code v-pre>synchronized</code> 来保证线程安全，效率非常低下。当一个线程访问同步方法时，其他线程也访问同步方法，可能会进入阻塞或轮询状态，如使用 put 添加元素，另一个线程不能使用 put 添加元素，也不能使用 get，竞争会越来越激烈效率越低。</li>
</ul>
<p><strong>两者的对比图：</strong></p>
<p><strong>Hashtable:</strong></p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/HashTable全表锁.png" alt="Hashtable全表锁"></p>
<p style="text-align:right;font-size:13px;color:gray">https://www.cnblogs.com/chengxiao/p/6842045.html></p>
<p><strong>JDK1.7 的 ConcurrentHashMap：</strong></p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/ConcurrentHashMap分段锁.jpg" alt="JDK1.7的ConcurrentHashMap"></p>
<p style="text-align:right;font-size:13px;color:gray">https://www.cnblogs.com/chengxiao/p/6842045.html></p>
<p><strong>JDK1.8 的 ConcurrentHashMap：</strong></p>
<p><img src="@source/docs/java/collection/images/java8_concurrenthashmap.png" alt="Java8 ConcurrentHashMap 存储结构（图片来自 javadoop）"></p>
<p>JDK1.8 的 <code v-pre>ConcurrentHashMap</code> 不再是 <strong>Segment 数组 + HashEntry 数组 + 链表</strong>，而是 <strong>Node 数组 + 链表 / 红黑树</strong>。不过，Node 只能用于链表的情况，红黑树的情况需要使用 <strong><code v-pre>TreeNode</code></strong>。当冲突链表达到一定长度时，链表会转换成红黑树。</p>
<h3 id="concurrenthashmap-线程安全的具体实现方式-底层具体实现" tabindex="-1"><a class="header-anchor" href="#concurrenthashmap-线程安全的具体实现方式-底层具体实现" aria-hidden="true">#</a> ConcurrentHashMap 线程安全的具体实现方式/底层具体实现</h3>
<h4 id="jdk1-7-上面有示意图" tabindex="-1"><a class="header-anchor" href="#jdk1-7-上面有示意图" aria-hidden="true">#</a> JDK1.7（上面有示意图）</h4>
<p>首先将数据分为一段一段的存储，然后给每一段数据配一把锁，当一个线程占用锁访问其中一个段数据时，其他段的数据也能被其他线程访问。</p>
<p><strong><code v-pre>ConcurrentHashMap</code> 是由 <code v-pre>Segment</code> 数组结构和 <code v-pre>HashEntry</code> 数组结构组成</strong>。</p>
<p>Segment 实现了 <code v-pre>ReentrantLock</code>,所以 <code v-pre>Segment</code> 是一种可重入锁，扮演锁的角色。<code v-pre>HashEntry</code> 用于存储键值对数据。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Segment</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> <span class="token keyword">extends</span> <span class="token class-name">ReentrantLock</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>一个 <code v-pre>ConcurrentHashMap</code> 里包含一个 <code v-pre>Segment</code> 数组。<code v-pre>Segment</code> 的结构和 <code v-pre>HashMap</code> 类似，是一种数组和链表结构，一个 <code v-pre>Segment</code> 包含一个 <code v-pre>HashEntry</code> 数组，每个 <code v-pre>HashEntry</code> 是一个链表结构的元素，每个 <code v-pre>Segment</code> 守护着一个 <code v-pre>HashEntry</code> 数组里的元素，当对 <code v-pre>HashEntry</code> 数组的数据进行修改时，必须首先获得对应的 <code v-pre>Segment</code> 的锁。</p>
<h4 id="jdk1-8-上面有示意图" tabindex="-1"><a class="header-anchor" href="#jdk1-8-上面有示意图" aria-hidden="true">#</a> JDK1.8 （上面有示意图）</h4>
<p><code v-pre>ConcurrentHashMap</code> 取消了 <code v-pre>Segment</code> 分段锁，采用 CAS 和 <code v-pre>synchronized</code> 来保证并发安全。数据结构跟 HashMap1.8 的结构类似，数组+链表/红黑二叉树。Java 8 在链表长度超过一定阈值（8）时将链表（寻址时间复杂度为 O(N)）转换为红黑树（寻址时间复杂度为 O(log(N))）</p>
<p><code v-pre>synchronized</code> 只锁定当前链表或红黑二叉树的首节点，这样只要 hash 不冲突，就不会产生并发，效率又提升 N 倍。</p>
<h2 id="collections-工具类" tabindex="-1"><a class="header-anchor" href="#collections-工具类" aria-hidden="true">#</a> Collections 工具类</h2>
<p>Collections 工具类常用方法:</p>
<ol>
<li>排序</li>
<li>查找,替换操作</li>
<li>同步控制(不推荐，需要线程安全的集合类型时请考虑使用 JUC 包下的并发集合)</li>
</ol>
<h3 id="排序操作" tabindex="-1"><a class="header-anchor" href="#排序操作" aria-hidden="true">#</a> 排序操作</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token class-name">List</span> list<span class="token punctuation">)</span><span class="token comment">//反转</span>
<span class="token keyword">void</span> <span class="token function">shuffle</span><span class="token punctuation">(</span><span class="token class-name">List</span> list<span class="token punctuation">)</span><span class="token comment">//随机排序</span>
<span class="token keyword">void</span> <span class="token function">sort</span><span class="token punctuation">(</span><span class="token class-name">List</span> list<span class="token punctuation">)</span><span class="token comment">//按自然排序的升序排序</span>
<span class="token keyword">void</span> <span class="token function">sort</span><span class="token punctuation">(</span><span class="token class-name">List</span> list<span class="token punctuation">,</span> <span class="token class-name">Comparator</span> c<span class="token punctuation">)</span><span class="token comment">//定制排序，由Comparator控制排序逻辑</span>
<span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token class-name">List</span> list<span class="token punctuation">,</span> <span class="token keyword">int</span> i <span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span><span class="token comment">//交换两个索引位置的元素</span>
<span class="token keyword">void</span> <span class="token function">rotate</span><span class="token punctuation">(</span><span class="token class-name">List</span> list<span class="token punctuation">,</span> <span class="token keyword">int</span> distance<span class="token punctuation">)</span><span class="token comment">//旋转。当distance为正数时，将list后distance个元素整体移到前面。当distance为负数时，将 list的前distance个元素整体移到后面</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查找-替换操作" tabindex="-1"><a class="header-anchor" href="#查找-替换操作" aria-hidden="true">#</a> 查找,替换操作</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span><span class="token class-name">List</span> list<span class="token punctuation">,</span> <span class="token class-name">Object</span> key<span class="token punctuation">)</span><span class="token comment">//对List进行二分查找，返回索引，注意List必须是有序的</span>
<span class="token keyword">int</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token class-name">Collection</span> coll<span class="token punctuation">)</span><span class="token comment">//根据元素的自然顺序，返回最大的元素。 类比int min(Collection coll)</span>
<span class="token keyword">int</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token class-name">Collection</span> coll<span class="token punctuation">,</span> <span class="token class-name">Comparator</span> c<span class="token punctuation">)</span><span class="token comment">//根据定制排序，返回最大元素，排序规则由Comparatator类控制。类比int min(Collection coll, Comparator c)</span>
<span class="token keyword">void</span> <span class="token function">fill</span><span class="token punctuation">(</span><span class="token class-name">List</span> list<span class="token punctuation">,</span> <span class="token class-name">Object</span> obj<span class="token punctuation">)</span><span class="token comment">//用指定的元素代替指定list中的所有元素</span>
<span class="token keyword">int</span> <span class="token function">frequency</span><span class="token punctuation">(</span><span class="token class-name">Collection</span> c<span class="token punctuation">,</span> <span class="token class-name">Object</span> o<span class="token punctuation">)</span><span class="token comment">//统计元素出现次数</span>
<span class="token keyword">int</span> <span class="token function">indexOfSubList</span><span class="token punctuation">(</span><span class="token class-name">List</span> list<span class="token punctuation">,</span> <span class="token class-name">List</span> target<span class="token punctuation">)</span><span class="token comment">//统计target在list中第一次出现的索引，找不到则返回-1，类比int lastIndexOfSubList(List source, list target)</span>
<span class="token keyword">boolean</span> <span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token class-name">List</span> list<span class="token punctuation">,</span> <span class="token class-name">Object</span> oldVal<span class="token punctuation">,</span> <span class="token class-name">Object</span> newVal<span class="token punctuation">)</span><span class="token comment">//用新元素替换旧元素</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="同步控制" tabindex="-1"><a class="header-anchor" href="#同步控制" aria-hidden="true">#</a> 同步控制</h3>
<p><code v-pre>Collections</code> 提供了多个<code v-pre>synchronizedXxx()</code>方法·，该方法可以将指定集合包装成线程同步的集合，从而解决多线程并发访问集合时的线程安全问题。</p>
<p>我们知道 <code v-pre>HashSet</code>，<code v-pre>TreeSet</code>，<code v-pre>ArrayList</code>,<code v-pre>LinkedList</code>,<code v-pre>HashMap</code>,<code v-pre>TreeMap</code> 都是线程不安全的。<code v-pre>Collections</code> 提供了多个静态方法可以把他们包装成线程同步的集合。</p>
<p><strong>最好不要用下面这些方法，效率非常低，需要线程安全的集合类型时请考虑使用 JUC 包下的并发集合。</strong></p>
<p>方法如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token function">synchronizedCollection</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span>  c<span class="token punctuation">)</span> <span class="token comment">//返回指定 collection 支持的同步（线程安全的）collection。</span>
<span class="token function">synchronizedList</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> list<span class="token punctuation">)</span><span class="token comment">//返回指定列表支持的同步（线程安全的）List。</span>
<span class="token function">synchronizedMap</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> m<span class="token punctuation">)</span> <span class="token comment">//返回由指定映射支持的同步（线程安全的）Map。</span>
<span class="token function">synchronizedSet</span><span class="token punctuation">(</span><span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> s<span class="token punctuation">)</span> <span class="token comment">//返回指定 set 支持的同步（线程安全的）set。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>



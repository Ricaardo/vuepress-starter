<template><div><h1 id="超时-重试机制" tabindex="-1"><a class="header-anchor" href="#超时-重试机制" aria-hidden="true">#</a> 超时&amp;重试机制</h1>
<p><strong>一旦用户的请求超过某个时间得不到响应就结束此次请求并抛出异常。</strong> 如果不进行超时设置可能会导致请求响应速度慢，甚至导致请求堆积进而让系统无法再处理请求。</p>
<p>另外，重试的次数一般设为 3 次，再多次的重试没有好处，反而会加重服务器压力（部分场景使用失败重试机制会不太适合）。</p>
</div></template>



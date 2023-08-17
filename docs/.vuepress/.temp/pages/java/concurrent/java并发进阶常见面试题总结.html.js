export const data = JSON.parse("{\"key\":\"v-10605659\",\"path\":\"/java/concurrent/java%E5%B9%B6%E5%8F%91%E8%BF%9B%E9%98%B6%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E6%80%BB%E7%BB%93.html\",\"title\":\"Java 并发常见知识点&面试题总结（进阶篇）\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Java 并发常见知识点&面试题总结（进阶篇）\",\"category\":\"Java\",\"tag\":[\"Java并发\"]},\"headers\":[{\"level\":2,\"title\":\"1.synchronized 关键字\",\"slug\":\"_1-synchronized-关键字\",\"link\":\"#_1-synchronized-关键字\",\"children\":[{\"level\":3,\"title\":\"1.1.说一说自己对于 synchronized 关键字的了解\",\"slug\":\"_1-1-说一说自己对于-synchronized-关键字的了解\",\"link\":\"#_1-1-说一说自己对于-synchronized-关键字的了解\",\"children\":[]},{\"level\":3,\"title\":\"1.2. 说说自己是怎么使用 synchronized 关键字\",\"slug\":\"_1-2-说说自己是怎么使用-synchronized-关键字\",\"link\":\"#_1-2-说说自己是怎么使用-synchronized-关键字\",\"children\":[]},{\"level\":3,\"title\":\"1.3. 构造方法可以使用 synchronized 关键字修饰么？\",\"slug\":\"_1-3-构造方法可以使用-synchronized-关键字修饰么\",\"link\":\"#_1-3-构造方法可以使用-synchronized-关键字修饰么\",\"children\":[]},{\"level\":3,\"title\":\"1.3. 讲一下 synchronized 关键字的底层原理\",\"slug\":\"_1-3-讲一下-synchronized-关键字的底层原理\",\"link\":\"#_1-3-讲一下-synchronized-关键字的底层原理\",\"children\":[]},{\"level\":3,\"title\":\"1.4. 说说 JDK1.6 之后的 synchronized 关键字底层做了哪些优化，可以详细介绍一下这些优化吗\",\"slug\":\"_1-4-说说-jdk1-6-之后的-synchronized-关键字底层做了哪些优化-可以详细介绍一下这些优化吗\",\"link\":\"#_1-4-说说-jdk1-6-之后的-synchronized-关键字底层做了哪些优化-可以详细介绍一下这些优化吗\",\"children\":[]},{\"level\":3,\"title\":\"1.5. 谈谈 synchronized 和 ReentrantLock 的区别\",\"slug\":\"_1-5-谈谈-synchronized-和-reentrantlock-的区别\",\"link\":\"#_1-5-谈谈-synchronized-和-reentrantlock-的区别\",\"children\":[]}]},{\"level\":2,\"title\":\"2. volatile 关键字\",\"slug\":\"_2-volatile-关键字\",\"link\":\"#_2-volatile-关键字\",\"children\":[{\"level\":3,\"title\":\"2.1. CPU 缓存模型\",\"slug\":\"_2-1-cpu-缓存模型\",\"link\":\"#_2-1-cpu-缓存模型\",\"children\":[]},{\"level\":3,\"title\":\"2.2. 讲一下 JMM(Java 内存模型)\",\"slug\":\"_2-2-讲一下-jmm-java-内存模型\",\"link\":\"#_2-2-讲一下-jmm-java-内存模型\",\"children\":[]},{\"level\":3,\"title\":\"2.3. 并发编程的三个重要特性\",\"slug\":\"_2-3-并发编程的三个重要特性\",\"link\":\"#_2-3-并发编程的三个重要特性\",\"children\":[]},{\"level\":3,\"title\":\"2.4. 说说 synchronized 关键字和 volatile 关键字的区别\",\"slug\":\"_2-4-说说-synchronized-关键字和-volatile-关键字的区别\",\"link\":\"#_2-4-说说-synchronized-关键字和-volatile-关键字的区别\",\"children\":[]}]},{\"level\":2,\"title\":\"3. ThreadLocal\",\"slug\":\"_3-threadlocal\",\"link\":\"#_3-threadlocal\",\"children\":[{\"level\":3,\"title\":\"3.1. ThreadLocal 简介\",\"slug\":\"_3-1-threadlocal-简介\",\"link\":\"#_3-1-threadlocal-简介\",\"children\":[]},{\"level\":3,\"title\":\"3.2. ThreadLocal 示例\",\"slug\":\"_3-2-threadlocal-示例\",\"link\":\"#_3-2-threadlocal-示例\",\"children\":[]},{\"level\":3,\"title\":\"3.3. ThreadLocal 原理\",\"slug\":\"_3-3-threadlocal-原理\",\"link\":\"#_3-3-threadlocal-原理\",\"children\":[]},{\"level\":3,\"title\":\"3.4. ThreadLocal 内存泄露问题\",\"slug\":\"_3-4-threadlocal-内存泄露问题\",\"link\":\"#_3-4-threadlocal-内存泄露问题\",\"children\":[]}]},{\"level\":2,\"title\":\"4. 线程池\",\"slug\":\"_4-线程池\",\"link\":\"#_4-线程池\",\"children\":[{\"level\":3,\"title\":\"4.1. 为什么要用线程池？\",\"slug\":\"_4-1-为什么要用线程池\",\"link\":\"#_4-1-为什么要用线程池\",\"children\":[]},{\"level\":3,\"title\":\"4.2. 实现 Runnable 接口和 Callable 接口的区别\",\"slug\":\"_4-2-实现-runnable-接口和-callable-接口的区别\",\"link\":\"#_4-2-实现-runnable-接口和-callable-接口的区别\",\"children\":[]},{\"level\":3,\"title\":\"4.3. 执行 execute()方法和 submit()方法的区别是什么呢？\",\"slug\":\"_4-3-执行-execute-方法和-submit-方法的区别是什么呢\",\"link\":\"#_4-3-执行-execute-方法和-submit-方法的区别是什么呢\",\"children\":[]},{\"level\":3,\"title\":\"4.4. 如何创建线程池\",\"slug\":\"_4-4-如何创建线程池\",\"link\":\"#_4-4-如何创建线程池\",\"children\":[]},{\"level\":3,\"title\":\"4.5 ThreadPoolExecutor 类分析\",\"slug\":\"_4-5-threadpoolexecutor-类分析\",\"link\":\"#_4-5-threadpoolexecutor-类分析\",\"children\":[]},{\"level\":3,\"title\":\"4.6 一个简单的线程池 Demo\",\"slug\":\"_4-6-一个简单的线程池-demo\",\"link\":\"#_4-6-一个简单的线程池-demo\",\"children\":[]},{\"level\":3,\"title\":\"4.7 线程池原理分析\",\"slug\":\"_4-7-线程池原理分析\",\"link\":\"#_4-7-线程池原理分析\",\"children\":[]}]},{\"level\":2,\"title\":\"5. Atomic 原子类\",\"slug\":\"_5-atomic-原子类\",\"link\":\"#_5-atomic-原子类\",\"children\":[{\"level\":3,\"title\":\"5.1. 介绍一下 Atomic 原子类\",\"slug\":\"_5-1-介绍一下-atomic-原子类\",\"link\":\"#_5-1-介绍一下-atomic-原子类\",\"children\":[]},{\"level\":3,\"title\":\"5.2. JUC 包中的原子类是哪 4 类?\",\"slug\":\"_5-2-juc-包中的原子类是哪-4-类\",\"link\":\"#_5-2-juc-包中的原子类是哪-4-类\",\"children\":[]},{\"level\":3,\"title\":\"5.3. 讲讲 AtomicInteger 的使用\",\"slug\":\"_5-3-讲讲-atomicinteger-的使用\",\"link\":\"#_5-3-讲讲-atomicinteger-的使用\",\"children\":[]},{\"level\":3,\"title\":\"5.4. 能不能给我简单介绍一下 AtomicInteger 类的原理\",\"slug\":\"_5-4-能不能给我简单介绍一下-atomicinteger-类的原理\",\"link\":\"#_5-4-能不能给我简单介绍一下-atomicinteger-类的原理\",\"children\":[]}]},{\"level\":2,\"title\":\"6. AQS\",\"slug\":\"_6-aqs\",\"link\":\"#_6-aqs\",\"children\":[{\"level\":3,\"title\":\"6.1. AQS 介绍\",\"slug\":\"_6-1-aqs-介绍\",\"link\":\"#_6-1-aqs-介绍\",\"children\":[]},{\"level\":3,\"title\":\"6.2. AQS 原理分析\",\"slug\":\"_6-2-aqs-原理分析\",\"link\":\"#_6-2-aqs-原理分析\",\"children\":[]},{\"level\":3,\"title\":\"6.3. AQS 组件总结\",\"slug\":\"_6-3-aqs-组件总结\",\"link\":\"#_6-3-aqs-组件总结\",\"children\":[]},{\"level\":3,\"title\":\"6.4. 用过 CountDownLatch 么？什么场景下用的？\",\"slug\":\"_6-4-用过-countdownlatch-么-什么场景下用的\",\"link\":\"#_6-4-用过-countdownlatch-么-什么场景下用的\",\"children\":[]}]},{\"level\":2,\"title\":\"7 Reference\",\"slug\":\"_7-reference\",\"link\":\"#_7-reference\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"java/concurrent/java并发进阶常见面试题总结.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

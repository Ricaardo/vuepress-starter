export const data = JSON.parse("{\"key\":\"v-385380d2\",\"path\":\"/docs/database/mysql/innodb-implementation-of-mvcc.html\",\"title\":\"InnoDB存储引擎对MVCC的实现\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"InnoDB存储引擎对MVCC的实现\",\"category\":\"数据库\",\"tag\":[\"MySQL\"]},\"headers\":[{\"level\":2,\"title\":\"一致性非锁定读和锁定读\",\"slug\":\"一致性非锁定读和锁定读\",\"link\":\"#一致性非锁定读和锁定读\",\"children\":[{\"level\":3,\"title\":\"一致性非锁定读\",\"slug\":\"一致性非锁定读\",\"link\":\"#一致性非锁定读\",\"children\":[]},{\"level\":3,\"title\":\"锁定读\",\"slug\":\"锁定读\",\"link\":\"#锁定读\",\"children\":[]}]},{\"level\":2,\"title\":\"InnoDB 对 MVCC 的实现\",\"slug\":\"innodb-对-mvcc-的实现\",\"link\":\"#innodb-对-mvcc-的实现\",\"children\":[{\"level\":3,\"title\":\"隐藏字段\",\"slug\":\"隐藏字段\",\"link\":\"#隐藏字段\",\"children\":[]},{\"level\":3,\"title\":\"ReadView\",\"slug\":\"readview\",\"link\":\"#readview\",\"children\":[]},{\"level\":3,\"title\":\"undo-log\",\"slug\":\"undo-log\",\"link\":\"#undo-log\",\"children\":[]},{\"level\":3,\"title\":\"数据可见性算法\",\"slug\":\"数据可见性算法\",\"link\":\"#数据可见性算法\",\"children\":[]}]},{\"level\":2,\"title\":\"RC 和 RR 隔离级别下 MVCC 的差异\",\"slug\":\"rc-和-rr-隔离级别下-mvcc-的差异\",\"link\":\"#rc-和-rr-隔离级别下-mvcc-的差异\",\"children\":[]},{\"level\":2,\"title\":\"MVCC 解决不可重复读问题\",\"slug\":\"mvcc-解决不可重复读问题\",\"link\":\"#mvcc-解决不可重复读问题\",\"children\":[{\"level\":3,\"title\":\"在 RC 下 ReadView 生成情况\",\"slug\":\"在-rc-下-readview-生成情况\",\"link\":\"#在-rc-下-readview-生成情况\",\"children\":[]},{\"level\":3,\"title\":\"在 RR 下 ReadView 生成情况\",\"slug\":\"在-rr-下-readview-生成情况\",\"link\":\"#在-rr-下-readview-生成情况\",\"children\":[]}]},{\"level\":2,\"title\":\"MVCC➕Next-key-Lock 防止幻读\",\"slug\":\"mvcc➕next-key-lock-防止幻读\",\"link\":\"#mvcc➕next-key-lock-防止幻读\",\"children\":[]},{\"level\":2,\"title\":\"参考\",\"slug\":\"参考\",\"link\":\"#参考\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"docs/database/mysql/innodb-implementation-of-mvcc.md\"}")

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

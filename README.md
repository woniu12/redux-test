## 什么是redux
-------
`Redux` 是 JavaScript 状态容器，提供可预测化的状态管理。

## 什么时候使用redux

----

* 某个组件的状态，需要共享

* 某个状态需要在任何地方都可以拿到

* 一个组件需要改变全局状态

* 一个组件需要改变另一个组件的状态

如果你的UI层非常简单，没有很多互动，Redux 就是不必要的，用了反而增加复杂性。

## 基础和概念

----

***state***

当使用普通对象来描述应用的 state 时：

```
{
  loginName: '',
  visibilityFilter: 'SHOW_COMPLETED'
}
```

> 这个对象就像 “Model”，区别是它并没有 setter（修改器方法）。因此其它的代码不能随意修改它，造成难以复现的 bug。

***action***

* `Action` 是把数据从应用传到 store 的有效载荷。

* 它是 store 数据的唯一来源。

* 要想更新 state 中的数据，你需要发起一个 `action`。

`Action` 就是一个普通 JavaScript 对象，像这样：

```
{type: 'SET_NAME', text: 'tom'},
{type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL'}
```

> 强制使用 action 来描述所有变化带来的好处是可以清晰地知道应用中到底发生了什么。如果一些东西改变了，就可以知道为什么变。action 就像是描述发生了什么的指示器。

**注：**

**在redux中约定，action 内必须使用一个字符串类型的 type 字段来表示将要执行的动作。多数情况下，type 会被定义成字符串常量。当应用规模越来越大时，建议使用单独的模块或文件来存放 action。**

***reducer***

把 action 和 state 串起来，开发一些函数，这就是 reducer。

reducer 只是一个接收 state 和 action，并返回新的 state 的函数。

```
function loginName(state = '', action) {
  if (action.type === 'SET_NAME') {
    return action.filter;
  } else {
    return state;
  }
}

function visibilityFilter(state = 'SHOW_ALL', action) {
  if (action.type === 'SET_VISIBILITY_FILTER') {
    return action.filter;
  } else {
    return state;
  }
}

```

再开发一个 reducer 调用这两个 reducer，进而来管理整个应用的 state：

```
function reducers(state = {}, action) {
  return {
    loginName: loginName(state.loginName, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  };
}

```
**注：**

**`reducer` 纯净非常重要。永远不要在 reducer 里做这些操作：**

* **修改传入参数；**

* **执行有副作用的操作，如 API 请求和路由跳转；**

* **调用非纯函数，如 Date.now() 或 Math.random()。**

每个 reducer 只负责管理全局 state 中它负责的一部分。每个 reducer 的 state 参数都不同，分别对应它管理的那部分 state 数据。

> 这差不多就是 Redux 思想的全部。redux 就是提供一些简单的工具来简化这种模式。

## redux 三大原则

-------

* **单一数据源**

  >**整个应用的 `state` 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 `store` 中。**

* State 是只读的

  > **唯一改变 state 的方法就是触发 `action`，action 是一个用于描述已发生事件的普通对象。在 default 情况下返回旧的 state。遇到未知的 action 时，一定要返回旧的 state。不要使用 Object.assign(state, newData)，应该使用 Object.assign({}, state, newData)**

* 使用纯函数来执行修改

  > **为了描述 action 如何改变 state tree ，你需要编写 `reducers`**

## redux API

--------

***createStore(reducer, [preloadedState], enhancer)***

创建一个 Redux `store`来以存放应用中所有的 state。

**应用中应有且仅有一个 store。**

**参数**

* `reducer` *(Function)*: 接收两个参数，分别是当前的 state 树和要处理的 `action`，返回新的 `state 树`

* `preloadedState`*(any)*: 初始时的 state。如果你使用 `combineReducers`创建 `reducer`，它必须是一个普通对象，与传入的 keys 保持同样的结构。否则，你可以自由传入任何 `reducer` 可理解的内容。

* `enhancer` *(Function)*: Store enhancer 是一个组合 store creator 的高阶函数，返回一个新的强化过的 store creator。这与 middleware 相似，它也允许你通过复合函数改变 store 接口。

**返回值**

*`Store`*: 保存了应用所有 state 的对象。

***Store***

Store 就是用来维持应用所有的state 树 的一个对象。

Store 不是类。它只是有几个方法的对象。 要创建它，只需要把根部的 reducing 函数 传递给 `createStore`。

|Store 方法| 介绍|参数| 返回值|
|-----|----|------|---|
|`getState()`|得到state|--|(any): 应用当前的 state 树。|
|`dispatch`|分发 action。这是触发 state 变化的惟一途径。|action (Object)|(Object): 要 dispatch 的 action。|
|`subscribe`|一个变化监听器。每当 dispatch action 的时候就会执行，state 树中的一部分可能已经变化。 |`listener` (*Function*): 每当 dispatch action 的时候都会执行的回调。state 树中的一部分可能已经变化。你可以在回调函数里调用 [`getState()`](https://www.redux.org.cn/docs/api/Store.html#getState) 来拿到当前 state。|(Function): 一个可以解绑变化监听器的函数。|
|`replaceReducer(nextReducer)`|替换 store 当前用来计算 state 的 reducer。这是一个高级 API。只有在你需要实现代码分隔，而且需要立即加载一些 reducer 的时候才可能会用到它。|reducer (Function) store 会使用的下一个 reducer。|---|

***combineReducers(reducers)***

combineReducers 辅助函数的作用是，把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducer 函数。

合并后的 reducer 可以调用各个子 reducer，并把它们返回的结果合并成一个 state 对象。**由 combineReducers() 返回的 state 对象，会将传入的每个 reducer 返回的 state 按其传递给 combineReducers() 时对应的 key 进行命名。**

```
rootReducer = combineReducers({potato: potatoReducer, tomato: tomatoReducer})
// rootReducer 将返回如下的 state 对象
{
  potato: {
    // ... potatoes, 和一些其他由 potatoReducer 管理的 state 对象 ...
  },
  tomato: {
    // ... tomatoes, 和一些其他由 tomatoReducer 管理的 state 对象，比如说 sauce 属性 ...
  }
}
```

**参数**

reducers (Object): 一个对象，它的值（value）对应不同的 reducer 函数，这些 reducer 函数后面会被合并成一个。

**返回值**

(Function)：一个调用 reducers 对象里所有 reducer 的 reducer，并且构造一个与 reducers 对象结构相同的 state 对象。

**注：**

**每个传入 combineReducers 的 reducer 都需满足以下规则：**

* 所有未匹配到的 action，必须把它接收到的第一个参数也就是那个 state 原封不动返回。

* 永远不能返回 undefined。当过早 return 时非常容易犯这个错误，为了避免错误扩散，遇到这种情况时 combineReducers 会抛异常。

* 如果传入的 state 就是 undefined，一定要返回对应 reducer 的初始 state。根据上一条规则，初始 state 禁止使用 undefined。使用 ES6 的默认参数值语法来设置初始 state 很容易，但你也可以手动检查第一个参数是否为 undefined。

**示例**

```
//reducers/todos.js
export default function todos(state = [], action) {
  switch (action.type) {
  case 'ADD_TODO':
    return state.concat([action.text])
  default:
    return state
  }
}
//reducers/counter.js
export default function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}
//reducers/index.js
import { combineReducers } from 'redux'
import todos from './todos'
import counter from './counter'

export default combineReducers({
  todos,
  counter
})
//App.js
import { createStore } from 'redux'
import reducer from './reducers/index'

let store = createStore(reducer)
console.log(store.getState())
// {
//   counter: 0,
//   todos: []
// }

store.dispatch({
  type: 'ADD_TODO',
  text: 'Use Redux'
})
console.log(store.getState())
// {
//   counter: 0,
//   todos: [ 'Use Redux' ]
// }
```








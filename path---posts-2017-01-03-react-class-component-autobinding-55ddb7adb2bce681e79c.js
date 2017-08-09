webpackJsonp([0x9f856965dc0c5800],{"./node_modules/json-loader/index.js!./.cache/json/posts-2017-01-03-react-class-component-autobinding.json":function(n,s){n.exports={data:{site:{siteMetadata:{title:"rhostem.github.io",url:"https://rhostem.github.io",author:"rhostem"}},markdownRemark:{html:'<h2 id="react-컴포넌트-메소드에-자동으로-바인딩되는-this"><a href="#react-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%A9%94%EC%86%8C%EB%93%9C%EC%97%90-%EC%9E%90%EB%8F%99%EC%9C%BC%EB%A1%9C-%EB%B0%94%EC%9D%B8%EB%94%A9%EB%90%98%EB%8A%94-this" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React 컴포넌트 메소드에 자동으로 바인딩되는 <code>this</code></h2>\n<p>React 컴포넌트도 하나의 객체이므로 자바스크립트 문법을 따른다. 하지만 다른 점이 있는데, React는 <code>React.createClass</code>를 이용해 컴포넌트를 생성하면 모든 메소드에 컴포넌트 객체를 자동으로 바인딩한다는 점이다.</p>\n<p>자동 바인딩을 통해 React 컴포넌트의 메소드는 어떤 위치에서 호출되어도 <code>this</code>를 통해 컴포넌트에 접근할 수 있게 된다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> Button <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">_onClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  render<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>_onClick<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>위의 예제에서 <code>div</code> 컴포넌트를 클릭하면 <code>Button</code> 컴포넌트의 메소드로서 <code>_onClick</code>이 실행되는 것이 아니라 <strong>onClick 속성에 할당된 함수로서 호출</strong>된다. 코드로 풀어내면 아래와 같다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>onClick <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_onClick<span class="token punctuation">;</span>\n<span class="token function">onClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// div 클릭시 호출</span>\n</code></pre>\n      </div>\n<p><code>this._onClick</code>을 할당받은 <code>onClick</code> 함수는 <strong>Button 컴포넌트의 메소드가 아니다</strong>. 따라서 실행된 함수 내부에서의 <code>this</code>는 자연히 컴포넌트를 가리키지 않아야 정상이다.(이 경우 <code>this</code>에 접근하면 <code>null</code>이 반환된다)</p>\n<p>하지만 <code>React.createClass</code>는 자동 바인딩을 통해 저 경우에도 this를 통해 컴포넌트에 접근할 수 있게 해 준다. 이는 작업시 편의성을 제공하기 위한 일종의 트릭이라고 할 수 있다.</p>\n<h2 id="es6-클래스-형식의-컴포넌트-선언에서는-사라진-자동-바인딩"><a href="#es6-%ED%81%B4%EB%9E%98%EC%8A%A4-%ED%98%95%EC%8B%9D%EC%9D%98-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%84%A0%EC%96%B8%EC%97%90%EC%84%9C%EB%8A%94-%EC%82%AC%EB%9D%BC%EC%A7%84-%EC%9E%90%EB%8F%99-%EB%B0%94%EC%9D%B8%EB%94%A9" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ES6 클래스 형식의 컴포넌트 선언에서는 사라진 자동 바인딩</h2>\n<p>그런데 React 버전 0.13부터 지원하는 ES6 클래스 형식의 컴포넌트 선언에서는 자동 바인딩을 지원하지 않는다. 공식 홈페이지의 <a href="https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding">포스트</a>에 의하면 자바스크립트 표준과 다르게 동작하는 것이 혼란을 줄 수 있기 때문에 제거하기로 했다고 한다. 그리고 <code>React.createClass</code>를 이용하면 여전히 자동 바인딩이 지원된다.</p>\n<p>클래스 형식의 컴포넌트를 선언할 경우 메소드에 컴포넌트 인스턴스를 전달하기 위한 방법은 여러가지가 있다. <code>constructor</code> 내부에서 직접 바인딩하는 방법, 호출되는 장소에서 인라인으로 직접 바인딩해주는 방법, <code>arrow function</code>을 사용하는 방법 등이 있다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">class</span> <span class="token class-name">SelfBinding</span> <span class="token keyword">extends</span> <span class="token class-name">component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>say <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>say<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">\'React component\'</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'hello\'</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">hi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'hi\'</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div<span class="token operator">></span>\n        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>say<span class="token punctuation">}</span><span class="token operator">></span>press<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>\n        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span>  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">hi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>press<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>\n        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>hi<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>press<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>\n      <span class="token operator">&lt;</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2 id="데코레이터decorator를-이용한-자동-바인딩"><a href="#%EB%8D%B0%EC%BD%94%EB%A0%88%EC%9D%B4%ED%84%B0decorator%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%9E%90%EB%8F%99-%EB%B0%94%EC%9D%B8%EB%94%A9" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>데코레이터(<code>decorator</code>)를 이용한 자동 바인딩</h2>\n<p>데코레이터는 차기 자바스크립트 표준(ES2016/ES7)에 추가될 문법으로 <a href="https://en.wikipedia.org/wiki/Higher-order_function">higher-order</a> 함수 호출을 위한 간편한 문법을 제공한다. higher-order 함수는 다른 함수를 래핑해서 새로운 함수를 생산한다. 함수를 변경하지 않고 기능을 확장할 수 있다는 장점이 있다.</p>\n<p>데코레이터 라이브러리인 <a href="https://github.com/jayphelps/core-decorators.js"><code>core-decorators.js</code></a>의 <code>autobind</code> 메소드를 이용하면 자동 바인딩을 간편하게 적용할 수 있다.</p>\n<p>특정 메소드에만 적용할 수도 있고 컴포넌트에 적용하면 모든 메소드가 바인딩된다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token operator">...</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> autobind <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'core-decorators\'</span><span class="token punctuation">;</span>\n\n@autobind\n<span class="token keyword">class</span> <span class="token class-name">DecoratedComponent</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token operator">...</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3 id="데코레이터를-사용하기-위한-필요조건"><a href="#%EB%8D%B0%EC%BD%94%EB%A0%88%EC%9D%B4%ED%84%B0%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-%EC%9C%84%ED%95%9C-%ED%95%84%EC%9A%94%EC%A1%B0%EA%B1%B4" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>데코레이터를 사용하기 위한 필요조건</h3>\n<ul>\n<li><code>babel</code> 버전이 6일 경우 <a href="https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy"><code>babel-plugin-transform-decorators-legacy</code></a> 플러그인을 설치해야 한다.</li>\n<li>react-hot-loader를 사용하고 있을 경우 <a href="https://github.com/gaearon/react-hot-loader/pull/182"><code>2.0.0-alpha</code></a>이상의 버전이 필요하다.</li>\n</ul>\n<h2 id="참조"><a href="#%EC%B0%B8%EC%A1%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>참조</h2>\n<ul>\n<li><a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes#Prototype_methods">Classes - Prototype methods (MDN references)</a></li>\n<li><a href="https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding">React v0.13.0 Beta 1 # autobinding</a></li>\n<li><a href="http://egorsmirnov.me/2015/08/16/react-and-es6-part3.html">React and ES6 - Part 3, Binding to methods of React class (ES7 included)</a></li>\n<li><a href="https://facebook.github.io/react/docs/react-api.html#createclass">React.createClass</a></li>\n<li><a href="https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841#.4s8bu1oeo">Exploring EcmaScript Decorators</a></li>\n</ul>',timeToRead:4,fields:{tagSlugs:["/tags/javascript/","/tags/react/","/tags/es-6/","/tags/es-7/"]},frontmatter:{title:"데코레이터를 이용한 React 컴포넌트 메소드 자동 바인딩",tags:["Javascript","React","ES6","ES7"],date:"2017-01-03",description:"데코레이터를 이용한 React 컴포넌트 메소드 자동 바인딩"}}},pathContext:{slug:"/posts/2017-01-03-react-class-component-autobinding/"}}}});
//# sourceMappingURL=path---posts-2017-01-03-react-class-component-autobinding-55ddb7adb2bce681e79c.js.map
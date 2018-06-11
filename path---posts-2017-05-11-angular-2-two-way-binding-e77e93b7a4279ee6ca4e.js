webpackJsonp([0x9b91dacf8e56],{877:function(a,n){a.exports={data:{site:{siteMetadata:{title:"rhostem.github.io",url:"https://rhostem.github.io",author:"rhostem"}},markdownRemark:{html:'<h2 id="one-way-binding"><a href="#one-way-binding" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>one-way binding</h2>\n<p>Angular 2(Angular >= 2.x, 이하 Angular로 표기)는 React.js, Vue.js처럼 데이터의 흐름이 단방향(one-way binding)이다. 최근 대부분의 모던 자바스크립트 프레임워크들은 단방향 데이터 연결을 지향하고 있다. 그 이유는 앱 구조를 보다 명확하게 할 수 있고 확실한 명령을 통해서만 앱 상태를 변경하기에 사이드 이펙트 발생을 줄이고 컴포넌트간의 데이터 흐름을 직관적으로 만들어주기 때문이다.</p>\n<h2 id="angularjs의-two-way-binding"><a href="#angularjs%EC%9D%98-two-way-binding" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>AngularJS의 two way binding</h2>\n<p>Angular 1(Angular > 1.x, 이하 AngularJS로 표기)에서 많은 인기를 얻었던 특징 중에는 <code class="language-text">ng-model</code> 지시자(directive)를 이용한 양방향 데이터 연결(two-way binding)이 있다. UI에 연결된 데이터가 변경되면 앱의 상태가 자동으로 업데이트되는 기능이다. 예를 들면 input 태그의 value 속성에 변수를 할당한 후 사용자가 텍스트를 입력하면 onChange에 콜백 함수를 할당하지 않아도 자동으로 변수가 입력된 값으로 업데이트된다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html">// name 속성이 연결된 input에 텍스트를 입력하면 h1 태그 내부의 텍스트가 동시에 변경된다.\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ng-app</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>myApp<span class="token punctuation">"</span></span> <span class="token attr-name">ng-controller</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>myCtrl<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  Name: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">ng-model</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>You entered: {{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>앞서 Angular는 메이저 업데이트를 통해 데이터는 흐름이 단방향으로 바뀌었다고 했다. 그렇다면 자연스럽게 ng-model을 통한 양방향 데이터 연결은 컨셉에 맞지 않으니 제거했을 거라고 생각할 수도 있지만 그렇지 않다. 새로운 Angular에서도 여전히 ng-model 기능을 지원한다. 하지만 실제 구현을 살펴보면 양방향 데이터 연결이 아니라 단방향에 기반을 두고 있다는 사실을 확인할 수 있다.</p>\n<h2 id="banana-in-box-표기법"><a href="#banana-in-box-%ED%91%9C%EA%B8%B0%EB%B2%95" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>banana-in-box 표기법</h2>\n<p>Angular에서는 컴포넌트에 속성(property)과 이벤트(event)를 바인딩하는 문법을 구분해서 사용한다. 속성에는 대괄호, 이벤트에는 중괄호를 사용한다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app-two-way-binded</span>\n  <span class="token attr-name">[data]</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>prop<span class="token punctuation">"</span></span>\n  <span class="token attr-name">(dataChange)</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>onDataChange($event)<span class="token punctuation">"</span></span>\n<span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>app-two-way-binded</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>그리고 Angular에서는 양방향 연결을 위한 특수한 표기법을 지원한다. banana-in-box라는 표기법으로 중괄호와 대괄호를 동시에 사용한다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app-two-way-binded</span>\n  <span class="token attr-name">[(data)]</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>prop<span class="token punctuation">"</span></span>\n<span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>app-two-way-binded</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>저 표기법을 사용하면 예전처럼 프레임워크가 양방향 연결을 구현해 주는 것일까? 그렇지 않다. 대신 Angular는 컴파일시 banana-in-box 표기법을 <strong>속성 바인딩과 이벤트 바인딩으로 자동으로 분리</strong>한다. 속성 바인딩은 할당된 이름을 그대로 사용하고 이벤트 바인딩에는 속성에 사용한 이름에 <code class="language-text">Change</code>라는 접미사가 붙은 이름을 사용한다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app-two-way-binded</span>\n  <span class="token attr-name">[data]</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>prop<span class="token punctuation">"</span></span>\n  <span class="token attr-name">(dataChange)</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>prop = $event<span class="token punctuation">"</span></span>\n<span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>app-two-way-binded</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p><code class="language-text">prop = $event</code>부분은 콜백 함수를 선언하지 않고 함수 본문을 직접 할당한 방식이다. <code class="language-text">dataChange</code> 이벤트가 발생하면 부모 컴포넌트의 <code class="language-text">prop</code> 속성에 <code class="language-text">$event</code> 변수가 할당되어서 부모의 상태가 업데이트된다. 그런데 <code class="language-text">$event</code>라는 변수는 어디서 온 것일까? 다음 코드를 살펴보자.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">@<span class="token function">Component</span><span class="token punctuation">(</span>\n  selector<span class="token punctuation">:</span> <span class="token string">\'app-two-way-binded\'</span><span class="token punctuation">,</span>\n  template<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`\n    &lt;div>\n      &lt;label>data: &lt;/label>\n      &lt;input [value]="data" />\n      &lt;button (click)="increase()">+&lt;/button>\n    &lt;/div>\n  `</span></span>\n<span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">TwoWayBinded</span> <span class="token punctuation">{</span>\n  @<span class="token function">Input</span><span class="token punctuation">(</span><span class="token punctuation">)</span> data<span class="token punctuation">:</span> number<span class="token punctuation">;</span>\n  @<span class="token function">Output</span><span class="token punctuation">(</span><span class="token punctuation">)</span> dataChange <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token function">increase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token operator">++</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>dataChange<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><code class="language-text">TwoWayBinded</code>의 버튼을 클릭하면 <code class="language-text">increase</code> 메소드가 실행된다. <code class="language-text">increase</code> 메소드는 <code class="language-text">data</code> 속성의 값을 변경한 후 EventEmiter인 <code class="language-text">dataChange</code>의 <code class="language-text">emit</code> 메소드를 실행해서 이벤트를 발생시킨다.\n<code class="language-text">emit</code> 메소드의 인자로 전달된 값이 바로 앞선 예제의 <code class="language-text">(dataChange)=&quot;prop = $event&quot;</code> 부분에 등장한 <code class="language-text">$event</code>에 해당한다.</p>\n<p>컴포넌트에서 버튼을 클릭하면 <code class="language-text">data</code> 속성이 변경되고, 그 값은 다시 부모 컴포넌트로 전달된다. 이렇게 양방향 연결이 구현되었다.</p>\n<h2 id="getter와-setter를-이용한-양방향-바인딩"><a href="#getter%EC%99%80-setter%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%96%91%EB%B0%A9%ED%96%A5-%EB%B0%94%EC%9D%B8%EB%94%A9" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>getter와 setter를 이용한 양방향 바인딩</h2>\n<p>앞서 살펴본 예제에서는 버튼을 클릭해야만 양방향 연결이 작동한다. AngularJS에서 사용했던 것처럼 따로 버튼을 클릭하지 않고도 input 값만 변경되어도 양방향 연결이 되도록 만들어보자. 이를 위해서는 <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/get">getter</a>와 <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/set">setter</a>를 사용해야 한다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">@<span class="token function">Component</span><span class="token punctuation">(</span>\n  selector<span class="token punctuation">:</span> <span class="token string">\'app-two-way-binded\'</span><span class="token punctuation">,</span>\n  template<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`\n    &lt;div>\n      &lt;label>data: &lt;/label>\n      &lt;input [value]="data" />\n    &lt;/div>\n  `</span></span>\n<span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">TwoWayBinded</span> <span class="token punctuation">{</span>\n  componentData<span class="token punctuation">:</span> number<span class="token punctuation">;</span> <span class="token comment">// 컴포넌트 속성</span>\n\n  @<span class="token function">Input</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token keyword">get</span> data <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>componentData<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">set</span> <span class="token function">data</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>componentData <span class="token operator">=</span> v<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>dataChange<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>componentData<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  @<span class="token function">Output</span><span class="token punctuation">(</span><span class="token punctuation">)</span> dataChange <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>핵심은 컴포넌트 로컬 속성을 따로 관리한다는 점이다.</p>\n<p><code class="language-text">data</code> 속성은 Input 데코레이터가 적용되었기에 컴포넌트와 그 부모에서 모두 값을 참조하고 할당할 수 있다. 대신 단순 참조와 할당을 하지 않고 getter로 로컬 속성인 <code class="language-text">componentData</code>를 반환하고, setter로는 <code class="language-text">input</code>에 입력된 값을 로컬 속성(componentData)에 할당한 후 다시 그 값을 부모 컴포넌트로 올려보낸다.</p>\n<p>setter에서 이벤트를 발생시키지 않으면 컴포넌트는 부모 컴포넌트로 변경된 값을 전달하지 않는다. UI에서 값이 변경되고 있지만 그것은 <code class="language-text">TwoWayBinded</code>의 독립된 공간에서만 일어나는 일일 뿐이며 부모 컴포넌트와는 관계가 없게 된다.</p>\n<p>이 예제를 통해 Angular는 단방향 데이터 흐름을 가지며, 직접 지시를 하지 않으면 데이터가 아래에서 위로 거슬러 올라가는 일은 발생하지 않는다는 사실을 확인할 수 있다.</p>\n<h2 id="ngmodel과-banana-in-box"><a href="#ngmodel%EA%B3%BC-banana-in-box" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ngModel과 banana-in-box</h2>\n<p>banana-in-box 표기법에 ngModel이라는 이름을 사용하면 AngularJS에서 사용했던 것처럼 프레임워크가 자동으로 양방향 바인딩을 구현해준다. 하지만 <code class="language-text">input</code>같은 HTML 폼 요소에서 사용가능하고 커스텀 컴포넌트에서는 앞서 제시한 getter, setter를 이용한 방법 등으로 사용자가 직접 구현해야 한다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">@<span class="token function">Component</span><span class="token punctuation">(</span>\n  selector<span class="token punctuation">:</span> <span class="token string">\'app-ngModel-sample\'</span><span class="token punctuation">,</span>\n  template<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`\n    &lt;label for="search">\n      search:\n      &lt;input [(ngModel)]="search" name="search"/>\n    &lt;/label>\n  `</span></span>\n<span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">NgModelSample</span> <span class="token punctuation">{</span>\n  search<span class="token punctuation">:</span> string<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2 id="syntactic-sugar"><a href="#syntactic-sugar" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Syntactic sugar</h2>\n<p>Angular에서 양방향 바인딩은 <a href="https://en.wikipedia.org/wiki/Syntactic_sugar">syntactic sugar</a>(문법을 사용하기 쉽게 표현한 형태)일 뿐이며 단방향으로 구현되어 있다. 프레임워크가 어려운 일을 대신 해주면 사용하는 입장에서는 편하지만 표준에서는 멀어진다는 단점이 있다. React.js가 <a href="https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding">컴포넌트 메소드 자동 바인딩을 제거한 사례</a>도 그런 철학에 기반한 것으로 여겨진다. 좋은 도구를 사용하면서도 항상 원리에 접근하려는 자세를 가져야 하겠다.</p>\n<h2 id="참고자료"><a href="#%EC%B0%B8%EA%B3%A0%EC%9E%90%EB%A3%8C" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>참고자료</h2>\n<ul>\n<li><a href="https://angular.io/docs/ts/latest/guide/template-syntax.html#!#two-way">Angular Docs - Two way binding</a></li>\n<li><a href="https://blog.thoughtram.io/angular/2016/10/13/two-way-data-binding-in-angular-2.html">TWO-WAY DATA BINDING IN ANGULAR</a></li>\n</ul>',timeToRead:5,fields:{tagSlugs:["/tags/javascript/","/tags/angular/"]},frontmatter:{title:"Angular 2의 양방향 연결(two-way binding) 구현",tags:["Javascript","Angular"],date:"2017-05-11",mainImageAlt:"One way sign (https://unsplash.com/@karinacarvalho)",description:"Angular 2에서 banana-in-box 표기법과 getter, setter를 이용해 양방향 바인딩을 어떻게 구현하지는 예제 코드와 함께 설명한다.",mainImage:{childImageSharp:{sizes:{aspectRatio:1.5003663003663004,base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAIDBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABuNnyVKCA/wD/xAAYEAADAQEAAAAAAAAAAAAAAAAAAQIDE//aAAgBAQABBQJXYqorJOp0Z0Y9Gf/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAEDAQE/Aar/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEv/aAAgBAgEBPwGUv//EABoQAAICAwAAAAAAAAAAAAAAAAABAjEQESH/2gAIAQEABj8CtHZG22Vikf/EABwQAQABBAMAAAAAAAAAAAAAAAEAESExgVFhwf/aAAgBAQABPyFmdRAjc1Gy69zgI0sEqvCf/9oADAMBAAIAAwAAABDHD//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAEDAQE/EJQ//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxAf/8QAHBAAAgIDAQEAAAAAAAAAAAAAAAERITFx0WHB/9oACAEBAAE/EH8oJ5WHT6QQUhQte7LoBNiN1EPjGQ//2Q==",sizes:"(max-width: 1600px) 100vw, 1600px",src:"/static/karina-carvalho-94650-unsplash-740d8c494bdae4371fd2a581fe56f6d0-d60e4.jpg",srcSet:"/static/karina-carvalho-94650-unsplash-740d8c494bdae4371fd2a581fe56f6d0-d3cb5.jpg 400w,\n/static/karina-carvalho-94650-unsplash-740d8c494bdae4371fd2a581fe56f6d0-0a0f4.jpg 800w,\n/static/karina-carvalho-94650-unsplash-740d8c494bdae4371fd2a581fe56f6d0-d60e4.jpg 1600w,\n/static/karina-carvalho-94650-unsplash-740d8c494bdae4371fd2a581fe56f6d0-77334.jpg 2048w"}}}}}},pathContext:{slug:"/posts/2017-05-11-angular2-two-way-binding/"}}}});
//# sourceMappingURL=path---posts-2017-05-11-angular-2-two-way-binding-e77e93b7a4279ee6ca4e.js.map
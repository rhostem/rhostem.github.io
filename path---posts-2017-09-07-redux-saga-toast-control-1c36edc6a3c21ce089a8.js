webpackJsonp([95578911921485e5],{"./node_modules/json-loader/index.js!./.cache/json/posts-2017-09-07-redux-saga-toast-control.json":function(n,a){n.exports={data:{site:{siteMetadata:{title:"rhostem.github.io",url:"https://rhostem.github.io",author:"rhostem"}},markdownRemark:{html:'<p><a href="http://redux.js.org/">Redux</a>를 사용하면 React 앱에서 데이터를 처리하는 비즈니스 로직을 컴포넌트로부터 분리할 수 있다. 그리고 비즈니스 로직은 보통 <a href="http://redux.js.org/docs/basics/Actions.html">액션</a> 객체를 반환하는 액션 생성자 함수 내부에서 작성하는 방식이 권장된다.</p>\n<p>그런데 액션 생성자 함수에서 API 호출 같은 비동기 프로세스 구현을 위해 Promise를 사용하면 resolve 시점에서 객체를 직전 리턴할 수 없다. 그래서 비동기 처리를 할 때 액션 객체를 반환하는 대신 함수 내부에서 직접 <a href="http://redux.js.org/docs/api/Store.html#dispatch">store.dispatch</a> 함수를 통해 액션을 발생시킬 수 있도록 하는 <a href="https://github.com/gaearon/redux-thunk">redux-thunk</a> 미들웨어를 사용한다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> fetchAction <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>dispatch<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">\'/api/data\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        type<span class="token punctuation">:</span> <span class="token string">\'FETCH_ACTION_SUCCESS\'</span><span class="token punctuation">,</span>\n        payload<span class="token punctuation">:</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>하지만 복수의 Promise를 순차적으로 실행하려면 함수 중첩이 계속 발생해서 if ~ else 만큼이나 가독성이 떨어진다. ES7에서 도입된 <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function">async 함수</a>를 사용하면 비동기 프로세스를 보다 간결하게 작성할 수 있다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fetchAction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>dispatch<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">\'/api/data\'</span><span class="token punctuation">)</span>\n    <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      type<span class="token punctuation">:</span> <span class="token string">\'FETCH_ACTION_SUCCESS\'</span><span class="token punctuation">,</span>\n      payload<span class="token punctuation">:</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>그리고 Redux 미들웨어인 <a href="https://redux-saga.js.org/">Redux-Saga</a>를 사용하면 비동기 액션은 물론 다양한 사이드 이펙트를 발생시킬 수 있는 헬퍼 함수를 활용해서 복잡한 로직을 쉽게 구현할 수 있다.</p>\n<h2 id="redux-saga"><a href="#redux-saga" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Redux-Saga</h2>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="undefined"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; z-index: -1; display: block; "\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 26.951871657754012%;position: relative; width: 100%; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAxklEQVQY06WQy06EQBBF5///SONG40Jj0BhMBztR0iz6QYDoQI9NQ3McSHTcuNG7uklVnapbO34ohMCyLPxHuy/Tti11XaOtxkXDMPfEGBmGYauP4/g9tC6to/0dmFJCSolSinuRYb2mCiVP6hEhBHmek2UZZVlSFAVt13C7v+L6/YLLtzNujr6f9yegc267sKoqpH7mwd1R+BzbG7z3NE2DMWZLsPbNaUaFF14/5BF4jjwIDsmfgGsEay1d16G1ZpqmP//wEyAcf/VfbCL3AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="redux-saga logo"\n        title=""\n        src="/static/233044a5a805285112492aa959864556-fb8a0.png"\n        srcset="/static/233044a5a805285112492aa959864556-1a291.png 148w,\n/static/233044a5a805285112492aa959864556-2bc4a.png 295w,\n/static/233044a5a805285112492aa959864556-fb8a0.png 590w,\n/static/233044a5a805285112492aa959864556-526de.png 885w,\n/static/233044a5a805285112492aa959864556-fa2eb.png 1180w,\n/static/233044a5a805285112492aa959864556-08f6a.png 1770w,\n/static/233044a5a805285112492aa959864556-91877.png 1870w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Redux-Saga는 ES6에서 도입된 <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/function*">Generator 함수</a>를 기반으로 한다.</p>\n<p>Generator 함수는 코드 진행 중에 <code>yield</code> 키워드를 만나면 일단 멈춘다. 그리고 계속 진행하라는 지시<a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Generator/next">(<code>Generator.prototype.next</code>)</a>가 전달되어야 다음 <code>yield</code> 키워드 까지 코드를 진행시킨다. Redux-Saga는 이 Generator 함수의 특징을 활용한다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">takeFetchAction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">yield</span> <span class="token function">takeEvery</span><span class="token punctuation">(</span><span class="token string">\'FETCH_ACTION\'</span><span class="token punctuation">,</span> dataFetch<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">dataFetch</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">\'/api/data\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token keyword">yield</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    type<span class="token punctuation">:</span> <span class="token string">\'FETCH_ACTION_SUCCESS\'</span><span class="token punctuation">,</span>\n    payload<span class="token punctuation">:</span> result<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>위의 예제에서는 <a href="https://redux-saga.js.org/docs/api/#takeeverypattern-saga-args"><code>takeEvery</code></a> 함수를 사용해서 스토어에 <code>FETCH_ACTION</code> 타입의 액션이 전달될 때마다 콜백 함수를 실행한다. 그리고 <a href="https://redux-saga.js.org/docs/api/#callfn-args"><code>call</code></a> 함수에 Promise를 반환하는 함수를 인자로 전달해서 실행한 후 대기한다. 그리고 Promise가 resolve되면 Redux-Saga는 Generator 함수를 진행시킨다. 그렇게 비동기 요청이 끝나고 나면 <a href="https://redux-saga.js.org/docs/api/#putaction"><code>put</code></a> 함수를 사용해서 새로운 액션을 스토어에 전달한다.</p>\n<p>로그인 프로세스도 하나의 Redux-Saga 함수 안에서 작성 가능하다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">loginFlow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">yield</span> <span class="token function">take</span><span class="token punctuation">(</span><span class="token string">\'LOGIN\'</span><span class="token punctuation">)</span>\n    <span class="token comment" spellcheck="true">// ... perform the login logic</span>\n    <span class="token keyword">yield</span> <span class="token function">take</span><span class="token punctuation">(</span><span class="token string">\'LOGOUT\'</span><span class="token punctuation">)</span>\n    <span class="token comment" spellcheck="true">// ... perform the logout logic</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>위의 코드는 단순화시킨 형태일 뿐이며 실제로는 non-blocking 액션 처리, 진행중인 <a href="https://redux-saga.js.org/docs/api/">태스크</a> 취소 등의 <a href="https://redux-saga.js.org/docs/advanced/NonBlockingCalls.html">구체적인 로직</a>이 더 필요하다. 하지만 앱 내부 여기저기서 발생하는 액션들에 의한 프로세스를 하나의 함수 안에서 마치 동기적인 코드처럼 작성할 수 있다는 점은 무척 큰 매력이다. Redux-Saga는 분리된 비즈니스 로직을 한곳에 모은 <strong>프로세스 명세서</strong>, 또는 <strong>프로세스 관리자</strong> 같은 개념으로 받아들여도 될 것 같다.</p>\n<h2 id="redux-saga로-토스트-메시지-제어하기"><a href="#redux-saga%EB%A1%9C-%ED%86%A0%EC%8A%A4%ED%8A%B8-%EB%A9%94%EC%8B%9C%EC%A7%80-%EC%A0%9C%EC%96%B4%ED%95%98%EA%B8%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Redux-Saga로 토스트 메시지 제어하기</h2>\n<p>Redux-Saga는 네트워크 입출력뿐만 아니라 비동기적으로 처리되는 UI 구현에도 도움을 줄 수 있다. 예를 들어 토스트 팝업 메시지가 표시되면 3초 후에 자동으로 닫히는 UI를 구현한다고 하자. 그리고 토스트 메시지는 동시에 여러 개가 화면에 표시되어야 한다.</p>\n<p>이를 구현하기 위해서는 토스트 메시지를 가진 객체로 구성된 큐(queue)가 필요하다. 메시지가 발생하면 큐에 메시지를 추가해서 화면에 표시하고 3초 후에 큐에서 제거하여 화면에서 사라지도록 한다. 이 과정을 Redux-Saga에서 구현해 보았다. 큐는 Redux store에 두고 Saga에서 메시지 객체를 큐에 추가하고 제거하도록 했다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment" spellcheck="true">// @flow</span>\n<span class="token keyword">import</span> types <span class="token keyword">from</span> <span class="token string">\'../../actions/actionTypes\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> delay <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'redux-saga\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> all<span class="token punctuation">,</span> put<span class="token punctuation">,</span> takeEvery <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'redux-saga/effects\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ShowToastMessageAction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'../../actions/toast\'</span>\n\n<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">// SHOW_TOAST 액션이 발생할 때마다 toastQueueControl 함수를 실행한다.</span>\n  <span class="token keyword">yield</span> <span class="token function">takeEvery</span><span class="token punctuation">(</span>types<span class="token punctuation">.</span>SHOW_TOAST<span class="token punctuation">,</span> toastQueueControl<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">toastQueueControl</span><span class="token punctuation">(</span>action<span class="token punctuation">:</span> ShowToastMessageAction<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">// 토스트 메시지 큐에 메시지를 추가한다.</span>\n  <span class="token keyword">yield</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    type<span class="token punctuation">:</span> types<span class="token punctuation">.</span>PUSH_TOAST_TO_QUEUE<span class="token punctuation">,</span>\n    toast<span class="token punctuation">:</span> action<span class="token punctuation">.</span>toast<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n  <span class="token comment" spellcheck="true">// 3초 기다린다</span>\n  <span class="token keyword">yield</span> <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span>\n\n  <span class="token comment" spellcheck="true">// 큐에서 메시지를 제거한다.</span>\n  <span class="token keyword">yield</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    type<span class="token punctuation">:</span> types<span class="token punctuation">.</span>SHIFT_TOAST_FROM_QUEUE<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">toast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">yield</span> <span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>로직은 무척 간단하며 컴포넌트, 리듀서와 완전히 분리되어 있어 입력과 출력이 어떻게 발생하는지 직관적으로 확인할 수 있다. 데이터를 변경하는 로직은 리듀서에서 구현하고, 주어진 데이터로 UI를 구현하는 일은 컴포넌트에서 하고, Redux-Saga는 이 모든 것을 컨트롤함으로써 역할 분담이 더 명확해졌다.</p>\n<p>실제 구현 예제는 아래의 링크에서 확인 가능하다.</p>\n<p><a href="https://rhostem.github.io/redux-saga-toast-control/">https://rhostem.github.io/redux-saga-toast-control/</a>\n<a href="https://github.com/rhostem/redux-saga-toast-control">(source)</a></p>\n<h2 id="redux-thunk에서-redux-saga로"><a href="#redux-thunk%EC%97%90%EC%84%9C-redux-saga%EB%A1%9C" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Redux-Thunk에서 Redux-Saga로</h2>\n<p>실무에서 Redux-Saga를 사용하며 이제 더는 Redux-Thunk를 사용하지 않아도 되겠다는 판단이 들었다. Saga 함수를 작성할 파일이 추가되어서 관리 포인트가 늘어나긴 하지만 액션 생성자의 복잡도와 덩치를 줄일 수 있다는 점이 무척 마음에 들었다. 특히 다양한 사이드 이펙트를 함수를 제공한다는 점도 좋다. 대표적으로 <code>call</code> 함수를 사용하면 Promise도 처리할 수 있으니 async/await를 사용하기 위해 별도의 babel 설정을 하지 않아도 된다.</p>\n<p>Redux-Saga는 ES6의 Generator 함수를 제대로 활용한 멋진 라이브러리다. 공식 홈페이지의 문서와 관련 아티클들을 꼼꼼히 살펴보며 깊이 파고들 가치가 충분히 있어 보인다.</p>',timeToRead:4,fields:{tagSlugs:["/tags/react/","/tags/redux/","/tags/redux-saga/","/tags/es-6/"]},frontmatter:{title:"Redux-Saga를 활용한 Redux 비동기 액션 처리",tags:["React","Redux","Redux-Saga","ES6"],date:"2017-09-07",description:"사이드 이펙트를 효율적으로 관리할 수 있는 Redux 미들웨어 Redux-saga. 토스트 메시지를 표시하고 제거하는 과정을 Redux-saga를 사용해 간단히 구현한 예제를 제공",mainImage:""}}},pathContext:{slug:"/posts/2017-09-07-redux-saga-toast-control/"}}}});
//# sourceMappingURL=path---posts-2017-09-07-redux-saga-toast-control-1c36edc6a3c21ce089a8.js.map
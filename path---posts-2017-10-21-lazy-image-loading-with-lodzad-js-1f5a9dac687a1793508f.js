webpackJsonp([0x99e73a0fa6ed],{914:function(a,n){a.exports={data:{site:{siteMetadata:{title:"rhostem.github.io",url:"https://rhostem.github.io",author:"rhostem",description:"프론트엔드 웹 개발 기술 블로그"}},markdownRemark:{html:'<p>이미지가 많은 웹사이트에서는 브라우저 화면상에 표시되지 않은 영역의 이미지의 로딩을 의도적으로 지연시켜서 네트워크 트래픽과 성능에 도움을 주는 방법을 많이 사용한다.</p>\n<p>그런데 지연 로딩(lazy loading)이라고 불리는 이 기법을 구현하는 전통적인 방식에는 문제가 있다. 브라우저 스크롤 이벤트에 리스너를 붙여서 현재 스크롤의 위치와 <a href="https://developer.mozilla.org/ko/docs/Web/API/Element/getBoundingClientRect">getBoundingClientRect</a>같은 API를 사용해서 얻은 엘레멘트의 위칫값을 주기적으로 비교해야 하기 때문이다.</p>\n<p>최근 브라우저에 추가된 API인 <a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API">Intersection Observer API</a>를 사용하면 이처럼 리소스 소모가 많은 방식을 대체할 수 있다.</p>\n<h2 id="intersection-observer-api"><a href="#intersection-observer-api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Intersection Observer API</h2>\n<p>Intersection Observer API는 이름 그대로 브라우저 뷰포트와 엘레멘트의 교차점(intersection)과 관련된 기능이다. 뷰포트에 엘레멘트가 표시되면 옵저버는 이벤트를 발생시키기 때문에 개발자는 콜백 함수에서 원하는 작업을 수행할 수 있다.</p>\n<p>사용법은 그렇게 복잡하지 않다. 옵션과 함께 옵저버 인스턴스를 생성하고 탐지할 엘레멘트를 지정하면 된다. 상세한 사용법은 MDN의 API 문서를 살펴보면 알 수 있다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>\n  root<span class="token punctuation">:</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'#scrollArea\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// null은 브라우저 전체 영역</span>\n  rootMargin<span class="token punctuation">:</span> <span class="token string">\'10% 10px\'</span><span class="token punctuation">,</span> <span class="token comment">// 요소가 감지되는 영역을 추가하거나 줄일 수 있다. CSS margin 같은 속성에 사용하는 축약형처럼 작성할 수 있다.</span>\n  threshold<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 콜백을 실행시킬 지점. 0은 보이자마자, 1은 모두 표시된 후</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">callback</span> <span class="token operator">=</span> <span class="token punctuation">(</span>entries<span class="token punctuation">,</span> observer<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  entries<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>entry <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token comment">// entry는 탐지된 엘레멘트의 정보를 가지고 있다.</span>\n    <span class="token comment">// ex)</span>\n    <span class="token comment">//    entry.isIntersecting,</span>\n    <span class="token comment">//    entry.boundingClientRect</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 옵저버 인스턴스 생성</span>\n\n<span class="token keyword">const</span> target <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'#listItem\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 탐지할 엘레멘트</span>\n\nobserver<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="lozadjs로-간단하게-intersection-api-사용하기"><a href="#lozadjs%EB%A1%9C-%EA%B0%84%EB%8B%A8%ED%95%98%EA%B2%8C-intersection-api-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>lozad.js로 간단하게 Intersection API 사용하기</h2>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/lozad.js-7e9439a7a7ecbbe9b9b10369325dd5e4-3c6e7.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1060px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 38.11369509043928%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAIABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAID/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAME/9oADAMBAAIQAxAAAAHSjLaAf//EABYQAAMAAAAAAAAAAAAAAAAAAAAQIf/aAAgBAQABBQIi/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAC/9oACAEDAQE/AVjV/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAEP/aAAgBAQAGPwJ//8QAGRAAAQUAAAAAAAAAAAAAAAAAQQABEBEx/9oACAEBAAE/IWorJj//2gAMAwEAAgADAAAAEIvv/8QAFREBAQAAAAAAAAAAAAAAAAAAAQD/2gAIAQMBAT8QUFkQb//EABcRAQEBAQAAAAAAAAAAAAAAAAEAEUH/2gAIAQIBAT8QHkuOX//EABkQAAMBAQEAAAAAAAAAAAAAAAABESExgf/aAAgBAQABPxBay/Bw2c0Wqo//2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px #ffffff;"\n        alt="lozad.js"\n        title=""\n        src="/static/lozad.js-7e9439a7a7ecbbe9b9b10369325dd5e4-677bc.jpg"\n        srcset="/static/lozad.js-7e9439a7a7ecbbe9b9b10369325dd5e4-af975.jpg 265w,\n/static/lozad.js-7e9439a7a7ecbbe9b9b10369325dd5e4-b78ed.jpg 530w,\n/static/lozad.js-7e9439a7a7ecbbe9b9b10369325dd5e4-677bc.jpg 1060w,\n/static/lozad.js-7e9439a7a7ecbbe9b9b10369325dd5e4-3c6e7.jpg 1548w"\n        sizes="(max-width: 1060px) 100vw, 1060px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p><a href="https://www.npmjs.com/package/lozad">lozad.js</a>는 이미지 지연 로딩에 특화된 Intersection API 구현 사례라고 할 수 있다. 복잡한 설정 필요 없이 이미지 태그에 라이브러리가 요구하는 속성을 추가한 후 옵저버 인스턴스를 생성하면 이미지 지연 로딩이 간단히 구현된다.</p>\n<p><code class="language-text">image</code> 태그에는  <code class="language-text">src</code> 속성 대신  <code class="language-text">data-src</code>에 이미지의 경로를 할당하고 <code class="language-text">lozad</code>라는 이름의 클래스 이름을 추가해야 한다. (클래스명은 인스턴스 옵션으로 바꿀 수 있다)</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lozad<span class="token punctuation">"</span></span> <span class="token attr-name">data-src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>image.png<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> observer <span class="token operator">=</span> <span class="token function">lozad</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 옵션을 지정하지 않으면 lozad라는 클래스가 붙은 이미지 태그를 지연 로딩한다.</span>\nobserver<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>이것이 전부다. lozad.js는 앞서 설명한 Intersection Observer를 사용하는 과정에서 타겟 요소를 설정하고 이미지 불러오는 로직을 자동으로 처리해주기에 지연 로딩을 무척 간단히 구현할 수 있다. 물론 Intersection API에서 제공하는 <code class="language-text">rootMargin</code>, <code class="language-text">threshold</code>, 콜백 함수도 사용할 수 있다.</p>\n<h2 id="예제"><a href="#%EC%98%88%EC%A0%9C" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>예제</h2>\n<p>lozad.js를 사용해 간단히 만들어 본 예제 페이지에서는 이미지가 로드된 후 콜백 함수에서 페이드인 효과를 추가하고, 토스트 메시지를 표시하도록 했다.</p>\n<p><a href="https://rhostem.github.io/lozad-example">https://rhostem.github.io/lozad-example</a></p>\n<h2 id="polyfill-설치"><a href="#polyfill-%EC%84%A4%EC%B9%98" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>polyfill 설치</h2>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/caniuse-intersection-api-4285802630d0d4866a4c1533c0b0726a-a56a8.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 992px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 35.181451612903224%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAAB6klEQVQozx3RS2tTQRjG8fNh3Lh14QfoUglWQTFVxEsQlSyK0tAWY91pJNQKDaXRCtIuglgQVLRW0qTNpe3J9aRJTnO/n0vSRGmj7v5OXPwYZuadmZdnpE4lSb0QE2RK2ShtNUQrF6ScCFKQt6ir0f+aBzs0MtsU02I96aca99NIB8glv1E88KPEd8imIkhmI41WS9KpxmmXZYyKjFmVSU7eYn/iPHX5O63SPrpgVGLojRTGiKg1xVwr7aGLM51KAq2aQCq/caE4bPxUQvw1igz0PINegRcfJ5lam6BS26Wvq3SbKXqCnt7CUAL0xKVHLYVBt8DAVDkSe/1mGik1fZfQ2Bnef3nG64yXzPoS5bfz2PwPsARuEvDOoSy76BxGRVcx9m5Y2L9ziY4aQSvskvM+p+Dz0BEda4IUdzkITJzDvmJl/NN17nkuYl+wYPVd5cr6NZbHTrN69hSOD3amPj9kw3aBzdvjRJ12Nufu41i8jGPJinNjhqdfZ5F6tbh4WWQkcuvVEszLbh5FZnmy7cQZfMzumpvMu5fM/JhiOjhNoximKzLT1DDaYZhmO0GzKT61EhGiSMdGjmMzz2j8LbLwZVZ4FXPjSS6wKJimwp9+iVw9KAT4ZWQ5GdV3VU6EoZ5jaOQZirMj/wCtDcMLhZ/OSQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px #ffffff;"\n        alt="Intersection Observer의 브라우저 지원 현황"\n        title=""\n        src="/static/caniuse-intersection-api-4285802630d0d4866a4c1533c0b0726a-a56a8.png"\n        srcset="/static/caniuse-intersection-api-4285802630d0d4866a4c1533c0b0726a-0cdbc.png 265w,\n/static/caniuse-intersection-api-4285802630d0d4866a4c1533c0b0726a-ffb20.png 530w,\n/static/caniuse-intersection-api-4285802630d0d4866a4c1533c0b0726a-a56a8.png 992w"\n        sizes="(max-width: 992px) 100vw, 992px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \n<em><a href="http://caniuse.com/#feat=intersectionobserver">http://caniuse.com/#feat=intersectionobserver</a></em></p>\n<p>2017년 10월 현재 크롬 최신 버전에서는 사용할 수 있지만 사파리 브라우저는 데스크탑, 모바일 모두 지원하지 않는다. 많은 웹 브라우저가 지원하지 않기 때문에 <a href="https://github.com/w3c/IntersectionObserver/tree/master/polyfill">polyfill</a> 설치가 필수적이다.</p>\n<p>polyfill 설치를 위해서는 스크립트 직접 추가하거나, NPM 모듈을 설치한 후 추가하는 방법이 있다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token comment">&lt;!-- 메인 스크립트보다 먼저 불러와야 한다. --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>path/to/intersection-observer.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// 가능하면 entry 파일에서 다른 모듈보다 먼저 불러와야 한다.</span>\n<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'intersection-observer\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="참조"><a href="#%EC%B0%B8%EC%A1%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>참조</h2>\n<ul>\n<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API">Intersection Observer API</a></li>\n<li><a href="https://github.com/w3c/IntersectionObserver/tree/master/polyfill">Intersection Observer polyfill</a></li>\n<li><a href="https://css-tricks.com/lozad-js-performant-lazy-loading-images/">Lozad.js: Performant Lazy Loading of Images</a></li>\n<li><a href="http://tech.lezhin.com/2017/07/13/intersectionobserver-overview">IntersectionObserver를 이용한 이미지 동적 로딩 기능 개선</a></li>\n</ul>',timeToRead:3,fields:{tagSlugs:["/tag/web","/tag/intersection_observer_api"]},frontmatter:{title:"Intersection Observer API와 lozad.js 로 이미지 지연 로딩하기",subTitle:null,tags:["Web","Intersection Observer API"],date:"2017-10-21",mainImageAlt:null,description:"지연 로딩(lazy loading)이라고 불리는 기법을 구현하는 전통적인 방식에는 문제가 있다. 브라우저 스크롤 이벤트에 리스너를 붙여서 현재 스크롤의 위치와 엘레멘트의 위치 값을 주기적으로 비교해야 하기 때문이다. 브라우저 자체에서 뷰포트 상의 엘레멘트 표시 여부를 탐지하는 Intersection Observer API를 사용하면 이미지 지연 로딩을 보다 쉽고 효율적으로 구현할 수 있다.",mainImage:{childImageSharp:{sizes:{aspectRatio:2.623728813559322,base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAIABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAID/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAME/9oADAMBAAIQAxAAAAHSjLaAf//EABYQAAMAAAAAAAAAAAAAAAAAAAAQIf/aAAgBAQABBQIi/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAC/9oACAEDAQE/AVjV/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAEP/aAAgBAQAGPwJ//8QAGRAAAQUAAAAAAAAAAAAAAAAAQQABEBEx/9oACAEBAAE/IWorJj//2gAMAwEAAgADAAAAEIvv/8QAFREBAQAAAAAAAAAAAAAAAAAAAQD/2gAIAQMBAT8QUFkQb//EABcRAQEBAQAAAAAAAAAAAAAAAAEAEUH/2gAIAQIBAT8QHkuOX//EABkQAAMBAQEAAAAAAAAAAAAAAAABESExgf/aAAgBAQABPxBay/Bw2c0Wqo//2Q==",sizes:"(max-width: 1548px) 100vw, 1548px",src:"/static/lozad.js-7e9439a7a7ecbbe9b9b10369325dd5e4-894a0.jpg",srcSet:"/static/lozad.js-7e9439a7a7ecbbe9b9b10369325dd5e4-4cb66.jpg 400w,\n/static/lozad.js-7e9439a7a7ecbbe9b9b10369325dd5e4-bbe9a.jpg 800w,\n/static/lozad.js-7e9439a7a7ecbbe9b9b10369325dd5e4-894a0.jpg 1548w"}}}}}},pathContext:{slug:"/posts/2017-10-21-lazy-image-loading-with-lodzad-js/"}}}});
//# sourceMappingURL=path---posts-2017-10-21-lazy-image-loading-with-lodzad-js-1f5a9dac687a1793508f.js.map
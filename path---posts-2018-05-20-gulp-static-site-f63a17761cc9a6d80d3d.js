webpackJsonp([0xccc254f0e6c1],{914:function(n,s){n.exports={data:{site:{siteMetadata:{title:"rhostem.github.io",url:"https://rhostem.github.io",author:"rhostem",description:"프론트엔드 웹 개발 기술 블로그"}},markdownRemark:{html:'<p>본 포스트에서 사용된 전체 소스 파일은 아래 링크에서 확인할 수 있다.</p>\n<p><a href="https://github.com/rhostem/gulp-static-site">rhostem/gulp-static-site</a></p>\n<hr>\n<p>최근 만들어지는 웹사이트는 싱글 페이지 형식으로 개발하는 형태가 일반적이다. 하지만 퍼블리싱이라고도 불리는 정적인 페이지 개발 작업에 대한 수요는 여전히 많다. 작업을 할때는 Gulp를 기반으로 개발 프로세스를 구성하는데, 새로운 일을 시작할 때 편하게 clone해서 사용할 수 있도록 별도로 저장소를 만들어 보았다.</p>\n<h2 id="퍼블리싱을-위한-언어"><a href="#%ED%8D%BC%EB%B8%94%EB%A6%AC%EC%8B%B1%EC%9D%84-%EC%9C%84%ED%95%9C-%EC%96%B8%EC%96%B4" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>퍼블리싱을 위한 언어</h2>\n<p>개인적으로는 마크업에는 <a href="https://pugjs.org/api/getting-started.html">Pug</a>를 사용하고 스타일시트 작성에는 <a href="https://sass-lang.com/">Sass</a>를 선호한다.</p>\n<p>Pug를 사용하면 html보다 태그를 훨씬 간편하게 작성할 수 있어서 좋다. 무엇보다 block으로 템플릿(<a href="https://pugjs.org/language/inheritance.html">Template Inheritance – Pug</a>)을 작성해두면 중복된 부분을 컴포넌트화 시킬 수 있음과 동시에 여러 페이지를 빠르게 만들 수 있어서 무척 편리하다.</p>\n<p>Sass는 partial 파일을 사용한 컴포넌트화, nesting, mixin, 변수, CSS에서 지원하지 않는 연산자, 조건문, 반복문 등의 기능을 사용할 수 있다. Sass를 한 번이라도 사용해 본다면 CSS를 직접 작성하던 시절로는 돌아가고 싶지 않을 것이다.</p>\n<h2 id="gulp"><a href="#gulp" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Gulp</h2>\n<p><a href="https://gulpjs.com/">Gulp</a>는 Node.js 기반으로 개발 프로세스를 자동화시킬 수 있는 툴이다. Node.js의 <a href="https://nodejs.org/api/stream.html#stream_stream">Stream</a> 인터페이스를 이용해서 특정 소스 파일에 대한 작업을 단계적으로 진행할 수 있다. 간단히 풀어내자면</p>\n<ol>\n<li>Sass 소스 파일을 불러와서</li>\n<li>CSS 파일로 변환한 후</li>\n<li>원하는 위치에 저장한다.</li>\n</ol>\n<p>이런 식으로 순차적으로 작업을 진행할 수 있다. 그리고 이어서</p>\n<ol>\n<li>소스 파일에 새로운 내용이 저장되면</li>\n<li>앞선 1~3의 과정을 반복한다.</li>\n<li>브라우저를 새로고침시켜서 변경된 사항을 확인할 수 있도록 만든다.</li>\n</ol>\n<p>이런 식의 작업이 가능하다. webpack 으로도 정적인 사이트 작업의 가능하지만(<a href="https://github.com/rhostem/webpack-static-site">rhostem/webpack-static-site</a>), 기본 목적이 분리된 모듈을 하나로 만드는데 있기 때문에 작업 결과물로 여러 개의 마크업 파일을 만들어내기에는 다소 불편하다. 그에 비교해 Gulp는 간단하게 소스 파일을 결과 파일로 변환할 수 있기 때문에 퍼블리싱 작업에 더 적합하다고 할 수 있다.</p>\n<h3 id="pug-소스파일-처리"><a href="#pug-%EC%86%8C%EC%8A%A4%ED%8C%8C%EC%9D%BC-%EC%B2%98%EB%A6%AC" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Pug 소스파일 처리</h3>\n<p>Gulp는 task를 선언해서 사용하며, Pug 파일을 처리하기 위한 task는 아래와 같이 작성할 수 있다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">gulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">\'pug\'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">buildHTML</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> pugErrHandler <span class="token operator">=</span> conf<span class="token punctuation">.</span><span class="token function">errorHandler</span><span class="token punctuation">(</span><span class="token string">\'pug\'</span><span class="token punctuation">)</span>\n  <span class="token keyword">return</span> gulp\n    <span class="token punctuation">.</span><span class="token function">src</span><span class="token punctuation">(</span>conf<span class="token punctuation">.</span>paths<span class="token punctuation">.</span>pug<span class="token punctuation">.</span>src<span class="token punctuation">)</span> <span class="token comment">// 소스 파일 불러오기</span>\n    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">pug</span><span class="token punctuation">(</span><span class="token punctuation">{</span> pretty<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'error\'</span><span class="token punctuation">,</span> pugErrHandler<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// HTML로 변환</span>\n    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>gulp<span class="token punctuation">.</span><span class="token function">dest</span><span class="token punctuation">(</span>conf<span class="token punctuation">.</span>paths<span class="token punctuation">.</span>pug<span class="token punctuation">.</span>dist<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 원하는 위치에 저장</span>\n    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>browserSync<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">{</span> stream<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 브라우저 새로고침</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>pipe 메소드 덕분에 작업 과정이 무척 직관적이다. 사용자가 신경 써야하는 부분은 pug 모듈을 실행할 때 전달해야 하는 옵션, 소스와 아웃풋 파일의 위치 정도다.</p>\n<h3 id="sass-소스파일-처리"><a href="#sass-%EC%86%8C%EC%8A%A4%ED%8C%8C%EC%9D%BC-%EC%B2%98%EB%A6%AC" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Sass 소스파일 처리</h3>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">gulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">\'sass\'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> sassErrHandler <span class="token operator">=</span> conf<span class="token punctuation">.</span><span class="token function">errorHandler</span><span class="token punctuation">(</span><span class="token string">\'sass\'</span><span class="token punctuation">)</span>\n  gulp\n    <span class="token punctuation">.</span><span class="token function">src</span><span class="token punctuation">(</span>conf<span class="token punctuation">.</span>paths<span class="token punctuation">.</span>sass<span class="token punctuation">.</span>src<span class="token punctuation">)</span> <span class="token comment">// 소스 파일 불러오기</span>\n    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>sourcemaps<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 소스맵 초기화</span>\n    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">sass</span><span class="token punctuation">(</span>conf<span class="token punctuation">.</span>sass<span class="token punctuation">.</span>process<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'error\'</span><span class="token punctuation">,</span> sassErrHandler<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// CSS로 변환</span>\n    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">autoprefixer</span><span class="token punctuation">(</span>conf<span class="token punctuation">.</span>sass<span class="token punctuation">.</span>autoprefixer<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 자동으로 vendor prefix 붙이기</span>\n    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>sourcemaps<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">\'./map\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 소스맵 파일 생성</span>\n    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>gulp<span class="token punctuation">.</span><span class="token function">dest</span><span class="token punctuation">(</span>conf<span class="token punctuation">.</span>paths<span class="token punctuation">.</span>sass<span class="token punctuation">.</span>dist<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>browserSync<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">{</span> stream<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Pug와 거의 유사하다. Sass에서는 소스맵(관련 문서: <a href="http://thesassway.com/intermediate/using-source-maps-with-sass">Using source maps with Sass 3.3</a>)을 생성하는 과정이 필요하다. 브라우저가 실제로 불러오는 것은 CSS 파일이기에 스타일이 Sass 소스 파일의 어느 부분에서 작성된 것인지 연결할 필요가 있기 때문이다.</p>\n<p>아래와 같이 개발자 도구에서 특정 요소의 스타일을 검사하면 CSS 파일이 아닌 Sass 파일을 가리키는 것을 확인할 수 있다.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/scss_sourcemap-6f7a69662bc1399f5133a29e843c71d4-9a3d3.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1060px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 52.16763005780347%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB6ElEQVQoz22SW2/UMBCF8///CS+IRyrECwhVBRWpFFRWKrubZHNxbnacZHPPxyRLq1bC0tFY9syZ8fFx0iQlSRKOXoQfJKRpukEpRRRFZFlGLDEKQ06nE4fDAc9z8X1forfl5nkueWtdgqMzw2l/JPAjCm2Zl5n/LSWNi8KQ5RptSiHR5EUh0Liuhy/NCq1xjFyofUQtyef6zDRNsJEuLNNyYZt7qjKnby1jk0Kfw1RJyiB3HfO0ot/gnNtBJtQE+xjfVTzuCx7+WA7HguNjQBKHZPIUow6k3g6js0vx2AiXZmkVdXRL5n3f4OzDmpubgLuHnLtfKYdThXsMBD5+YnDVmWM2YnNL4/rEom3bD6/kGIdOpq/puwbn4w/Lp3vDh+uQq6+K97ead19C3l5r3nxeUXD1LSYVrUej6bShEd2sMVhr6fteZJoxZUlV1Thrh7ZuSLxMNOxe9F3+4bKvdYE9BVj57TyKUXG8fU5VVQzDQNd1ghZnGEfCXYhNSzohHLvxQrEsF8h+mmeUEBViFaViErFSXdeUMtVqr1jIn6LTVmd0qJmlaBomicsrwu2T5W73e8fP+3vcvUscxIRRuPl0JVnj6tEgCHCeil6up7NnQomZmL+UKWvxnhb91meu+q2xaZpng/8FK6/3IKSs0hIAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px #ffffff;"\n        alt="소스 맵"\n        title=""\n        src="/static/scss_sourcemap-6f7a69662bc1399f5133a29e843c71d4-9056e.png"\n        srcset="/static/scss_sourcemap-6f7a69662bc1399f5133a29e843c71d4-507eb.png 265w,\n/static/scss_sourcemap-6f7a69662bc1399f5133a29e843c71d4-63b28.png 530w,\n/static/scss_sourcemap-6f7a69662bc1399f5133a29e843c71d4-9056e.png 1060w,\n/static/scss_sourcemap-6f7a69662bc1399f5133a29e843c71d4-9a3d3.png 1384w"\n        sizes="(max-width: 1060px) 100vw, 1060px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h3 id="로컬-서버-생성"><a href="#%EB%A1%9C%EC%BB%AC-%EC%84%9C%EB%B2%84-%EC%83%9D%EC%84%B1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>로컬 서버 생성</h3>\n<p>정적인 페이지는 서버를 실행하지 않고 작성해도 상관없지만 그렇게 할 경우 리소스를 불러올 때 무조건 현재 소스 파일의 위치를 기준으로 참조해야 한다는 문제가 생긴다. 웹에서 흔하게 사용하는 루트(<code class="language-text">/</code>) 기호를 사용할 수 없다는 의미이다. 서버에 올라가지 않은 HTML 파일에서 저 루트 기호는 운영체제 파일 시스템의 루트를 가리킬 테니 말이다. 이런 문제도 있고 뒤에서 작성할 브라우저 자동 새로 고침을 위해서도 로컬 서버를 사용하는 편이 좋다.</p>\n<p>로컬 서버로는 <a href="https://browsersync.io/">Browsersync</a>를 사용한다. Browsersync는 Gulp, Grunt 같은 빌드 도구와 호환성이 좋아서 많이 사용된다. 몇 개의 옵션만 할당해주면 간단히 서버를 생성할 수 있다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">gulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">\'serve\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  browserSync<span class="token punctuation">.</span>instance <span class="token operator">=</span> browserSync<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    startPath<span class="token punctuation">:</span> <span class="token string">\'/\'</span><span class="token punctuation">,</span>\n    server<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      baseDir<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>conf<span class="token punctuation">.</span>paths<span class="token punctuation">.</span>dist<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">,</span> <span class="token comment">// 루트 폴더 위치</span>\n      directory<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 디렉터리 구조를 기반으로 라우트를 구성한다</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    port<span class="token punctuation">:</span> <span class="token number">4000</span><span class="token punctuation">,</span> <span class="token comment">// 포트</span>\n    open<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 서버 시작시 웹페이지를 기본 브라우저에서 자동으로 열 것인지</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>앞서 Pug, Sass 태스크에서 등장했듯이 browserSync 모듈은 다른 태스크에서 소스 파일 변경 시 브라우저 새로 고침에 사용된다. 그러기 위해서는 같은 서버를 사용해야 하므로 browserSync 모듈의 <code class="language-text">instance</code> 속성에 serve 태스크 내부에서 생성한 인스턴스를 할당해서 다른 태스크의 콜백 함수 내부에서도 사용할 수 있도록 한다.</p>\n<p>그리고 인스턴스를 생성할 때 directory 옵션을 사용하면 디렉터리 내부의 파일을 탐색할 수 있는 UI를 제공한다. 웹 브라우저에서 마치 파일 탐색기를 사용하는 것과 같으며 간단한 검색 기능도 제공하기에 작업이 진행됨에 따라 파일 개수가 늘어나면 무척 유용할 것이다.</p>\n<h3 id="파일-변경-탐지"><a href="#%ED%8C%8C%EC%9D%BC-%EB%B3%80%EA%B2%BD-%ED%83%90%EC%A7%80" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>파일 변경 탐지</h3>\n<p>Gulp에서 제공하는 <code class="language-text">watch</code> 메소드를 사용하면 파일이 변경되었을 때 특정 태스크를 실행하도록 구성할 수 있다. 이를 통해 파일이 변경될 때마다 새로운 HTML, CSS 파일이 생성되도록 한다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">gulp<span class="token punctuation">.</span><span class="token function">watch</span><span class="token punctuation">(</span>소스 파일 경로<span class="token punctuation">,</span> <span class="token punctuation">[</span>태스크 목록<span class="token punctuation">]</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// 파일 변경을 감지해서 pug, sass,태스크를 실행하도록 한다.</span>\ngulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">\'watch\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  gulp<span class="token punctuation">.</span><span class="token function">watch</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>conf<span class="token punctuation">.</span>paths<span class="token punctuation">.</span>src<span class="token punctuation">,</span> <span class="token string">\'/**/*.pug\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">\'pug\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n  gulp<span class="token punctuation">.</span><span class="token function">watch</span><span class="token punctuation">(</span>\n    <span class="token punctuation">[</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>conf<span class="token punctuation">.</span>paths<span class="token punctuation">.</span>src<span class="token punctuation">,</span> <span class="token string">\'/**/*.scss\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>conf<span class="token punctuation">.</span>paths<span class="token punctuation">.</span>src<span class="token punctuation">,</span> <span class="token string">\'/**/*.sass\'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token string">\'sass\'</span><span class="token punctuation">]</span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<h2 id="다양한-gulp-플러그인의-활용"><a href="#%EB%8B%A4%EC%96%91%ED%95%9C-gulp-%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8%EC%9D%98-%ED%99%9C%EC%9A%A9" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>다양한 Gulp 플러그인의 활용</h2>\n<p>글에서는 Gulp로 가능한 최소한의 작업만 소개했을 뿐이다. Gulp는 수많은 개발자의 참여를 통해 만들어진 다양한 <a href="https://gulpjs.com/plugins/">플러그인</a>을 통해 더 많은 일이 가능하다. 글을 작성하는 시점에 3500여 개가 넘는 플러그인이 등록되어 있으니 만약 사용하고 싶은 기능이 있다면 이미 구현되어 있을 가능성이 매우 높다. 그리고 Gulp를 잘 활용하려면 Javascript는 물론 Node.js의 파일 시스템과 스트림에 대한 이해가 조금 필요하긴 하지만 학습에 투자할 가치는 충분하다고 생각한다.</p>',timeToRead:5,fields:{tagSlugs:["/tag/gulp","/tag/pug","/tag/html","/tag/sass","/tag/css"]},frontmatter:{title:"Gulp로 구성한 퍼블리싱 개발 환경",subTitle:null,tags:["Gulp","Pug","HTML","Sass","CSS"],date:"2018-05-20",mainImageAlt:"",description:"Gulp 빌드 프로세스를 사용해서 정적인 페이지 마크업을 효율적으로 진행하는 방법",mainImage:null}}},pathContext:{slug:"/posts/2018-05-20-gulp-static-site/"}}}});
//# sourceMappingURL=path---posts-2018-05-20-gulp-static-site-f63a17761cc9a6d80d3d.js.map
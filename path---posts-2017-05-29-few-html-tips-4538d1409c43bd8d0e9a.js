webpackJsonp([0x8d25b60f29a4],{895:function(a,n){a.exports={data:{site:{siteMetadata:{title:"rhostem.github.io",url:"https://rhostem.github.io",author:"rhostem"}},markdownRemark:{html:'<p>이글은 <a href="https://hacks.mozilla.org">hacks.mozilla.org</a>에 게시된 <a href="https://hacks.mozilla.org/2016/08/a-few-html-tips/">A few HTML tips</a>를 번역한 글입니다.</p>\n<hr>\n<p>얼마전 나는 <a href="https://hacks.mozilla.org/2016/05/css-coding-techniques/">CSS 작성에 도움이 될 팁</a>에 대해 글을 썼다. 이번에는 HTML 작성 능력을 업그레이드할 시간이다. 이 글에서 나는 HTML 코딩에 대해 몇가지 팁과 조언을 공유하려 한다. 단락, 제목, 폼을 적절히 구성하는 방법 등의 몇가지 가이드는 초심자에게 적합하겠지만 SVG 스프라이트를 아이콘으로 사용하는 방법과 몇가지 고급 주제에 대해서도 얘기할 것이다.</p>\n<h2 id="텍스트text"><a href="#%ED%85%8D%EC%8A%A4%ED%8A%B8text" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>텍스트(Text)</h2>\n<h3 id="단락paragraphs"><a href="#%EB%8B%A8%EB%9D%BDparagraphs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>단락(Paragraphs)</h3>\n<p>대부분의 글을 단락으로 구성되어 있고 HTML는 이를 위한 <code>&#x3C;p></code> 요소가 있다. 텍스트를 <strong>단락처럼 구분하기 위해 &#x3C;br> 태그를 사용하지 말아야 한다.</strong> 그 태그의 목적은 거기에 있지 않다.</p>\n<h4 id="안좋은-방법"><a href="#%EC%95%88%EC%A2%8B%EC%9D%80-%EB%B0%A9%EB%B2%95" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>안좋은 방법:</h4>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code>Cupcake ipsum dolor sit. Amet chupa chups chupa chups sesame snaps. Ice cream pie jelly\nbeans muffin donut marzipan oat cake.\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>\n\nGummi bears tart cotton candy icing. Muffin bear claw carrot cake jelly jujubes pudding\nchocolate cake cheesecake toffee.\n</code></pre>\n      </div>\n<h4 id="추천하는-방법"><a href="#%EC%B6%94%EC%B2%9C%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>추천하는 방법:</h4>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Cupcake ipsum dolor sit. Amet chupa chups chupa chups sesame snaps. Ice cream\npie jelly beans muffin donut marzipan oat cake.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Gummi bears tart cotton candy icing. Muffin bear claw carrot cake jelly jujubes\npudding chocolate cake cheesecake toffee.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>줄바꿈 태그의 제대로 된 역할은 노래나 시의 절을 변경하는 데 있다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>So close, no matter how far<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>\nCouldn’t be much more from the hearth<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>\nForever trusting who we are<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>\nAnd nothing else matters<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<h3 id="제목headings"><a href="#%EC%A0%9C%EB%AA%A9headings" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>제목(headings)</h3>\n<p><code>&#x3C;h1></code>부터 <code>&#x3C;h6></code>까지의 제목 태그는 각각 1(가장 중요함)부터 6(덜 중요함)까지의 암시적인 순위를 가지고 있다.</p>\n<p><a href="https://www.w3.org/TR/html5/sections.html#headings-and-sections">의미를 바르게 사용하기</a>위해서는 <strong>제목 태그의 순위를 1부터 6까지 순서대로 사용</strong>해야 한다. 단지 브라우저가 렌더링해주는 텍스트의 사이즈를 기준으로 제목 태그를 지정해서는 안된다. 원하는 스타일을 위해서는 CSS를 사용할 수 있으니(사실 반드시 사용해야 한다!) 순서에 맞게 올바른 제목 태그를 사용하길 바란다.</p>\n<h4 id="안좋은-방법-1"><a href="#%EC%95%88%EC%A2%8B%EC%9D%80-%EB%B0%A9%EB%B2%95-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>안좋은 방법:</h4>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Monkey Island<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>Look behind you! A three-headed monkey!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>\n    <span class="token comment" spellcheck="true">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<h4 id="추천하는-방법-1"><a href="#%EC%B6%94%EC%B2%9C%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>추천하는 방법:</h4>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Monkey Island<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>Look behind you! A three-headed monkey!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>\n    <span class="token comment" spellcheck="true">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>또 고려해야 할 사항은 <strong>제목에 뒤따르는 부제목을 어떻게 작성</strong>하느냐다. <a href="https://www.w3.org/TR/html5/common-idioms.html#common-idioms">W3C의 추천</a>에 의하면 낮은 순위의 제목 태그를 사용하기보다 일반 텍스트를 사용하길 권장하고 있다.</p>\n<h4 id="안좋은-방법-2"><a href="#%EC%95%88%EC%A2%8B%EC%9D%80-%EB%B0%A9%EB%B2%95-2" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>안좋은 방법:</h4>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Star Wars VII<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>The Force Awakens<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<h4 id="추천하는-방법-2"><a href="#%EC%B6%94%EC%B2%9C%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-2" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>추천하는 방법:</h4>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Star Wars VII<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>The Force Awakens<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<h2 id="폼forms"><a href="#%ED%8F%BCforms" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>폼(Forms)</h2>\n<h3 id="플레이스홀더placeholders"><a href="#%ED%94%8C%EB%A0%88%EC%9D%B4%EC%8A%A4%ED%99%80%EB%8D%94placeholders" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>플레이스홀더(Placeholders)</h3>\n<p><code>&#x3C;input></code>의 플레이스홀더 속성은 사용자가 입력해야 할 예제 값을 표시해주며 입력이 시작되면 자동으로 사라진다. 플레이스홀더는 <strong>유효한 값의 형식</strong>을 표시하기 위한 양식이다.</p>\n<p>그런데 현실에서는 많은 플레이스홀더들이 입력 필드가 가져야 할 유효한 값을 알려주는 대신 그 필드가 <em>무엇</em>인지를 알려주는 <code>&#x3C;label></code>처럼 사용되고 있다. 그런 방식은 <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility">접근성</a>이 떨어지기에 지양해야 한다.</p>\n<h4 id="안좋은-방법-3"><a href="#%EC%95%88%EC%A2%8B%EC%9D%80-%EB%B0%A9%EB%B2%95-3" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>안좋은 방법:</h4>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Your e-mail<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>mail<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<h4 id="추천하는-방법-3"><a href="#%EC%B6%94%EC%B2%9C%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-3" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>추천하는 방법:</h4>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span>\n    Your e-mail:\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>darth.vader@empire.gov<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>mail<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<h3 id="모바일-기기의-키보드"><a href="#%EB%AA%A8%EB%B0%94%EC%9D%BC-%EA%B8%B0%EA%B8%B0%EC%9D%98-%ED%82%A4%EB%B3%B4%EB%93%9C" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>모바일 기기의 키보드</h3>\n<p>스마트폰이나 태블릿같은 모바일 기기로 접근하는 사람들을 위해 <strong>입력 힌트를 제공</strong>하는 일은 매우 중요하다. 이는 우리가 <code>&#x3C;input></code> 태그에 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes">올바른 타입</a>을 지정함으로써 쉽게 제공할 수 있다.</p>\n<p>예를 들어 <code>type="number"</code>는 스마트폰이 일반적인 문자열 키보드 대신 숫자 키패드를 표시하도록 한다. <code>type="email"</code>, <code>type="tel"</code> 역시 각각 메일, 전화번호 입력에 알맞은 인터페이스를 제공할 수 있도록 도와준다.</p>\n<h4 id="안좋은-방법-4"><a href="#%EC%95%88%EC%A2%8B%EC%9D%80-%EB%B0%A9%EB%B2%95-4" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>안좋은 방법:</h4>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span>Phone number: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>mobile<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<h4 id="추천하는-방법-4"><a href="#%EC%B6%94%EC%B2%9C%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-4" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>추천하는 방법:</h4>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span>Phone number: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>tel<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>mobile<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>아래의 이미지를 비교해보자. 왼쪽이 <code>type="text"</code>, 오른쪽이 <code>type="number"</code>인 경우 보여지는 키보드의 모습이다.</p>\n<p><img src="https://hacks.mozilla.org/files/2016/08/keyboard_compare-500x443.png" alt="&#x27;text&#x27;, &#x27;number&#x27; 형식에 따른 스마트폰 키보드"></p>\n<h2 id="이미지"><a href="#%EC%9D%B4%EB%AF%B8%EC%A7%80" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>이미지</h2>\n<p>SVG 파일은 아래처럼 <code>&#x3C;img></code> 태그에 사용할 수 있을 뿐만 아니라</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>acolyte_cartoon.svg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>acolyte<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>웹 폰트를 사용하는 대신 <strong>SVG 스프라이트로 벡터 아이콘을 구현</strong>하는 일에도 사용할 수 있다. 웹 폰트는 해킹이며 완벽한 결과를 얻지 못할 수도 있다. 그 이유는 브라우저가 웹 폰트를 이미지가 아닌 텍스트로 처리하기 때문이다. 그리고 컨텐츠/광고 차단 프로그램이 웹 폰트를 다운받지 못하게 하는 등의 잠재적인 문제도 존재한다. 이에 대해 더 알아보고 싶다면 웹 폰트보다 SVG를 아이콘으로 사용하는게 왜 더 좋은지에 대해 말해주는 <a href="http://wordpress.tv/2016/05/28/sarah-semark-stop-using-icon-fonts-love-svg/">Sarah Semark의 프레젠테이션</a>를 시청해보길 바란다.</p>\n<p>SVG 스프라이트의 아이디어는 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Implementing_image_sprites_in_CSS">CSS 스프라이트</a>의 그것과 매우 유사하다. SVG의 경우에 모든 자산(assets)은 <code>&#x3C;symbol></code> 태그에 래핑되어 있다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>symbol</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>social-twitter<span class="token punctuation">"</span></span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token comment" spellcheck="true">&lt;!-- 실제 이미지 데이터는 여기에 들어감 --></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>symbol</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>그리고 아이콘은 HTML 안에서 <code>&#x3C;svg></code> 태그와 symbol ID를 명시하는 방식으로 사용할 수 있다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>social-icon<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name"><span class="token namespace">xlink:</span>href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>icons.svg#social-twitter<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>SVG 스프라이트를 만드는 일이 다소 반복적인 작업으로 보이는가? 그래서 여러 SVG 파일들을 모아서 하나의 SVG 스프라이트로 만드는 작업을 처리해주는 <a href="https://github.com/w0rm/gulp-svgstore">gulp-svgstore</a>같은 자동화 툴이 존재한다.</p>\n<p>그리고 기억하길 바란다. 우리는 사진을 불러오기 위해 <code>&#x3C;img></code> 대신 <code>&#x3C;svg></code> 태그를 사용했으므로 CSS를 이용해서 스타일을 적용할 수 있다. 웹 폰트로 가능했던 모든 멋진 일들이 이 SVG 아이콘을 통해서도 가능하다는 얘기다!</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">.social-icon</span> <span class="token punctuation">{</span>\n    <span class="token property">fill</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>\n    <span class="token property">transition</span><span class="token punctuation">:</span> all 0.2s<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.social-icon:hover</span> <span class="token punctuation">{</span>\n    <span class="token property">fill</span><span class="token punctuation">:</span> #00f<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>비록 CSS에 제한이 있기는 하다. SVG를 이런 방식으로 사용하면서 <code>&#x3C;use></code> 태그를 이용해 <code>&#x3C;symbol></code>에 접근하면 이미지가 <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM">Shadow DOM</a>에 들어가버려서 적용할 수 있는 CSS에 제한이 생기게 된다. 이 경우 스타일링하고 싶은 요소를 골라낼 수 없고 몇몇 속성(ex. fill)은 해당 속성이 정의되어 있지 않은 요소에만 적용될 것이다. 하지만, 이건 웹 폰트에서도 불가능하니까 그렇게 큰 단점이라고 볼 수는 없지 않을까?</p>\n<html><head></head><body><p data-height="265" data-theme-id="0" data-slug-hash="OXBQZq" data-default-tab="html,result" data-user="ladybenko" data-embed-version="2" data-pen-title="SVG acolyte demo" class="codepen">See the Pen <a href="https://codepen.io/ladybenko/pen/OXBQZq/">SVG acolyte demo</a> by ladybenko (<a href="https://codepen.io/ladybenko">@ladybenko</a>) on <a href="https://codepen.io">CodePen</a>.</p></body></html>\n<p>이번 글에서 제시한 몇가지 팁들이 도움이 되었길 바란다.</p>\n<html><head><script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script></head><body></body></html>',timeToRead:7,fields:{tagSlugs:["/tags/html/","/tags/svg/"]},frontmatter:{title:"[번역] 몇가지 HTML 팁",tags:["HTML","SVG"],date:"2017-05-29",description:"hacks.mozilla.org에 게시된 A few HTML tips를 번역한 글",mainImage:null,mainImageAlt:null}}},pathContext:{slug:"/posts/2017-05-29-few-html-tips/"}}}});
//# sourceMappingURL=path---posts-2017-05-29-few-html-tips-4538d1409c43bd8d0e9a.js.map
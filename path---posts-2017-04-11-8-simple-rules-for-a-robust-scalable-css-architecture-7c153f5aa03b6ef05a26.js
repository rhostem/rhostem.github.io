webpackJsonp([0xa0208a199e36],{707:function(a,s){a.exports={data:{site:{siteMetadata:{title:"rhostem.github.io",url:"https://rhostem.github.io",author:"rhostem",description:"프론트엔드 웹 개발 기술 블로그"}},markdownRemark:{html:'<p>CSS는 쉬운 듯하면서도 어렵다. 복잡한 로직은 없지만 이름 그대로 중첩(cascading)되는 성질 때문에 기대했던 결과가 나오지 않는 경우가 무척 많다. 때에 따라서는 디버깅에 자바스크립트 버그 수정보다 많은 시간을 투자해야 하는 경우가 생기기도 한다. 까다로운 CSS를 상대하기 위해 <a href="https://smacss.com/" target="_blank" rel="nofollow">SMACSS</a>, <a href="http://getbem.com/" target="_blank" rel="nofollow">BEM</a>같은 방법론을 적용하기도 하고 <a href="https://github.com/css-modules/css-modules" target="_blank" rel="nofollow">CSS module</a>, <a href="https://developer.mozilla.org/ko/docs/Web/Web_Components/Shadow_DOM" target="_blank" rel="nofollow">shadow DOM</a>처럼 기술적인 대안을 마련하기도 한다. 하지만 모든 것을 만족하게 할 수 있는 방법론은 없기에 CSS의 특성을 잘 이해한 상태에서 앞서 언급한 기술들을 필요한 곳에 적용해야 제대로 된 스타일 시트 작성이 가능할 것이다.</p>\n<p>얼마 전에 읽은 <a href="https://github.com/jareware/css-architecture/blob/master/README.md#7-respect-component-boundaries" target="_blank" rel="nofollow">‘8 simple rules for a robust, scalable CSS architecture’</a>라는 글에서는 어떻게 하면 좋은 CSS를 작성할 수 있는지 아주 잘 정리해 두었다. 지금껏 다양한 글에서 읽어 왔던 CSS에 대한 조언을 하나로 합쳐 정리한 글을 읽은 듯한 느낌이었다. 앞으로 프론트엔드 개발을 하면서 계속 참고해야 할 내용인 것 같아서 정리해 보려고 한다.</p>\n<hr>\n<h2 id="목표"><a href="#%EB%AA%A9%ED%91%9C" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>목표</h2>\n<ul>\n<li>컴포넌트 지향: 컴포넌트 기반의 UI에 맞춘 CSS</li>\n<li>샌드박스: 로컬 컴포넌트의 스타일을 외부 스타일로부터 보호</li>\n<li>편리함: 사용하는 데 어려움이 없어야 함</li>\n<li>안전한 경우 오류 허용: 로컬 컴포넌트 스타일 기반이지만 전역 스타일은 예외적으로 허용 가능</li>\n</ul>\n<h2 id="항상-클래스-이름-셀렉터를-우선한다"><a href="#%ED%95%AD%EC%83%81-%ED%81%B4%EB%9E%98%EC%8A%A4-%EC%9D%B4%EB%A6%84-%EC%85%80%EB%A0%89%ED%84%B0%EB%A5%BC-%EC%9A%B0%EC%84%A0%ED%95%9C%EB%8B%A4" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>항상 클래스 이름 셀렉터를 우선한다.</h2>\n<p>CSS에 아이디(ex. #something), 태그(ex. div, a, p, …)를 사용하지 않는 편이 좋다. 아이디는 하나의 요소에만 적용할 수 있으니 당연히 피하는 것이 좋고 태그는 오류 발생 가능성이 커진다. 스타일 시트가 수백 줄 이상으로 길어질 경우 이미 특정 태그에 스타일을 지정해 둔 상태에서 해당 태그에 클래스를 지정해서 스타일을 추가하는 경우가 발생할 수 있다. 그러면 태그에서 선언한 스타일이 병합되어서 의도하지 않은 결과가 나올 수 있다. 그리고 컴포넌트 내부에 자식 컴포넌트가 존재할 경우 태그 스타일은 전파가 되기 때문에 자식 컴포넌트에서 해당 태그를 사용할 경우 외부 스타일이 유입되는 결과를 낳게 된다.</p>\n<h2 id="컴포넌트-코드들은-같은-폴더에-둔다"><a href="#%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%BD%94%EB%93%9C%EB%93%A4%EC%9D%80-%EA%B0%99%EC%9D%80-%ED%8F%B4%EB%8D%94%EC%97%90-%EB%91%94%EB%8B%A4" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>컴포넌트 코드들은 같은 폴더에 둔다.</h2>\n<p>마크업, 스크립트, 스타일 시트, 테스트코드 파일들은 같은 폴더에 함께 위치시키는 것이 작업하기에 편하다. Angular 2를 사용할 경우 angular-cli를 이용해 컴포넌트를 생성시키면 아래와 같은 형태로 4개의 파일을 동시에 만들어준다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">ui/\n├── layout/\n|   └── Header.html            // 컴포넌트 마크업\n|   ├── Header.js              // 컴포넌트 코드\n|   ├── Header.scss            // 컴포넌트 스타일\n|   └── Header.spec.js         // 컴포넌트 테스트 코드</code></pre>\n      </div>\n<h2 id="클래스-이름을-일관적으로-작성한다"><a href="#%ED%81%B4%EB%9E%98%EC%8A%A4-%EC%9D%B4%EB%A6%84%EC%9D%84-%EC%9D%BC%EA%B4%80%EC%A0%81%EC%9C%BC%EB%A1%9C-%EC%9E%91%EC%84%B1%ED%95%9C%EB%8B%A4" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>클래스 이름을 일관적으로 작성한다.</h2>\n<p>마크업과 스타일 시트 작성 시 클래스 이름명을 그때그때 생각나는 대로 붙여버리면 그 순간은 편하지만, 언젠가 디버깅할 때 괴로움이 반드시 찾아오게 된다. 그나마 직접 작성한 코드라면 어렴풋이 기억이라도 나겠지만, 타인의 코드라면? 게다가 정해진 기준 없이 클래스를 여기저기 붙여버렸다면? 하나를 건드리면 다른 한곳에 구멍이 뚫리는 루프를 경험할 수 있을 것이다.</p>\n<p>이와 같은 문제를 방지하고 공동 작업의 효율을 위해 제안된 것이 SMACSS, BEM, <a href="https://suitcss.github.io" target="_blank" rel="nofollow">SUIT</a>같은 방법론들이다. 각각 조금씩 다르지만 기본적으로 block(컴포넌트), entity(컴포넌트 하위 요소), modifier(하위 요소 중에서 일부만 변경된 경우), utility(버튼 같은 공유 스타일), state(hover 등의 상태 변경 시 일부 스타일이 변경되는 경우) 등으로 클래스를 구분해서 마크업과 스타일 시트를 작성하자는 내용이다. 개인적으로는 SUIT에서 제안하는 방법을 주로 사용하고 있다.</p>\n<h2 id="컴포넌트-파일명과-클래스-이름을-확실히-대응시킨다"><a href="#%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%ED%8C%8C%EC%9D%BC%EB%AA%85%EA%B3%BC-%ED%81%B4%EB%9E%98%EC%8A%A4-%EC%9D%B4%EB%A6%84%EC%9D%84-%ED%99%95%EC%8B%A4%ED%9E%88-%EB%8C%80%EC%9D%91%EC%8B%9C%ED%82%A8%EB%8B%A4" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>컴포넌트 파일명과 클래스 이름을 확실히 대응시킨다.</h2>\n<p>특히 셀렉터에 컴포넌트 명을 붙여주면 디버거에서 클래스 이름명만 확인해도 어떤 컴포넌트에서 만들어진 요소인지 바로 확인할 수 있다는 장점이 있다. 여기서 한발 더 나아가 클래스 이름 앞에 앱의 이름을 붙이는 방법도 제안할 수 있는데 이 경우 복수의 프로젝트 사이에서 코드를 공유하는 경우 도움이 될 것이다.</p>\n<h2 id="컴포넌트-외부로-스타일이-전파되지-않도록-한다"><a href="#%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%99%B8%EB%B6%80%EB%A1%9C-%EC%8A%A4%ED%83%80%EC%9D%BC%EC%9D%B4-%EC%A0%84%ED%8C%8C%EB%90%98%EC%A7%80-%EC%95%8A%EB%8F%84%EB%A1%9D-%ED%95%9C%EB%8B%A4" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>컴포넌트 외부로 스타일이 전파되지 않도록 한다.</h2>\n<p>앞서 언급한 규칙 중에서 태그를 사용하지 말라는 것과 관련이 있는 내용이다. CSS module을 사용하지 않을 경우 부모에서 사용한 클래스 이름명과 자식 컴포넌트에서 사용한 클래스 이름명이 중복될 가능성이 얼마든지 있기에 스타일이 유입될 가능성도 함께 존재한다. 이를 방지하기 위해서는 모든 클래스 이름명에 컴포넌트의 이름을 붙여주는 방법을 사용하는 것이 가장 확실하다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-scss"><code class="language-scss"><span class="token selector">.myapp-Header-btn </span><span class="token punctuation">{</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.myapp-Header-link </span><span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>하지만 이렇게 작성할 경우 중복 텍스트가 너무 많아지기에 어느 순간 본능이 요구하는 대로 클래스 이름명을 짧게 사용하고 싶은 마음이 샘솟게 될 것이다. 이를 방지하기 위해서는 Sass, Less, <a href="https://github.com/postcss/postcss" target="_blank" rel="nofollow">PostCSS</a>의 <a href="https://github.com/jonathantneal/precss" target="_blank" rel="nofollow">precss</a> 플러그인 등이 제공하는 부모 참조 선택자(<code class="language-text">&amp;</code>)를 사용할 수 있다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-scss"><code class="language-scss"><span class="token selector">.myapp-Header </span><span class="token punctuation">{</span>\n  <span class="token selector"><span class="token parent important">&amp;</span>-btn </span><span class="token punctuation">{</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token selector"><span class="token parent important">&amp;</span>-link </span><span class="token punctuation">{</span>\n    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2 id="외부-스타일이-컴포넌트로-전파되지-않도록-하라"><a href="#%EC%99%B8%EB%B6%80-%EC%8A%A4%ED%83%80%EC%9D%BC%EC%9D%B4-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EB%A1%9C-%EC%A0%84%ED%8C%8C%EB%90%98%EC%A7%80-%EC%95%8A%EB%8F%84%EB%A1%9D-%ED%95%98%EB%9D%BC" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>외부 스타일이 컴포넌트로 전파되지 않도록 하라.</h2>\n<p>태그 또는 일반적인 클래스 이름(ex. btn)을 사용하면 자식 요소에 스타일이 전파될 가능성이 커진다. 굳이 태그를 사용해야겠다면 자식 요소 선택자(<code class="language-text">&gt;</code>)를 사용하는 방법이 있다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-scss"><code class="language-scss"><span class="token selector">.myapp-header </span><span class="token punctuation">{</span>\n  <span class="token selector"><span class="token parent important">&amp;</span> > a </span><span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>하지만 스타일 시트 작성시 <a href="https://developer.mozilla.org/ko/docs/Web/CSS/Specificity" target="_blank" rel="nofollow">명시도</a>는 가능하면 높이지 않는 편이 좋다. 높은 명시도의 단점은 아래와 같다.</p>\n<ul>\n<li>의도하지 않은 곳에 스타일이 적용될 수 있다. (과연 <code class="language-text">li &gt; a</code> 에 해당하는 마크업이 처음에 생각한 곳 하나뿐일까?)</li>\n<li>마크업 구조가 변경되면 셀렉터도 함께 변경해야 해서 리팩토링을 어렵게 만든다.</li>\n<li>스타일을 적용하기 위해서는 셀렉터에 대응하는 마크업을 사용해야만 하므로 재사용성이 떨어진다.</li>\n</ul>\n<p>부모 컴포넌트로부터 스타일이 유입되는 일은 어느 정도 방지할 수 있다. 하지만 <a href="http://cssreset.com/scripts/eric-meyer-reset-css/" target="_blank" rel="nofollow">reset.css</a>, <a href="https://necolas.github.io/normalize.css/" target="_blank" rel="nofollow">normalize.css</a>같은 전역 스타일이나 사용자가 직접 지정한 전역 스타일이 유입되는 일은 근본적으로 방지할 수는 없다.(특히 Bootstrap을 사용할 경우 수천개의 <em>일반적인</em> 클래스 이름을 가진 스타일 부대의 유입을 방지해야 한다)</p>\n<p>iframe을 사용하면 부모 컴포넌트와 완벽하게 분리할 수는 있지만 추가 페이지 로드 부담이 생긴다. 그리고 shadow DOM은 브라우저 지원 이슈 때문에 아직은 적극적으로 사용하기는 어려운 상황이다.</p>\n<h2 id="컴포넌트의-경계를-중시하라"><a href="#%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%9D%98-%EA%B2%BD%EA%B3%84%EB%A5%BC-%EC%A4%91%EC%8B%9C%ED%95%98%EB%9D%BC" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>컴포넌트의 경계를 중시하라.</h2>\n<p>예를 들어 헤더, 네비게이션 바, 컨텐츠 컴포넌트를 포함한 부모 컴포넌트가 있다면 자식 컴포넌트들의 레이아웃과 관련된 스타일을 작성해야 할 것이다. 하지만 이 경우 결코 컴포넌트 내부의 스타일은 건드리지 말고 CSS box model 바깥의 스타일(position, margin, display, width, float, z-index)만 선언해야 한다.</p>\n\n  <a class="gatsby-resp-image-link" href="/static/box-model-f32a75647fb0fc9dec62581d0c6a48ea-7af81.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 192px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 89.58333333333334%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsSAAALEgHS3X78AAADc0lEQVQ4y22UiVMaWRCH+adTa1VSZku5NAiajceabA6zGjW6Gy9WEEXAE0RAXbc2Go+Vw4PRAWZAub68mXETok7VV/2635ue+nX3PJOiKMi5HBcXWc4FiqJSqVQolzXKVKtVPSbLOX2txbT9hygWi5i0w5vxLRJbO8QTWySTSapis1Qq6WgJspJEKp0WL5X12PX19T2Mj9cwlWuQPwiTW3uNHBkkuzaAHB7gOj5EKTZ4yxDFWKPfgDhXjL5DSkxxI1SZbqqg7AU4mjLjf/MET38TR+428qEuLhacSH4XZ74OMnMOfZ0VsazfwPBdqCEXhdgoN5WqkVD9skzGa+MoaOcwYOdfn4WDRRvSRgdZwenaM06W2gw/0oDwzyIODv4yU4iPNyZcIuWxchZ1suu3sz1vJRlxwkk/9cNfKe/3kt99IdZ9VA/6qDXAUR8ncxbym2M/JkzOWrjc7iIcbWdxxYJ3sQX3/M8srpqZX2rFI/zlqI3lDduttRNYt5EW76SEotzmR6OGlTqUDlZIi4RXO8+ZX7MwMNHEy+FHvB1vYsz7lAl/C4OTjwnE2/Bv2lmIWAnGbSwKMrvPyQhF+dgY1VodkyQrSH8v8J/bzImoizfUwqTfTLd7BueUm5b3Q5gHh+mYmBZ2BPvHP3BMeBjxOpnyP+Ew5uLQ3YoUGeE8K2FKn1+SSXg4dls4WncwOdfMh+mntP/poXVsjke9g/zUP0TriJuml8M0//4J26cg72c6GHU3sS/qvjfdwvn6B46T6VvJh0KyaIpWw9VEG8GEDc9aOx7xgfmoi4lAG6MeM3OiUd5wB7OrzwgI6QEh+fRWcuF/yd+6LGp4kegkFLHj3xA1ilp0lmJWZvzNjM8+JrRpxILCBqJWfOtWUneb0tjl4j8vKIkRUT53C3p01L0eciKe3fmF4l7P97huu6l86eXEd2dsimKwtaZoQ6rudFHY6vyGst2JLAqfEcOtbt/ZE8gJlxjsVl2ykVD8y8p+iELQSdrnJKP9ZndI+xzCOh7cSwnkgFP8KZrkqnE5yJ9DFFe6KUffUN747R6l8CuU9VdUovf3ytHX3IT7uNIk6wnFVXVTUlHkLGpOukOWYv4S6TzNaeqYUuFSjz10rqQY96VJVVVqot3iKtPbXhPWoK772pMvqFxIV/r6xzPfz9Xqdf1e/ArLh8zQVBYKpwAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px #ffffff;" alt="box model" title="" src="/static/box-model-f32a75647fb0fc9dec62581d0c6a48ea-7af81.png" srcset="/static/box-model-f32a75647fb0fc9dec62581d0c6a48ea-7af81.png 192w" sizes="(max-width: 192px) 100vw, 192px">\n    </span>\n  </span>\n  \n  </a>\n    \n<h2 id="외부-스타일을-느슨하게-연결하라"><a href="#%EC%99%B8%EB%B6%80-%EC%8A%A4%ED%83%80%EC%9D%BC%EC%9D%84-%EB%8A%90%EC%8A%A8%ED%95%98%EA%B2%8C-%EC%97%B0%EA%B2%B0%ED%95%98%EB%9D%BC" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>외부 스타일을 느슨하게 연결하라</h2>\n<p>반복적인 스타일은 공유하게 된다. 하지만 전역 스타일을 지정한 후 마크업에 외부 클래스를 직접 연결하는 것보다는 @extend 같은 키워드를 이용해 스타일 시트에서 직접 추가하는 방법이 더 좋다. 마크업에 클래스 이름을 나열하는 것보다는 스타일 시트를 통해 외부에서 상속받은 스타일과 컴포넌트에 직접 추가한 스타일을 한번에 확인하는 편이 더 직관적이다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>myapp-Button<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-scss"><code class="language-scss"><span class="token selector">.myapp-Button </span><span class="token punctuation">{</span>\n  <span class="token keyword">@extend</span> .btn<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>외부 스타일을 적용하는 방법으로는 Sass의 extend/mixin, <a href="http://cssnext.io/" target="_blank" rel="nofollow">cssnext</a>의 <a href="http://cssnext.io/features/#custom-properties-set-apply" target="_blank" rel="nofollow">custom properties set &#x26; @apply</a>를 이용하는 방법 등이 있다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-scss"><code class="language-scss"><span class="token selector">:root </span><span class="token punctuation">{</span>\n  <span class="token selector">--danger-theme: </span><span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>\n    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.danger </span><span class="token punctuation">{</span>\n  @apply --danger-theme<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<hr>\n<p>CSS를 아키텍처를 제대로 구성하는 일은 생각보다 어려운 일이기에 Bootstrap같은 프레임워크가 높은 인기를 가지게 된 것은 자연스러운 현상이다. 하지만 모든 것을 외부 프레임워크에 의존할 수는 없다. React, Angular, Vue같은 컴포넌트 기반의 라이브러리가 널리 사용되는 상황에서 CSS 작성도 그에 맞춰서 컴포넌트 기반으로 견고하게 작성할 수 있도록 해야 할 것이다.</p>',timeToRead:7,fields:{tagSlugs:["/tag/css"]},frontmatter:{title:"견고하고 확장성있는 CSS 구조를 위한 8가지 규칙",subTitle:null,tags:["CSS"],date:"2017-04-11",mainImageAlt:null,description:"",mainImage:null}}},pathContext:{slug:"/posts/2017-04-11-8-simple-rules-for-a-robust-scalable-CSS-architecture/"}}}});
//# sourceMappingURL=path---posts-2017-04-11-8-simple-rules-for-a-robust-scalable-css-architecture-7c153f5aa03b6ef05a26.js.map
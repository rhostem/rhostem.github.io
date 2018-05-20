webpackJsonp([0x624a0f552aac],{873:function(n,a){n.exports={data:{site:{siteMetadata:{title:"rhostem.github.io",url:"https://rhostem.github.io",author:"rhostem"}},markdownRemark:{html:'<p>이 글은 James Kyle의 <a href="http://thejameskyle.com/adopting-flow-and-typescript.html">Adopting Flow &#x26; TypeScript - A comparison between the two on-boarding processes</a>를 번역한 글입니다.</p>\n<hr>\n<p>우리가 타입 검사기를 도입한다고 가정해보자.</p>\n<p>앱 개발 중에 NaN값이 많이 발생해서 원인을 찾아보았고 아래의 코드를 찾을 수 있었다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">// math.js</span>\n<span class="token keyword">function</span> <span class="token function">square</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n <span class="token keyword">return</span> n <span class="token operator">*</span> n<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token function">square</span><span class="token punctuation">(</span><span class="token string">"oops"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>한숨을 쉬면서 이제는 정말로 타입 검사기를 도입해야겠다고 결심하게 된다. 그리고 한발 물러서서 우리에게 어떤 대안이 있는지 알아본다: <a href="https://flow.org/">Flow</a>와 <a href="http://www.typescriptlang.org/">TypeScript</a>가 있다.</p>\n<p>둘다 간단하게 파일별로 채택이 가능하다.</p>\n<ul>\n<li>Flow: <code class="language-text">// @flow</code> 코멘트를 파일 최상단에 추가한다.</li>\n<li>TypeScript: 파일의 확장자 <code class="language-text">.js</code>를 <code class="language-text">.ts</code>로 변경한다.</li>\n</ul>\n<p>하지만 각각 어떤 일이 일어나는지 비교해보자.</p>\n<h2 id="typescript-채택"><a href="#typescript-%EC%B1%84%ED%83%9D" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>TypeScript 채택</h2>\n<p>TypeScript를 채택하기 위해서는 우선 확장자 <code class="language-text">.js</code>를 <code class="language-text">.ts</code>로 변경한다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">// math.ts</span>\n<span class="token keyword">function</span> <span class="token function">square</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n <span class="token keyword">return</span> n <span class="token operator">*</span> n<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token function">square</span><span class="token punctuation">(</span><span class="token string">"oops"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>그러고는 TypeScript를 실행한다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token punctuation">(</span>no errors<span class="token punctuation">)</span></code></pre>\n      </div>\n<p>TypeScript는 아래와 같이 우리가 함수의 인자에 직접 타입 주석(annotation)을 작성하도록 요구하기 때문에 오류가 발생하지 않는다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">square</span><span class="token punctuation">(</span>n<span class="token punctuation">:</span> number<span class="token punctuation">)</span><span class="token punctuation">:</span> number <span class="token punctuation">{</span>\n <span class="token keyword">return</span> n <span class="token operator">*</span> n<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token function">square</span><span class="token punctuation">(</span><span class="token string">"oops"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>그런데 타입 주석이 없으면 TypeScript는 설정에 기반을 둬 아래 두 가지 행동 중에서 하나를 실행한다.</p>\n<ol>\n<li>확인되지 않은 모든 타입을 <code class="language-text">any</code> 타입으로 묵시적으로 형 변환(cast)한다. <code class="language-text">any</code> 타입은 타입 체크를 하지 않는다.</li>\n<li>만약 <code class="language-text">--noImplicitAny</code> 옵션을 사용하고 있다면 확인되지 않은 모든 타입에 대해 에러를 발생시킨다.</li>\n</ol>\n<p>이는 TypeScript에 의해 <em>적용</em>(cover)되는 범위는 당신이 직접 작성한 타입에 의해 결정된다는 말이다. 타입 적용 범위는 타입을 작성함에 따라 <em>선형적</em>으로 증가한다.</p>\n<h2 id="타입-적용-범위type-coverage"><a href="#%ED%83%80%EC%9E%85-%EC%A0%81%EC%9A%A9-%EB%B2%94%EC%9C%84type-coverage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>타입 적용 범위(Type coverage)</h2>\n<p>조금 더 깊이 들어가기 전에, 타입 적용 범위에 관한 설명을 해야겠다.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/type-coverage-0defe0e9d3d25ea4bd4b626924cce8eb-87a14.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 738px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 64.49864498644986%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsSAAALEgHS3X78AAABSElEQVQoz61Sa2vCMBT1//+gfRJU2BSRzW3IWrVrK1lt7Ls1adM8l7bO6ehgwg7hcnLDubnnJgPVQkqpZBPPpE1eL9Vm1elUY6BugNaIy30jZoTvl4fYTuEqDMw4cXNNqqK2XGWa0jCksVYbR+2WtnX3WNIqOATd5Y1YMBFbaermGSgKHxX7Y+JkFDNgsdcX+Wao3YZ5ngTmx/vDFhMcBuG3WLUWyqTynmC4SWI7g6sIx8i7n+chzHHmz5+9tdnZ/dl2NyVSkO5mHdNdTlAduntKCBcyBoEP/POorgZWliUA4DL7RzRizjnGuDEvhBSyWR2E6F5Jk966Nz1Vn1hXRQiVLTTRXTBKdTP0eNSRV5V2XlPaL67rejgcTqfTyWSyWCxms1kURWi7haPRYTxGtg0hdBzn17a1W/pV+/RJNeFcMHaaxb97/gQgl/JEEfPq2AAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px #ffffff;"\n        alt="Type Coverage"\n        title=""\n        src="/static/type-coverage-0defe0e9d3d25ea4bd4b626924cce8eb-87a14.png"\n        srcset="/static/type-coverage-0defe0e9d3d25ea4bd4b626924cce8eb-df1fd.png 265w,\n/static/type-coverage-0defe0e9d3d25ea4bd4b626924cce8eb-6f2d3.png 530w,\n/static/type-coverage-0defe0e9d3d25ea4bd4b626924cce8eb-87a14.png 738w"\n        sizes="(max-width: 738px) 100vw, 738px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<blockquote>\n<p>적용되지 않은 코드는 붉은색으로 강조되었다.</p>\n</blockquote>\n<p>당신이 코드에서 값과 표현 식을 살펴본 후 타입 체커에게 무슨 타입인지 알겠냐고 물어봤다고 가정하자.</p>\n<p>만약 타입 체커가 안다고 대답한다면 그 값과 표현 식은 적용되었다고 할 수 있다. 타입 체커가 모른다면 그렇지 않은 것이다.</p>\n<p>코드에서 명시될 수 있는 모든 타입들 중에서 타입 체커가 파악한 타입의 백분율이 “타입 적용 범위”다.</p>\n<p>당신은 당신의 프로그램이 가능한 높은 적용 범위를 가지기를 바랄 것이다. 그럴수록 타입 체커가 더 많은 실수를 확인해줄 수 있기 때문이다.</p>\n<p>타입을 하나도 파악하지 못한다면 타입 체커는 아무것도 아니다.</p>\n<h2 id="flow-채택"><a href="#flow-%EC%B1%84%ED%83%9D" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Flow 채택</h2>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">// @flow</span>\n<span class="token keyword">function</span> <span class="token function">square</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n <span class="token keyword">return</span> n <span class="token operator">*</span> n<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token function">square</span><span class="token punctuation">(</span><span class="token string">"oops"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Flow를 실행시키면 아래와 같은 결과를 볼 수 있다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">square</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n <span class="token keyword">return</span> n <span class="token operator">*</span> n<span class="token punctuation">;</span>\n        <span class="token operator">^</span>   <span class="token operator">^</span>\n <span class="token function">Error</span> <span class="token punctuation">(</span>x2<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token function">square</span><span class="token punctuation">(</span><span class="token string">"oops"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token operator">></span> <span class="token function">Error</span> <span class="token punctuation">(</span>x2<span class="token punctuation">)</span>\n<span class="token operator">></span> string<span class="token punctuation">.</span> The operand <span class="token keyword">of</span> an arithmetic operation must be a number<span class="token punctuation">.</span></code></pre>\n      </div>\n<p>즉시 <em>무엇</em>인가가 잘못되었다는 타입 에러가 발생한다.</p>\n<p>Flow는 우리에게 직접 타입을 명시하라고 하지 않았다. 그저 소스 코드 상단에 Flow로 타입을 체크하겠다는 플래그를 추가하고 외부 모듈을 설치하기만을 요구했을 뿐이다. 다른 모든 것은 <em>추론</em>에 의해 가능했다.</p>\n<p>이는 타입 적용 범위가 훨씬 더 빠르게 증가할 수 있도록 해 준다. 타입을 많이 명시하지 않아도 높은 타입 적용 범위를 가진 코드를 얻을 수 있다.</p>\n<p>내 경험상으로는 70-90%의 타입 적용 범위를 가진 소스 파일을 얻을 수 있었다.</p>\n<p>바로 아래에 차이점을 보여주는 아주 과학적인 그래프가 있다.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/adopting-flow-and-typescript-graph-6ebb075710a43fdfc58b7cb13d9e5f60-8bb8b.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1060px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 54.39914163090128%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAABdklEQVQoz42Q247TMBCG8/4Pww1IXCFAAmmBvdmWNKGbNm3TnKo4TVo7B3sOOIdqi9iLHf2exJl843/sMHPZnvq+prYmMDwFGurl8MWqG7MSWMcotnwOmufPMl3bvxy7wtpTKqfDr977YNIFpEtIFyZdToIp5x5XO13HUS6eVn+SNJvh/TVoqrANfxgpsLsOAo1EZB0w02gFmI+SFyeOJQPN/py27738Ue2+mK5FvgsLE44PLCQsM4gqAKS5MnRmR3ba3X1Sx4fhHDQ3cM7nlhYZfD/AUwY8uiB66e8oja7/rikD2xTx5exC0TLDb3vzEEF8QQ38fwwzB8H7RuUWnOCyITfHjUClKbmQzXyb/BU4jL+2ndBaC6lXJ7MujLUzeRxtEs5T/qMbfPpZyHNQ8EZQb/jtMcAb4X58flwV60T60cUPK39f+9uzuyl/W9kXu73XrvKS63aG7U0ZlD1IZWR7U1onx/IQlfv8knag2ruSVQeNBf8CA2d1s1iqVnkAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px #ffffff;"\n        alt="adopting flow and typescript graph"\n        title=""\n        src="/static/adopting-flow-and-typescript-graph-6ebb075710a43fdfc58b7cb13d9e5f60-9056e.png"\n        srcset="/static/adopting-flow-and-typescript-graph-6ebb075710a43fdfc58b7cb13d9e5f60-507eb.png 265w,\n/static/adopting-flow-and-typescript-graph-6ebb075710a43fdfc58b7cb13d9e5f60-63b28.png 530w,\n/static/adopting-flow-and-typescript-graph-6ebb075710a43fdfc58b7cb13d9e5f60-9056e.png 1060w,\n/static/adopting-flow-and-typescript-graph-6ebb075710a43fdfc58b7cb13d9e5f60-d381a.png 1590w,\n/static/adopting-flow-and-typescript-graph-6ebb075710a43fdfc58b7cb13d9e5f60-8bb8b.png 1864w"\n        sizes="(max-width: 1060px) 100vw, 1060px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>이는 나의 개인적인 의견이 아니다. 직접 실행해서 적은 수의 타입이 만들어내는 타입 적용 범위의 차이를 직접 확인해볼 수 있다.</p>\n<p>Flow에서 파일의 타입 적용 범위를 확인하기 위해서는 아래의 명령어를 실행하면 된다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">flow coverage path/to/file.js --color</code></pre>\n      </div>\n<p><a href="https://github.com/rpl/flow-coverage-report">flow-coverage-report</a>의 도움을 받을 수도 있다.</p>\n<blockquote>\n<p>나는 내가 알고 있는 TypeScript의 타입 적용 범위 보고서 도구가 없다(만약 알고 있다면 나에게 링크를 전달해주길!). 하지만 코드를 테스트해서 오류를 제대로 보고하고 있는지 확인할 수 있다.</p>\n</blockquote>\n<h2 id="어떻게-작동하는-것인가"><a href="#%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%9E%91%EB%8F%99%ED%95%98%EB%8A%94-%EA%B2%83%EC%9D%B8%EA%B0%80" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>어떻게 작동하는 것인가?</h2>\n<p>두 도구가 이렇게 다른 적용 범위를 나타내는 이유는 구조(architecture)상의 차이점에 있다</p>\n<h3 id="typescript-구조---ast-지향"><a href="#typescript-%EA%B5%AC%EC%A1%B0---ast-%EC%A7%80%ED%96%A5" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>TypeScript 구조 - AST 지향</h3>\n<p>TypeScript는 코드를 <em>진행</em>하면서 파악된 타입들로 테이블을 구성한다. 값과 표현 식을 발견하는 즉시 그들에게 타입을 부여한다. 타입스크립트는 모르는 타입을 만나면 <code class="language-text">any</code> 타입을 부여할지 에러를 발생시킬지 즉시 결정한다.</p>\n<h3 id="flow-구조---그래프-지향"><a href="#flow-%EA%B5%AC%EC%A1%B0---%EA%B7%B8%EB%9E%98%ED%94%84-%EC%A7%80%ED%96%A5" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Flow 구조 - 그래프 지향</h3>\n<p>Flow는 우선 모든 값과 표현 식에 대해 서로의 관계를 표현하는 그래프를 구성한다. 그러고 나서 각각의 값과 표현 식에 대해 타입을 부여하기 시작한다. 만약 모르는 타입을 만나면 우선 “open” 타입으로 지정한 후 나중에 다시 확인한다.</p>\n<p>Flow가 프로그램 전체 그래프를 완성하고 나면 모든 점을 연결하기 시작하고 타입은 서로에게 전달(flow)된다. Open 타입은 자신에게 전달된 모든 타입을 검토한 후 최종적으로 하나의 타입을 결정하는데 이를 <em>추론</em>(inferred)된 타입이라고 부른다.</p>\n<p>이렇게 추론된 타입의 발생은 직접 확인할 수 있다. 앞에서 Flow가 발생시킨 타입 에러를 다시 살펴보자.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">square</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n <span class="token keyword">return</span> n <span class="token operator">*</span> n<span class="token punctuation">;</span>\n        <span class="token operator">^</span>   <span class="token operator">^</span>\n        <span class="token function">Error</span> <span class="token punctuation">(</span>x2<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token function">square</span><span class="token punctuation">(</span><span class="token string">"oops"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token operator">></span> <span class="token function">Error</span> <span class="token punctuation">(</span>x2<span class="token punctuation">)</span>\n<span class="token operator">></span> string<span class="token punctuation">.</span> The operand <span class="token keyword">of</span> an arithmetic operation must be a number<span class="token punctuation">.</span></code></pre>\n      </div>\n<p>어떻게 <code class="language-text">square(&quot;oops&quot;)</code>보다는 <code class="language-text">n * n</code>에 에러가 표시되었는지 생각해보자. <code class="language-text">square</code> 함수의 인자 <code class="language-text">n</code>에는 타입이 명시되어 있지 않다. 하지만 함수 실행에 사용된 <code class="language-text">&quot;oops&quot;</code>가 문자열이므로 Flow가 <code class="language-text">n</code>이 string 타입이라고 추론했기 때문이다.</p>\n<p>타입 주석을 추가하면 에러 발생 지점이 바뀌는 것을 확인할 수 있다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">square</span><span class="token punctuation">(</span>n<span class="token punctuation">:</span> number<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> n <span class="token operator">*</span> n<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token function">square</span><span class="token punctuation">(</span><span class="token string">"oops"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n       <span class="token operator">^</span> Error\n\n<span class="token operator">></span> Error<span class="token punctuation">:</span> string<span class="token punctuation">.</span>\n<span class="token operator">></span> This type is incompatible <span class="token keyword">with</span> the expected param type <span class="token keyword">of</span> number<span class="token punctuation">.</span></code></pre>\n      </div>\n<p>이는 중요한 사실을 상기시킨다: Flow가 타입을 추론한다고 해서 타입 주석을 달지 말아야 한다는 의미는 아니라는 것이다.</p>\n<h2 id="결론"><a href="#%EA%B2%B0%EB%A1%A0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>결론</h2>\n<p>TypeScript와 Flow는 둘 다 훌륭한 타입 체크 프로세스다. 특히 파일별로 적용할 수 있다는 건 좋은 장점이다.</p>\n<p>하지만 Flow를 사용한다면 높은 타입 적용 범위를 훨씬 빠르게 얻을 수 있고 결과적으로 당신은 편안한 잠을 잘 수 있게 된다.</p>\n<p>Flow를 사용하면 단지 에러를 제거하기 위해서가 아니라 에러를 더 멋지고 정밀하게 표현하기 위해서 타입을 추가할 수 있다.</p>',timeToRead:5,fields:{tagSlugs:["/tags/flow/","/tags/type-script/","/tags/javascript/","/tags/코딩/"]},frontmatter:{title:"[번역] Flow와 TypeScript의 채택 - 두 프로세스의 비교",tags:["Flow","TypeScript","Javascript","코딩"],date:"2017-06-11",mainImageAlt:null,description:"Flow와 TypeScript는 둘 다 Javascript 타입 체커지만 AST 지향, Graph 지향이라는 차이점이 있고 타입 적용 범위에도 차이가 난다.",mainImage:null}}},pathContext:{slug:"/posts/2017-06-11-adopting-flow-and-typescript/"}}}});
//# sourceMappingURL=path---posts-2017-06-11-adopting-flow-and-typescript-7e34bbb099018228f402.js.map
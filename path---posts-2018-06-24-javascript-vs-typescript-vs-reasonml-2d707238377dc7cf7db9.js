webpackJsonp([78781729270176],{792:function(a,e){a.exports={data:{site:{siteMetadata:{title:"rhostem.github.io",url:"https://rhostem.github.io",author:"rhostem",description:"프론트엔드 웹 개발 기술 블로그"}},markdownRemark:{html:'<p>이 글은 <a href="http://dr-axel.de/" target="_blank" rel="nofollow">Dr. Axel Rauschmayer</a>의 <a href="http://2ality.com/2018/03/javascript-typescript-reasonml.html" target="_blank" rel="nofollow">JavaScript vs. TypeScript vs. ReasonML</a>을 번역한 글입니다.</p>\n<hr>\n<p>이 포스트에서는 세 가지 프로그래밍 언어/방언인 자바스크립트(JavaScript), 타입스크립트(TypeScript)와 ReasonML의 장점과 단점을 평가한다. 이 글은 최근에 타입스크립트와 ReasonML로 진행된 작은 규모의 실제(real-world) 프로젝트 참여 경험과 다년간의 자바스크립트 사용 경험을 기반으로 서술했다.</p>\n<h2 id="1-정적-타입의-장단점"><a href="#1-%EC%A0%95%EC%A0%81-%ED%83%80%EC%9E%85%EC%9D%98-%EC%9E%A5%EB%8B%A8%EC%A0%90" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1. 정적 타입의 장단점</h2>\n<p>장점:</p>\n<ul>\n<li>\n<p>문서화: 거의 모든 코드에서 파라미터의 타입이 문서로 만들어 져 있다면 무척 큰 도움이 된다는 사실을 알았다. 그러면 나는 caller와 callee로서 어떤 값을 기대해야 하는지 알 수 있다.</p>\n<ul>\n<li>하지만 이 장점은 거기서 더 나아간다. 오래된 자바스크립트 코드를 열어 타입을 추가하려고 하면, 그 코드가 어떻게 동작했는지 기억이 잘 나지 않곤 한다. 하지만 타입이 있으면 어떻게 동작하는지 훨씬 쉽게 파악할 수 있다. 예를 들어 “이 함수는 어떻게 사용되는가”에 대한 정보를 얻기 위해서는 보통 호출 지점으로 가 본다. 만약 함수 파라미터에 타입 주석(annotation)이 추가되어 있다면 그 정보를 더 쉽게 얻을 수 있을 것이다.</li>\n<li>나는 “더 나은 문서화” 역할을 하는 에디터의 자동완성 기능도 고려할 것이다. 자동완성은 API를 사용할 때 문서를 찾아볼 일이 줄어들게 한다(좋은 주석 또한 도움이 된다). 예를 들어, 내가 DOM 프로그래밍을 많이 하기 시작했던 2006년에는 <a href="https://ko.wikipedia.org/wiki/%EA%B5%AC%EA%B8%80_%EC%9B%B9_%ED%88%B4%ED%82%B7" target="_blank" rel="nofollow">GWT</a>(자바 기반이며, 당시에는 여러 가지 이유로 매력적인 솔루션이었다)를 사용했다. Eclipse의 자동완성 덕분에 DOM API를 찾아보면서 공부하는 일이 즐거웠다.</li>\n</ul>\n</li>\n<li>함수 파라미터의 타입을 확인할 수 있는 빠른 방법이다. 나는 여러 함수에 프로그래밍적인 방법으로 타입을 붙이려고 할 때, 그리고 그 코드들이 불필요한 상용구처럼 느껴졌을 때, 자바스크립트에 정적 타입을 사용할 때가 되었음을 안다.</li>\n<li>리팩토링에 도움이 된다(열거형에 케이스를 붙이는 것 등).</li>\n</ul>\n<p>단점:</p>\n<ul>\n<li>배우는 데 시간이 걸린다.</li>\n<li>추가적인 단계의 복잡도를 추가한다. 정적 타입의 사용은 기본적으로 다른 계층에서 코드를 작성하는 일이다.</li>\n<li>표현의 자유를 제한한다. 제네릭(generic), 공변성과 반공변성(covariance and contravariance, 예: 문자열 타입의 배열은 객체 타입 배열의 부분집합이 아니다), 기타 등등에 들어가면 복잡해진다.</li>\n<li>에러를 막지 못한다. 적어도 이는 <a href="https://danluu.com/empirical-pl/" target="_blank" rel="nofollow">최근의 연구</a>가 말해준다. 내 경험으로는, 몇 가지 종류의 에러는 잡을 수 있다(예를 들면 null 체크 누락). 하지만 그 에러는 타입 선언 대신 단위 테스트를 작성했다면 더 빨리 발견했을 것이다. 더 심각한 문제를 막기 위해서는 테스트가 필요하다.</li>\n<li>얼마간의 상호 작용을 잃게 되며 컴파일에 시간이 걸린다. 하지만 자바스크립트 생태계(ecosystem)에서 컴파일은 피할 수 없기도 하다. (<em>역주: 2018년 현재 ES6+를 사용하기 위해서는 Babel 같은 도구로 자바스크립트 소스를 ES5 형태로 변환하는 과정이 필수적이다</em>)</li>\n</ul>\n<h2 id="2-reasonml"><a href="#2-reasonml" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2. ReasonML</h2>\n<ul>\n<li>만약 정적 타입이 제공할 수 있는 최선을 경험하고 싶다면, ReasonML(또는 ReasonML의 기반이 되는 OCaml)을 사용해라. 예를 들면, 언어의 거의 모든 기능이 설계되어 있어서 최소한의 타입 주석만 작성하면 된다(<em>타입 추론</em>에 의해 가능하다).</li>\n<li>이미 모든 것이 준비되어 있다는 점이 놀랍다(특히 에디터 지원). 하지만 몇가지 중요한 기능-더 나은 Promise, 반복과 비동기 반복 지원; 표준 라이브러리 Belt; 향상된 자바스크립트 호환(이미 꽤 괜찮은 수준이지만 내가 기대했던 것보다는 더 복잡하다); 더 나은 유니코드 문자열 지원-은 아직 작업 중이다.</li>\n<li>ReasonML은 빌드 시간이 무척 짧다. 타입스크립트보다 상당히 빠르며 이는 사용성 면에서 확실한 장점이다.</li>\n<li>자바스크립트 라이브러리 바인딩(binding)이 제공되고 있으나 여전히 제한적이다. <a href="https://redex.github.io/" target="_blank" rel="nofollow">Reason Package Index</a>를 살펴보길 바란다.</li>\n<li>네이티브로 갈 기회가 있다. 예를 들자면, Jared Forsyth는 <a href="https://jaredforsyth.com/posts/making-a-cross-platform-mobile-game-in-reason-ocaml/" target="_blank" rel="nofollow">the game Gravitron</a>을 ReasonML로 구현했으며 Android, iOS, 웹, 그리고 macOS에서 네이티브로 실행할 수 있다.</li>\n</ul>\n<p>ReasonML에 대한 더 많은 정보는 내가 쓴 책 <a href="http://reasonmlhub.com/exploring-reasonml/" target="_blank" rel="nofollow">Exploring ReasonML and functional programming</a>(온라인에서 무료로 읽을 수 있다)을 참고하길 바란다.</p>\n<h2 id="3-타입스크립트"><a href="#3-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>3. 타입스크립트</h2>\n<ul>\n<li>타입스크립트의 타입 시스템은 내가 기대했던 것보다는 더 가볍다. 자바(Java)보다는 함수형 언어(FP)를 사용한다는 느낌이 더 난다. 예를 들면 타입은 이름 기반(nominal)이 아니라 구조 기반으로 작동한다. 예를 들어 인터페이스(interface)를 선언해서 사용할 때, 이름만 다르고 구조가 같은 인터페이스를 자바에서는 다른 타입으로 보지만 타입스크립트에서는 동일한 타입으로 본다.</li>\n<li>타입 시스템이 무척 강력하고 직관적이다. union 타입, intersection 타입, discriminated union type을 사용해서 자바스크립트의 많은 관용적인 표현에 타입을 정의할 수 있다.</li>\n<li>에디터 지원(Visual Studio Code, WebStorm, etc)이 무척 뛰어나다.</li>\n<li>많은 npm 패키지가 자체적으로 타입 선언을 포함하고 있거나, 타입 선언 파일을 매우 쉬운 방법으로 설치할 수 있다. 자세한 정보는 <a href="http://definitelytyped.org/" target="_blank" rel="nofollow">DefinitelyTyped</a>를 참고하길 바란다.</li>\n<li>당연히, 자바스크립트와의 호환성이 훌륭하다. 하지만 하나의 예외가 있다. <a href="http://2ality.com/2015/01/es6-destructuring.html#simulating-named-parameters" target="_blank" rel="nofollow">객체 리터럴을 사용해서 named parameter를 흉내냈을 때</a> 파라미터에 타입을 붙이는 일이 필요없이 복잡하다. (<a href="https://github.com/Microsoft/TypeScript/issues/7576#issuecomment-370196012" target="_blank" rel="nofollow">추가 정보</a>).</li>\n</ul>\n<p>결론: 타입스크립트는 자바스크립트와 ReasonML의 중간 지점을 잘 차지하고 있다. 나는 대규모 프로젝트에서 얼마나 효과가 있었는지 이야기를 들어보고 싶다.</p>\n<h2 id="4-자바스크립트"><a href="#4-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>4. 자바스크립트</h2>\n<ul>\n<li>개발 생태계 전부가 끊임없는 혁신과 실험의 원천이다.</li>\n<li>npm을 통해 폭넓은 라이브러리 선택권을 가진다</li>\n<li>시스템을 가능한 유동적인 상태로 두면서 원하는 방향으로 빠르게 전환할 수 있다.</li>\n<li>컴파일 단계 없이 소스를 작성하고, 실험할 수 있다.</li>\n</ul>\n<p>자바스크립트에 대한 더 많은 특징에 대해서는 온라인에서 무료로 읽을 수 있는 나의 책 <a href="http://exploringjs.com/" target="_blank" rel="nofollow">Exploring JS</a> 시리즈를 참고하길 바란다.</p>\n<h2 id="5-결론-자바스크립트-생태계는-그-어느-때보다-강력하다"><a href="#5-%EA%B2%B0%EB%A1%A0-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%83%9D%ED%83%9C%EA%B3%84%EB%8A%94-%EA%B7%B8-%EC%96%B4%EB%8A%90-%EB%95%8C%EB%B3%B4%EB%8B%A4-%EA%B0%95%EB%A0%A5%ED%95%98%EB%8B%A4" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>5. 결론: 자바스크립트 생태계는 그 어느 때보다 강력하다</h2>\n<p>정적 타입을 사용할지 말지는 감정적인 화제다. 나의 조언은:</p>\n<ul>\n<li>당신을 더 행복하고 생산적으로 만들어주는 것을 선택해라.</li>\n<li>당신이 사용하고 있는 것의 강점과 약점을 인지하고 있어라.</li>\n</ul>\n<p>개인적으로는 프로젝트가 일정 규모 이상으로 커지면(또는 결국에는 그렇게 될 것이라 예상되는 프로젝트에) 정적 타입을 사용한다.</p>\n<p>현재 자바스크립트 생태계의 힘과 다양성은 놀라울 정도다. 당신은 필요에 따라(또, 업무가 변화하는 정도에 따라) 자바스크립트, 타입스크립트, ReasonML을 서로 바꿀 수 있다. 그들은 몇몇 도구, 많은 수의 라이브러리, 많은 문법을 공유한다. 예를 들어 ReasonML을 사용하면서 템플릿 솔루션이 빨리 필요할 때 나는 npm을 통해 자바스크립트 기반의 <a href="http://ejs.co/" target="_blank" rel="nofollow">EJS 라이브러리</a>를 사용했다.</p>\n<p>마지막으로, 정적 타입에는 많은 다른 좋은 선택지(<a href="https://flow.org/" target="_blank" rel="nofollow">정적 타입 검사기 Flow</a>, <a href="http://elm-lang.org/" target="_blank" rel="nofollow">함수형 프로그래밍 언어 elm</a> 등)가 존재한다는 사실을 알고 있길 바란다.</p>',timeToRead:5,fields:{tagSlugs:["/tag/javascript","/tag/typescript","/tag/reasonml","/tag/번역"]},frontmatter:{title:"[번역] JavaScript vs. TypeScript vs. ReasonML",subTitle:null,tags:["JavaScript","TypeScript","ReasonML","번역"],date:"2018-06-24",mainImageAlt:"",description:"",mainImage:null}}},pathContext:{slug:"/posts/2018-06-24-javascript-vs-typescript-vs-reasonml/"}}}});
//# sourceMappingURL=path---posts-2018-06-24-javascript-vs-typescript-vs-reasonml-2d707238377dc7cf7db9.js.map
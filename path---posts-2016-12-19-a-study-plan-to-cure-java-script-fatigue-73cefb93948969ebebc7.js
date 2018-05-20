webpackJsonp([0xa02f53502f53],{864:function(a,e){a.exports={data:{site:{siteMetadata:{title:"rhostem.github.io",url:"https://rhostem.github.io",author:"rhostem"}},markdownRemark:{html:'<p>이 글은 <a href="https://medium.freecodecamp.com/a-study-plan-to-cure-javascript-fatigue-8ad3a54f2eb1#.boi9p3ig6">“A Study Plan To Cure JavaScript Fatigue”</a>를 번역한 글입니다.</p>\n<hr>\n<p>많은 이들처럼 나도 최근 Jose Aguinaga의 글 <a href="https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f#.5wjpn7svo">“How it feels to learn JavaScript in 2016”</a>을 읽었다.</p>\n<p>그의 글은 정곡을 찔렀던 것이 분명한 모양이다.(나는 그 포스트가 Hacker News에 한번도 아니고 두번이나 탑 스팟에 오르는 것을 보았다.) 그건 <a href="https://www.reddit.com/r/javascript/">/r/javascript</a>에서도 가장 인기있는 글이었고 Medium에서는 1만개의 ‘like’를 기록했다.</p>\n<p>하지만 이건 그리 놀라운 일이 아니다. 난 많은 사람들에게 자바스크립트 생태계(ecosystem)가 혼란스럽게 느껴질 것이라고 이미 생각하고 있었다. 사실 내가 <a href="http://stateofjs.com/">State Of JavaScript</a> 설문조사를 진행했던 가장 큰 이유는 어떤 라이브러리가 실제로 인기가 있는지를 찾아내고, 최종적으로는 사람들의 의견을 정리하기 위함이었다.</p>\n<p>하지만 오늘, 나는 한 단계 더 들어가고 싶다. 나는 현 상황을 불평하는 대신 자바스크립트 생태계를 정복하기 위한 확실한, 단계적인 학습 계획을 제공하고자 한다.</p>\n<h2 id="이-글이-필요한-사람"><a href="#%EC%9D%B4-%EA%B8%80%EC%9D%B4-%ED%95%84%EC%9A%94%ED%95%9C-%EC%82%AC%EB%9E%8C" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>이 글이 필요한 사람</h2>\n<p>당신이 아래의 조건을 만족한다면 이 학습 계획이 필요할 것이다.</p>\n<ul>\n<li>당신은 이미 변수, 함수와 같은 기본적인 프로그래밍 개념과 친숙하다</li>\n<li>당신은 PHP, 파이선같은 언어로 백엔드 작업을 충분히 해본 경험이 있고, 프론트엔드에서는 jQuery같은 라이브러리로 간단한 작업 정도는 해본 경험이 있다.</li>\n<li>당신은 프론트엔트 개발을 더 깊이 공부하고 싶지만 시작하기도 전에 프레임워크와 라이브러리의 홍수에 그만 익사하고 있는 중이다.</li>\n</ul>\n<h2 id="이-글이-다루게-될-내용"><a href="#%EC%9D%B4-%EA%B8%80%EC%9D%B4-%EB%8B%A4%EB%A3%A8%EA%B2%8C-%EB%90%A0-%EB%82%B4%EC%9A%A9" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>이 글이 다루게 될 내용</h2>\n<ul>\n<li>모던 자바스크립트 웹앱은 어떤 형태인가</li>\n<li>왜 단순히 jQuery를 사용하면 안되는가</li>\n<li>왜 React가 안전한 선택인가</li>\n<li>왜 먼저 자바스크립트를 제대로 공부할 필요가 없을수도 있는가</li>\n<li>어떻게 ES6 문법을 공부하는가</li>\n<li>왜, 그리고 어떻게 Redux를 배워야 하는가</li>\n<li>GraphQL이 무엇이고 왜 그것이 중요한가</li>\n<li>그 다음 행선지는 어디인가</li>\n</ul>\n<h2 id="이-글에서-인용한-자료들에-대해서"><a href="#%EC%9D%B4-%EA%B8%80%EC%97%90%EC%84%9C-%EC%9D%B8%EC%9A%A9%ED%95%9C-%EC%9E%90%EB%A3%8C%EB%93%A4%EC%97%90-%EB%8C%80%ED%95%B4%EC%84%9C" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>이 글에서 인용한 자료들에 대해서</h2>\n<p>이 포스트가 포함하고 있는 링크 중에는 <a href="http://wesbos.com/">Wes Bos</a>의 학습 강의가 몇 있다. 저 강의들이 정말로 좋다고 생각해서 추천한 것이지 나랑 어떤 특별한 관계가 있어서 그런 것은 아니다. 만약 다른 자료들을 찾아보고 싶다면 Marik Erikson이 <a href="https://github.com/markerikson/react-redux-links">React, ES6, Redux 관련 자료 링크</a>들을 멋지게 정리해 두었으니 참조하면 된다.</p>\n<h2 id="javascript-vs-javascript"><a href="#javascript-vs-javascript" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Javascript VS Javascript</h2>\n<p>시작하기 전에, 우리가 생각하고 있는 자바스크립트가 같은 것인지 확실히 해야 한다. 만약 당신이 “자바스크립트 공부” 또는 “자바스크립트 학습 계획”을 검색한다면 당신은 자바스크립트 <em>언어</em>에 대해서 가르쳐주는 엄청난 양의 검색 결과와 마주하게 될 것이다.</p>\n<p>하지만 사실 그건 <em>쉬운</em> 영역이다. 당신이 언어에 깊이 파고들면서 공부할수록 대부분의 웹앱들은 상대적으로 간단한 코드를 사용하고 있다는 사실을 알게 될 것이다. 다른 말로 하자면 당신이 웹앱을 개발하기 위해 필요한 코드의 80%는 대체로 일반적인 자바스크립트 언어 서적의 초반 몇 챕터가 다루고 있는 내용들이다.</p>\n<p>정말로 어려운 문제는 수없이 많은 프레임워크와 라이브러리가 서로 경쟁하고 있는 이 자바스크립트 <em>생태계</em>를 정복하는 일이다. 좋은 소식은, 이 학습 플랜이 초점을 맞추고 있는 문제는 바로 그 생태계라는 점이다.</p>\n<h2 id="자바스크립트-앱의-구성-요소"><a href="#%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%95%B1%EC%9D%98-%EA%B5%AC%EC%84%B1-%EC%9A%94%EC%86%8C" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>자바스크립트 앱의 구성 요소</h2>\n<p>왜 모던 자바스크립트 앱에 그렇게 복잡해 보이는지 이해하기 위해서는 먼저 그것들이 어떻게 동작하는지를 이해해야 한다.</p>\n<p>먼저 약 2008년경의 “전통적인” 웹앱의 형태를 보자.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1-c1905ae43f335b6c1afc412623389b21-b4c52.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1024px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 18.06640625%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsTAAALEwEAmpwYAAABKUlEQVQY0z1Ov07CYBz8hARBVgeNDjq5GDdHX8DBzQeQycnFV/AJHIwuOhoTfQQnCKaRUFBAKm2lQCn987Vpv/4H+7NfTbjkcsnl7nIIpfjp6zmqYx6f9Joy/8VO61ghewY2SqZKDtrMuNl6k/qyaB5rkbaa4MWmXrNfxq/GJGDDC9p13r1c0IpQhkFnls8GBXwuD36hUR0CsbwzCzs3tkEqn4wKHOuAMjQvLdO+9S2/oldtEUYAXjO8pl2b8fLLQb6rZg+FnnqUvnvi2sqd9G1u/b83drgP5b7fnj4KPe2QejE3L7mN4ArXneeAjU6p5zb8leWgPvEyVUduYRFAOSRQHA2s7ZT7KTciF4qhk5RnEinQXO2BRwmXrIMIu3FnsUY9EADF3Tn6A0HExR9ZU7LeAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px #ffffff;"\n        alt="전통적인 웹앱"\n        title=""\n        src="/static/1-c1905ae43f335b6c1afc412623389b21-b4c52.png"\n        srcset="/static/1-c1905ae43f335b6c1afc412623389b21-a52e7.png 265w,\n/static/1-c1905ae43f335b6c1afc412623389b21-a00b8.png 530w,\n/static/1-c1905ae43f335b6c1afc412623389b21-b4c52.png 1024w"\n        sizes="(max-width: 1024px) 100vw, 1024px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<ol>\n<li>데이터베이스가 백엔드로 데이터를 보낸다.(당신의 PHP 또는 rails 앱)</li>\n<li>백엔드가 데이터를 읽어서 HTML을 내보낸다.</li>\n<li>HTML이 브라우저로 전달되고, 브라우저는 그것을 DOM으로 표시한다.(기본적으로는 웹 페이지)</li>\n</ol>\n<p>이제 많은 앱들이 탭 메뉴나 모달 윈도우같은 상호작용을 구현하기 위해 클라이언트에서 자바스크립트 코드를 첨가한다. 하지만 근본적으로 브라우저는 여전히 HTML을 전달받은 후 시작한다.</p>\n<p>이제 이것을 SPA(Single Page App)이라고도 알려져 있는 2016년의 “모던” 웹 앱과 비교해 보자.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/2-ef035e48404bb62d7c84162c8c3314cb-b4c52.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1024px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 18.06640625%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsTAAALEwEAmpwYAAABSElEQVQY0x2OO0vDUBzFIxT6iAjVDyC6Vp0cXAQXR1cHZweXTuIncFJwcdBJcHIStItOPrCgrbTFJCa26UOtadOkJrnNze3NQ/M39QdnOZxzOIypOazM927Eckd5r/U3ASBmWzjdELXj5/tWtylpe9hyVkyCll3B2x4UieKU6LWr08lGqKQo7652bo03LY9KPh9kmGhggiu0A70F8Cn39/EA72KEs2JZeVCqANWXbm5g2OeGia6oQE/hFUC9s3TPoRuRd0Qkkg0FAFoB8Hl/iTFUJ1Hj1UOp0rloSvoaE0GQF69x6k6knMyrWy6hC8OQZMwnvK7n0aXxaB9APUyNsgEfLFoF5wwVnZNf8WeGkSq9MfvbH4+eJpQmSn/Vrbm2bM6aPcoGQ0iaKv0vjoAPiAMGFvqQdDl/2uOCecp5U4AgAV1g7dIw9gdJpe5A8/5mBwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px #ffffff;"\n        alt="2016 모던 웹앱"\n        title=""\n        src="/static/2-ef035e48404bb62d7c84162c8c3314cb-b4c52.png"\n        srcset="/static/2-ef035e48404bb62d7c84162c8c3314cb-a52e7.png 265w,\n/static/2-ef035e48404bb62d7c84162c8c3314cb-a00b8.png 530w,\n/static/2-ef035e48404bb62d7c84162c8c3314cb-b4c52.png 1024w"\n        sizes="(max-width: 1024px) 100vw, 1024px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>차이점을 알겠는가? 서버은 이제 HTML을 보내는대신 <em>데이터</em>를 보낸다. 그리고 “데이터에서 HTML로의 전환” 단계는 서버 대신 클라이언트에서 일어난다.(그래서 당신은 클라이언트에게 데이터에서 HTML로의 전환이 어떻게 일어나는지를 설명해주는 코드를 전달해줘야만 한다)</p>\n<p>이는 많은 사실을 내포하고 있다. 먼저 장점으로는:</p>\n<ul>\n<li>주어진 컨텐츠에 대해 HTML 전체를 전달하는 것보다는 데이터만을 전달하는 것이 더 빠르다</li>\n<li>클라이언트는 브라우저를 새로고침하지 않고도 컨텐츠를 빠르게 변경할 수 있다(그래서 “Single Page App”).</li>\n</ul>\n<p>단점으로는:</p>\n<ul>\n<li>“데이터를 HTML로 변경”하는 코드의 덩치가 꽤 커질 수 있기 때문에 초기 로딩이 더 길어진다.</li>\n<li>이제 당신은 클라이언트에서도 데이터를 저장하고 관리하는 공간이 필요하다. 데이터를 캐싱하거나 검사할 경우가 필요하기 때문이다.</li>\n</ul>\n<p>그리고 최악은:</p>\n<ul>\n<li>축하합니다! 이제 당신은 서버 사이드 스택만큼이나 복잡한 클라이언트 사이드 스택을 상대해야만 합니다.</li>\n</ul>\n<h2 id="클라이언트-서버-스펙트럼"><a href="#%ED%81%B4%EB%9D%BC%EC%9D%B4%EC%96%B8%ED%8A%B8-%EC%84%9C%EB%B2%84-%EC%8A%A4%ED%8E%99%ED%8A%B8%EB%9F%BC" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>클라이언트-서버 스펙트럼</h2>\n<p>단점들이 많다면 왜 굳이 이런 어려움을 겪으면서까지 개발을 해야 할까? 그냥 전통적인 PHP 앱을 그냥 계속 쓰면 안될까?</p>\n<p>좋다, 만약 당신이 계산기를 만든다고 생각해보자. 사용자에게 2+2의 답이 무엇인지 알려주기 위해서는 브라우저만으로도 그 작업을 충분히 할 능력이 있는데도 굳이 서버까지 갈 필요는 없다.</p>\n<p>반면에 당신이 블로그와 같은 순수하게 정적인 사이트를 개발한다면 서버에서 HTML을 생성해서 전달하는 것이 확실히 좋으니 그렇게 하면 된다.</p>\n<p>진실은 거의 대부분의 웹앱이 앞선 두 경우, 계산기와 블로그의 중간쯤 어딘가에 위치한다는 점이다. 문제는 앱이 클라이언트-서버 스펙트럼의 어느 지점에 위치하는지를 파악하는 것이다.</p>\n<p>하지만 핵심은 <em>그 스펙트럼은 연속적이지 않다</em>는 점이다. 순수한 서버 사이드 앱에서 순수한 클라이언트 사이드 앱으로 조금씩 이동해 나갈 수는 없다. 어떤 지점(the Divide)이 되면 작업을 멈춰야 하고 모든 것을 서버와 클라이언트로 분리하는 리팩토링 과정을 강요받게 된다. 그렇게 하지 않으면 유지보수가 불가능한 스파게티 코드만이 남을 것이다.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/3-5e4b266a1ec89a81bb63191519ccde29-b4c52.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1024px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 18.06640625%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA90lEQVQY02Nwle2VV2WoFGTAA/4z/Gb6FP9FAJ8aY/YmCUfxLnGGNNdFGvM6jpgc3HRL+uWTz6LPHnwU/fLhl9S3L79Fn9z5IHb/4Vuhl6c/6b458jnw4cV3Io/uvhd7dv+jxOtnX6Qe3Hwn+urpF9E9a6/LTqrca14StkqNIdp8pnBH3jbR////s4Jwc8YmgXz/ZSo53ksVNy64wPn93R+WJ+/ec7/4/4n//IknLEA1LLWJ68WqYtbKPL7zgQ2kp7dkJ19T+kaRNNcFggxusr1ChswNPDCnazFUs9sKt0vYi3aK4fKeJkM1hxFbIy+qqD2TNkMNMwCuZm3VjYKOjAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px #ffffff;"\n        alt="the divide"\n        title=""\n        src="/static/3-5e4b266a1ec89a81bb63191519ccde29-b4c52.png"\n        srcset="/static/3-5e4b266a1ec89a81bb63191519ccde29-a52e7.png 265w,\n/static/3-5e4b266a1ec89a81bb63191519ccde29-a00b8.png 530w,\n/static/3-5e4b266a1ec89a81bb63191519ccde29-b4c52.png 1024w"\n        sizes="(max-width: 1024px) 100vw, 1024px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>이것이 당신이 ‘그냥 jQuery만 쓰자’라고 생각하면 안되는 이유다. jQuery는 접착테이프 같은 존재라고 생각하면 된다. 집안에 있는 조그만 것들을 고치기에는 정말 편리하다. 하지만 자꾸 쓰게 되면 점점 엉망이 되어가는 집을 발견하게 될 것이다.</p>\n<p>반면에 모던 자바스크립트 프레임워크는 부품을 만들기 위한 3D 프린팅 기법과 유사하다. 더 많은 시간이 걸리지만 결과물은 훨씬 깔끔하고 튼튼하다. 그리고 대부분의 웹앱들은 빠르든 늦든 스펙트럼의 오른쪽으로 향할 것이다. 모던 자바스크립트를 공부하는 것은 많은 노력이 필요하지만 그래도 더 좋은 방향임은 분명하다.</p>\n<h2 id="0주차-자바스크립트-기본"><a href="#0%EC%A3%BC%EC%B0%A8-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B8%B0%EB%B3%B8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>0주차: 자바스크립트 기본</h2>\n<p>당신이 백엔드만 했던 개발자가 아니라면 아마 자바스크립트를 조금은 알고 있을 것이다. 만약 모른다 하더라도 당신이 PHP나 자바 개발자라면 자바스크립트의 C언어와 비슷한 문법은 제법 친숙하게 느껴질 것이다.</p>\n<p>자바스크립트에 당신에게 완전히 미스테리한 대상이라 하더라도 낙담할 필요는 없다. 실력을 빠르게 높여줄 수 있는 무료 자료들이 아주 많이 있으니까 말이다. 예를 들면 <a href="https://www.codecademy.com/learn/javascript">Codecademy’s JavaScript lessons</a>은 공부를 시작하기 좋은 곳이다.</p>\n<h2 id="1주차-react-시작하기"><a href="#1%EC%A3%BC%EC%B0%A8-react-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1주차: React 시작하기</h2>\n<p>이제 자바스크립트 기본 문법도 알았고 자바스크립트 앱이 왜 그렇게 복잡해 보일 수 있는지도 알았으니 이제 본격적으로 뭘 하면 될까? 어디에서부터 시작하면 될까?</p>\n<p>나는 그 답이 <a href="https://facebook.github.io/react/">리액트(React)</a>라고 믿는다.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/4-f1ebe7aca5ca549b078f21fcc634d7f9-b4c52.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1024px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 66.69921875%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACOUlEQVQ4y21RaW8SURSd/2FiBSlSmGEb1mBtbGoNGhNjBFKEJpYmjZr0b/gT/NgPJv4iQtj3tUBYww7Hdx++BttOcubeufecc+97I2l1Oux5X+Gpy4cXRiNkWYbFYoGiKLBarfxbVVW43G7Y7XYYDAZotVpoNBoYGZ84NpuN86kukYDDZOLRxOIuZFmB6cAAo14Pk/GAC4XmIVeGRITHICtbI/XED8+nMJzvPkI9fstNheFjuu2G/wzEdIpOl4sf03N4BN+pHz7/B3iPT3jN7fXyaxHcu1PShmazGbsgIkWPw4EjjxuHTgfcNiteqnaWq7zmcznveJZ7eknHfsou9Pv7eLL3DNfvT/Hn+go33y9w9eY1fl1GcfPtAr9/xPAz/Bl6xn1+T0uQgsEgQqEQB+WEQCCA6NkZLs+jHOfhMGLRKEMEsUgEXyNfHmgEpM1mg8Vigfl8jvV6DfGsWX3O6lNWnzFMplOsWJ/qi9WK80lHD3kISJPJBLVaDcViEe12G6PRiGPBBK1WC8VCAeVyGQUW27e3mDLjbreLTCazrTGNWIh6Er2omUqlkEgkEI/HeU6m9XoduVwO+XyeD6xWq+j3+xzZbJbXKdJAGj6bzbaGYgMyaDQaaDaboM0pT6fTXCQwHo/R6/WQYvUcM0wmk5xDW9OmErlWKhU+jYwIYlqn0+E9uhJCqVTCcDjEYDBAnp2qyjR16rFF/jOkqXREIgsBbUiE5XLJ425OvRHjTIcDzNgJ6f7Ih/AXVFCse3s5HLwAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px #ffffff;"\n        alt="react homepage screenshot"\n        title=""\n        src="/static/4-f1ebe7aca5ca549b078f21fcc634d7f9-b4c52.png"\n        srcset="/static/4-f1ebe7aca5ca549b078f21fcc634d7f9-a52e7.png 265w,\n/static/4-f1ebe7aca5ca549b078f21fcc634d7f9-a00b8.png 530w,\n/static/4-f1ebe7aca5ca549b078f21fcc634d7f9-b4c52.png 1024w"\n        sizes="(max-width: 1024px) 100vw, 1024px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>리액트는 페이스북이 만든 오프소스 UI 라이브러리다. UI 라이브러리라는 것은 즉 ‘데이터에서 HTML로 전환’하는 단계(뷰 레이어)에 사용된다는 말이다.</p>\n<p>내 주관적인 생각으로 리액트가 <em>가장 좋은</em> 라이브러리라서 추천하는 것은 아니니 오해하지 않았으면 좋겠다. 리액트를 추천하는 건 그게 <em>꽤 좋기</em> 때문이다.</p>\n<ul>\n<li>리액트는 가장 인기있는 라이브러리는 아니지만 꽤 인기가 좋다.</li>\n<li>리액트는 가장 가벼운 라이브러리는 아니지만 꽤 가볍다.</li>\n<li>리액트는 가장 배우기 쉬운 라이브러리는 아니지만 학습비용이 꽤 낮다.</li>\n<li>리액트는 가장 멋진 라이브러리는 아니지만, 역시 꽤 멋진 라이브러리다.</li>\n</ul>\n<p>바꿔 말하면 리액트가 모든 면에서 최고는 아니지만 난 리액트가 <em>가장 안전한 선택</em>이라고 믿는다. 나를 믿어 달라. “이제 막 시작하는 시점”에 기술적인 선택으로 위험을 부담하는 것은 적절하지 않다.</p>\n<p>리액트는 또 어떤 프레임워크나 라이브러리를 사용하든 유용할 수 있는 컴포넌트, 어플리케이션 상태(state), stateless 함수같은 개념들을 소개해줄 것이다.</p>\n<p>또 리액트는 다른 패키지와 라이브러리와 잘 작동하는 거대한 생태계를 갖추고 있다. 그리고 리액트의 대단한 인기와 많은 사용자는 당신이 스택오버플로우와 같은 사이트에서 많은 도움을 찾을 수 있다는 것을 의미한다.</p>\n<p>나는 개인적으로 Wes Bos의 <a href="https://reactforbeginners.com/friend/STATEOFJS">React for Beginners</a> 코스를 추천한다. 최신의 모범 사례를 철저히 반영하고 있는 저 코스를 통해 나는 리액트를 공부할 수 있었다.</p>\n<h2 id="우선-자바스크립트를-제대로-공부해야-하는가"><a href="#%EC%9A%B0%EC%84%A0-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%A5%BC-%EC%A0%9C%EB%8C%80%EB%A1%9C-%EA%B3%B5%EB%B6%80%ED%95%B4%EC%95%BC-%ED%95%98%EB%8A%94%EA%B0%80" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>우선 자바스크립트를 제대로 공부해야 하는가?</h2>\n<p>당신이 꼼꼼한 학습자라면 아마도 다른 것들을 배우기 전에 자바스크립트의 기초를 우선 다지고 싶어할 것이다.</p>\n<p>하지만 어떤 이들에게는 그런 방식이 수영을 인체 해부학과 유체역학을 통해 배우는 것 같다는 느낌을 준다. 물론 그것들이 수영에 아주 큰 역할을 하는 건 사실이지만 그냥 풀장에 뛰어드는 편이 훨씬 더 재미있는 법이다.</p>\n<p>여기에 정답은 없으며 모두 당신의 학습 스타일에 달려 있다. 하지만 대부분의 리액트 튜토리얼들은 자바스크립트의 아주 적은 부분만을 사용하는 것이 사실이니 지금 당장 필요한 것만 공부하고 나머지는 뒤로 미뤄두는 것이 좋을 것이다.</p>\n<p>이는 거대한 자바스크립트 생태계에도 적용될 수 있다. 당장은 웹팩이나 바벨이 어떻게 동작하는지 이해하려고 너무 크게 신경쓸 필요는 없다. 또 리액트는 최근 설정없이 앱을 생성할 수 있는 간단한 <a href="https://github.com/facebookincubator/create-react-app">커맨드라인 유틸리티</a>를 선보였다.</p>\n<h2 id="2주차-첫번째-리액트-프로젝트"><a href="#2%EC%A3%BC%EC%B0%A8-%EC%B2%AB%EB%B2%88%EC%A7%B8-%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2주차: 첫번째 리액트 프로젝트</h2>\n<p>당신이 막 리액트 코스를 마쳤다고 가정하자. 내 경험으로 봐선 아마 아래와 같은 상태일 것이다.</p>\n<ul>\n<li>이미 공부한 것의 절반 이상을 잊어먹었다.</li>\n<li>기억하고 있는 절반을 실전에서 사용하고 싶어 기다릴 수가 없다.</li>\n</ul>\n<p>나는 라이브러리나 프레임워크를 배우는 가장 좋은 방법은 그냥 사용해 보는 것이라 믿는다. 그리고 개인 프로젝트는 새로운 기술을 시도해보기에 좋은 선택이다. 개인 프로젝트는 싱글 페이지 웹앱부터 복잡도가 높은 앱까지 어떤 것도 될 수 있지만 당신의 개인 사이트를 재구성하는 것도 적절한 방법이다.</p>\n<p>싱글 페이지 앱으로 스태틱 페이지를 만드는 것은 맞지 않는 일이지만 리액트는 비밀 무기: <a href="https://github.com/gatsbyjs/gatsby">개츠비(Gatsby)</a>를 가지고 있다. 개츠비는 리액트 기반의 스태틱 사이트 제네레이터(static site generator)로서 아무런 어려움 없이 리액트의 모든 장점을 가져올 수 있는 치트키라고 할 수 있다.</p>\n<p><img src="/5-999b1e38cc372551f8d2bef2ca1c16af.gif" alt="Gatsby"></p>\n<p>개츠비가 리액트를 시작하기 좋은 도구인 이유는 아래와 같다.</p>\n<ul>\n<li>미리 설정되어 있는 웹팩 개발 환경을 제공한다. 즉 복잡한 설정을 하느라 머리아플 필요가 없다.</li>\n<li>디렉토리 기반의 자동 라우팅이 가능하다.</li>\n<li>모든 HTML 컨텐츠는 서버 사이드에서 생성되므로 양쪽의 이점을 모두 취할 수 있다.</li>\n<li>생성된 스태틱 컨텐츠는 서버가 필요없으므로 Github Page에 호스팅하기 매우 좋다.</li>\n</ul>\n<p>나는 <a href="http://stateofjs.com/">State Of JavaScript</a> 사이트를 만드는데 개츠비를 사용했다. 라우팅을 신경쓸 필요도 없고 환경설정도 없으며 서버 사이드 렌더링은 나에게 많은 시간을 절약해 주었다.</p>\n<h2 id="3주차-es6-마스터"><a href="#3%EC%A3%BC%EC%B0%A8-es6-%EB%A7%88%EC%8A%A4%ED%84%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>3주차: ES6 마스터</h2>\n<p>리액트를 공부하기 위한 내 개인적은 여정에서 코드 샘플을 복사해서 붙여넣을 수는 있는 수준에는 금방 도달했었다. 하지만 내가 여전히 이해하지 못하고 있었던 것이 있었다. 특히 나는 <a href="http://es6-features.org/#Constants">ES6</a>에서 도입된 새로운 문법들과 친숙하지 않았다.</p>\n<ul>\n<li>화살표 함수(arrow functions)</li>\n<li>객체 비구조화 할당(Object destructuring)</li>\n<li>클래스</li>\n<li>전개 연선자(spread operator)</li>\n</ul>\n<p>ES6를 제대로 공부하기 위해선 아마도 며칠이 걸릴 것이다. 앞서 소개한 리액트 입문자 코스를 즐겁게 공부했다면 당신은 아마도 Wes의 멋진 <a href="https://es6.io/friend/stateofjs">ES6 for everybody</a> 비디오도 보고 싶어질 것이다. 만약 무료를 선호한다면 <a href="https://ponyfoo.com/books/practical-es6/chapters">Nicolas Bevacqua’s book, Practical ES6</a>를 살펴보기 바란다.</p>\n<p>ES6를 마스터하기에 좋은 실습은 ES6 이전의 문법들을 더 짧고 명료한 ES6 문법으로 가능한 바꿔보는 것이다.</p>\n<h2 id="4주차-상태-관리state-management-시작하기"><a href="#4%EC%A3%BC%EC%B0%A8-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%ACstate-management-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>4주차: 상태 관리(state management) 시작하기</h2>\n<p>이제 당신은 정적인 컨텐츠를 만들어내는 간단한 리액트 앱을 만들 수 있게 되었다. 하지만 실제 웹앱은 정적(static)이지 않다. 데이터베이스같은 곳에서 데이터를 가져와야 한다.</p>\n<p>지금은 단순히 데이터를 컴포넌트에 전달하기만 할 수 있다. 하지만 그런 방식은 금세 복잡하고 지저분해진다. 예를 들어 두개의 독립적인 컴포넌트가 동일한 데이터를 보여줘야 한다면? 또 컴포넌트간에 서로 데이터를 주고받아야 할 필요가 생긴다면?</p>\n<p>여기가 바로 <strong>상태 관리</strong>가 필요한 지점이다. 상태를 각각의 컴포넌트 대신 하나의 전역 저장소에 저장한 후 리액트 컴포넌트에 전달(dispatch)하는 방식을 사용하자.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/6-636589a41afc7e26ff7c540d0ca63808-72d95.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1060px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 16.799999999999997%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAAAsSAAALEgHS3X78AAAA4UlEQVQI12O4dPLRlUvHnv5/9vBdztcvX4PvXnvRfP/St/83zj9b+PHDp/nf332rebD91ceHO159+vX+Z/DbTx9C3p/8vOz7yf//v1z6Vvf62/uwrze+5b4/+uP/m6OfzjLcvvLCEYgDbl58IcsABLcvv9C8d/1V6N2rLw1B/FfnPnD9uPDT+8fFnz4/t/zmBYl9O/fD7OfFX2HfzvzUAPF/nv4t9+38j8Dv53/aM8DAw1tv+B/cfK374vF7ZgYc4Mv1b+yfbn7h+H7hJ8eP87+kv17+xvL55leud5c+wfUAALFjjNOZ5UwFAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px #ffffff;"\n        alt="redux data flow"\n        title=""\n        src="/static/6-636589a41afc7e26ff7c540d0ca63808-9056e.png"\n        srcset="/static/6-636589a41afc7e26ff7c540d0ca63808-507eb.png 265w,\n/static/6-636589a41afc7e26ff7c540d0ca63808-63b28.png 530w,\n/static/6-636589a41afc7e26ff7c540d0ca63808-9056e.png 1060w,\n/static/6-636589a41afc7e26ff7c540d0ca63808-d381a.png 1590w,\n/static/6-636589a41afc7e26ff7c540d0ca63808-72d95.png 2000w"\n        sizes="(max-width: 1060px) 100vw, 1060px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>리액트 생태계에서 가장 인기있는 상태 관리 라이브러리는 리덕스(Redux)다. 리덕스는 데이터를 집중화해줄 뿐만 아니라 데이터를 조작할 때 엄격한 프로토콜을 강제한다.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/7-66f143ef8b5527f6f38f90fba8151d93-ce7d2.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1060px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 78.0625%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAIAAACZeshMAAAACXBIWXMAAAsSAAALEgHS3X78AAABwklEQVQoz41S74vTQBC9//+v8cOBoCBUUNvzOPGLB6WImjZN0mySze7s7O/40toeipQOL5vZZN/M7My7m6Yp+NhuWbTder3ebDZSyuk2u8PDFMoNldt6uVouFouiKPAx53wTOYRgjMGaUgLHe48tMxMRnJzTNbJzDqV2XSeEaIG2HYahB/q+6yXZyGFil/5PRiowug6sw+HQiOMbobCZY4m+quEgeIdww2zSeX++s/XbWuyableL/aEHdlVb1OIghnFETXKu4GhH4ijJuZD+kGNKZCwRwJpIG9Y2a+O0JsblzWzX7ty0Vd2W+7opq7ra76uuAhftIheMD8TWxeRSdiFaa9HaF/LQysW3Nx+L+/vl8+sv31cf3r8rXy2Lt6uvz59VeuLp8Uf50KhHnp6K5mH5CVo4zfFYdoyKSGo1KD0Sj0r74ICAH3makVJMGQ5GmY72kjlP2caJfMZIFEdi56xltpdDVxXGXPz6udsW+3J3i7D+IqO6QZGQ1Ct0KEEVmkO6UZ4oDw1HRw3P03I+3kS9kCFCoWyvZwzaayS3ceSgztB2hrJhNCH/Q8a5nvxggjRhIA8Bob3If1pPTjxvL5l/A0MznP3TPkXoAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px #ffffff;"\n        alt="redux document"\n        title=""\n        src="/static/7-66f143ef8b5527f6f38f90fba8151d93-9056e.png"\n        srcset="/static/7-66f143ef8b5527f6f38f90fba8151d93-507eb.png 265w,\n/static/7-66f143ef8b5527f6f38f90fba8151d93-63b28.png 530w,\n/static/7-66f143ef8b5527f6f38f90fba8151d93-9056e.png 1060w,\n/static/7-66f143ef8b5527f6f38f90fba8151d93-d381a.png 1590w,\n/static/7-66f143ef8b5527f6f38f90fba8151d93-ce7d2.png 1600w"\n        sizes="(max-width: 1060px) 100vw, 1060px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>리덕스는 일종의 ‘은행’으로 생각할 수 있다. 은행을 이용할 때 당신은 지역 지점으로 가서 계좌 잔액을 임의로 변경할 수는 없다. 대신 입출금 양식을 작성해서 인증받은 은행원에게 전달해서 관련 작업을 할 수 있도록 요청해야 한다.</p>\n<p>비슷하게 리덕스는 전역 상태를 직접 변경할 수 없게 해 두었다. 대신 리듀서(reducer)에 액션(action)을 전달해야 한다. 리듀서는 특수한 함수로서 액션을 전달받아서 작업을 수행한 후 업데이트된 새로운 상태를 반환한다.</p>\n<p>이러한 추가적인 작업은 앱 전반적으로 매우 유지보수성이 좋고 표준화된 데이터 흐름을 제공한다. 그리고 <a href="https://github.com/gaearon/redux-devtools">Redux devtool</a>같은 툴은 리덕스와 관련된 일련의 작업들을 시각화해준다.</p>\n<p><img src="/8-9fbbfc06193b4b202bb82352f4da2bb5.gif" alt="redux dev tool"></p>\n<p>리덕스 관련 강의로 다시 한번 우리의 친구 Wes의 <a href="https://learnredux.com/">리덕스 강의</a>를 들어도 되고(이건 무료다!) egghead.io에 올라와 있는 리덕스를 개발한 Dan Abramov의 <a href="https://egghead.io/courses/getting-started-with-redux">비디오</a>를 참고해도 좋다. 이 비디오도 역시 무료다.</p>\n<h2 id="5주차보너스-graphql로-api를-구성하기"><a href="#5%EC%A3%BC%EC%B0%A8%EB%B3%B4%EB%84%88%EC%8A%A4-graphql%EB%A1%9C-api%EB%A5%BC-%EA%B5%AC%EC%84%B1%ED%95%98%EA%B8%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>5주차(보너스): GraphQL로 API를 구성하기</h2>\n<p>지금껏 많은 내용들을 이야기했지만 모두 클라이언트에 관한 것들만이었다. 클라이언트는 등식의 단지 절반일 뿐이다. 노드(Node) 생태계를 깊이 파고들지 않을 것이라 하더라도 이 핵심 요소는 언급할 필요가 있다. 데이터가 서버에서 클라언트로 어떻게 전달되는지에 관한 내용이다.</p>\n<p>기술은 너무나 빠르게 변하고 있기 때문에 <a href="http://graphql.org/">GraphQL</a>(Facebook의 또 다른 오픈소스 프로젝트)이 전통적인 REST API의 진지한 대안으로 여겨지고 있다는 사실은 또 그렇게 놀랍지 않다.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/9-7c3da519e6ae5e49e0f498980db53e87-ce7d2.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1060px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 58.8125%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAAAsSAAALEgHS3X78AAABdUlEQVQoz6WQ207CQBCG9wXQm9ID7R7o7vawpaUtiV5zow+rMdHXEUEQoiKgiUq809kipEHubL5O/t1/ZjKzyKKBwyKHha4ft4B21GrHJpEHsWkQpD2Vn/K4gEJkEWkQAZhYNj1RweESMLE+QgQLjhvXcLnh8eomQNAvcnPAYiH0Y0HXjwvXVx5PWNj1o9xXhecrGEeoQiY9rgoq099i+M+s/rnVt4kUcdkpCuxHMBIWSZidYJFxnsJeNg1dmXuig6Evix0S2iTUxZnbS90ShMO7NMoo11NBAVelLsMBWDYJTKYsGhMSM5pQqlo0QpUBbXSGXhvDw2y1J/Sq1cKWvqweYoseG+aBIQEQOzyRwHpEprC5UCUWnbq7AzUM7y9HTXxsUogNQ4uGFgfS0OXVTZ2LbaxxvdN7yej7Hx96/1jXWa7enueLxfIV4vxluYkvi9VG7CWjz/VXHUgaju6ns8fhaHw7GA7uRtPZ03gynTzMwNpL/gGzWBATRk1OawAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px #ffffff;"\n        alt="GraphQL homepage"\n        title=""\n        src="/static/9-7c3da519e6ae5e49e0f498980db53e87-9056e.png"\n        srcset="/static/9-7c3da519e6ae5e49e0f498980db53e87-507eb.png 265w,\n/static/9-7c3da519e6ae5e49e0f498980db53e87-63b28.png 530w,\n/static/9-7c3da519e6ae5e49e0f498980db53e87-9056e.png 1060w,\n/static/9-7c3da519e6ae5e49e0f498980db53e87-d381a.png 1590w,\n/static/9-7c3da519e6ae5e49e0f498980db53e87-ce7d2.png 1600w"\n        sizes="(max-width: 1060px) 100vw, 1060px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>REST API가 사전 정의된 데이터 집합에 접근하기 위한 여러개의 REST 경로(ex. /api/posts, /api/comments, …)를 제공하는 것에 반해서 GraphQL은 단 1개의 경로만 제공하고 클라이언트가 필요한 데이터에 접근하기 위한 쿼리를 던지게 한다.</p>\n<p>예를 들어 정육점, 빵집, 식료품점 등 여러 가게들 돌아다니는 것과 쇼핑 목록을 작성해서 세 가게에 모두 전달하는 것을 비교해서 상상해보라. 이 새로운 전략은 복수의 소스(또는 테이블)에서 데이터를 가져오려고 할 때 특히 중요해진다. 앞서 예를 든 쇼핑 목록처럼 이제는 클라이언트에서 필요한 데이터를 조합하기 위해서는 단 한번의 요청만으로도 가능해지기 때문이다.</p>\n<p>GraphQL은 1년간 뜨거운 관심을 받아 왔고 많은 프로젝트(2주차에서 언급한 개츠비 등)들이 적용할 계획을 가지고 있다. GraphQL 자체는 단지 프로토콜일 뿐이고 구현체로는 <a href="http://apollostack.com/">아폴로(Apollo)</a>(리덕스와도 잘 작동한다) 라이브러리가 있다. 아직은 GraphQL와 아폴로에 대한 교육 자료가 많지 않지만 <a href="http://dev.apollodata.com/">아폴로 공식 문서</a>가 입문에 도움이 될 것이다.</p>\n<h2 id="리액트를-넘어서"><a href="#%EB%A6%AC%EC%95%A1%ED%8A%B8%EB%A5%BC-%EB%84%98%EC%96%B4%EC%84%9C" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>리액트를 넘어서</h2>\n<p>나는 리액트 생태계가 안전한 선택이기에 추천을 했었다. 하지만 리액트만이 좋은 프론트 엔드 스택은 아니다. 좀 더 알아보고 싶다면, 다음의 두 라이브러리를 추천한다.</p>\n<h3 id="vue"><a href="#vue" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Vue</h3>\n<p><a href="http://vuejs.org/">Vue</a>는 상대적으로 새로운 라이브러리지만 기록적인 속도로 성장하고 있고 이미 중국의 바이두와 알리바바(중국의 구글과 아마존)같은 메이저급 회사들이 도입한 상태다. 또 PHP 프레임워크 <a href="https://laravel.com/">Laravel</a>의 공식 프론트엔드 레이어이기도 하다.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/10-f2a9546db6d6eb3122e856f783144da1-ce7d2.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1060px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 56.56250000000001%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAABA0lEQVQoz32QS07DMBBAczgOwQ04ACsuwA2QuuMQ7EDAkh2bVkhILBAQSqM4Hztjj79h4rRSkyZ5sqzxeN5YnqSNhLgzFB9pmv5mn1XWhiARlSaMNqadIjnInb5z/Pzm+uzq8nG3oUTFeM34X5ZnORMNSIXTMuGDp/327fniftU1gurpe/OyfecKpEZQCrWZlXvA6R8sKfiC/C59fdiuhVXobdj/bF72bTDx/VNc8LprMS8DKtbUXAJNy1pbNrwEYZ3rrwrBR5MbyDRZhYha0wvOefomHXuZklIq6jiQ3RH+gDthMp/IIRBXFwDUEQr2eRjVyrF8TFEUjLGFgiVZRBYK/gHLxnxqXSg2uwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px #ffffff;"\n        alt="vue.js"\n        title=""\n        src="/static/10-f2a9546db6d6eb3122e856f783144da1-9056e.png"\n        srcset="/static/10-f2a9546db6d6eb3122e856f783144da1-507eb.png 265w,\n/static/10-f2a9546db6d6eb3122e856f783144da1-63b28.png 530w,\n/static/10-f2a9546db6d6eb3122e856f783144da1-9056e.png 1060w,\n/static/10-f2a9546db6d6eb3122e856f783144da1-d381a.png 1590w,\n/static/10-f2a9546db6d6eb3122e856f783144da1-ce7d2.png 1600w"\n        sizes="(max-width: 1060px) 100vw, 1060px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>리액트와 비교해서 주목할점은 특징은 아래와 같다.</p>\n<ul>\n<li>라우팅과 상태 관리 라이브러리를 공식적으로 지원한다.</li>\n<li>성능에 초점을 맞추고 있다.</li>\n<li>HTML 기반의 템플릿이기 때문에 진입 장벽이 낮다.</li>\n<li>보일러플레이트 코드가 적다.</li>\n</ul>\n<p>더 거대한 생태계과 React Native의 존재 때문에 리액트가 지금으로서는 우위에 있다고 말할 수 있다. 하지만 만약 Vue.js가 리액트를 곧 따라잡아도 놀랄 일은 아닐 것이다.</p>\n<h3 id="elm"><a href="#elm" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Elm</h3>\n<p>Vue가 고려해볼만한 선택지라면 Elm은 나온지 얼마 안된 신기술이다.</p>\n<p><a href="http://elm-lang.org/">Elm</a>은 단지 프레임워크가 아니라 자바스크립트로 컴파일되는 완전히 새로운 언어다. 이는 향상된 성능, 강제화된 시맨틱 버저닝, 런타임 오류가 없다는 점 등 다양한 장점을 제공한다.</p>\n<p>나는 개인적으로 아직 Elm을 직접 만져보지는 않았지만 사용해본 사람들은 높은 만족도와 함께 추천을 하고 있는 중이다.</p>\n<h2 id="다음-단계"><a href="#%EB%8B%A4%EC%9D%8C-%EB%8B%A8%EA%B3%84" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>다음 단계</h2>\n<p>이제 당신은 리액트 프론트엔드 스택에 대해서 전반적으로 파악할 수 있었고 아마 많은 성과가 있었을 것이다.</p>\n<p>하지만 이정도로는 결코 충분하지 않다! 이건 자바스크립트 생태계를 향한 여행의 단지 시작 지점일 뿐이다. 당신은 아래의 주제들 중에 몇몇은 결국 마주하게 될 것이다.</p>\n<ul>\n<li>서버 사이드 자바스크립트(Node, Express, …)</li>\n<li>자바스크립트 테스팅(Jest, Enzyme, …)</li>\n<li>빌드 도구(Webpack, …)</li>\n<li>타입 시스템(TypeScript, <a href="https://flowtype.org/">Flow</a>, …)</li>\n<li>자바스크립트 앱에서의 CSS 관리(CSS Module, <a href="https://github.com/styled-components/styled-components">Styled Compoents</a>, …)</li>\n<li>모바일 앱을 위한 자바스크립트(React Native, …)</li>\n<li>데스크탑 앱을 위한 자바스크립트(<a href="http://electron.atom.io/">Electron</a>, …)</li>\n</ul>\n<p>여기에 있는 모든 것을들 다룰 수 없지만 너무 절망하지는 마시길! 무엇이든 처음 시작이 가장 어려운 법이다. 게다가 당신은 이 글을 읽음으로서 그 첫걸음을 이미 뗀 상황이다.</p>\n<p>그리고 자바스크립트 생태계의 다양한 조각들이 어떻게 맞물려 있는지도 이해하게 되었다. 이제는 무엇을 배워야 할지 정리한 후 새로운 기술을 향해 문을 두드리고 들어가기만 하면 된다.</p>',
timeToRead:14,fields:{tagSlugs:["/tags/번역/","/tags/javascript/","/tags/react/","/tags/redux/","/tags/gatsby/","/tags/es-6/"]},frontmatter:{title:"[번역] 자바스크립트 피로감을 줄여주기 위한 학습 계획",tags:["번역","Javascript","React","Redux","Gatsby","ES6"],date:"2016-12-19",mainImageAlt:null,description:"[번역] 자바스크립트 피로감을 줄여주기 위한 학습 계획",mainImage:{childImageSharp:{sizes:{aspectRatio:2.4968789013732833,base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAAAsSAAALEgHS3X78AAABVUlEQVQY022RS0/CUBCF+bX+BBN3xoU7w8JEo9EdkQ3xtQBfwWACGwWqSEAKSAGLlNIH7W1Le2fGtiI+4sm9c5Ob853MZBJEBBgfoP/lI5c8/uoS++tIhHf47p1fjW5LKgdCovLYynensuNHueEH4+NjeZCSSA28Ofaebalu+y4uYLHvbO830yeDgEdwpjZK5hoNgxFCgBxYYBRU7Vohk890nj3s3aSGzOALWDeDumiJPRuROIKgWEWJjeNsDggYtxhXU/PvL5VKXnWtLziai5yaIpSHVQZ25IQW+E8BGDiVrNKR85ABpqPPwfOBwzIrEb1INs3OhIvTas4miyiYyFv91poXVEiutZMrcmqVxBd1t2ge3JHOfsKRPHA7s3bHEl3wQlhTdt66Gz5/JE12CntzIU3NzmQ9q29maWLFMH7DvxX2oiEqiM7SR6ZDFYmEPsVb+NQHPw2+disf/fgAAAAASUVORK5CYII=",sizes:"(max-width: 1600px) 100vw, 1600px",src:"/static/main-4f2ca4ef5845c0eacd7a37abfbe5baff-a5eeb.png",srcSet:"/static/main-4f2ca4ef5845c0eacd7a37abfbe5baff-2e368.png 400w,\n/static/main-4f2ca4ef5845c0eacd7a37abfbe5baff-cb4e3.png 800w,\n/static/main-4f2ca4ef5845c0eacd7a37abfbe5baff-a5eeb.png 1600w,\n/static/main-4f2ca4ef5845c0eacd7a37abfbe5baff-d0487.png 2000w"}}}}}},pathContext:{slug:"/posts/2016-12-19-A-Study-Plan-To-Cure-JavaScript-Fatigue/"}}}});
//# sourceMappingURL=path---posts-2016-12-19-a-study-plan-to-cure-java-script-fatigue-73cefb93948969ebebc7.js.map
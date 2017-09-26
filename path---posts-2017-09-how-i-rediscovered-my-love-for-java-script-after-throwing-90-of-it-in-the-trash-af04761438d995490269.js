webpackJsonp([0x5b5afc8782c51000],{"./node_modules/json-loader/index.js!./.cache/json/posts-2017-09-how-i-rediscovered-my-love-for-java-script-after-throwing-90-of-it-in-the-trash.json":function(e,o){e.exports={data:{site:{siteMetadata:{title:"rhostem.github.io",url:"https://rhostem.github.io",author:"rhostem"}},markdownRemark:{html:'<p>이 글은 <a href="https://hackernoon.com/@joelthoms?source=post_header_lockup">Joel Thoms</a>의 <a href="https://hackernoon.com/how-i-rediscovered-my-love-for-javascript-after-throwing-90-of-it-in-the-trash-f1baed075d1b">How I rediscovered my love for JavaScript after throwing 90% of it in the trash</a>를 번역한 글입니다.</p>\n<hr>\n<p></p>\n<h2 id="나와-자바스크립트의-관계"><a href="#%EB%82%98%EC%99%80-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-%EA%B4%80%EA%B3%84" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>나와 자바스크립트의 관계</h2>\n<p>자바스크립트와 함께하는 여행의 시작은 1997년 Netscape Navigator 3가 있던 시절로 거슬러 올라간다. 그떄는 자바스크립트로 별로 할 수 있는 일이 없었다. <strong>자바스크립트로 할 수 있는 가장 멋진 일은 마우스 오버 효과를 만드는 것이었다</strong>. 그 시절의 그 정도는 제법 고급 기술이었다. 단순히 마우스 포인터를 가져다 대는 것만으로 페이지의 콘텐츠를 바꾼다는 것은 당시로서는 정말로 멋진 기능이었다. 그리고 DHTML이 등장하기 전이었기에 DOM 요소를 숨기고 보여주는 일도 여전히 마법같은 일이었다.</p>\n<p>그 시절에 자바스크립트의 성장은 매우 느렸고, 자바스크립트는 입력 양식(form) 유효성 검사에 주로 사용되고 있었다. 자바스크립트에 향한 관심이나 발전은 지금처럼 크지 않았다. 그저 있으면 좋은 부가적인 요소였다. 자바스크립트는 개발에 있어 주요 고려 대상이 결코 아니었고 애플리케이션이 자바스크립트 없이도 확실히 동작할 수 있도록 보장해야 했었다.</p>\n<p>그런 시절이 있은 후에 자바스크립트 프레임워크들이 대거 등장했다. jQuery, Knockout, Angular, React, Vue, 기타 등등. 처음에는 그들에 대한 반응이 그저 그랬었다. 하지만 이제 우리는 매일매일 새로운 프레임워크를 만나는 중이다.</p>\n<p>또한 <strong>자바스크립트 자체의 진화 속도도 점점 빨라지고 있다</strong>. 우리는 이제 ES6를 앞으로도 계속 사용할 수 있고 사람들은 관심사는 ES7에서 이미 ES8으로 넘어간 상태다!</p>\n<p>그리고 TypeScript, CoffeeScript, ClojureScript, ELM 처럼 자바스크립트의 무한한 대안을 가지고 있다.</p>\n<p>이들의 발전 속도는 너무나 빠르고 압도적이라 모든 것을 따라잡기는 불가능하다.</p>\n<h2 id="잘못된-길"><a href="#%EC%9E%98%EB%AA%BB%EB%90%9C-%EA%B8%B8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>잘못된 길</h2>\n<p>자바스크립트가 처음 성숙해지기 시작했을 때 객체 지향 프로그래밍(OOP)이 자바스크립트 안으로 슬며시 비집고 들어왔다… 그리고 나는 그걸 무척 좋아했다.</p>\n<p>나는 가능한 모든 방법으로 클래스를 만들며 자바스크립트를 갖고 놀기 시작했다. 그리고 마침내 객체의 상속을 제대로 구현할 수 있었다. 나는 생각했다. 자바스크립트는 마침내 <em>진정한</em> 언어가 되었다고 말이다.</p>\n<blockquote>\n<p><strong>자바스크립트에 OOP를 사용하는 것이 끔찍한 실수라는 사실을 깨닫기까지 그리 오랜 시간이 걸리지 않았다.</strong></p>\n</blockquote>\n<p>내가 <strong>C#을 통해 알게 된 것들을 자바스크립트에도 강제하려 했고</strong> 처음에는 그것이 무척 괜찮아 보였다. 하지만 그로 인한 복잡도는 정신이 혼미해질 정도였다.</p>\n<p>왜냐하면, 자바스크립트의 프로토타입 상속은 C#처럼 작동하지 않기 때문이다. 나는 매일매일 <code>console.log(this)</code>를 쓰고 있는 나 자신을 발견할 수 있었다. <em>나는 누구, 지금 여기는 어디인가?</em> 객체지향 자바스크립트로 프로그래밍을 하면서 모든 것을 정확히 하지 않는다면 악몽 같은 일이 벌어진다. Private 메소드와 밸류에는 접두어로 밑줄(_)이 들어가거나 더 심한 경우 클로져 안에 래핑되어야 했다.</p>\n<p>객체지향 자바스크립트는 OOP의 모든 문제를 가져왔을 뿐만 아니라 그 위에 새로운 문제를 추가해버렸다.</p>\n<h2 id="그리고-나는-함수형-프로그래밍을-발견했다"><a href="#%EA%B7%B8%EB%A6%AC%EA%B3%A0-%EB%82%98%EB%8A%94-%ED%95%A8%EC%88%98%ED%98%95-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%EC%9D%84-%EB%B0%9C%EA%B2%AC%ED%96%88%EB%8B%A4" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>그리고 나는 함수형 프로그래밍을 발견했다</h2>\n<p><strong>처음에는 몰랐다.</strong> 코드를 읽을 수 있고 이해할 수는 있지만 <em>왜</em> 그래야 하는지는 알 수 없었다. 결국, 나는 함수형 프로그래밍을 배우도록 나 자신을 강제했다. EDX에서 무료로 <a href="https://www.edx.org/course/introduction-functional-programming-delftx-fp101x-0">Introduction to Functional Programming course</a>를 등록하고 강의에서 배운 기술을 자바스크립트에 접목하려 시도했다.</p>\n<blockquote>\n<p>함수형 프로그래밍은 나에게 새로운 관점을 제시했다. 그것은 프로그래밍을 무척 다른 방식으로 접근하도록 만들어 주었다.</p>\n</blockquote>\n<p><em>처음에는</em> 제법 이상해 보여서 익숙해지기까지 시간이 좀 걸렸다. 모든 것은 거꾸로 돌아갔고, 불변(immutable)이었고, 이질적이었다.</p>\n<p>천천히, 코드를 함수형 방식으로 풀어내려 시도했다. 익숙하지 않았기 때문에 시간이 더 걸렸고 더 많은 학습이 필요했다. 하지만 결국 조금씩 파악이 되었고 익숙해지기 시작했다. 그리고 마침내 <em>왜</em> 그렇게 해야 하는지 알 수 있었다.</p>\n<p>나의 코드는 단순해졌고 재사용이 가능해졌다. 일반적인 언어의 특징이 내 코드에서 천천히 사라지기 시작했다. 내 코드는 완전히 다른 언어처럼 보였다. 내가 작성하고 있는 코드가 여전히 자바스크립트인가?</p>\n<h2 id="더-이상의-var는-없다"><a href="#%EB%8D%94-%EC%9D%B4%EC%83%81%EC%9D%98-var%EB%8A%94-%EC%97%86%EB%8B%A4" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>더 이상의 ‘var’는 없다</h2>\n<p>나의 모든 <code>\'var\'</code>는 <code>const</code>로 대체되었다. 내 코드가 <strong>불변성</strong>(immutable)을 가지고 함수가 <strong>순수</strong>(pure)해 졌을 때 <code>var</code>는 마침내 완전히 사라졌다.</p>\n<p>내 코드에서 <code>var</code>는 물론이고 <code>let</code>이 모두 <code>const</code>로 바뀐 모습을 보며 놀라워하던 순간이 떠오른다. 함수형 프로그래밍에 대한 흥미가 깊어지기 시작했었다.</p>\n<h2 id="for-루프"><a href="#for-%EB%A3%A8%ED%94%84" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>‘for’ 루프</h2>\n<p><code>for</code> 루프는 가장 먼저 해결해야 할 것 중의 하나였다. 코드에서 <code>for</code> 루프를 <code>map</code>, <code>filter</code>, 그리고 <code>reduce</code>로 대체하기 시작했다. 루프 중에서 특별한 동작이 필요한 것은 재귀를 사용하거나 <a href="http://danieltao.com/lazy.js/">lazy.js</a>를 사용했다. <code>break</code> 키워드는 어떻게 하냐는 의문이 들었다면 <a href="https://hackernoon.com/rethinking-javascript-break-is-the-goto-of-loops-51b27b1c85f8">이 글</a>을 읽어보길 바란다.</p>\n<blockquote>\n<p><a href="https://hackernoon.com/rethinking-javascript-death-of-the-for-loop-c431564c84a8">Rethinking JavaScript: Death of the For Loop</a></p>\n</blockquote>\n<p><code>for</code> 루프는 이제 나의 코드 베이스에서 완전히 사라졌다. 만약 발견한다면 내가 없애버릴 수 있게 꼭 알려주길 바란다.</p>\n<h2 id="if-문"><a href="#if-%EB%AC%B8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>‘if’ 문</h2>\n<p><code>if</code> 문은 해결해야 할 다음 과제다. 나는 if~else 블럭 안에서 중첩되는 거대한 코드 블럭을 작성하는 일을 그만두었다.(이 또한 OOP에서는 권장되는 방식이다) 로직은 함수로 추출되었고 <code>if</code>를 간단한 <code>ternary</code>(삼항) 연산자로 전환할 수 있었다.</p>\n<blockquote>\n<p><a href="https://hackernoon.com/rethinking-javascript-the-if-statement-b158a61cd6cb">Rethinking JavaScript: The if statement</a></p>\n</blockquote>\n<p>이제 내 코드에서 <code>if</code>를 찾는 일은 거의 불가능해졌다. 앞으로 다른 프로그래머들의들 가독성을 위해서 거의 사용하지 않을 것이다.</p>\n<h2 id="삼가-switch에게-조의를"><a href="#%EC%82%BC%EA%B0%80-switch%EC%97%90%EA%B2%8C-%EC%A1%B0%EC%9D%98%EB%A5%BC" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>삼가 ‘switch’에게 조의를</h2>\n<p><code>if</code>와 <code>for</code>는 사라졌으니 다음 목표는 <code>switch</code> 문이다. 자주 사용되지는 않지만 나는 함수형 대안을 사용하고 싶었다.</p>\n<blockquote>\n<p><a href="https://hackernoon.com/rethinking-javascript-eliminate-the-switch-statement-for-better-code-5c81c044716d">Rethinking JavaScript: Eliminate the switch statement for better code</a></p>\n</blockquote>\n<p>나는 <code>switch</code>를 대체할 수 있는 Ramda의 <a href="http://ramdajs.com/docs/#cond">cond 연산자</a>를 정말로 좋아한다.</p>\n<h2 id="더-이상의-this는-없다"><a href="#%EB%8D%94-%EC%9D%B4%EC%83%81%EC%9D%98-this%EB%8A%94-%EC%97%86%EB%8B%A4" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>더 이상의 ‘this’는 없다</h2>\n<p>그렇다. 제대로 읽은 것이 맞다! <code>this</code>는 완전히 사라졌다. 만약 지금까지 내 생각에 동의하지 못했더라도 이제는 나와 함께해야 한다.</p>\n<blockquote>\n<p>함수형 자바스크립트는 애플리케이션을 <code>this</code> 없이 작성할 수 있도록 해준다.</p>\n</blockquote>\n<p>이제 데이터와 함수만이 남았고 우리에게 <code>this</code>는 완전히 필요없어졌다. 나는 객체를 변경 가능한(mutable) 상태에 함수가 합쳐진 것으로 생각하기 시작했다. 나는 변경 가능한 상태도 필요하지 않으며 객체에 붙어있는 함수도 필요하지 않다. 그래서 나는 그 둘을 떼어내 버렸다.</p>\n<blockquote>\n<p><a href="https://hackernoon.com/functional-javascript-decoupling-methods-from-their-objects-aa3ca13d7ae8">Functional JavaScript: Decoupling methods from their objects</a></p>\n</blockquote>\n<h2 id="객체지향-디자인은-필요하지-않다"><a href="#%EA%B0%9D%EC%B2%B4%EC%A7%80%ED%96%A5-%EB%94%94%EC%9E%90%EC%9D%B8%EC%9D%80-%ED%95%84%EC%9A%94%ED%95%98%EC%A7%80-%EC%95%8A%EB%8B%A4" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>객체지향 디자인은 필요하지 않다</h2>\n<p>돌이켜 보니, 나는 OOP가 복잡도를 필요없이 높인다는 사실을 알게 되었다. 변경 가능한 상태 없이 동일한 작업을 실행할 수 있다는 사실을 알 수 있었다.</p>\n<p>더 이상 무거운 객체를 전달할 필요가 없기 때문에 코드는 한결 가벼워진 느낌이 든다. 코드에는 단지 데이터와 함수만 있을 뿐이다. 그 함수들은 객체에 묶여있지 않기 때문에 이제 예전보다 재사용성이 높아졌다.</p>\n<p>나는 이제 자바스크립트가 제대로 지원하지 않는 전통적인 상속이 가져다주는 문제에 대해 더는 걱정할 필요가 없다.</p>\n<p>자바스크립트가 private, public, internal, 또는 protected 같은 접근 제한 수식어를 제대로 지원하지 않는다는 것은 더 이상 문제가 되지 않았다. 접근 제한 수식어라는 것은 OOP가 만들어내는 문제를 해결하기 위해 만들어졌다. 그 문제들은 함수형 자바스크립트에서는 더 이상 존재하지 않는다.</p>\n<h2 id="요약"><a href="#%EC%9A%94%EC%95%BD" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>요약</h2>\n<p>내 코드는 이제 완전히 다르게 보인다. 많은 <strong>순수 함수</strong>(pure functions)들의 모임이 있고 그것들은 <strong>ES6 모듈</strong>로 조직화된다. 나는 이 함수들을 조합해서 더 복잡한 함수를 만든다. 대부분의 함수는 <strong>값을 즉시 반환하는 한줄로 된 람다 표현식</strong>으로 되어 있다.</p>\n<p>이제 나는 소프트웨어의 입력을 데이터의 스트림으로 간주하며 그 스트림에 반응적으로(reactively) 프로그래밍한다.</p>\n<p>함수형 프로그래밍에 대한 이해는 일반적인 문제를 해결할 수 있는 더 많은 선택지를 제공했다.</p>\n<p>또한 나는 함수형 프로그래밍은 포괄적이기에 현재 진행중인 프로젝트에 충분히 사용하거나, 필요한 만큼만 적게 사용될 수도 있다는 사실을 배웠다. C#의 LINQ는 객체지향 언어에 함수형 디자인을 적용한 매우 훌륭한 사례다.</p>\n<p>함수형 프로그래밍은 아름답다.</p>\n<blockquote>\n<p><a href="https://hackernoon.com/the-beauty-in-partial-application-currying-and-function-composition-d885bdf0d574">The beauty in Partial Application, Currying, and Function Composition.</a></p>\n</blockquote>',timeToRead:7,fields:{tagSlugs:["/tags/javascript/","/tags/함수형-프로그래밍/","/tags/번역/"]},frontmatter:{title:"[번역] 자바스크립트에 대한 애정을 언어의 90%를 쓰레기통에 버리면서 다시 발견했던 과정",tags:["Javascript","함수형 프로그래밍","번역"],date:"2017-09-08",description:"함수형 자바스크립트를 사용하면 OOP 자바스크립트가 만드는 문제들에서 벗어날 수 있다. 객체지향은 자바스크립트에 맞지 않는 옷이다. 함수형 자바스크립트는 학습에 시간이 걸리지만 그럴만한 가치가 충분하다.",mainImage:"/images/post-main/2017-09-how-i-rediscovered-my-love-for-java-script-after-throwing-90-of-it-in-the-trash/gary-chan-351213.jpg",mainImageAlt:"Photo by Gary Chan on Unsplash"}}},pathContext:{slug:"/posts/2017-09-how-i-rediscovered-my-love-for-java-script-after-throwing-90-of-it-in-the-trash/"}}}});
//# sourceMappingURL=path---posts-2017-09-how-i-rediscovered-my-love-for-java-script-after-throwing-90-of-it-in-the-trash-af04761438d995490269.js.map
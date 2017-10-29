webpackJsonp([68439797455181],{904:function(e,a){e.exports={data:{site:{siteMetadata:{title:"rhostem.github.io",url:"https://rhostem.github.io",author:"rhostem"}},markdownRemark:{html:'<p>이 글은 <a href="https://read.acloud.guru/@jamesseanwright">James Wright</a>의 <a href="https://read.acloud.guru/what-ive-learned-over-5-years-as-a-software-developer-a5a8bf456b11">What I’ve Learned Over 5 Years as a Software Developer</a>를 번역한 글입니다.</p>\n<hr>\n<p>이 글을 쓰고 있는 시간은 2017년 7월 3일이다. 굳이 날짜를 언급하는 이유는 오늘이 내가 소프트웨어 엔지니어로서 경력을 시작한 지 5년이 되는 날이기 때문이다.</p>\n<p>그 전에 나는 프리랜서로서 프로젝트도 경험했고 몇 가지 일도 한 적은 있지만 2012년의 오늘 Sky에서 졸업하기 전까지는 상업적인 일은 하지 않았었다.</p>\n<p>방종한 태도를 보이기보다는 지금껏 내가 배운 가장 중요한 5가지를 공유하려고 한다. 난 모든 개발자가 이 5가지 원칙을 받아들여야 한다고 믿는다.</p>\n<h2 id="자기-자신을-깊은-곳까지-밀어넣어라"><a href="#%EC%9E%90%EA%B8%B0-%EC%9E%90%EC%8B%A0%EC%9D%84-%EA%B9%8A%EC%9D%80-%EA%B3%B3%EA%B9%8C%EC%A7%80-%EB%B0%80%EC%96%B4%EB%84%A3%EC%96%B4%EB%9D%BC" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>자기 자신을 깊은 곳까지 밀어넣어라</h2>\n<p>나는 NOW TV Xbox 360팀에서 일하게 된 첫 번째 날을 기억한다. 나는 7개월간의 Graduate scheme(졸업생을 대상으로 하는 업무와 교육이 결합한 프로그램 - 역주)을 막 끝마쳤고 루비와 자바스크립트로 만든 몇 가지 조그만 프로젝트를 진행하고 있었다. 그에 비해 내가 들어간 새로운 팀에서는 C#, .NET, 그리고 Silverlight를 사용하고 있었다. 나는 졸업 전 마지막 학년에 C#, .NET, XML을XAML을 약간 건드려 봤을 뿐 실무에서 통할 레벨은 아니었기에 대체 어디서부터 시작해야 할지 몰랐다.</p>\n<p>비록 동료들은 무척 친절했고 많은 도움을 주려고 했지만 내가 코드에 제대로 기여하기 위해서는 공부에 속도를 내야 한다는 사실을 깨달았다. 나는 일을 하면서 동시에:</p>\n<ul>\n<li>코드 베이스의 다양한 부분을 공부했고 이해가 안 되는 부분은 온라인에 검색해보았다</li>\n<li>시니어 레벨의 개발자와 함께 작업하며 새로운 기능을 효과적으로 구현하고 리팩토링하는 방법을 찾으려 노력했다</li>\n<li>C#, .NET, Silverlight, 디자인 패턴, 유닛 테스팅, 소프트웨어 개발 생명주기(SDLC)에 관한 다양한 책, 문서, 글을 읽었다</li>\n</ul>\n<p>물론 사람이 배울 수 있는 속도에는 한계가 있다. 이와 관련해서는 나중에도 언급하겠지만, 너무나 많은 정보가 한계에 이를 정도로 머릿속으로 들어왔다. 하지만 사람은 정말 신기한 동물인 것이, 괴물 같은 프로젝트 속에 던져지더라도 자연스럽게 자신이 할 수 있는 만큼 열심히 하게 된다. 그리고 사람은 새로운 환경 속에서 성장한다. 그 환경이 얼마나 어려운가와는 상관없이 말이다.</p>\n<blockquote>\n<p><strong>만약 누군가가 당신에게 멋진 기회를 제공했지만, 그 일을 해낼 수 있다는 확신이 없을 때는, 그냥 하겠다고 해라! 그리고 어떻게 할지는 나중에 배우면 된다.</strong></p>\n<p>- Richard Branson</p>\n</blockquote>\n<h2 id="2-겸손하라"><a href="#2-%EA%B2%B8%EC%86%90%ED%95%98%EB%9D%BC" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2. 겸손하라</h2>\n<p>개발자로서 충분한 경험을 쌓게 되면, 아니면 어떤 다른 방법으로도, 결과적으로 자신감을 느끼게 된다. 그리고 그 사람은 오픈 소스 프로젝트, 다양한 형태의 커뮤니티, 그리고 글 등을 통해서 코드 베이스에서 예전보다 더 복잡한 부분에 일조할 수 있는 수 있는 위치에 서게 된다.</p>\n<p>그런 입장이 되면 자기와 같은 기술을 보유하고 있지 않거나, 자신만큼의 능력을 갖추지 못한 사람들을 깔보는 태도를 쉽게 가지게 될 수 있다. 간단한 질문에도 “아니, 그 쉬운 걸 왜 모르는 거지?!”라거나 “스크립트를 빌드하는 방법도 잊어버린 게 분명하구나” 같은 답변을 하기 쉽다. 하지만 분명히 기억해야 한다. 당신도 예전엔 제대로 못 하던 시절이 있었다. 질문을 던지는 사람들에게는 같은 눈높이에서 친절하고 겸손하게 대답해줘야 한다. 한때는 같은 처지였다는 것을 공감하자!</p>\n<p>겸손의 다른 중요한 한 면은 틀렸을 때 인정하는 일이다. 나는 개념을 잘못 이해했다는 사실을 인정하거나 본인이 만든 문제에 대한 책임을 스스로 지기보다는 그 상황을 회피해버리려는 동료들을 많이 접해 왔다. “너는 내 코드를 이해할 능력이 없어! 내가 틀린 것이 아니야.” 뭐, 그렇게 주장할 수는 있다.</p>\n<h2 id="3-타인의-얘기를-잘-듣는-열린-자세를-가져라-하지만-자기주장을-펴는-걸-두려워하지는-마라"><a href="#3-%ED%83%80%EC%9D%B8%EC%9D%98-%EC%96%98%EA%B8%B0%EB%A5%BC-%EC%9E%98-%EB%93%A3%EB%8A%94-%EC%97%B4%EB%A6%B0-%EC%9E%90%EC%84%B8%EB%A5%BC-%EA%B0%80%EC%A0%B8%EB%9D%BC-%ED%95%98%EC%A7%80%EB%A7%8C-%EC%9E%90%EA%B8%B0%EC%A3%BC%EC%9E%A5%EC%9D%84-%ED%8E%B4%EB%8A%94-%EA%B1%B8-%EB%91%90%EB%A0%A4%EC%9B%8C%ED%95%98%EC%A7%80%EB%8A%94-%EB%A7%88%EB%9D%BC" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>3. 타인의 얘기를 잘 듣는 열린 자세를 가져라. 하지만 자기주장을 펴는 걸 두려워하지는 마라.</h2>\n<p>겸허함의 관점에서는 이미 알고 있는 개념에 대해 다른 관점이나 완전히 새로운 정보에 대해 열린 자세를 가지는 것은 중요하다. 후자가 자연스러운 태도로 보일 수 있지만, 소수의 사람은 기꺼이 새로운 것을 적극적으로 받아들여서 결과적으로는 자기 생각을 완전히 바꾸기도 한다. 나의 온순한 태도는 타인의 생각을 바꾸게 만들 수 있고, 그 사람은 앞으로 만날 비슷한 상황에도 그렇게 나로 인해 변화한 생각으로 대처하게 된다.</p>\n<p>즉, 내가 어떤 분야의 특정한 문제에 어떤 위험과 대처법이 있는지 잘 알고 있다면 의견을 강하게 주장해도 전혀 문제 될 것이 없다는 말이다. 확신을 가지고 제대로 설득한다면 동료에게 새로운 정보에 관심을 끌게 만들 수 있다.</p>\n<blockquote>\n<p>단정적인 태도는 당신을 재수 없는 인간으로 만들지 않는다.</p>\n<p>- 나</p>\n</blockquote>\n<h2 id="4-변화를-받아들여라-하지만-시류에-편승하지는-마라"><a href="#4-%EB%B3%80%ED%99%94%EB%A5%BC-%EB%B0%9B%EC%95%84%EB%93%A4%EC%97%AC%EB%9D%BC-%ED%95%98%EC%A7%80%EB%A7%8C-%EC%8B%9C%EB%A5%98%EC%97%90-%ED%8E%B8%EC%8A%B9%ED%95%98%EC%A7%80%EB%8A%94-%EB%A7%88%EB%9D%BC" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>4. 변화를 받아들여라, 하지만 시류에 편승하지는 마라.</h2>\n<p>신입 개발자에게 기술이 변하는 속도는 마치 도저히 따라잡을 수 없을 것처럼 빠르게 느껴진다. 나는 이것이 반드시 그런 것만은 아니라고 주장함으로써 반박하고 싶다.</p>\n<p>자바스크립트 세계에서 새로운 라이브러리와 프레임워크가 주기적으로 등장하는 것은 무척 자명한 일이다. 그리고 어떤 프로그래머(힙스터라고 불리는)들은 그것들을 특정한 상황에 적용할 수 있는지 깊이 생각하지 않고 빠르게 적용해 버린다. 그리고 개발자로서의 가치를 높이기 위해 새로운 기술을 따라잡아야 한다는 의무를 수행했다고 느끼곤 한다.</p>\n<p>처음엔 나도 이런 압박감을 느꼈다. 하지만 다른 시각에서 이걸 바라보면 그런 부담을 완전히 떨쳐버릴 수 있다. 나는 새로운 프로젝트를 시작할 때마다 도움이 될만한 기술을 알아보는데, 다음의 질문들에 대한 답을 바탕으로 조사한다.</p>\n<ul>\n<li>내가 가진 문제에 적합한가?</li>\n<li>성숙한 기술인가?</li>\n<li>강력한 커뮤니티를 가지고 있는가?</li>\n<li>테스트가 잘 되었는가?</li>\n</ul>\n<p>이건 결코 배타적인 조건들이 아니다. 하지만 나는 이런 마음가짐이 올바른 방향으로 이끌어줬다는 사실을 확인했다. 솔직히 나는 React에 대해 처음에는 무척 냉소적인 태도를 가지고 있었다. “자바스크립트 안에서 XML을 쓴다고?! 이건 분명 DOM의 무의미한 추상화일 뿐이야.” 그리고 나는 새로운 앱 개발을 맡았고, 많은 양의 리스트가 다양한 사용자 입력에 대응해서 새로 렌더링 되게 해야 했다. 그 작업을 통해 나는 React가 이런 종류의 앱 개발에서는 무척 훌륭한 라이브러리라는 사실을 알게 되었고 내가 얼마나 잘못된 생각을 가졌었는지도 깨닫게 되었다.</p>\n<p>누구나 새로운 것을 적극적으로 받아들이고 적절히 사용할 수 있도록 해야 한다. 하지만 단지 새롭고 인기가 있다고 해서 사용해야 할 의무가 있는 것 아니다. 소프트웨어 엔지니어링의 주요한 목표는 <em>소프트웨어를 잘 만들어서 전달하는 일</em>이다. 그 과정에서 잘못된 기술을 선택하는 것은 그 목표를 달성하는 데 방해가 될 수 있다.</p>\n<h2 id="5-일과-놀이의-균형"><a href="#5-%EC%9D%BC%EA%B3%BC-%EB%86%80%EC%9D%B4%EC%9D%98-%EA%B7%A0%ED%98%95" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>5. 일과 놀이의 균형</h2>\n<p>대학에서 처음으로 ‘Hello World’를 출력하는 프로그램을 만든 후, 나는 거의 프로그래밍에 중독되다시피 했다. 처음에 내 실력은 별것 아니었고 코드도 무척 지저분했다(하지만 배움의 과정이니까 괜찮다) 업계에서 일하기 시작한 후 시간이 지나면서 내 실력은 향상했다. 하지만 나는 저녁과 주말을 모두 사이드 프로젝트를 진행하는데 할애하곤 했다. 난 그게 무척 좋았다. 난 내가 정말로 하고 싶은 일을 찾았다고 느꼈고 멈출 수가 없었다.</p>\n<p>이런 활동 중 일부는 성공적인 오픈소스 프로젝트가 되었고 코드 베이스에도 많은 이바지를 했다. 그리고 그것은 나에게 큰 자부심을 줬기에 지금까지 해 온 활동을 계속하게 되었다. brilliantJS13games 이나 JS1k 같은 자바스크립트 대회에도 참가했고 SitePoint에 스크린 캐스트도 꾸준히 올렸다. 심지어 몇몇 큰 기술 회사와 면접도 보았기에 많은 연습과 공부가 병행되었다.</p>\n<p>그리고 이 모든 일이 끝나고 난 후, 나는 완전히 탈진(burnout) 상태가 되어버렸다. 프로그래밍을 위한 동기를 완전히 잃어버렸고 여유 시간이 생겨도 프로그래밍을 하고 싶은 마음이 들지 않았다. 게다가 때때로 기술과 프로그래밍에서 벗어나게 해 주었던 나의 취미들은 뒷전으로 밀려나 있었다. 난 그저 코드 작성 기계일 뿐이었다.</p>\n<p>기회가 있을 때 도전하는 것은 중요하다. 이는 내가 개발자로서 성장할 수 있게 할 뿐만 아니라 경력도 키워주었다. 하지만 휴식은 필수다. 당신은 인간이기에 우리의 진화론적인 기원을 생각해 볼 때 충분한 휴식이 없다면 추상적인 지식과 일을 배울 수 있는 능력은 자연스럽게 줄어들게 된다.</p>\n<p>만약 탈진 증후군이 나타날 것 같다면 잠시 일에서 물러서서 쉬어야 한다. 단지 1~2주일을 쉬라는 것이 아니라 한 달에서 두 달 정도의 휴식을 얘기하는 것이다. 믿어보길 바란다. 새로운 직장에 지원할 준비가 되었다면 본인 스스로 알게 될 것이다. 그리고 당신이 지금까지 만들어 왔던 프로젝트는 어디에도 가지 않는다.</p>',timeToRead:6,fields:{tagSlugs:["/tags/소프트웨어-개발/","/tags/코딩/","/tags/번역f/"]},frontmatter:{title:"[번역] 지난 5년 동안 소프트웨어 개발자로서 내가 배운 것들",tags:["소프트웨어 개발","코딩","번역F"],date:"2017-10-29",description:"[번역] 5년동안 소프트웨어 개발자로서 배우고 느꼈던 내용들. 자기 자신을 깊은 곳까지 밀어넣어라, 타인의 얘기를 잘 듣는 열린 자세를 가져라. 하지만 자기주장을 펴는 걸 두려워하지는 마라, 변화를 받아들여라, 하지만 시류에 편승하지는, 일과 놀이의 균형을 맞춰라",mainImage:"/images/post-main/2017-10-25-what-i-ve-learned-over-5-years-as-a-software-developer.png",mainImageAlt:null}}},pathContext:{slug:"/posts/2017-10-29-what-i-ve-learned-over-5-years-as-a-software-developer/"}}}});
//# sourceMappingURL=path---posts-2017-10-29-what-i-ve-learned-over-5-years-as-a-software-developer-0ce5cb30698ef3e5a003.js.map
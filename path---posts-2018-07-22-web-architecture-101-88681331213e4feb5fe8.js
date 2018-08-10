webpackJsonp([0xc9de71dcfa81],{715:function(e,a){e.exports={data:{site:{siteMetadata:{title:"rhostem.github.io",url:"https://rhostem.github.io",author:"rhostem",description:"프론트엔드 웹 개발 기술 블로그"}},markdownRemark:{html:'<p>이 글은 <a href="https://engineering.videoblocks.com/@jonathan_fulton">Jonathan Fulton</a>의 <a href="https://engineering.videoblocks.com/web-architecture-101-a3224e126947">Web Architecture 101</a>을 번역한 글입니다.</p>\n<hr>\n<p>위의 다이어그램은 우리 Storyblocks의 아키텍쳐를 꽤 잘 나타낸다. 당신이 경험 많은 웹 개발자가 아니라면 아마도 꽤 복잡하다고 생각할 것이다. 각각의 컴포넌트를 자세히 살펴보기 전에 아래의 글을 살펴보면 조금 더 다가서기 쉬워질 것이다.</p>\n<blockquote>\n<p>사용자가 구글에서 “짙고 아름다운 안개와 숲 속의 햇살”을 검색한다. <a href="https://www.storyblocks.com/stock-image/strong-beautiful-fog-and-sunbeams-in-the-forest-bxxg0dvxdzj6gt9ini">첫 번째 결과</a>는 Storyblocks, 우리의 메인 사진 저장 및 벡터 사이트에서 나온다. 사용자는 결과를 클릭하고 브라우저는 사진 상세 페이지로 이동한다. 보이지 않지만, 브라우저 내부에서는 DNS 서버에 Storyblocks에 어떻게 접속할 수 있는지 물어본 후 Storyblocks에 접근을 시도한다.</p>\n<p>브라우저의 요청은 우리의 로드 밸런서에 도착하고, 서비스를 운영하기 위해 동작 중인 10여 개의 서버 중 하나를 랜덤하게 선택해서 요청을 처리한다. 웹 서버는 캐싱 서비스에서 필요한 이미지 정보를 가져온 후 더 필요한 정보는 데이터베이스에 요청한다. 사용자에게 전달한 이미지의 컬러 프로필이 아직 만들어지지 않았음을 인지한 후 “컬러 프로필” 잡(job)을 잡 큐에 보낸다. 잡 서버는 큐에 추가된 것들을 비동기적으로 처리한 후 데이터베이스에 결과를 적절히 업데이트한다.</p>\n<p>다음, 우리는 전체 텍스트(full-text) 검색 서비스에 사진의 제목을 전달해서 비슷한 사진들을 찾으려고 한다. 사용자가 Storyblocks의 멤버로 로그인했다면 그의 계정 정보를 계정 서비스에서 가져온다. 일련의 작업들이 끝난 후, 데이터 <a href="https://www.pubnub.com/blog/2014-11-14-what-is-a-data-firehose-api/">firehose</a>에 페이지 뷰 이벤트를 발생시켜서 우리의 클라우드 스토리지 시스템에 기록하고, 그 정보는 분석가들이 비즈니스와 관련된 질의에 답하는 데 사용할 수 있도록 데이터 저장소(warehouse)에서 사용된다.</p>\n<p>서버는 이제 HTML로 화면을 렌더링한 후 로드 밸런서를 통해서 사용자의 브라우저로 보낸다. 페이지는 CDN에 연결된 우리의 클라우드 스토리지 시스템에서 가져오는 자바스크립트와 CSS 파일을 포함하고 있다. 그래서 브라우저는 그 콘텐츠를 가져오기 위해 CDN에 접속한다. 마지막으로, 브라우저는 사용자가 볼 수 있는 콘텐츠를 렌더링한다.</p>\n</blockquote>\n<p>이제 나는 각각의 컴포넌트들을 하나씩 소개할 것이다. 이는 당신이 앞으로 웹 아키텍쳐에 대해 생각해 볼 때 도움이 될 수 있는 좋은 심리 모델을 선사할 것이다. 나중에는 다른 시리즈의 글을 통해서 Storyblocks에서 얻은 경험을 바탕으로 추천하는 구체적인 구현 방법을 제공할 생각이다.</p>\n<h2 id="1-dns"><a href="#1-dns" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1. DNS</h2>\n<p>DNS는 “Domain Name Server”의 약자며 월드 와이드 웹(WWW)이 가능하도록 만드는 기반 기술이다. 가장 기본적인 레벨의 DNS는 도메인 이름(예. google.com)에서 IP 주소(예. 85.129.83.120)로의 키/값 조회를 제공한다. 이는 당신의 컴퓨터가 알맞은 서버에 요청을 보낼 수 있는 경로를 찾는 데 필요하다. 전화번호에 비유하자면 도메인 이름과 IP 주소의 차이는 “Jone Does에게 전화하기”와 “201-867–5309에 전화하기”의 차이다. Jone의 전화번호를 찾기 위해 전화번호부가 필요한 것처럼 도메인에서 IP 주소를 찾기 위해서는 DNS가 필요하다. DNS를 인터넷의 전화번호부라고 생각하면 된다.</p>\n<p>여기서 더 깊게 들어갈 수 있는 많은 내용이 있지만, 입문 수준의 소개에는 크게 중요하지 않기 때문에 이쯤에서 다음으로 넘어가도록 하자.</p>\n<h2 id="2-로드-밸런서"><a href="#2-%EB%A1%9C%EB%93%9C-%EB%B0%B8%EB%9F%B0%EC%84%9C" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2. 로드 밸런서</h2>\n<p>로드 밸런싱에 대해 자세히 알아보기 전에, 한발 뒤로 물러나서 수평적 vs 수직적 애플리케이션 확장(scaling)에 관해서 얘기해보자. 이들은 어떤 의미이며 어떤 차이가 있는가? 간단히 <a href="https://stackoverflow.com/questions/11707879/difference-between-scaling-horizontally-and-vertically-for-databases">StackOverflow의 답변</a>에 따르면 <em>수평적</em> 확장은 더 많은 장치를 새로 추가하는 것이고, <em>수직적</em> 확장은 이미 사용하고 있던 장치의 성능(예. CPU, RAM)을 높이는 것이다.</p>\n<p>웹 개발을 한다면 당신은 아마 언제나 수평적 확장을 원하게 될 텐데, 그 이유는 간단히 말해 서비스 중단을 막기 위해서다. 서버는 언제든지 고장이 날 수 있다. 네트워크는 속도가 느려질 수 있다. 데이터 센터에 정전이 발생할 수도 있다. 1대 이상의 서버를 가짐으로써 이러한 상황에 대비할 수 있으며 서비스는 멈추지 않고 계속 제공된다. 달리 말하면 ‘오류 내성’이 생긴다. 두 번째로, 수평적 확장은 애플리케이션 백엔드(웹 서버, 데이터베이스, 서비스 X, 기타 등등)들을 각각 다른 서버에서 돌림으로서 서로가 최소한으로 결합할 수 있도록 한다. 마지막으로, 수직적 확장은 언젠가 한계에 부딪힌다. 세상에는 당신의 앱이 하는 일을 모두 처리할 수 있을 만큼 강력한 성능을 가진 컴퓨터는 없다. 전형적인 사례로 구글의 검색 플랫폼을 생각하면 된다. 물론 구글 검색은 매우 큰 규모지만 수직적 확장의 한계는 작은 회사에도 적용될 수 있다. Storyblocks를 예로 들자면 서비스를 위해 150에서 400개의 AWS EC2 인스턴스를 동시에 구동하고 있다. 이 정도 규모를 수직적 확장으로 가능하게 하려 한다면 무척 힘든 일이 될 것이다.</p>\n<p>좋다, 이제 로드 밸런서로 돌아가자. 그들은 수평적 확장이 가능하도록 만드는 마술이다. 그들은 들어오는 요청을 복제/미러링 된 수많은 애플리케이션 서버 중의 하나로 연결하고 서버의 응답을 다시 클라이언트로 보낸다. 모든 서버는 특정 요청을 같은 방식으로 처리해야 하며, 로드 밸런서는 이들 서버에 과부하가 걸리지 않도록 들어오는 요청을 적절히 분배해주는 일을 한다.</p>\n<p>그게 전부다. 개념적으로 로드 밸런서는 꽤 직관적이다. 그 이면은 확실히 복잡하지만 입문에서는 거기까지 들어갈 필요는 없다.</p>\n<h2 id="3-웹-애플리케이션-서버"><a href="#3-%EC%9B%B9-%EC%95%A0%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98-%EC%84%9C%EB%B2%84" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>3. 웹 애플리케이션 서버</h2>\n<p>고수준의 웹 애플리케이션 서버는 상대적으로 설명하기 간단하다. 그들은 사용자의 요청이 들어오면 핵심 비즈니스 로직을 실행하고 그 결과를 HTML에 담아 브라우저로 보낸다. 이 일을 하기 위해서는 보통 데이터베이스, 캐싱 계층, 잡 큐, 검색 서비스, 기타 마이크로 서비스, 데이터/로그 큐(queue) 등 무척 다양한 백엔드 인프라와 데이터를 주고받아야 한다. 앞서 언급했듯 당신은 사용자의 요청을 처리하기 위해 최소 2번, 보통 그보다 많은 횟수로 로드 밸런서에 연결될 것이다.</p>\n<p>앱 서버 구현은 특정 언어(Node.js, Ruby, PHP, Scala, Java, C# .NET, …)를 선택하고 그에 맞는 웹 MVC 프레임워크(Express for Node.js, Ruby on Rails, Play for Scala, Laravel for PHP, …).를 선택해야 한다는 사실을 알아야 한다. 하지만 이들 언어와 프레임워크에 대해 깊이 알아보는 것은 이 글의 범위를 뛰어넘는다.</p>\n<h2 id="4-데이터베이스-서버"><a href="#4-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4-%EC%84%9C%EB%B2%84" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>4. 데이터베이스 서버</h2>\n<p>모든 모던 웹 애플리케이션은 정보를 저장하기 위해 한 개 이상의 데이터베이스를 사용한다. 데이터베이스는 데이터 구조를 정의하고, 새로운 데이터를 삽입하고, 데이터를 찾고, 데이터를 수정하거나 삭제하고, 데이터로 연산을 수행하는 등의 일을 한다. 대부분은 웹 앱 서버는 잡 서버의 역할을 하는 데이터베이스 서버와 직접 통신한다. 거기에 더해서 각각의 백엔드 서비스는 애플리케이션의 다른 영역과 분리된 자신만의 데이터베이스를 가지고 있을 수 있다.</p>\n<p>나는 이 글에서 각각의 아키텍쳐 요소와 관련된 기술을 깊이 살펴보는 일을 가능한 삼가려 하지만, 데이터베이스의 다음 단계 주제를 얘기하지 않으면 당신에게 해가 될 것 같다. 그것은 SQL과 NoSQL이다.</p>\n<p>SQL은 “Structured Query Language”의 약자이며, 1970년대에 더 많은 사람들이 사용할 수 있도록 관계형 데이터 세트 질의(query)의 표준으로 만들어졌다. SQL 데이터베이스는 공통 ID(보통 숫자를 사용)로 연결된 테이블에 데이터를 저장한다. 간단한 예제로 사용자의 과거 주소 정보를 저장하는 과정을 살펴보자. 아마 사용자의 아이디로 연결된 user와 user<em>address라는 2개의 테이블을 사용할 것이다. 아래의 이미지를 보자. 두 테이블은 user</em>adress 의 user_id 컬럼이 user의 id 컬럼을 참조하고 있는 외래 키(foreign key)이기에 연결된 것이다.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/01-71884592024c6b717afbe7b875cf7cf9-960a6.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 451px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 37.91574279379157%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABXklEQVQoz42Su27CQBBFnZAoTYr8RD4mriIkaKiS/3ATKUX+hZ7KFRRGdOYtHhLiJRBYAlyY9bKTe5eYRKkYaXQ9sztnZ0Z26vW6DAYD6fV61ofDIWO13W6l0Wh4DiwMwwdquVwuICfValVVKhXxfV+63W5WY90RERPHsUFgNpuNYQxXcBmPx58E4dMCASju93vBY2o0Gsl6vZY0TeWv8bLGJd1sNjXAmvHpdEp42Gq1vn6A91Q8mscZQarf78tkMrFdoRFhPgNaS5JE/lsURR8EeZ73RA2C4I351WqVclTC2CmBWuszEAcuXnOn06mLHbrtdpv+0ul0XrGrZ4JKpdIjtVarvWdAwrLdGWMsjOpcY7h7Q8WoeRZmI9Nns5kopX5HRqu54/GYQ/LiiG+py+XSgtDtHRU7K7IIecU/Ihsbu5bD4XAGXmMA5KhYS4FFu91OLRYLoc/nc0H+0uE3Rd29FEbneEIAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px #ffffff;"\n        alt="01"\n        title=""\n        src="/static/01-71884592024c6b717afbe7b875cf7cf9-960a6.png"\n        srcset="/static/01-71884592024c6b717afbe7b875cf7cf9-9b6e2.png 265w,\n/static/01-71884592024c6b717afbe7b875cf7cf9-960a6.png 451w"\n        sizes="(max-width: 451px) 100vw, 451px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>만약 SQL에 대해서 잘 알지 못한다면 나는 Khan Academy에서 <a href="https://www.khanacademy.org/computing/computer-programming/sql">찾을 수 있는 것</a>같은 같은 튜토리얼을 공부하길 강력히 권한다. SQL은 모든 웹 개발에서 사용되기 때문에 애플리케이션을 제대로 설계하기 위해서는 최소한 기본은 알아야 한다.</p>\n<p>NoSQL, “Non-SQL”의 약자인 이것은 대규모 웹 애플리케이션에 의해 생성되는 많은 양의 데이터를 처리하기 위해 등장한 최신 데이터베이스 기술의 집합이다(SQL에서 파생된 기술 대부분은 수평적 확장이 어려우며 특정 지점에 도달하면 수직적 확장만이 가능하다). NoSQL에 대해서 전혀 알지 못한다면 다음과 같은 고수준의 안내서와 함께 시작하길 추천한다.</p>\n<ul>\n<li><a href="https://www.w3resource.com/mongodb/nosql.php">https://www.w3resource.com/mongodb/nosql.php</a></li>\n<li><a href="http://www.kdnuggets.com/2016/07/seven-steps-understanding-nosql-databases.html">http://www.kdnuggets.com/2016/07/seven-steps-understanding-nosql-databases.html</a></li>\n<li><a href="https://resources.mongodb.com/getting-started-with-mongodb/back-to-basics-1-introduction-to-nosql">https://resources.mongodb.com/getting-started-with-mongodb/back-to-basics-1-introduction-to-nosql</a></li>\n</ul>\n<p>나는 당신이 SQL은 반드시 공부해야 한다는 사실을 명심하고 있었으면 한다. 왜냐하면, 이 소프트웨어 업계는 NoSQL 데이터베이스조차도 SQL 인터페이스로 데이터를 조정하고 있기 때문이다. 아직은 SQL의 지배에서 벗어날 방법은 없다.</p>\n<h2 id="5-캐싱-서비스"><a href="#5-%EC%BA%90%EC%8B%B1-%EC%84%9C%EB%B9%84%EC%8A%A4" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>5. 캐싱 서비스</h2>\n<p>캐싱 서비스는 정보를 거의 <a href="https://stackoverflow.com/a/697935">O(1) 시간</a> 안에 찾을 수 있는 단순한 키/값 데이터 저장소를 제공한다. 애플리케이션은 캐싱 서비스를 통해 자원이 많이 소모되는 연산의 결과를 다시 계산하지 않고 캐시에서 가져옴으로써 효율을 높인다. 애플리케이션은 데이터베이스의 쿼리 결과, 외부 서비스 호출 결과, 주어진 URL의 HTML 등을 캐시에 저장한다. 다음은 실무에서 사용되는 몇몇 예제다.</p>\n<ul>\n<li>구글은 일반적인 검색어인 ‘dog’나 ‘Taylor Swift’를 사용한 검색을 매번 실행하기보다는 결과를 캐시 한다.</li>\n<li>페이스북은 당신이 로그인할 때 포스트 데이터, 친구 목록 등 많은 데이터를 캐시 한다. 페이스북의 자세한 캐시 기술은 <a href="https://medium.com/@shagun/scaling-memcache-at-facebook-1ba77d71c082">여기</a>에서 읽어볼 수 있다.</li>\n<li>Storyblocks는 React 서버 사이드 렌더링으로 생성된 HTML, 검색 결과, 검색어 입력 자동완성 결과 등을 캐시 한다.</li>\n</ul>\n<p>가장 널리 사용되는 캐싱 서버 기술 2개는 Redis와 Memcache다. 나는 다른 포스트에서 이들에 대해 더 자세히 다룰 예정이다.</p>\n<h2 id="6-잡-큐job-queue--서버"><a href="#6-%EC%9E%A1-%ED%81%90job-queue--%EC%84%9C%EB%B2%84" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>6. 잡 큐(job queue) &#x26; 서버</h2>\n<p>거의 모든 웹 애플리케이션은 사용자의 요청에 대한 응답과는 직접적인 관련이 없는 작업을 백그라운드에서 비동기적으로 실행할 필요가 있다. 예를 들어 구글은 검색 결과를 얻기 위해 인터넷에서 데이터를 크롤링하고 인덱싱할 필요가 있다. 이는 당신이 검색을 요청할 때마다 실행되지 않으며 구글의 검색 엔진은 비동기적으로 웹을 크롤링하고 있다.</p>\n<p>비동기적인 작업을 가능하게 하는 여러 가지 아키텍쳐가 있지만 가장 널리 사용되는 것은 “잡 큐” 아키텍처다. 이는 2개의 컴포넌트로 구성된다. “잡”으로 이루어진 큐, 그리고 큐에 들어있는 잡을 실행하는 1개 이상의 잡 서버가 그것이다.</p>\n<p>잡 큐는 비동기적으로 실행될 잡 목록을 저장하고 있다. 대부분 애플리케이션이 결국에는 우선순위가 적용된 큐가 필요하게 되지만 가장 단순한 것은 first-in-first-out(FIFO) 큐다. 앱이 정기적인 일정이나 사용자에 의해 발생한 잡을 실행할 필요가 생기면, 그에 알맞은 잡을 큐에 추가하기만 하면 된다.</p>\n<p>Storyblocks를 예로 들자면, 우리의 마켓플레이스를 지원하는 데 필요한 내부 작업에 잡 큐를 사용해서 힘을 실어주고 있다. 잡 큐를 통해 영상과 사진을 인코딩하고, 메타데이터 태그를 붙이기 위해 CSV를 처리하고, 사용자 통계를 취합하고, 비밀번호 재설정을 위한 이메일을 전송하는 등의 일을 한다. 우리는 간단한 FIFO 큐로부터 시작했지만 빠른 처리 속도가 중요한 민감한 비밀번호 재설정과 같은 작업을 위해 우선순위 큐로 업그레이드하게 되었다.</p>\n<p>잡 서버는 잡을 처리 한다. 그들은 잡 큐를 가져와서 할 일이 있는지 확인하고, 있다면 큐에서 잡을 뽑아내서 실행한다. 잡 서버로 사용할 수 있는 언어와 프레임워크는 너무나 다양해서 이 글에서는 자세히 다루지 않겠다.</p>\n<h2 id="7-전체-텍스트-검색-서비스"><a href="#7-%EC%A0%84%EC%B2%B4-%ED%85%8D%EC%8A%A4%ED%8A%B8-%EA%B2%80%EC%83%89-%EC%84%9C%EB%B9%84%EC%8A%A4" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>7. 전체 텍스트 검색 서비스</h2>\n<p>대부분은 아니지만 많은 웹 앱이 사용자가 텍스트 입력(보통 ‘쿼리’라고 불리는)을 입력을 하면 검색을 하고 가장 ‘관련 있는’ 결과를 보여주는 기능을 제공한다. 이 기능을 가능하게 하는 것은 보통 <a href="https://en.wikipedia.org/wiki/Full-text_search">“전체 텍스트 검색”</a>이라고 불린다. 전체 텍스트 검색은 쿼리 키워드를 포함하는 문서를 빠르게 찾기 위해 역 인덱스(inverted index)를 활용한다.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/02-49329379ca1bedce087274aa83968e5e-6cccc.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 561px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 33.68983957219251%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAAB1ElEQVQoz12RzW7TQBDH9wLHKIhjxRtYHCxxhkoVCHgBJJ6EC7wE4oIoXCsQTSkSrcpHoEFqklaFKlGctrE3dhM76ySuY3v9sRkP60AR4if9Z/avHe3OzpIvR1N1baelvtpoqC8rdXW1sqc+f1NTPzQGaq0T3tg6GJfJH7rPnl7lzfo5HP1Ac2cb2pW32N5YR/dbFZODJkbNOpITO4ZPex2oNrvw/VBfqNroQpv6wgkR9/XsftZ5tOQaq2Xj9ceSrmm+cXyM/mQMtmWi1mqhLn08m2EaRUiyLENK+8h5jAUAOeZ5jkIIKPzQw5XMrtxMRlt3Nh+8u0wpDWZhiBHnMJlMkLkuhtLzOMY4SZBwudHr9cA0zUW2ZKbUKNYiB0Dbw2XhvL+djauPCVkmLhuFQRDIiwEi2VHMOf4LKYLjOGjbNjLG0HUZFoWSvAhTjivpcP1WwrbvfX34+RJzHN+yLAxms7msA3k4yBf9FRFinhq0n54Nhmm/b6ZUajC00znkixkwP7/r/Xxyzeu/uHK2WSuNHCe96EaOBf+HOJNA0a2RYo8DZTA6/y3mK8yLFDaNrveGQenil73d3bJpGPv66elJHEUd3/O0NOZaPhcaZJkGQmi/AORUz5ISqWa/AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px #ffffff;"\n        alt="01"\n        title=""\n        src="/static/02-49329379ca1bedce087274aa83968e5e-6cccc.png"\n        srcset="/static/02-49329379ca1bedce087274aa83968e5e-4e782.png 265w,\n/static/02-49329379ca1bedce087274aa83968e5e-6a6dc.png 530w,\n/static/02-49329379ca1bedce087274aa83968e5e-6cccc.png 561w"\n        sizes="(max-width: 561px) 100vw, 561px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \n<em>3개의 문서의 제목이 어떻게 역 인덱스로 변환되어서 특정 키워드를 포함한 제목을 가진 문서를 찾을 수 있도록 활용하는지를 보여주는 예제다. 보통 ‘in’, ‘the’, ‘with’ 같은 일반적인 단어(stop 단어라고 불린다)는 역 인덱스에 포함되지 않음을 주의 깊게 보라.</em></p>\n<p>어떤 데이터베이스에서는 전체 텍스트 검색을 바로 사용할 수 있지만(MySQL은 전체 텍스트 검색을 지원한다), 보통 역 인덱스를 연산하고 쿼리 인터페이스를 제공하는 “검색 서비스”를 분리해서 운영하는 사례가 많다. 오늘날 가장 인기 있는 전체 텍스트 검색 플랫폼은 <a href="https://www.elastic.co/products/elasticsearch">Elasticsearch</a>지만 <a href="http://sphinxsearch.com/">Sphinx</a> 또는 <a href="http://lucene.apache.org/solr/features.html">Apache Solr</a> 같은 다른 선택지도 있다.</p>\n<h2 id="8-서비스"><a href="#8-%EC%84%9C%EB%B9%84%EC%8A%A4" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>8. 서비스</h2>\n<p>앱이 특정 규모에 도달하면 별도의 애플리케이션으로 분리해서 운영하기 위핸 ‘서비스’가 생기게 된다. 외부에는 노출되지 않지만, 앱과 다른 서비스와는 연동된다. Storyblocks을 예로 들자면 몇 개의 운영, 계획 서비스를 하고 있다.</p>\n<ul>\n<li><strong>계정 서비스</strong>는 우리의 모든 사이트의 사용자 정보를 저장해서 교차 판매 기회를 더 쉽게 제공하고, 더 일관적인 사용자 경험을 가능하게 한다.</li>\n<li><strong>컨텐츠 서비스</strong>는 우리의 모든 비디오, 오디오, 이미지의 메타데이터를 저장한다. 또 콘텐츠 다운로드 인터페이스와 다운로드 이력을 보여주는 기능을 제공한다.</li>\n<li><strong>결제 서비스</strong>는 고객이 카드로 결제할 수 있는 인터페이스를 제공한다.</li>\n<li><strong>HTML → PDF 서비스</strong>는 HTML을 PDF로 변환하는 간단한 인터페이스를 제공한다.</li>\n</ul>\n<h2 id="9-데이터"><a href="#9-%EB%8D%B0%EC%9D%B4%ED%84%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>9. 데이터</h2>\n<p>오늘날, 기업은 데이터를 어떻게 다루느냐에 따라 살고 죽는다. 최근 거의 모든 앱은 특정 규모에 도달하면 데이터를 제어, 저장, 분석하기 위해 데이터 <a href="https://en.wikipedia.org/wiki/Pipeline_(computing)">파이프라인</a>을 사용한다. 전형적인 파이프라인은 3개의 주요 단계를 가진다.</p>\n<ol>\n<li>앱은 보통 사용자 상호작용으로 발생한 데이터를 데이터 ‘firehose’라 불리는 곳으로 전달한다. 그것은 데이터를 받아들이고 처리할 수 있는 스트리밍 인터페이스를 제공한다. 가공되지 않은 원시 데이터는 변형되거나(transformed) 추가 정보와 함께(augmented) 다른 firehose로 전달된다. AWS Kinesis와 Kafka는 이러한 작업을 위한 대표적인 기술이다.</li>\n<li>원시 데이터와 최종 데이터는 모두 클라우드 스토리지에 저장된다. AWS Kinesis는 원시 데이터를 AWS의 클라우드 스토리지(S3)에 저장할 수 있도록 매우 쉽게 사용할 수 있는 ‘firehose’로 불리는 설정을 제공한다.</li>\n<li>변형/추가된 데이터는 종종 분석을 위해 데이터 웨어하우스(DW)에서 로드된다. 우리는 AWS Redshift를 사용한다. 큰 기업에서는 Oracle이나 기타 독점적인 웨어하우스 기술을 사용하고 있지만, 스타트업 업계에서는 RedShift를 많이 사용하고 있으며 점유율도 계속 오르고 있다. 만약 데이터가 충분히 축적되었다면 Hadoop같은 NoSQL MapReduce 기술이 분석을 위해 필요하게 될 것이다.</li>\n</ol>\n<p>처음에 제시한 아키텍쳐 다이어그램에서는 빠진 단계가 있다. 데이터 웨어하우스에서 앱과 서비스에서 사용중인 데이터베이스에서 데이터를 불러오는 과정이다. 예를 들어 Storyblocks에서 우리는 VideoBlocks, AudioBlocks, Storyblocks, 계정 서비스, 그리고 컨트리뷰터 포털 데이터베이스를 매일 밤 Redshift로 불러온다. 이는 사용자 상호작용 이벤트 데이터와 핵심 비즈니스 데이터를 함께 둠으로써 우리의 분석가에게 총체적인 데이터 집합을 제공한다.</p>\n<h2 id="10-클라우드-스토리지"><a href="#10-%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C-%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>10. 클라우드 스토리지</h2>\n<p><a href="https://aws.amazon.com/what-is-cloud-storage/">AWS에 의하면</a> “클라우드 스토리지는 인터넷을 통해 데이터를 저장, 접근, 공유할 수 있는 단순하고 확장성 있는 방법”이다. 당신은 로컬 파일 시스템에 저장할 수 있는 거의 모든 것을 RESTful API를 사용해서 HTTP를 통해 클라우드에 저장하고 접근할 수 있다. 아마존의 S3는 현재로써는 가장 인기 있는 클라우드 스토리지이며 Storyblocks에서는 비디오, 사진, 오디오 데이터, CSS, 자바스크립트, 사용자 데이터 등을 저장하기 위해 S3에 크게 의존하고 있다.</p>\n<h2 id="11-cdn"><a href="#11-cdn" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>11. CDN</h2>\n<p>CDN은 ‘Content Delivery Network’의 약자며 HTML, CSS, 자바스크립트, 이미지 같은 정적인 데이터를 웹을 통해 1개의 원본(origin) 서버를 사용하는 것보다 더 빠르게 제공하기 위한 기술이다. 이는 콘텐츠를 전 세계의 많은 ‘엣지(edge)’ 서버에 분산시킴으로써 동작한다. 그리고 사용자는 데이터를 원본 서버 대신 가장 가까운 엣지 서버에서 다운로드한다. 예를 들어 아래의 이미지처럼 스페인에 있는 사용자가 뉴욕에 있는 원본 서버의 웹페이지에 접근하면 정적인 데이터는 대서양을 가로지르는 매우 느린 HTTP 요청을 하는 대신 영국에 있는 CDN ‘엣지’ 서버에서 빠르게 가져오는 것이다.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/03-6cd8a4208b3b03930f1dc92e89b6ffc2-548c5.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 918px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 44.77124183006536%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAIAAAC9o5sfAAAACXBIWXMAAAsSAAALEgHS3X78AAABp0lEQVQozzVRXW/aMBTN//8re+m2h6nSJnWdBqJdQKEQoA0pCZAYbMcfie04duI5Zbvyk8+55xydGxjbM6Fp016IQFztCxpnGDHlnBvGcaLtPAFS6dEzajz6Dljfj1jwVpC0pIhJUDVKmwLXtdQe8LBsjVfZHitAhH+16kjdQqZsP3hpLxqsc3y48KJSe8DNx+/o6Rzi7ZXIC5Vxjq/UJ2J+0zpjB9M5nV/LDLAgPpHlS7LfbhsKrWCDblwnGlbtz5gK7ZejBMyXm5xjqrnspbRSWZWluyOsg/UBZUU1dMJ1zSCJ5dBJjMrT2ieR2hfhCULp/4HGMcbG72UOeSA6c0v7D3Gudy6B8ilFCWDW9FqbW3cfFY4ERNUqJVGCAwiQIaTj9bhmjM4znh7+PMXTH8/pvkCYnVaxKsGg9U392oJJuv0azb+tFkGZZU+/w3DxVnHppeluB6Io/DV9/HIfr5LedttNNFssDtnB2w62fwW7h5fJ5+n3u9nPQHA8CZcP0/Ax3LyeKjv4Qi0kFaT0DJm3mh/TT7PZ3XMY7s60Ge/PKsYrWhb4L+JV8xIKassPAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px #ffffff;"\n        alt="CDN vs non-CDN"\n        title=""\n        src="/static/03-6cd8a4208b3b03930f1dc92e89b6ffc2-548c5.png"\n        srcset="/static/03-6cd8a4208b3b03930f1dc92e89b6ffc2-1d4c2.png 265w,\n/static/03-6cd8a4208b3b03930f1dc92e89b6ffc2-7dadd.png 530w,\n/static/03-6cd8a4208b3b03930f1dc92e89b6ffc2-548c5.png 918w"\n        sizes="(max-width: 918px) 100vw, 918px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \n<em><a href="https://www.creative-artworks.eu/why-use-a-content-delivery-network-cdn/">출처</a></em></p>\n<p>CDN에 대한 더 자세한 안내는 <a href="https://www.creative-artworks.eu/why-use-a-content-delivery-network-cdn/">이 글을 살펴보길 바란다</a>. 일반적인 웹 앱은 CSS, 자바스크립트, 이미지, 비디오 및 다른 정적인 데이터를 제공하기 위해 항상 CDN을 사용해야 한다. 어떤 앱은 정적인 HTML 페이지를 제공할 때도 CDN을 사용하기도 한다.</p>\n<h2 id="맺음말"><a href="#%EB%A7%BA%EC%9D%8C%EB%A7%90" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>맺음말</h2>\n<p>웹 아키텍쳐 입문은 여기서 끝이다. 이 글이 도움되었으면 좋겠다. 나는 강의를 통해 웹 아키텍쳐의 몇몇 컴포넌트를 깊이 있게 살펴보는 시리즈를 내후년 안에 제공하려 한다.</p>',timeToRead:11,fields:{tagSlugs:["/tag/웹_개발","/tag/소프트웨어_개발","/tag/아키텍쳐","/tag/번역"]},frontmatter:{title:"[번역] 웹 아키텍쳐 입문",subTitle:"내가 웹 개발을 시작했을 때 알았으면 했던 기본 아키텍쳐 개념들",tags:["웹 개발","소프트웨어 개발","아키텍쳐","번역"],date:"2018-07-28",mainImageAlt:"모던 웹 애플리케이션 아키텍쳐 개요",description:"",mainImage:{childImageSharp:{sizes:{aspectRatio:1.5795724465558194,base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAADLklEQVQ4y31SfUgTcRi+Ob/6sNK+sOwTrEgtlCIiiij7ozRQokiofwosIjBDQ6nUiL4oiMigjD5WWU5nba3T7TZvW+1uc7pNp/u4824ft3abu4VpZELEdb9S++7553fv87zv83vuvYPYt+EHHsJzMxqNPnI4HMUzUmamUBRVTxBEA0mSD10udyUkoLbyfA7hpBwsG6IikUGDz+fLATzDMCIYhqFJhEORyzRN1XBR7irhIfIFShxhmdIeq6VqgHCe6nfY9glc8uz5qWkcx5XQNH0nFotdZJjgYjAvlUpFYrEY+ieUTzsW6LtCByUK/JhEbiyHcd8uwKtk6Do1rDkulTaVCYlKe532hRMzPM9Dep1KNFHED43y4rGR0SRQd+lcS3BbUCLvsDepcY/MwYxVAJ7oo7N6exwSk9l0F8dwuQZGawQamKRMGJ+urvg1HcrxovI91VN+T11UVBw3PjyJXRv2zclcmZl8q/56hglD53JRJvGb8JFsNw+54O7PfqRVfbtuEYLojmKkXmNwoZiRMJgxyqAAfW2y9kNs0DtAkj17QC1/9nLHYNiHvYsx72PRwFiYpXG9DkmCht1I19tuuXnMiz5fHA+lX2i4uEVrUz9TYgqJygI36/qRM8DAbNJvEwZ5v9d1BNRWs/nah+EI7/e5vnCDfl7QGr4lHA60rdArL+e9aq5b6+yULIX+D6DHj+8+bjDszRVSbgoFyTWTHSG3xhV0K+yRgfYA//HNCcOTlwcGlHAp0M5WVExdlpcR/ynCJ9+71JgBzA7X7p22uSRrSu727Gk/3wS+tJfq/zOCpUlWNmI0ngTPh/aXzExfPm9qfnZhmgpVn7UGOxlht2x3oHMIpw2axHQoQTAS2fuwOC/t/G5Qf/UR+EETbmxcn5w7KzV1VSI0NzNteurvF8lMjavNFFbdqmspx0ljFdqvLpjQtu7e9KOxpaE5P9qhtYURFcuhWmbEgHqsj5t2mrS9je0yrU4rf404MOL+3xZaWFAs+oO8sTUjIaZFKvtapFWeF61nBMPSp+eupLst/iKd0liiVbw+QHYHCsf3JA6NsmJwglcF3I78gl/8vgIWmLmUe1D7bwAAAABJRU5ErkJggg==",sizes:"(max-width: 665px) 100vw, 665px",src:"/static/main-98c2b9b44b2f9d34ca9d316aff14a8ae-8e284.png",srcSet:"/static/main-98c2b9b44b2f9d34ca9d316aff14a8ae-f4a79.png 400w,\n/static/main-98c2b9b44b2f9d34ca9d316aff14a8ae-8e284.png 665w"}}}}}},pathContext:{slug:"/posts/2018-07-22-web-architecture-101/"}}}});
//# sourceMappingURL=path---posts-2018-07-22-web-architecture-101-88681331213e4feb5fe8.js.map
webpackJsonp([24821313258508],{883:function(a,n){a.exports={data:{site:{siteMetadata:{title:"rhostem.github.io",url:"https://rhostem.github.io",author:"rhostem"}},markdownRemark:{html:'<p>웹사이트를 서버에 배포할 때 FTP를 통해 직접 업로드하려면 Filezilla처럼 UI를 제공하는 앱을 사용하거나 커맨드라인 명령어를 사용한다. 하지만 Filezilla는 태스크 관리를 통한 자동화를 지원하지 않고 커맨드라인 명령어는 복잡하고 학습 난이도가 있다. 여러 개의 파일을 폴더 단위로 업로드하려면 더욱 그렇다.</p>\n<p>그래서 Node.js에서 사용할 수 있는 모듈과 npm script를 사용해 자동화할 방법을 찾아보았다. 하지만 배포용 프로세스에 맞는 모듈은 좀처럼 찾기 어려웠다. 맥 OS의 기반이 되는 유닉스와 Node.js에 익숙하지 못해서 제대로 사용하지 못하는 모듈도 여럿 있었다. 그러다 발견한 모듈이 <a href="https://www.npmjs.com/package/dploy">dploy</a>였다.</p>\n<p>dploy는 FTP와 SFTP를 모두 지원하고 자체적으로 서버에 버전 관리용 파일을 생성해서 변경된 파일만 업로드하는 기능을 가지고 있다. 그리고 환경 설정 파일을 별도로 생성할 수 있고 복수의 업로드 설정을 저장해둘 수 있다. 웹서비스를 개발할 때 테스트 버전, 운영 버전을 구분해서 배포하는 일이 일반적이므로 무척 유용하다.</p>\n<h2 id="배포-프로세스-구축"><a href="#%EB%B0%B0%ED%8F%AC-%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4-%EA%B5%AC%EC%B6%95" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>배포 프로세스 구축</h2>\n<h3 id="dploy-설치"><a href="#dploy-%EC%84%A4%EC%B9%98" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>dploy 설치</h3>\n<p>dploy는 전역에 설치해서 사용한다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">npm i -g dploy</code></pre>\n      </div>\n<h3 id="설정-파일-생성"><a href="#%EC%84%A4%EC%A0%95-%ED%8C%8C%EC%9D%BC-%EC%83%9D%EC%84%B1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>설정 파일 생성</h3>\n<p>프로젝트 루트에 <code class="language-text">dploy.yaml</code>파일을 만든다. <code class="language-text">dploy install</code> 명령어를 사용해도 자동으로 만들어준다. 이 파일에 FTP 접속 정보와 업로드할 파일의 위치 등을 명시해준다. 아래는 예제 설정 파일이다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code class="language-yaml"><span class="token key atrule">env_name</span><span class="token punctuation">:</span>\n    <span class="token key atrule">scheme</span><span class="token punctuation">:</span> <span class="token string">"sftp"</span>\n    <span class="token key atrule">host</span><span class="token punctuation">:</span> <span class="token string">"ftp.host.pathname"</span>\n    <span class="token key atrule">user</span><span class="token punctuation">:</span> <span class="token string">"username"</span>\n    <span class="token key atrule">pass</span><span class="token punctuation">:</span> <span class="token string">"password"</span>\n    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">22</span>\n    <span class="token key atrule">path</span><span class="token punctuation">:</span>\n      <span class="token key atrule">local</span><span class="token punctuation">:</span> <span class="token string">"build/"</span>\n      <span class="token key atrule">remote</span><span class="token punctuation">:</span> <span class="token string">"www/"</span>\n    <span class="token key atrule">exclude</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">".DS_Store"</span><span class="token punctuation">]</span>\n    <span class="token key atrule">include</span><span class="token punctuation">:</span>\n        <span class="token key atrule">"build/**/*"</span><span class="token punctuation">:</span> <span class="token string">"/"</span></code></pre>\n      </div>\n<p>설정 데이터는 중첩된 키-밸류 해쉬 데이터의 구조체로 되어 있으며 최상위 키의 이름으로 업로드 환경을 구분한다.</p>\n<h4 id="scheme"><a href="#scheme" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>scheme</h4>\n<p>프로토콜이 ftp인지, sftp인지 명시한다.</p>\n<h4 id="port"><a href="#port" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>port</h4>\n<p>명시하지 않으면 ftp는 기본값으로 21, sftp는 22를 사용한다.</p>\n<h4 id="pathlocal"><a href="#pathlocal" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>path.local</h4>\n<p>현재 프로젝트에서 업로드할 폴더를 지정한다. 지정하지 않으면 프로젝트 전체가 업로드된다.</p>\n<h4 id="pathremote"><a href="#pathremote" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>path.remote</h4>\n<p>파일을 업로드할 원격 폴더를 지정한다. 지정하지 않으면 역시 루트에 저장한다.</p>\n<h4 id="exclude"><a href="#exclude" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>exclude</h4>\n<p>업로드할 때 제외할 파일들이다. 맥에서 개발을 진행한다면 운영체제에서 .DS_Store라는 이름의 숨겨진 파일을 자동으로 폴더에 생성하기 때문에 제외하는 편이 좋다. 어떤 FTP 모듈은 저런 숨겨진 파일 때문에 업로드 과정에서 오류가 발생하기도 한다.</p>\n<h4 id="include"><a href="#include" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>include</h4>\n<p>업로드에 포함할 파일이다. exclude는 값으로 배열을 지정할 수 있지만 include는 키-밸류를 지정해야 한다. 키에는 업로드할 파일을 절대 경로를 사용해 직접 지정하거나 <a href="https://github.com/isaacs/minimatch">glob</a> 패턴을 사용해서 복수의 파일을 지정한다. 그리고 밸류에는 원격 저장소에서 키에 지정한 파일이 위치할 경로를 작성한다. 이때 경로는 path.remote에서 지정한 경로에 대해 상대적인 경로로 지정해야 한다.</p>\n<p>위의 예제 설정에서 키에는 <code class="language-text">build/**/*</code>를 지정하여 build 폴더 내부의 모든 파일을 업로드하도록 했다. 그리고 밸류에는 <code class="language-text">/</code>를 지정했는데, path.remote의 값은 <code class="language-text">www/</code>이므로 업로드될 위치는 <code class="language-text">www/</code>가 된다.</p>\n<h3 id="업로드"><a href="#%EC%97%85%EB%A1%9C%EB%93%9C" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>업로드</h3>\n<p>설정 파일 작성을 완료했다면 일단 업로드는 가능하다. dploy 명령어와 이름을 조합해서 업로드를 하면 된다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">dploy env_name</code></pre>\n      </div>\n<p>이제 테스트, 운영 빌드의 업로드 환경을 구분하고 npm script를 사용해서 빌드와 배포를 자동화하는 과정이 남았다.</p>\n<h3 id="업로드-환경-추가"><a href="#%EC%97%85%EB%A1%9C%EB%93%9C-%ED%99%98%EA%B2%BD-%EC%B6%94%EA%B0%80" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>업로드 환경 추가</h3>\n<p>키-밸류로 구성된 구조체를 하나 더 작성하면 된다. 테스트와 운영 웹사이트를 동일한 서버에 배포할 경우 path.remote의 값만 다르게 지정하면 될 것이다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code class="language-yaml">test\n    <span class="token key atrule">host</span><span class="token punctuation">:</span> <span class="token string">"ftp.test.pathname"</span>\n    <span class="token key atrule">user</span><span class="token punctuation">:</span> <span class="token string">"username"</span>\n    <span class="token punctuation">...</span>\n\nprod\n    <span class="token key atrule">host</span><span class="token punctuation">:</span> <span class="token string">"ftp.prod.pathname"</span>\n    <span class="token key atrule">user</span><span class="token punctuation">:</span> <span class="token string">"username"</span>\n    <span class="token punctuation">...</span></code></pre>\n      </div>\n<h3 id="npm-script-작성"><a href="#npm-script-%EC%9E%91%EC%84%B1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>npm script 작성</h3>\n<p>프로젝트 빌드를 실행하는 npm script와 dploy 업로드 명령어를 조합해서 배포용 스크립트를 작성할 수 있다. 아래는 <a href="https://github.com/facebookincubator/create-react-app">create-react-app</a> 으로 생성한 프로젝트에서 환경 변수를 구분해서 빌드하고 배포하는 예제다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"sh -ac \'. .env.${REACT_APP_ENV}; react-scripts build\'"</span><span class="token punctuation">,</span>\n    <span class="token property">"build:test"</span><span class="token operator">:</span> <span class="token string">"REACT_APP_ENV=development npm run build"</span><span class="token punctuation">,</span>\n    <span class="token property">"build:prod"</span><span class="token operator">:</span> <span class="token string">"REACT_APP_ENV=production npm run build"</span><span class="token punctuation">,</span>\n    <span class="token property">"upload:test"</span><span class="token operator">:</span> <span class="token string">"dploy test"</span><span class="token punctuation">,</span>\n    <span class="token property">"upload:prod"</span><span class="token operator">:</span> <span class="token string">"dploy prod"</span><span class="token punctuation">,</span>\n    <span class="token property">"deploy:test"</span><span class="token operator">:</span> <span class="token string">"npm run build:test &amp;&amp; npm run upload:test"</span><span class="token punctuation">,</span>\n    <span class="token property">"deploy:prod"</span><span class="token operator">:</span> <span class="token string">"npm run build:prod &amp;&amp; npm run upload:prod"</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<hr>\n<p>FTP를 파일을 배포할 일이 있으면 Filezilla 같은 간편한 앱만 사용했었다. 업로드할 때마다 파인더에서 폴더를 찾고, 원격 폴더도 테스트인지 운영인지 확인하는 과정이 귀찮아져서 업로드 프로세스를 자동화시켜 보았다. 개발자라면 역시 <a href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself">DRY 원칙</a>을 지키고 싶어지는 법이다.</p>',timeToRead:4,fields:{tagSlugs:["/tags/ftp/","/tags/npm/","/tags/개발-도구/"]},frontmatter:{title:"dploy 모듈로 Node.js에서 FTP 배포 프로세스 자동화하기",tags:["FTP","npm","개발 도구"],date:"2017-09-01",mainImageAlt:null,description:"Node.js 환경에서 FTP에 업로드는 방식으로 웹사이트를 배포하는 경우 커맨드라인 명령어는 복잡하고 Filezilla 같은 어플리케이션은 자동화가 까다롭다. Node.js 모듈인 dploy와 npm script를 사용해서 배포 프로세스를 자동화할 수 있다.",mainImage:null}}},pathContext:{slug:"/posts/2017-09-01-ftp-deploy-process-with-dploy/"}}}});
//# sourceMappingURL=path---posts-2017-09-01-ftp-deploy-process-with-dploy-1c9f8834de3810445048.js.map
webpackJsonp([0x8f0ce58d3892],{763:function(A,a){A.exports={data:{site:{siteMetadata:{title:"rhostem.github.io",author:"rhostem",description:"프론트엔드 웹 개발 기술 블로그",githubUrl:"https://github.com/rhostem/blog",url:"https://rhostem.github.io"}}},pathContext:{group:[{node:{fields:{slug:"/posts/2018-06-12-shellscript-to-check-commit/"},frontmatter:{tags:["Git","Shell Script"],title:"Git 커밋 상태를 확인하기 위한 쉘 스크립트",subTitle:null,date:"2018-06-12",description:"Git 커밋 상태를 확인하기 위한 쉘 스크립트. 쉘 스크립트를 사용해 앱 배포 전에 현재 변경사항이 커밋되었고, 원격에 배포되었는지 확인할 수 있다.",mainImageAlt:"photo by Ashim D’Silva (https://unsplash.com/@randomlies)",mainImage:{childImageSharp:{sizes:{aspectRatio:1.5,base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQBAgP/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAABQunNRsLB/8QAGBAAAwEBAAAAAAAAAAAAAAAAAQIDABH/2gAIAQEAAQUCWrYMJKb26MD0d3//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAdEAABAwUBAAAAAAAAAAAAAAABABAhAhESMlFx/9oACAEBAAY/AtQUQKcj1QbeNLf/xAAZEAADAQEBAAAAAAAAAAAAAAAAAREhMVH/2gAIAQEAAT8hSaU0LkDVXB7geIaGmo//2gAMAwEAAgADAAAAEEfP/8QAGREAAgMBAAAAAAAAAAAAAAAAAAERITFh/9oACAEDAQE/ENVonh//xAAXEQEBAQEAAAAAAAAAAAAAAAARAAFh/9oACAECAQE/EHVY7f/EABsQAQEBAAIDAAAAAAAAAAAAAAERACExQVGx/9oACAEBAAE/EKtWFfveDitUEfXJ596i4KBQM0KtmaKre8gy7//Z",sizes:"(max-width: 1280px) 100vw, 1280px",src:"/static/ashim-d-silva-95242-unsplash-5b8c0e41c0435b2d5168a815d111dcca-6ff54.jpg",srcSet:"/static/ashim-d-silva-95242-unsplash-5b8c0e41c0435b2d5168a815d111dcca-3c4d0.jpg 320w,\n/static/ashim-d-silva-95242-unsplash-5b8c0e41c0435b2d5168a815d111dcca-e154f.jpg 640w,\n/static/ashim-d-silva-95242-unsplash-5b8c0e41c0435b2d5168a815d111dcca-6ff54.jpg 1280w,\n/static/ashim-d-silva-95242-unsplash-5b8c0e41c0435b2d5168a815d111dcca-6487d.jpg 1800w"}}}}}},{node:{fields:{slug:"/posts/2018-05-27-pm2-deploy/"},frontmatter:{tags:["PM2","Node.js","Nginx"],title:"PM2로 Node.js 앱 프로세스 배포하기",subTitle:null,date:"2018-05-27",description:"",mainImageAlt:"",mainImage:null}}},{node:{fields:{slug:"/posts/2018-05-20-gulp-static-site/"},frontmatter:{tags:["Gulp","Pug","HTML","Sass","CSS"],title:"Gulp로 구성한 퍼블리싱 개발 환경",subTitle:null,date:"2018-05-20",description:"Gulp 빌드 프로세스를 사용해서 정적인 페이지 마크업을 효율적으로 진행하는 방법",mainImageAlt:"",mainImage:null}}},{node:{fields:{slug:"/posts/2018-01-25-top-java-script-libraries-tech-to-learn-in-2018/"},frontmatter:{tags:["번역","JavaScript","React","기술","학습"],title:"[번역] 2018년에 배워야 할 최고의 자바스크립트 라이브러리와 기술",subTitle:null,date:"2018-01-25",description:"",mainImageAlt:"Alex Proimos — New York Public Library Grand Study Hall (CC BY 2.0)",mainImage:{childImageSharp:{sizes:{aspectRatio:1.5003750937734435,base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABAABAv/EABUBAQEAAAAAAAAAAAAAAAAAAAID/9oADAMBAAIQAxAAAAE2B6k0wpj/xAAZEAEAAwEBAAAAAAAAAAAAAAABAAIREBL/2gAIAQEAAQUC2lp5Bbmjk15//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQIBAT8Bh//EABoQAAICAwAAAAAAAAAAAAAAAAABAhEQMTL/2gAIAQEABj8CdqmXI5zs/8QAGhAAAwEBAQEAAAAAAAAAAAAAAAERIVExYf/aAAgBAQABPyGWhzueIhNuZtKURr6xzvaPsb0f/9oADAMBAAIAAwAAABC8D//EABcRAQEBAQAAAAAAAAAAAAAAAAEAESH/2gAIAQMBAT8QHkpt/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARIf/aAAgBAgEBPxB6gcv/xAAcEAEAAwACAwAAAAAAAAAAAAABABEhMVFBYdH/2gAIAQEAAT8QbQAtrDiCkkFTT5AXwc5D1KqWqb8xhXa4DtA3uf/Z",sizes:"(max-width: 1280px) 100vw, 1280px",src:"/static/main-868a5f402eb06c094d756f3c67f3bbc0-6ff54.jpeg",srcSet:"/static/main-868a5f402eb06c094d756f3c67f3bbc0-3c4d0.jpeg 320w,\n/static/main-868a5f402eb06c094d756f3c67f3bbc0-e154f.jpeg 640w,\n/static/main-868a5f402eb06c094d756f3c67f3bbc0-6ff54.jpeg 1280w,\n/static/main-868a5f402eb06c094d756f3c67f3bbc0-efc37.jpeg 1920w,\n/static/main-868a5f402eb06c094d756f3c67f3bbc0-38961.jpeg 2000w"}}}}}},{node:{fields:{slug:"/posts/2018-01-15-react-redux-typescript/"},frontmatter:{tags:["TypeScript","React","Redux"],title:"TypeScript로 작성하는 React-Redux 앱",subTitle:null,date:"2018-01-15",description:"TypeScript로 React-Redux 앱을 개발하기 위한 설정 가이드",mainImageAlt:null,mainImage:null}}},{node:{fields:{slug:"/posts/2017-10-29-what-i-ve-learned-over-5-years-as-a-software-developer/"},frontmatter:{tags:["소프트웨어 개발","코딩","번역"],title:"[번역] 지난 5년 동안 소프트웨어 개발자로서 내가 배운 것들",subTitle:null,date:"2017-10-29",description:"[번역] 5년동안 소프트웨어 개발자로서 배우고 느꼈던 내용들. 자기 자신을 깊은 곳까지 밀어넣어라, 타인의 얘기를 잘 듣는 열린 자세를 가져라. 하지만 자기주장을 펴는 걸 두려워하지는 마라, 변화를 받아들여라, 하지만 시류에 편승하지는, 일과 놀이의 균형을 맞춰라",mainImageAlt:"",mainImage:{childImageSharp:{sizes:{aspectRatio:2.4580031695721076,base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAAAsSAAALEgHS3X78AAABK0lEQVQY03WQ6W6DMBCE8x4EjA98gW0w5jAxbqCNFKnv/z51EqVKVHU0f9baTzvjA4IQEorVNMQt7GcfwxzX8RQa5yljGKM8z4t/dEAIl6BAXNfDqqaonG/cosbVhk1ICRECoATl06D8HR/w7TZFVTKmHFWCEEZ4TbiEmCIque4qqZhqiVC0MZXUVa3TCwAgwRARilgjBO+sbozhphd2YqqjUhUAZNnxpixL+RNQPPyMjcoSotqlqNPntY8Xu39PX1e/TGHf5+Btb7remGHmdVO893/AAAlTj1H3Q9jO/iO60+r8YpfY+sCEFLqr2x5j/PfDUucSslYtl9avsx9O2+6mmQuGMM7zY35MTtGztA3edb8MAOVCW2tGL7uRt0PrnNayqkhxJ157vuoHMQZK+m7RKlcAAAAASUVORK5CYII=",sizes:"(max-width: 1280px) 100vw, 1280px",src:"/static/main-fa56e95cf7337a42ef18c00b83fc964d-0c277.png",srcSet:"/static/main-fa56e95cf7337a42ef18c00b83fc964d-af0fb.png 320w,\n/static/main-fa56e95cf7337a42ef18c00b83fc964d-1baf7.png 640w,\n/static/main-fa56e95cf7337a42ef18c00b83fc964d-0c277.png 1280w,\n/static/main-fa56e95cf7337a42ef18c00b83fc964d-4ce16.png 1551w"}}}}}},{node:{fields:{slug:"/posts/2017-10-21-lazy-image-loading-with-lodzad-js/"},frontmatter:{tags:["Web","Intersection Observer API"],title:"Intersection Observer API와 lozad.js 로 이미지 지연 로딩하기",subTitle:null,date:"2017-10-21",description:"지연 로딩(lazy loading)이라고 불리는 기법을 구현하는 전통적인 방식에는 문제가 있다. 브라우저 스크롤 이벤트에 리스너를 붙여서 현재 스크롤의 위치와 엘레멘트의 위치 값을 주기적으로 비교해야 하기 때문이다. 브라우저 자체에서 뷰포트 상의 엘레멘트 표시 여부를 탐지하는 Intersection Observer API를 사용하면 이미지 지연 로딩을 보다 쉽고 효율적으로 구현할 수 있다.",mainImageAlt:null,mainImage:{childImageSharp:{sizes:{aspectRatio:2.623728813559322,base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAIABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAID/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAME/9oADAMBAAIQAxAAAAHSjLaAf//EABYQAAMAAAAAAAAAAAAAAAAAAAAQIf/aAAgBAQABBQIi/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAC/9oACAEDAQE/AVjV/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAEP/aAAgBAQAGPwJ//8QAGRAAAQUAAAAAAAAAAAAAAAAAQQABEBEx/9oACAEBAAE/IWorJj//2gAMAwEAAgADAAAAEIvv/8QAFREBAQAAAAAAAAAAAAAAAAAAAQD/2gAIAQMBAT8QUFkQb//EABcRAQEBAQAAAAAAAAAAAAAAAAEAEUH/2gAIAQIBAT8QHkuOX//EABkQAAMBAQEAAAAAAAAAAAAAAAABESExgf/aAAgBAQABPxBay/Bw2c0Wqo//2Q==",sizes:"(max-width: 1280px) 100vw, 1280px",src:"/static/lozad.js-7e9439a7a7ecbbe9b9b10369325dd5e4-6ff54.jpg",srcSet:"/static/lozad.js-7e9439a7a7ecbbe9b9b10369325dd5e4-3c4d0.jpg 320w,\n/static/lozad.js-7e9439a7a7ecbbe9b9b10369325dd5e4-e154f.jpg 640w,\n/static/lozad.js-7e9439a7a7ecbbe9b9b10369325dd5e4-6ff54.jpg 1280w,\n/static/lozad.js-7e9439a7a7ecbbe9b9b10369325dd5e4-476ea.jpg 1548w"}}}}}},{node:{fields:{slug:"/posts/2017-09-how-i-rediscovered-my-love-for-java-script-after-throwing-90-of-it-in-the-trash/"},frontmatter:{tags:["JavaScript","함수형 프로그래밍","번역"],title:"[번역] 자바스크립트에 대한 애정을 언어의 90%를 쓰레기통에 버리면서 다시 발견했던 과정",subTitle:null,date:"2017-09-08",description:"함수형 자바스크립트를 사용하면 OOP 자바스크립트가 만드는 문제들에서 벗어날 수 있다. 객체지향은 자바스크립트에 맞지 않는 옷이다. 함수형 자바스크립트는 학습에 시간이 걸리지만 그럴만한 가치가 충분하다.",mainImageAlt:null,mainImage:null}}},{node:{fields:{slug:"/posts/2017-09-07-redux-saga-toast-control/"},frontmatter:{tags:["React","Redux","redux-saga","ES6"],title:"redux-saga를 활용한 Redux 비동기 액션 처리",subTitle:null,date:"2017-09-07",description:"사이드 이펙트를 효율적으로 관리할 수 있는 Redux 미들웨어 Redux-saga. 토스트 메시지를 표시하고 제거하는 과정을 Redux-saga를 사용해 간단히 구현한 예제를 제공",mainImageAlt:null,mainImage:null}}},{node:{fields:{slug:"/posts/2017-09-01-ftp-deploy-process-with-dploy/"},frontmatter:{tags:["FTP","npm","개발 도구"],title:"dploy 모듈로 Node.js에서 FTP 배포 프로세스 자동화하기",subTitle:null,date:"2017-09-01",description:"Node.js 환경에서 FTP에 업로드는 방식으로 웹사이트를 배포하는 경우 커맨드라인 명령어는 복잡하고 Filezilla 같은 애플리케이션은 자동화가 까다롭다. Node.js 모듈인 dploy와 npm script를 사용해서 배포 프로세스를 자동화할 수 있다.",mainImageAlt:null,mainImage:null}}}],pathPrefix:"",first:!1,last:!1,index:2,pageCount:4,additionalContext:{}}}}});
//# sourceMappingURL=path---2-713b33c20bd71a1308b1.js.map
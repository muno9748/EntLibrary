<p align="center"><img src="https://github.com/muno9748/EntLibrary/blob/master/logo.png?raw=true" /></p>
<h1 align="center">EntLibrary</h1>

#### 1. EntLibrary는 무엇인가요?
> EntLibrary란 엔트리에서 커스텀 블록/카테고리를 만드는것을 도와주는 라이브러리 입니다.

#### 2. EntLibrary는 어떻게 사용하나요? ( 개발, 2.0버전 기준 )
```js
/* 커스텀 카테고리 만들기 */
new Entry.CustomBlock('testblock') // testblock이라는 이름의 블록을 생성
        .setTemplate('테스트 블록입니다.') // 템플릿 ( 블록의 보여지는 글자 )를 설정
        .setColor('#000000','#000000','#FFFFFF') // 블록 색의 기본색, 테두리를 #000000(black)으로 텍스트색을 #FFFFFF(white)로
        .setAction((sprite, script) => { alert('샍!'); }) // 블록의 동작을
        .attach() // Entry객체에 추가
new Entry.CustomCategory('testcategory') // testcategory라는 카테고리 생성
        .addBlock('testblock') // testblock이라는 블록을 카테고리에 넣음
        .setText('테스트 카테고리') // 카테고리의 보이는 텍스트 설정
        .mutate() // 카테고리 업데이트 ( 시간이 좀 걸릴수 있음 )
```
```js
/* 기본 카테고리에 블록 추가하기 */
new Entry.CustomBlock('testblock') // testblock이라는 이름의 블록을 생성
        .setTemplate('테스트 블록입니다.') // 템플릿 ( 블록의 보여지는 글자 )를 설정
        .setColor('#000000','#000000','#FFFFFF') // 블록 색의 기본색, 테두리를 #000000(black)으로 텍스트색을 #FFFFFF(white)로
        .setAction((sprite, script) => { alert('샍!'); }) // 블록의 동작을
        .attach() // Entry객체에 추가
Entry.addBlockToDefaultCategory('start', 'testblock').mutate(); // start (시작) 카테고리에 testblock 블록 추가
```

#### 3. EntLibrary는 어떻게 사용하나요? ( 유저 )
> EntLibrary는 2.0버전, 1.0버전이 있습니다.
> 2.0버전은 개발하기 쉽지만 불안정하고 1.0버전은 안정적이지만 기능이 적습니다
> 1.0버전 import
```js
import('https://raw.githack.com/muno9748/EntLibrary/master/LibraryCreator.js')
```
> 2.0버전 import
```js
import('https://rawcdn.githack.com/muno9748/EntLibrary/master/EntLibrary-2.0.min.js')
```

# [!] 공지
> 현재 2.0버전은 불안정하며 계속 버그수정 될 예정입니다
> 버그가 발견되면 Issue 열어주시기 바랍니다.

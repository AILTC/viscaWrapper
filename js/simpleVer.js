// 影片
function wasAssignedVideo() {
    var actor = visca.setActorByMbox("Crystal","crystal@gmail.com"); // 被指定影片的人
    var objectID = "https://www.youtube.com/watch?v=sQcwRGTW5mw"; // 影片的連結
    var duration = "PT12M47S"; // 影片長度
    var instructor = visca.setInstructorByMbox("Teacher","teacher@visca.com"); // 指定影片的人
    var authority = visca.setAuthorityByMbox("Teacher","teacher@visca.com"); // 擁有此語句的人=指定影片的人
    visca.wasAssignedVideo(actor,objectID,duration,instructor,authority);
    var o = document.getElementById('output');
    o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}

function watchedVideoClips() {
    var actor = visca.setActorByMbox("Crystal","crystal@gmail.com"); // 觀看影片的人
    var actor = visca.setActorByAccount("Crystal","https://auth.ischool.com.tw/","f9e2t55c-7451-4d0b-ac3r-7201q1a6dfga");
    var objectID = "https://www.youtube.com/watch?v=sQcwRGTW5mw"; // 影片的連結
    var duration = "PT12M47S"; // 影片長度
    var start = "PT5S"; // 開始觀看影片的影片時間點
    var end = "PT2M37S"; // 結束觀看影片的影片時間點
    visca.watchedVideoClips(actor,objectID,duration,start,end);
    var o = document.getElementById('output');
    o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}

function skippedVideoClips() {
    var actor = visca.setActorByMbox("Crystal","crystal@gmail.com"); // 跳過影片的人
    var objectID = "https://www.youtube.com/watch?v=sQcwRGTW5mw"; // 影片的連結
    var duration = "PT12M47S"; // 影片長度
    var start = "PT0S"; // 跳過片段影片的開始時間點
    var end = "PT5S"; // 跳過片段影片的結束時間點
    visca.skippedVideoClips(actor,objectID,duration,start,end);
    var o = document.getElementById('output');
    o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}

function tookVideoNotes() {
    var actor = visca.setActorByMbox("Crystal","crystal@gmail.com");
    var objectID = "https://www.youtube.com/watch?v=sQcwRGTW5mw";
    var duration = "PT12M47S";
    var reDuration = "PT30S";
    var reResponse = "教育很重要";
    var time = "PT2M20S";
    visca.tookVideoNotes(actor,objectID,duration,reDuration,reResponse,time);
    var o = document.getElementById('output');
    o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}

function answeredVideoQuestions() {
    var actor = visca.setActorByMbox("Crystal","crystal@gmail.com");
    var objectID = "http://visca.com/question/id/1";
    var interactionType = "fill-in";
    var reDuration = "PT20S";
    var reResponse = "2[,]6";
    var reSuccess = false;
    var parentID = "https://www.youtube.com/watch?v=sQcwRGTW5mw";
    var time = "PT1M";
    visca.answeredVideoQuestions(actor,objectID,interactionType,reDuration,reResponse,reSuccess,parentID,time);
    var o = document.getElementById('output');
    o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}

function readVideoHints() {
    var actor = visca.setActorByMbox("Crystal","crystal@gmail.com");
    var objectID = "http://visca.com/question/id/2";
    var interactionType = "choice";
    var hint = "Your hint!";
    var parentID = "https://www.youtube.com/watch?v=sQcwRGTW5mw";
    visca.readVideoHints(actor,objectID,interactionType,hint,parentID);
    var o = document.getElementById('output');
    o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}

// 電子書
function wasAssignedEBook() {
    var actor = visca.setActorByMbox("Crystal","crystal@gmail.com");
    var objectID = "http://visca.com/book/id/1";
    var authority = visca.setAuthorityByMbox("Teacher","teacher@visca.com");
    visca.wasAssignedEBook(actor,objectID,authority);
    var o = document.getElementById('output');
    o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}

function readEBookPage() {
    var actor = visca.setActorByMbox("Crystal","crystal@gmail.com");
    var objectID = "http://visca.com/book/id/1";
    var totalPages = 100;
    var page = 1;
    var reDuration = "PT8M20S";
    visca.readEBookPage(actor,objectID,totalPages,page,reDuration);
    var o = document.getElementById('output');
    o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}

function bookmarkedEBookPage() {
    var actor = visca.setActorByMbox("Crystal","crystal@gmail.com");
    var objectID = "http://visca.com/book/id/1";
    var page = 2;
    visca.bookmarkedEBookPage(actor,objectID,page);
    var o = document.getElementById('output');
    o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}

function searchedEBookString() {
    var actor = visca.setActorByMbox("Crystal","crystal@gmail.com");
    var objectID = "http://visca.com/book/id/1";
    var page = 3;
    var reResponse = "海明威出生地";
    visca.searchedEBookString(actor,objectID,page,reResponse);
    var o = document.getElementById('output');
    o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}

function highlightedEBookParagraph() {
    var actor = visca.setActorByMbox("Crystal","crystal@gmail.com");
    var objectID = "http://visca.com/book/id/1";
    var page = 4;
    var reResponse = "老人";
    visca.highlightedEBookParagraph(actor,objectID,page,reResponse);
    var o = document.getElementById('output');
    o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}

function tookEBookNotes() {
    var actor = visca.setActorByMbox("Crystal","crystal@gmail.com");
    var objectID = "http://visca.com/book/id/1";
    var page = 5;
    var reDuration = "PT5M";
    var reResponse = "老人";
    visca.tookEBookNotes(actor,objectID,page,reDuration,reResponse);
    var o = document.getElementById('output');
    o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}

function referenceEbookLink() {
    var actor = visca.setActorByMbox("Crystal","crystal@gmail.com");
    var objectID = "http://visca.com/book/id/1";
    var page = 6;
    var anchorText = "VisCa出版社";
    visca.referenceEbookLink(actor,objectID,page,anchorText);
    var o = document.getElementById('output');
    o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}

function watchedEBookVideo() {
    var actor = visca.setActorByMbox("Crystal","crystal@gmail.com");
    var objectID = "http://visca.com/video/id/1";
    var duration = "PT6M30S";
    var start = "PT2M30S";
    var end = "PT3M";
    var parentID = "http://visca.com/book/id/1";
    var page = 7;
    visca.watchedEBookVideo(actor,objectID,duration,start,end,parentID,page);
    var o = document.getElementById('output');
    o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}

function skippedEBookVideo() {
    var actor = visca.setActorByMbox("Crystal","crystal@gmail.com");
    var objectID = "http://visca.com/video/id/1";
    var duration = "PT6M30S";
    var start = "PT30S";
    var end = "PT2M30S";
    var parentID = "http://visca.com/book/id/1";
    var page = 7;
    visca.skippedEBookVideo(actor,objectID,duration,start,end,parentID,page);
    var o = document.getElementById('output');
    o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}

// 測驗
function answeredQuizQuestions() {
    var actor = visca.setActorByMbox("Crystal","crystal@gmail.com");
    var objectID = "http://visca.com/question/id/1";
    var reSuccess = true;
    var reResponse = "king";
    var instructor = visca.setInstructorByMbox("Teacher","teacher@visca.com");
    var parentID = "http://visca.com/assessment/id/1";
    visca.answeredQuizQuestions(actor,objectID,reSuccess,reResponse,instructor,parentID);
    var o = document.getElementById('output');
    o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}

function attemptedQuiz() {
    var actor = visca.setActorByMbox("Crystal","crystal@gmail.com");
    var objectID = "http://visca.com/assessment/id/1";
    var start = "2015-09-21T05:45:30Z";
    var instructor = visca.setInstructorByMbox("Teacher","teacher@visca.com");
    visca.attemptedQuiz(actor,objectID,start,instructor);
    var o = document.getElementById('output');
    o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}

function completedQuiz() {
    var actor = visca.setActorByMbox("Crystal","crystal@gmail.com");
    var objectID = "http://visca.com/assessment/id/1";
    var totalItems = 10;
    var reDuration = "PT1H";
    var end = "2015-09-21T05:45:30Z";
    var min = 20;
    var raw = 90;
    var max = 90;
    var instructor = visca.setInstructorByMbox("Teacher","teacher@visca.com");
    visca.completedQuiz(actor,objectID,totalItems,reDuration,end,min,raw,max,instructor);
    var o = document.getElementById('output');
    o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}

function choseCorrectOption() {
    var actor = visca.setActorByMbox("Crystal","crystal@gmail.com");
    var objectID = "http://visca.com/question/id/2";
    var reResponse = "king";
    var parentID = "http://visca.com/assessment/id/1";
    visca.choseCorrectOption(actor,objectID,reResponse,parentID);
    var o = document.getElementById('output');
    o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}

function readQuizHints() {
    var actor = visca.setActorByMbox("Crystal","crystal@gmail.com");
    var objectID = "http://visca.com/question/id/2";
    var hint = "Your hint!";
    var reDuration = "PT1M10S";
    var instructor = visca.setInstructorByMbox("Teacher","teacher@visca.com");
    var parentID = "http://visca.com/assessment/id/1";
    visca.readQuizHints(actor,objectID,hint,reDuration,instructor,parentID);
    var o = document.getElementById('output');
    o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}

// 自我練習
function answeredVideoPracticeQuestions() {
    var actor = visca.setActorByMbox("Crystal","crystal@gmail.com");
    var objectID = "http://visca.com/question/id/1";
    var interactionType = "fill-in";
    var reDuration = "PT20S";
    var reResponse = "2[,]4";
    var reSuccess = true;
    var parentID = "https://www.youtube.com/watch?v=sQcwRGTW5mw";
    var time = "PT1M";
    visca.answeredVideoPracticeQuestions(actor,objectID,interactionType,reDuration,reResponse,reSuccess,parentID,time);
    var o = document.getElementById('output');
    o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}

function answeredEBookPracticeQuestions() {
    var actor = visca.setActorByMbox("Crystal","crystal@gmail.com");
    var objectID = "http://visca.com/question/id/3";
    var interactionType = "true-false";
    var reDuration = "PT20S";
    var reResponse = "false";
    var reSuccess = false;
    var parentID = "http://visca.com/book/id/1";
    var page = 8;
    visca.answeredEBookPracticeQuestions(actor,objectID,interactionType,reDuration,reResponse,reSuccess,parentID,page);
    var o = document.getElementById('output');
    o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}

function readEBookHints() {
    var actor = visca.setActorByMbox("Crystal","crystal@gmail.com");
    var objectID = "http://visca.com/question/id/1";
    var interactionType = "choice";
    var hint = "Your hint!";
    var parentID = "http://visca.com/book/id/1";
    visca.readEBookHints(actor,objectID,interactionType,hint,parentID);
    var o = document.getElementById('output');
    o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}
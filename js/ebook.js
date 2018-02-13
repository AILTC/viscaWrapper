var timestamp = visca.setTimestamp();

function customizedWasAssignedEBook() {
    /* Actor */
    var actor = visca.setActorByMbox("Crystal","crystal@gmail.com");
    
    /* Verb */
    var verbDisplay = visca.setDisplay("zh-TW","被指定");
    var verb = visca.setVerb("https://w3id.org/xapi/acrossx/verbs/was-assigned",verbDisplay);

    /* Object */
    var objID = "http://book/id/1";
    // object.definition
    var defName = visca.setName("zh-TW","《老人與海》","en-US","The Old Man and the Sea");
    var defDescription = visca.setDescription("zh-TW","作者是海明威");
    var defType = "https://w3id.org/xapi/acrossx/activities/e-book";
    var alignment = visca.setExtension("alignment",["社4-4-2-4","語1-1-1-2"]);
    var supplementalInfo = visca.setExtension("supplemental-info","第7頁必看!");
    var defExtensions = visca.setExtensions(alignment,supplementalInfo);
    var objDefinition = visca.setDefinition(defName, defDescription, defType, defExtensions, null, null, null);
    var object = visca.setObject(objID,objDefinition);

    /* Context */
    var instructor = visca.setInstructorByMbox("Teacher","teacher@visca.com");
    var platform = "http://visca.com/reading";
    var language = "zh-TW";
    // context.contextActivities.parent[0]
    var parentID = "http://plan/id/1";
    var pDefName = visca.setName("zh-TW","我的學習計畫");
    var pDefType = "https://w3id.org/xapi/acrossx/activities/learning-plan";
    var parentDefinition = visca.setDefinition(pDefName,null,pDefType,null,null,null,null);
    var parent = visca.setParent(parentID,parentDefinition);
    // context.contextActivities.category[0]
    var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/ebook");
    // context.contextActivities
    var contextActivities = visca.setContextActivities(parent,null,category);
    var contextExtensions = null;
    var context = visca.setContext(instructor,language,contextActivities,platform,contextExtensions);

    /* Authority */
    var authority = visca.setAuthorityByMbox("Teacher","teacher@visca.com");

    visca.customizedWasAssignedEBook(actor,verb,object,context,authority,timestamp);

    var o = document.getElementById('output');
    o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}

function customizedReadEBookPage() {
    /* Actor */
    var actor = visca.setActorByMbox("Crystal","crystal@gmail.com");
    
    /* Verb */
    var verbDisplay = visca.setDisplay("zh-TW","閱讀");
    var verb = visca.setVerb("https://w3id.org/xapi/adb/verbs/read",verbDisplay);

    /* Object */
    var objID = "http://book/id/1";
    // object.definition
    var defName = visca.setName("zh-TW","《老人與海》","en-US","The Old Man and the Sea");
    var defDescription = visca.setDescription("zh-TW","作者是海明威");
    var defType = "https://w3id.org/xapi/acrossx/activities/e-book";
    var alignment = visca.setExtension("alignment",["社4-4-2-4","語1-1-1-2"]);
    var totalPages = visca.setExtension("total-pages",100);
    var page = visca.setExtension("page",10);
    var defExtensions = visca.setExtensions(alignment,totalPages,page);
    var objDefinition = visca.setDefinition(defName, defDescription, defType, defExtensions, null, null, null);
    var object = visca.setObject(objID,objDefinition);

    /* Result */
    var reDuration = "PT8M10S";
    var start = visca.setExtension("starting-point","2015-09-21T05:08:20Z");
    var end = visca.setExtension("ending-point","2015-09-21T05:16:30Z");
    var reExtensions = visca.setExtensions(start,end);
    var result = visca.setResult(reDuration,reExtensions,null,null,null);

    /* Context */
    var instructor = visca.setInstructorByMbox("Teacher","teacher@visca.com");
    var platform = "http://visca.com/reading";
    var language = "zh-TW";
    var parent = null;
    // context.contextActivities.category[0]
    var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/ebook");
    // context.contextActivities
    var contextActivities = visca.setContextActivities(parent,null,category);
    var contextExtensions = null;
    var context = visca.setContext(instructor,language,contextActivities,platform,contextExtensions);

    /* Authority */
    var authority = visca.setAuthorityByMbox("Crystal","crystal@gmail.com");

    visca.customizedReadEBookPage(actor,verb,object,result,context,authority,timestamp);

	var o = document.getElementById('output');
    o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}

function customizedBookmarkedEBookPage() {
    /* Actor */
    var actor = visca.setActorByMbox("Crystal","crystal@gmail.com");
    
    /* Verb */
    var verbDisplay = visca.setDisplay("zh-TW","加書籤");
    var verb = visca.setVerb("https://w3id.org/xapi/adb/verbs/bookmarked",verbDisplay);

	/* Object */
    var objID = "http://book/id/1";
    // object.definition
    var defName = visca.setName("zh-TW","《老人與海》","en-US","The Old Man and the Sea");
    var defDescription = visca.setDescription("zh-TW","作者是海明威");
    var defType = "https://w3id.org/xapi/acrossx/activities/e-book";
    var alignment = visca.setExtension("alignment",["社4-4-2-4","語1-1-1-2"]);
    var totalPages = visca.setExtension("total-pages",100);
    var page = visca.setExtension("page",2);
    var defExtensions = visca.setExtensions(alignment,totalPages,page);
    var objDefinition = visca.setDefinition(defName, defDescription, defType, defExtensions, null, null, null);
    var object = visca.setObject(objID,objDefinition);

    /* Context */
    var instructor = visca.setInstructorByMbox("Teacher","teacher@visca.com");
    var platform = "http://visca.com/reading";
    var language = "zh-TW";
    var parent = null;
    // context.contextActivities.category[0]
    var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/ebook");
    // context.contextActivities
    var contextActivities = visca.setContextActivities(parent,null,category);
    var contextExtensions = null;
    var context = visca.setContext(instructor,language,contextActivities,platform,contextExtensions);

	/* Authority */
    var authority = visca.setAuthorityByMbox("Crystal","crystal@gmail.com");

    visca.customizedBookmarkedEBookPage(actor,verb,object,context,authority,timestamp);

	var o = document.getElementById('output');
    o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}

function customizedSearchedEBookString() {
    /* Actor */
    var actor = visca.setActorByMbox("Crystal","crystal@gmail.com");
    
    /* Verb */
    var verbDisplay = visca.setDisplay("zh-TW","搜尋");
    var verb = visca.setVerb("https://w3id.org/xapi/acrossx/verbs/searched",verbDisplay);

    /* Object */
    var objID = "http://book/id/1";
    // object.definition
    var defName = visca.setName("zh-TW","《老人與海》","en-US","The Old Man and the Sea");
    var defDescription = visca.setDescription("zh-TW","作者是海明威");
    var defType = "https://w3id.org/xapi/acrossx/activities/e-book";
    var alignment = visca.setExtension("alignment",["社4-4-2-4","語1-1-1-2"]);
    var totalPages = visca.setExtension("total-pages",100);
    var page = visca.setExtension("page",10);
    var defExtensions = visca.setExtensions(alignment,totalPages,page);
    var objDefinition = visca.setDefinition(defName, defDescription, defType, defExtensions, null, null, null);
    var object = visca.setObject(objID,objDefinition);

    /* Result */
    var reDuration = null;
    var reExtensions = null;
    var reResponse = "海明威出生地";
    var result = visca.setResult(reDuration,reExtensions,reResponse,null,null);

    /* Context */
    var instructor = visca.setInstructorByMbox("Teacher","teacher@visca.com");
    var platform = "http://visca.com/reading";
    var language = "zh-TW";
    var parent = null;
    // context.contextActivities.category[0]
    var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/ebook");
    // context.contextActivities
    var contextActivities = visca.setContextActivities(parent,null,category);
    var contextExtensions = null;
    var context = visca.setContext(instructor,language,contextActivities,platform,contextExtensions);

	/* Authority */
    var authority = visca.setAuthorityByMbox("Crystal","crystal@gmail.com");

    visca.customizedSearchedEBookString(actor,verb,object,result,context,authority,timestamp);

	var o = document.getElementById('output');
    o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}

function customizedHighlightedEBookParagraph() {
    /* Actor */
    var actor = visca.setActorByMbox("Crystal","crystal@gmail.com");
    
	/* Verb */
	var verbDisplay = visca.setDisplay("zh-TW","畫重點");
    var verb = visca.setVerb("https://w3id.org/xapi/adb/verbs/highlighted",verbDisplay);

    /* Object */
    var objID = "http://book/id/1";
    // object.definition
    var defName = visca.setName("zh-TW","《老人與海》","en-US","The Old Man and the Sea");
    var defDescription = visca.setDescription("zh-TW","作者是海明威");
    var defType = "https://w3id.org/xapi/acrossx/activities/e-book";
    var alignment = visca.setExtension("alignment",["社4-4-2-4","語1-1-1-2"]);
    var totalPages = visca.setExtension("total-pages",100);
    var page = visca.setExtension("page",4);
    var defExtensions = visca.setExtensions(alignment,totalPages,page);
    var objDefinition = visca.setDefinition(defName, defDescription, defType, defExtensions, null, null, null);
    var object = visca.setObject(objID,objDefinition);

    /* Result */
    var reResponse = "老人";
    var result = visca.setResult(null,null,reResponse,null,null);

    /* Context */
    var instructor = visca.setInstructorByMbox("Teacher","teacher@visca.com");
    var platform = "http://visca.com/reading";
    var language = "zh-TW";
    var parent = null;
    // context.contextActivities.category[0]
    var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/ebook");
    // context.contextActivities
    var contextActivities = visca.setContextActivities(parent,null,category);
    var contextExtensions = null;
    var context = visca.setContext(instructor,language,contextActivities,platform,contextExtensions);

	/* Authority */
    var authority = visca.setAuthorityByMbox("Crystal","crystal@gmail.com");

    visca.customizedHighlightedEBookParagraph(actor,verb,object,result,context,authority,timestamp);

	var o = document.getElementById('output');
    o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}

function customizedTookEBookNotes() {
    /* Actor */
    var actor = visca.setActorByMbox("Crystal","crystal@gmail.com");
    
	/* Verb */
	var verbDisplay = visca.setDisplay("zh-TW","做筆記");
    var verb = visca.setVerb("https://w3id.org/xapi/adb/verbs/noted",verbDisplay);

    /* Object */
    var objID = "http://book/id/1";
    // object.definition
    var defName = visca.setName("zh-TW","《老人與海》","en-US","The Old Man and the Sea");
    var defDescription = visca.setDescription("zh-TW","作者是海明威");
    var defType = "https://w3id.org/xapi/acrossx/activities/e-book";
    var alignment = visca.setExtension("alignment",["社4-4-2-4","語1-1-1-2"]);
    var totalPages = visca.setExtension("total-pages",100);
    var page = visca.setExtension("page",5);
    var highlightedString = visca.setExtension("highlightedString","海");
    var defExtensions = visca.setExtensions(alignment,totalPages,page,highlightedString);
    var objDefinition = visca.setDefinition(defName, defDescription, defType, defExtensions, null, null, null);
    var object = visca.setObject(objID,objDefinition);

    /* Result */
    var reDuration = "PT5M";
    var reResponse = "老人";
    var start = visca.setExtension("starting-point","2016-04-27T05:40:30Z");
    var end = visca.setExtension("ending-point","2016-04-27T05:45:30Z");
    var reExtensions = visca.setExtensions(start,end);
    var result = visca.setResult(reDuration,reExtensions,reResponse,null,null);

    /* Context */
    var instructor = visca.setInstructorByMbox("Teacher","teacher@visca.com");
    var platform = "http://visca.com/reading";
    var language = "zh-TW";
    var parent = null;
    // context.contextActivities.category[0]
    var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/ebook");
    // context.contextActivities
    var contextActivities = visca.setContextActivities(parent,null,category);
    var contextExtensions = null;
    var context = visca.setContext(instructor,language,contextActivities,platform,contextExtensions);

	/* Authority */
    var authority = visca.setAuthorityByMbox("Crystal","crystal@gmail.com");

    visca.customizedTookEBookNotes(actor,verb,object,result,context,authority,timestamp);

	var o = document.getElementById('output');
    o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}

function customizedReferenceEbookLink() {
    /* Actor */
    var actor = visca.setActorByMbox("Crystal","crystal@gmail.com");
    
	/* Verb */
	var verbDisplay = visca.setDisplay("zh-TW","查詢參考");
    var verb = visca.setVerb("https://w3id.org/xapi/adb/verbs/referenced",verbDisplay);

	/* Object */
    var objID = "http://book/id/1";
    // object.definition
    var defName = visca.setName("zh-TW","《老人與海》","en-US","The Old Man and the Sea");
    var defDescription = visca.setDescription("zh-TW","作者是海明威");
    var defType = "https://w3id.org/xapi/acrossx/activities/e-book";
    var alignment = visca.setExtension("alignment",["社4-4-2-4","語1-1-1-2"]);
    var totalPages = visca.setExtension("total-pages",100);
    var page = visca.setExtension("page",6);
    var anchorText = visca.setExtension("anchor-text","VisCa 出版社");
    var defExtensions = visca.setExtensions(alignment,totalPages,page,anchorText);
    var objDefinition = visca.setDefinition(defName, defDescription, defType, defExtensions, null, null, null);
    var object = visca.setObject(objID,objDefinition);

    /* Context */
    var instructor = visca.setInstructorByMbox("Teacher","teacher@visca.com");
    var platform = "http://visca.com/reading";
    var language = "zh-TW";
    var parent = null;
    // context.contextActivities.category[0]
    var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/ebook");
    // context.contextActivities
    var contextActivities = visca.setContextActivities(parent,null,category);
    var contextExtensions = null;
    var context = visca.setContext(instructor,language,contextActivities,platform,contextExtensions);

	/* Authority */
    var authority = visca.setAuthorityByMbox("Crystal","crystal@gmail.com");

    visca.customizedReferenceEbookLink(actor,verb,object,context,authority,timestamp);

	var o = document.getElementById('output');
    o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}

function customizedWatchedEBookVideo() {
    /* Actor */
    var actor = visca.setActorByMbox("Crystal","crystal@gmail.com");
    
	/* Verb */
	var verbDisplay = visca.setDisplay("zh-TW","觀看");
    var verb = visca.setVerb("https://w3id.org/xapi/acrossx/verbs/watched",verbDisplay);

    /* Object */
    var objID = "http://book/id/video/id/1";
    // object.definition
    var defName = visca.setName("zh-TW","海明威的生平","en-US","Hemingway's life");
    var defDescription = visca.setDescription("zh-TW","作者是海明威，1899 年生");
    var defType = "https://w3id.org/xapi/acrossx/activities/video";
    var alignment = visca.setExtension("alignment",["社4-4-2-4","語1-1-1-2"]);
    var duration = visca.setExtension("duration","PT6M30S");
    var defExtensions = visca.setExtensions(alignment,duration);
    var objDefinition = visca.setDefinition(defName, defDescription, defType, defExtensions, null, null, null);
    var object = visca.setObject(objID,objDefinition);

    /* Result */
    var reDuration = "PT30S";
    var start = visca.setExtension("starting-point","PT2M30S");
    var end = visca.setExtension("ending-point","PT3M");
    var reExtensions = visca.setExtensions(start,end);
    var result = visca.setResult(reDuration,reExtensions,null,null,null);

    /* Context */
    var instructor = visca.setInstructorByMbox("Teacher","teacher@visca.com");
    var platform = "http://visca.com/reading";
    var language = "zh-TW";
    // context.contextActivities.parent[0]
    var parentID = "http://plan/id/1";
    var pDefName = visca.setName("zh-TW","《老人與海》");
    var pDescription = visca.setDescription("zh-TW","作者是海明威");
    var pDefType = "https://w3id.org/xapi/acrossx/activities/learning-plan";
    var pExtensions = visca.setExtension("page",7);
    var parentDefinition = visca.setDefinition(pDefName,pDescription,pDefType,pExtensions,null,null,null);
    var parent = visca.setParent(parentID,parentDefinition);
    // context.contextActivities.category[0]
    var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/ebook");
    // context.contextActivities
    var contextActivities = visca.setContextActivities(parent,null,category);
    var contextExtensions = null;
    var context = visca.setContext(instructor,language,contextActivities,platform,contextExtensions);

	/* Authority */
    var authority = visca.setAuthorityByMbox("Crystal","crystal@gmail.com");

    visca.customizedWatchedEBookVideo(actor,verb,object,result,context,authority,timestamp);

	var o = document.getElementById('output');
    o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}

function customizedSkippedEBookVideo() {
    /* Actor */
    var actor = visca.setActorByMbox("Crystal","crystal@gmail.com");
    
	/* Verb */
	var verbDisplay = visca.setDisplay("zh-TW","跳過");
    var verb = visca.setVerb("http://w3id.org/xapi/acrossx/verbs/skipped",verbDisplay);

    /* Object */
    var objID = "http://book/id/video/id/1";
    // object.definition
    var defName = visca.setName("zh-TW","海明威的生平","en-US","Hemingway's life");
    var defDescription = visca.setDescription("zh-TW","作者是海明威，1899 年生");
    var defType = "https://w3id.org/xapi/acrossx/activities/video";
    var alignment = visca.setExtension("alignment",["社4-4-2-4","語1-1-1-2"]);
    var duration = visca.setExtension("duration","PT6M30S");
    var defExtensions = visca.setExtensions(alignment,duration);
    var objDefinition = visca.setDefinition(defName, defDescription, defType, defExtensions, null, null, null);
    var object = visca.setObject(objID,objDefinition);

    /* Result */
    var reDuration = "PT30S";
    var start = visca.setExtension('starting-point','PT2M30S');
    var end = visca.setExtension('ending-point','PT3M');
    var reExtensions = visca.setExtensions(start,end);
    var result = visca.setResult(reDuration,reExtensions,null,null,null);

    /* Context */
    var instructor = visca.setInstructorByMbox("Teacher","teacher@visca.com");
    var platform = "http://visca.com/reading";
    var language = "zh-TW";
    // context.contextActivities.parent[0]
    var parentID = "http://plan/id/1";
    var pDefName = visca.setName("zh-TW","《老人與海》");
    var pDescription = visca.setDescription("zh-TW","作者是海明威");
    var pDefType = "https://w3id.org/xapi/acrossx/activities/learning-plan";
    var pExtensions = visca.setExtension("page",7);
    var parentDefinition = visca.setDefinition(pDefName,pDescription,pDefType,pExtensions,null,null,null);
    var parent = visca.setParent(parentID,parentDefinition);
    // context.contextActivities.category[0]
    var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/ebook");
    // context.contextActivities
    var contextActivities = visca.setContextActivities(parent,null,category);
    var contextExtensions = null;
    var context = visca.setContext(instructor,language,contextActivities,platform,contextExtensions);

	/* Authority */
    var authority = visca.setAuthorityByMbox("Crystal","crystal@gmail.com");

    visca.customizedWatchedEBookVideo(actor,verb,object,result,context,authority,timestamp);

	var o = document.getElementById('output');
    o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}
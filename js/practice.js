var timestamp = visca.setTimestamp();

function customizedAnsweredVideoPracticeQuestions() {
    /* Actor */
    var actor = visca.setActorByMbox("Crystal","crystal@gmail.com");
    
	/* Verb */
	var verbDisplay = visca.setDisplay("zh-TW","回答");
	var verb = visca.setVerb("http://adlnet.gov/expapi/verbs/answered",verbDisplay);

	/* Object */
    var objID = "http://question/id/1";
    // object.definition
    var defName = visca.setName("zh-TW","1","en-US","1");
    var defDescription = visca.setDescription("zh-TW","1,_,3,_,5","en-US","1,_,3,_,5");
    var defType = "http://adlnet.gov/expapi/activities/cmi.interaction";
    var alignment = visca.setExtension("alignment",["社4-4-2-4","語1-1-1-2"]);
    var bloomsLevel = visca.setExtension("blooms-level","Applying");
    var defExtensions = visca.setExtensions(alignment,bloomsLevel);
    var defInteractionType = "fill-in";
    var defCorrectResponsesPattern = visca.setCorrectResponsesPattern("2[,]4");
    var objDefinition = visca.setDefinition(defName, defDescription, defType, defExtensions, defInteractionType, defCorrectResponsesPattern, null);
    var object = visca.setObject(objID,objDefinition);

    /* Result */
    var reDuration = "PT20S";
    var start = visca.setExtension("starting-point","2016-05-13T05:45:10Z");
    var end = visca.setExtension("ending-point","2016-05-13T05:45:30Z");
    var reExtensions = visca.setExtensions(start,end);
    var reResponse = "2[,]6";
    var reScore = visca.setScore(0,0,10);
    var reSuccess = false;
    var result = visca.setResult(reDuration,reExtensions,reResponse,reScore,reSuccess);

    /* Context */
    var instructor = visca.setInstructorByMbox("Teacher","teacher@visca.com");
    var platform = "http://platform/assessing";
    var language = "zh-TW";
    // context.contextActivities.parent[0]
    var parentID = "https://www.youtube.com/watch?v=sQcwRGTW5mw";
    var pDefName = visca.setName("zh-TW","Future Learning");
    var pDefType = "https://w3id.org/xapi/acrossx/activities/video";
    var pDefExtensions = visca.setExtension("duration","PT12M47S");
    var parentDefinition = visca.setDefinition(pDefName,null,pDefType,pDefExtensions,null,null,null);
    var parent = visca.setParent(parentID,parentDefinition);
    // context.contextActivities.category[0] & context.contextActivities.category[1]
    var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/practice","https://w3id.org/xapi/acrossx/profile/video");
    // context.contextActivities
    var contextActivities = visca.setContextActivities(parent,null,category);
    var browserInfo = visca.setExtension("browser-info");
    var time = visca.setExtension("time","PT1M");
    var contextExtensions = visca.setExtensions(browserInfo,time);
    var context = visca.setContext(instructor,language,contextActivities,platform,contextExtensions);

    /* Authority */
    var authority = visca.setAuthorityByMbox("Crystal","crystal@gmail.com");

    visca.customizedAnsweredVideoPracticeQuestions(actor,verb,object,result,context,authority,timestamp);

    var o = document.getElementById('output');
    o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}

function customizedAnsweredEBookPracticeQuestions() {
    /* Actor */
    var actor = visca.setActorByMbox("Crystal","crystal@gmail.com");
    
	/* Verb */
	var verbDisplay = visca.setDisplay("zh-TW","回答");
	var verb = visca.setVerb("http://adlnet.gov/expapi/verbs/answered",verbDisplay);

	/* Object */
    var objID = "http://question/id/2";
    // object.definition
    var defName = visca.setName("zh-TW","2","en-US","2");
    var defDescription = visca.setDescription("zh-TW","太陽是恆星?","en-US","太陽是恆星?");
    var defType = "http://adlnet.gov/expapi/activities/cmi.interaction";
    var alignment = visca.setExtension("alignment",["社4-4-2-4","語1-1-1-2"]);
    var bloomsLevel = visca.setExtension("blooms-level","Applying");
    var defExtensions = visca.setExtensions(alignment,bloomsLevel);
    var defInteractionType = "true-false";
    var defCorrectResponsesPattern = visca.setCorrectResponsesPattern("false");
    var objDefinition = visca.setDefinition(defName, defDescription, defType, defExtensions, defInteractionType, defCorrectResponsesPattern, null);
    var object = visca.setObject(objID,objDefinition);

    /* Result */
    var reDuration = "PT20S";
    var start = visca.setExtension("starting-point","2015-09-21T05:45:10Z");
    var end = visca.setExtension("ending-point","2015-09-21T05:45:30Z");
    var reExtensions = visca.setExtensions(start,end);
    var reResponse = "false";
    var reScore = visca.setScore(0,10,10);
    var reSuccess = true;
    var result = visca.setResult(reDuration,reExtensions,reResponse,reScore,reSuccess);

    /* Context */
    var instructor = visca.setInstructorByMbox("Teacher","teacher@visca.com");
    var platform = "http://platform/assessing";
    var language = "zh-TW";
    // context.contextActivities.parent[0]
    var parentID = "http://book/id/1";
    var pDefName = visca.setName("zh-TW","《老人與海》");
    var pDefType = "https://w3id.org/xapi/acrossx/activities/e-book";
    var parentDefinition = visca.setDefinition(pDefName,null,pDefType,null,null,null,null);
    var parent = visca.setParent(parentID,parentDefinition);
    // context.contextActivities.category[0] & context.contextActivities.category[1]
    var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/practice","https://w3id.org/xapi/acrossx/profile/ebook");
    // context.contextActivities
    var contextActivities = visca.setContextActivities(parent,null,category);
    var browserInfo = visca.setExtension("browser-info");
    var page = visca.setExtension("page",8);
    var contextExtensions = visca.setExtensions(browserInfo,page);
    var context = visca.setContext(instructor,language,contextActivities,platform,contextExtensions);

    /* Authority */
    var authority = visca.setAuthorityByMbox("Crystal","crystal@gmail.com");

    visca.customizedAnsweredEBookPracticeQuestions(actor,verb,object,result,context,authority,timestamp);

    var o = document.getElementById('output');
    o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}

function customizedReadEBookHints() {
    /* Actor */
    var actor = visca.setActorByMbox("Crystal","crystal@gmail.com");
    
	/* Verb */
	var verbDisplay = visca.setDisplay("zh-TW","閱讀");
	var verb = visca.setVerb("https://w3id.org/xapi/adb/verbs/read",verbDisplay);

	/* Object */
    var objID = "http://question/id/3";
    // object.definition
    var defName = visca.setName("zh-TW","3","en-US","3");
    var defDescription = visca.setDescription("zh-TW","哪一個人最帥?","en-US","哪一個人最帥?");
    var defType = "http://adlnet.gov/expapi/activities/cmi.interaction";
    var alignment = visca.setExtension("alignment",["社4-4-2-4","語1-1-1-2"]);
    var bloomsLevel = visca.setExtension("blooms-level","Applying");
    var supplementalInfo = visca.setExtension("supplemental-info","your hint!");
    var defExtensions = visca.setExtensions(alignment,bloomsLevel,supplementalInfo);
    var defInteractionType = "choice";
    var defCorrectResponsesPattern = visca.setCorrectResponsesPattern("king");
    var objDefinition = visca.setDefinition(defName, defDescription, defType, defExtensions, defInteractionType, defCorrectResponsesPattern , null);
    var object = visca.setObject(objID,objDefinition);

    /* Result */
    var reDuration = "PT1M10S";
    var result = visca.setResult(reDuration,null,null,null,null);

	/* Context */
    var instructor = visca.setInstructorByMbox("Teacher","teacher@visca.com");
    var platform = "http://platform/assessing";
    var language = "zh-TW";
    // context.contextActivities.parent[0]
    var parentID = "http://book/id/1";
    var pDefName = visca.setName("zh-TW","《老人與海》");
    var pDefDescription = visca.setDescription("zh-TW","作者是海明威");
    var pDefType = "https://w3id.org/xapi/acrossx/activities/e-book";
    var parentDefinition = visca.setDefinition(pDefName,null,pDefType,null,null,null,null);
    var parent = visca.setParent(parentID,parentDefinition);
    // context.contextActivities.category[0] & context.contextActivities.category[1]
    var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/practice","https://w3id.org/xapi/acrossx/profile/ebook");
    // context.contextActivities
    var contextActivities = visca.setContextActivities(parent,null,category);
    var browserInfo = visca.setExtension("browser-info");
    var page = visca.setExtension("page",8);
    var contextExtensions = visca.setExtensions(browserInfo,page);
    var context = visca.setContext(instructor,language,contextActivities,platform,contextExtensions);    

    /* Authority */
    var authority = visca.setAuthorityByMbox("Crystal","crystal@gmail.com");

    visca.customizedReadEBookHints(actor,verb,object,result,context,authority,timestamp);

    var o = document.getElementById('output');
    o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}
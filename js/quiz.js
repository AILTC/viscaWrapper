var timestamp = visca.setTimestamp();

function customizedAnsweredQuizQuestions() {
    /* Actor */
    var actor = visca.setActorByMbox("Crystal","crystal@gmail.com");
    
	/* Verb */
	var verbDisplay = visca.setDisplay("zh-TW","回答");
	var verb = visca.setVerb("http://adlnet.gov/expapi/verbs/answered",verbDisplay);

	/* Object */
    var objID = "http://question/id/3";
    // object.definition
    var defName = visca.setName("zh-TW","3","en-US","3");
    var defDescription = visca.setDescription("zh-TW","哪一個人最帥?","en-US","哪一個人最帥?");
    var defType = "http://adlnet.gov/expapi/activities/cmi.interaction";
    var alignment = visca.setExtension("alignment",["社4-4-2-4","語1-1-1-2"]);
    var bloomsLevel = visca.setExtension("blooms-level","Applying");
    var defExtensions = visca.setExtensions(alignment,bloomsLevel);
    var defInteractionType = "choice";
    var defCorrectResponsesPattern = visca.setCorrectResponsesPattern("king");
    var choice1 = visca.setDescription("zh-TW","金城武");
    var choice2 = visca.setDescription("zh-TW","明金城");
    var defChoices = visca.setChoices("king",choice1,"ming",choice2);
    var objDefinition = visca.setDefinition(defName, defDescription, defType, defExtensions, defInteractionType, defCorrectResponsesPattern, defChoices);
    var object = visca.setObject(objID,objDefinition);

    /* Result */
    var reDuration = "PT20S";
    var reScore = visca.setScore(0,10,10);
    var reSuccess = true;
    var reResponse = "king";
    var result = visca.setResult(reDuration,null,reResponse,reScore,reSuccess);

    /* Context */
    var instructor = visca.setInstructorByMbox("Teacher","teacher@visca.com");
    var platform = "http://platform/assessing";
    var language = "zh-TW";
    // context.contextActivities.parent[0]
    var parentID = "http://assessment/id/final-exam";
    var pDefName = visca.setName("zh-TW","期末考");
    var pDefType = "http://adlnet.gov/expapi/activities/assessment";
    var parentDefinition = visca.setDefinition(pDefName,null,pDefType,null,null,null,null);
    var parent = visca.setParent(parentID,parentDefinition);
    // context.contextActivities.category[0]
    var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/assessment");
    // context.contextActivities
    var contextActivities = visca.setContextActivities(parent,null,category);
    var contextExtensions = visca.setExtension("browser-info");
    var context = visca.setContext(instructor,language,contextActivities,platform,contextExtensions);

    /* Authority */
    var authority = visca.setAuthorityByMbox("Crystal","crystal@gmail.com");

    visca.customizedAnsweredQuizQuestions(actor,verb,object,result,context,authority,timestamp);

    var o = document.getElementById('output');
    o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}

function customizedAttemptedQuiz() {
    /* Actor */
    var actor = visca.setActorByMbox("Crystal","crystal@gmail.com");
    
	/* Verb */
	var verbDisplay = visca.setDisplay("zh-TW","開始嘗試");
	var verb = visca.setVerb("http://adlnet.gov/expapi/verbs/attempted",verbDisplay);

	/* Object */
    var objID = "http://assessment/id/final-exam";
    // object.definition
    var defName = visca.setName("zh-TW","期末考","en-US","期末考");
    var defDescription = visca.setDescription("zh-TW","期末考的描述","en-US","期末考的描述");
    var defType = "http://adlnet.gov/expapi/activities/assessment";
    var alignment = visca.setExtension("alignment",["社4-4-2-4","語1-1-1-2"]);
    var timeLimit = visca.setExtension("time-limit","PT2H30M");
    var totalItems = visca.setExtension("total-items",10);
    var totalScore = visca.setExtension("total-score",100);
    var passScore = visca.setExtension("pass-score",60);
    var defExtensions = visca.setExtensions(alignment,timeLimit,totalItems,totalScore,passScore);
    var objDefinition = visca.setDefinition(defName, defDescription, defType, defExtensions, null, null, null);
    var object = visca.setObject(objID,objDefinition);

    /* Result */
    var reExtensions = visca.setExtension("starting-point", "2015-09-21T05:45:30Z");
    var result = visca.setResult(null, reExtensions, null, null, null);

    /* Context */
    var instructor = visca.setInstructorByMbox("Teacher","teacher@visca.com");
    var platform = "http://platform/assessing";
    var language = "zh-TW";
    // context.contextActivities.category[0]
    var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/assessment");
    // context.contextActivities
    var contextActivities = visca.setContextActivities(null,null,category);
    var contextExtensions = visca.setExtension("browser-info");
    var context = visca.setContext(instructor,language,contextActivities,platform,contextExtensions);

    /* Authority */
    var authority = visca.setAuthorityByMbox("Crystal","crystal@gmail.com");

    visca.customizedAttemptedQuiz(actor,verb,object,result,context,authority,timestamp);

    var o = document.getElementById('output');
    o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}

function customizedCompletedQuiz() {
    /* Actor */
    var actor = visca.setActorByMbox("Crystal","crystal@gmail.com");
    
	/* Verb */
	var verbDisplay = visca.setDisplay("zh-TW","完成");
	var verb = visca.setVerb("http://adlnet.gov/expapi/verbs/completed",verbDisplay);

	/* Object */
    var objID = "http://assessment/id/final-exam";
    // object.definition
    var defName = visca.setName("zh-TW","期末考","en-US","期末考");
    var defDescription = visca.setDescription("zh-TW","期末考的描述","en-US","期末考的描述");
    var defType = "http://adlnet.gov/expapi/activities/assessment";
    var alignment = visca.setExtension("alignment",["社4-4-2-4","語1-1-1-2"]);
    var timeLimit = visca.setExtension("time-limit","PT2H30M");
    var totalItems = visca.setExtension("total-items",10);
    var totalScore = visca.setExtension("total-score",100);
    var passScore = visca.setExtension("pass-score",60);
    var defExtensions = visca.setExtensions(alignment,timeLimit,totalItems,totalScore,passScore);
    var objDefinition = visca.setDefinition(defName, defDescription, defType, defExtensions, null, null, null);
    var object = visca.setObject(objID,objDefinition);

    /* Result */
    var reDuration = "PT1H";
    var reScore = visca.setScore(20,90,90);
    var reSuccess = true;
    var reExtensions = visca.setExtension("ending-point","2015-09-21T06:45:30Z");
    var result = visca.setResult(reDuration, reExtensions, null, reScore, reSuccess);

    /* Context */
    var instructor = visca.setInstructorByMbox("Teacher","teacher@visca.com");
    var platform = "http://platform/assessing";
    var language = "zh-TW";
    // context.contextActivities.category[0]
    var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/assessment");
    // context.contextActivities
    var contextActivities = visca.setContextActivities(null,null,category);
    var contextExtensions = visca.setExtension("browser-info");
    var context = visca.setContext(instructor,language,contextActivities,platform,contextExtensions);

    /* Authority */
    var authority = visca.setAuthorityByMbox("Crystal","crystal@gmail.com");

    visca.customizedCompletedQuiz(actor,verb,object,result,context,authority,timestamp);

    var o = document.getElementById('output');
    o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}

function customizedChoseCorrectOption() {
    /* Actor */
    var actor = visca.setActorByMbox("Crystal","crystal@gmail.com");
    
	/* Verb */
	var verbDisplay = visca.setDisplay("zh-TW","互動");
	var verb = visca.setVerb("http://adlnet.gov/expapi/verbs/interacted",verbDisplay);

    /* Object */
    var objID = "http://question/id/3";
    // object.definition
    var defName = visca.setName("zh-TW","3","en-US","3");
    var defDescription = visca.setDescription("zh-TW","哪一個人最帥?","en-US","哪一個人最帥?");
    var defType = "http://adlnet.gov/expapi/activities/cmi.interaction";
    var alignment = visca.setExtension("alignment",["社4-4-2-4","語1-1-1-2"]);
    var bloomsLevel = visca.setExtension("blooms-level","Applying");
    var defExtensions = visca.setExtensions(alignment,bloomsLevel);
    var defInteractionType = "choice";
    var defCorrectResponsesPattern = visca.setCorrectResponsesPattern("king");
    var choiceKing = visca.setDescription("zh-TW","金城武");
    var choiceMing = visca.setDescription("zh-TW","明金城");
    var defChoices = visca.setChoices("king",choiceKing,"ming",choiceMing);
    var objDefinition = visca.setDefinition(defName, defDescription, defType, defExtensions, defInteractionType, defCorrectResponsesPattern, defChoices);
    var object = visca.setObject(objID,objDefinition);

    /* Result */
    var reResponse = "king";
    var result = visca.setResult(null,null,reResponse,null,null);

    /* Context */
    var instructor = visca.setInstructorByMbox("Teacher","teacher@visca.com");
    var platform = "http://platform/assessing";
    var language = "zh-TW";
    // context.contextActivities.parent[0]
    var parentID = "http://assessment/id/final-exam";
    var pDefName = visca.setName("zh-TW","期末考");
    var pDefType = "http://adlnet.gov/expapi/activities/assessment";
    var parentDefinition = visca.setDefinition(pDefName,null,pDefType,null,null,null,null);
    var parent = visca.setParent(parentID,parentDefinition);
    // context.contextActivities.category[0]
    var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/assessment");
    // context.contextActivities
    var contextActivities = visca.setContextActivities(parent,null,category);
    var contextExtensions = visca.setExtension("browser-info");
    var context = visca.setContext(instructor,language,contextActivities,platform,contextExtensions);

    /* Authority */
    var authority = visca.setAuthorityByMbox("Crystal","crystal@gmail.com");

    visca.customizedChoseCorrectOption(actor,verb,object,result,context,authority,timestamp);

    var o = document.getElementById('output');
    o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}

function customizedReadQuizHints(id,name,des,bloom,hint,ans,choices,duration,pid,pname) {
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
    var choiceKing = visca.setDescription("zh-TW","金城武");
    var choiceMing = visca.setDescription("zh-TW","明金城");
    var defChoices = visca.setChoices("king",choiceKing,"ming",choiceMing);
    var objDefinition = visca.setDefinition(defName, defDescription, defType, defExtensions, defInteractionType, defCorrectResponsesPattern, defChoices);
    var object = visca.setObject(objID,objDefinition);

    /* Result */
    var reDuration = "PT1M10S";
    var result = visca.setResult(reDuration,null,null,null,null);

    /* Context */
    var instructor = visca.setInstructorByMbox("Teacher","teacher@visca.com");
    var platform = "http://platform/assessing";
    var language = "zh-TW";
    // context.contextActivities.parent[0]
    var parentID = "http://assessment/id/final-exam";
    var pDefName = visca.setName("zh-TW","期末考");
    var pDefType = "http://adlnet.gov/expapi/activities/assessment";
    var parentDefinition = visca.setDefinition(pDefName,null,pDefType,null,null,null,null);
    var parent = visca.setParent(parentID,parentDefinition);
    // context.contextActivities.category[0]
    var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/assessment");
    // context.contextActivities
    var contextActivities = visca.setContextActivities(parent,null,category);
    var contextExtensions = visca.setExtension("browser-info");
    var context = visca.setContext(instructor,language,contextActivities,platform,contextExtensions);

    /* Authority */
    var authority = visca.setAuthorityByMbox("Crystal","crystal@gmail.com");

    visca.customizedReadQuizHints(actor,verb,object,result,context,authority,timestamp);

    var o = document.getElementById('output');
    o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}
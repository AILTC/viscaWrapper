var timestamp = visca.setTimestamp();

function customizedWasAssignedVideo() {
  var actor = visca.setActorByMbox("Crystal","crystal@gmail.com");
  var verbDisplay = visca.setDisplay("zh-TW","被指定");
  var verb = visca.setVerb("https://w3id.org/xapi/acrossx/verbs/was-assigned",verbDisplay);
  
  var defName = visca.setName("zh-TW","Future Learning","en-US","Future Learning");
  var defDescription = visca.setDescription("zh-TW","【親子天下】《翻轉教育：未來教育 Future Learning》");
  var defType = "https://w3id.org/xapi/acrossx/activities/video";
  var duration = visca.setExtension("duration","PT12M47S");
  var defExtensions = visca.setExtensions(duration);
  var objDef = visca.setDefinition(defName,defDescription,defType,defExtensions,null,null,null);
  var objID = "https://www.youtube.com/watch?v=sQcwRGTW5mw";
  var object = visca.setObject(objID,objDef);

  var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/video");
  var parentID = "http://video/2";
  var pName = visca.setName("zh-TW","補充影片");
  var pType = "https://w3id.org/xapi/acrossx/activities/video";
  var parentDef = visca.setDefinition(pName,null,pType,null,null,null,null);                               
  var parent = visca.setParent(parentID,parentDef);
  var contextActivities = visca.setContextActivities(parent,null,category);
  var contextExtensions = visca.setExtension("browser-info");
  var context = visca.setContext(instructor,null,contextActivities,null,contextExtensions);

  visca.customizedWasAssignedVideo(actor,verb,object,context,authority,timestamp);

  var o = document.getElementById('output');
  o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}

function customizedWatchedVideoClips() {
  var actor = visca.setActorByMbox("Crystal","crystal@gmail.com");
  var verbDisplay = visca.setDisplay("zh-TW","觀看");
  var verb = visca.setVerb("https://w3id.org/xapi/acrossx/verbs/watched",verbDisplay);

  var defName = visca.setName("zh-TW","Future Learning","en-US","Future Learning");
  var defDescription = visca.setDescription("zh-TW","【親子天下】《翻轉教育：未來教育 Future Learning》");
  var defType = "https://w3id.org/xapi/acrossx/activities/video";
  var alignment = visca.setExtension("alignment",["社4-4-2-4","語1-1-2-2"]);
  var duration = visca.setExtension("duration","PT12M47S");
  var defExtensions = visca.setExtensions(alignment,duration);
  var objDef = visca.setDefinition(defName,defDescription,defType,defExtensions,null,null,null);
  var objID = "https://www.youtube.com/watch?v=sQcwRGTW5mw";
  var object = visca.setObject(objID,objDef);
  
  var reDuration = "PT3M30S";
  var start = visca.setExtension("starting-point","PT50S");
  var end = visca.setExtension("ending-point","PT4M20S");
  var reExtensions = visca.setExtensions(start,end);
  var result = visca.setResult(reDuration,reExtensions,null,null,null);
  
  var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/video");
  var contextActivities = visca.setContextActivities(null,null,category);
  var contextExtensions = visca.setExtension("browser-info");
  var context = visca.setContext(instructor,null,contextActivities,null,contextExtensions);

  visca.customizedWatchedVideoClips(actor,verb,object,result,context,authority,timestamp);

  var o = document.getElementById('output');
  o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}

function customizedSkippedVideoClips() {
  var actor = visca.setActorByMbox("Crystal","crystal@gmail.com");
  var verbDisplay = visca.setDisplay("zh-TW","跳過");
  var verb = visca.setVerb("https://w3id.org/xapi/acrossx/verbs/skipped",verbDisplay);

  var defName = visca.setName("zh-TW","Future Learning","en-US","Future Learning");
  var defDescription = visca.setDescription("zh-TW","【親子天下】《翻轉教育：未來教育 Future Learning》");
  var defType = "https://w3id.org/xapi/acrossx/activities/video";
  var alignment = visca.setExtension("alignment",["社 4-4-2-4","語1-1-2-2"]);
  var duration = visca.setExtension("duration","PT12M47S");
  var defExtensions = visca.setExtensions(alignment,duration);
  var objID = "https://www.youtube.com/watch?v=sQcwRGTW5mw";
  var objDef = visca.setDefinition(defName,defDescription,defType,defExtensions,null,null,null);
  
  var start = visca.setExtension("starting-point","PT0S");
  var end = visca.setExtension("ending-point","PT12M15S");
  var reExtensions = visca.setExtensions(start,end);
  var result = visca.setResult(reDuration,reExtensions,null,null,null);
                               
  var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/video");
  var contextActivities = visca.setContextActivities(null,null,category);
  var context = visca.setContext(instructor,null,contextActivities,null,null);

  visca.customizedSkippedVideoClips(actor,verb,object,result,context,authority,timestamp);

  var o = document.getElementById('output');
  o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}

function customizedTookVideoNotes() {
  var actor = visca.setActorByMbox("Crystal","crystal@gmail.com");
  var verbDisplay = visca.setDisplay("zh-TW","做筆記");
  var verb = visca.setVerb("https://w3id.org/xapi/adb/verbs/noted",verbDisplay);

  var defName = visca.setName("zh-TW","Future Learning","en-US","Future Learning");
  var defDescription = visca.setDescription("zh-TW","【親子天下】《翻轉教育：未來教育 Future Learning》");
  var defType = "https://w3id.org/xapi/acrossx/activities/video";
  var alignment = visca.setExtension("alignment",["社4-4-2-4","語1-1-2-2"]);
  var duration = visca.setExtension("duration","PT12M47S");
  var defExtensions = visca.setExtensions(alignment,duration);
  var objID = "https://www.youtube.com/watch?v=sQcwRGTW5mw";
  var objDef = visca.setDefinition(defName,defDescription,defType,defExtensions,null,null,null);
  var object = visca.setObject(objID,objDef);
  
  var reDuration = "PT30S";
  var time = visca.setExtension("time","PT4M50S");
  var reResponse = "教育很重要";
  var reExtensions = visca.setExtensions(time);
  var result = visca.setResult(reDuration,reExtensions,reResponse,null,null);

  var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/video");
  var contextActivities = visca.setContextActivities(null,null,category);
  var context = visca.setContext(instructor,null,contextActivities,null,null);

  visca.customizedTookVideoNotes(actor,verb,object,result,context,authority,timestamp);

  var o = document.getElementById('output');
  o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}

function customizedAnsweredVideoQuestions() {
  var actor = visca.setActorByMbox("Crystal","crystal@gmail.com");
  var verbDisplay = visca.setDisplay("zh-TW","回答");
  var verb = visca.setVerb("http://adlnet.gov/expapi/verbs/answered",verbDisplay);

  var objID = "http://question/id/1";
  var defName = visca.setName("zh-TW","1");
  var defDescription = visca.setDescription("zh-TW","1,_,3,_,5");
  var defType = "http://adlnet.gov/expapi/activities/cmi.interaction";
  var defInteractionType = "fill-in";
  var defCorrectResponsesPattern = visca.setCorrectResponsesPattern("2[,]4");
  var choiceKing = visca.setDescription("zh-TW","金城武");
  var choiceMing = visca.setDescription("zh-TW","明金城");
  var defChoices = visca.setChoices("king",choiceKing,"ming",choiceMing);
  var objDef = visca.setDefinition(defName,defDescription,defType,null,defInteractionType,defCorrectResponsesPattern,defChoices);
  var object = visca.setObject(objID,objDef);
  
  var reDuration = "P27DT23H";
  var start = visca.setExtension("starting-point","2016-02-28T01:00:00Z");
  var end = visca.setExtension("ending-point","2016-03-27T00:00:00Z");
  var reExtensions = visca.setExtensions(start,end);
  var reResponse = "2[,]6";
  var reScore = visca.setScore(0,78,100);
  var reSuccess = false;
  var result = visca.setResult(reDuration,reExtensions,reResponse,reScore,reSuccess);
  
  var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/video");
  var parentID = "http://video/2";
  var pName = visca.setName("zh-TW","補充影片");
  var pType = "https://w3id.org/xapi/acrossx/activities/video";
  var parentDef = visca.setDefinition(pName,null,pType,null,null,null,null);                                 
  var parent = visca.setParent(parentID,parentDef);
  var contextActivities = visca.setContextActivities(parent,null,category);
  var contextExtensions = visca.setExtension('browser-info');
  var context = visca.setContext(instructor,null,contextActivities,null,contextExtensions);

  visca.customizedAnsweredVideoQuestions(actor,verb,object,result,context,authority,timestamp);

  var o = document.getElementById('output');
  o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}

function customizedReadVideoHints() {
  var actor = visca.setActorByMbox("Crystal","crystal@gmail.com");
  var verbDisplay = visca.setDisplay("zh-TW","閱讀");
  var verb = visca.setVerb("http://w3id.org/xapi/adb/verbs/read", verbDisplay);

  var objID = "http://question/id/1";
  var defName = visca.setName("zh-TW","第一題");
  var defDescription = visca.setDescription("zh-TW","哪一個人最帥?");
  var defType = "http://adlnet.gov/expapi/activities/cmi.interaction";
  var defInteractionType = "choice";
  var defCorrectResponsesPattern = visca.setCorrectResponsesPattern("king");
  var alignment = visca.setExtension('alignment',["社4-4-2-4","語1-1-2-2"]);
  var bloomsLevel = visca.setExtension('blooms-level','Applying');
  var supplementalInfo = visca.setExtension('supplemental-info','your hint!');
  var defExtensions = visca.setExtensions(alignment,bloomsLevel,supplementalInfo);
  var objDef = visca.setDefinition(defName,defDescription,defType,defExtensions,defInteractionType,defCorrectResponsesPattern,null);
  var object = visca.setObject(objID,objDef);

  var reDuration = "PT1M10S";
  var result = visca.setResult(reDuration,null,null,null,null);
                                
  var parentID = "https://www.youtube.com/watch?v=sQcwRGTW5mw";
  var pName = visca.setName("zh-TW","Future Learning");
  var pType = "https://w3id.org/xapi/acrossx/activities/video";
  var pExtensions = visca.setExtension('duration','PT12M47S');
  var parentDef = visca.setDefinition(pName,null,pType,pExtensions);
  var parent = visca.setParent(parentID,parentDef);
  var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/video","https://w3id.org/xapi/acrossx/profile/practice");
  var contextActivities = visca.setContextActivities(parent,null,category);
  var contextExtensions = visca.setExtension('browser-info');
  var context = visca.setContext(instructor,null,contextActivities,null,contextExtensions);

  visca.customizedReadVideoHints(actor,verb,object,result,context,authority,timestamp);

  var o = document.getElementById('output');
  o.innerText = JSON.stringify(ADL.stmt, null, '    ');
}
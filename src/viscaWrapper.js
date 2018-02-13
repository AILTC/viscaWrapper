/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/*  viscaWrapper  (c) III Advanced Intelligence Learning Technology Center 2018 / Apache Licence  */
/*  - Author：Mafuyu, Larry Lai, Roger Hu                                                         */
/*  - see https://wiki.visualcatch.org/tc/viscawrapper.html                                       */
/*        https://github.com/AILTC                                                                */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/* jshint node:true *//* global define, escape, unescape */
'use strict';
var vEndpoint = '<ENDPOINT>';


// SHA-1 implementation in JavaScript(c) Chris Veness 2002-2014
var Sha1 = {};

Sha1.hash = function (msg) {
    msg = msg.utf8Encode();

    var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];

    msg += String.fromCharCode(0x80);

    var l = msg.length / 4 + 2;
    var N = Math.ceil(l / 16);
    var M = new Array(N);

    for (var i = 0; i < N; i++) {
        M[i] = new Array(16);
        for (var j = 0; j < 16; j++) {
            M[i][j] = (msg.charCodeAt(i * 64 + j * 4) << 24) | (msg.charCodeAt(i * 64 + j * 4 + 1) << 16) |
                (msg.charCodeAt(i * 64 + j * 4 + 2) << 8) | (msg.charCodeAt(i * 64 + j * 4 + 3));
        }
    }
    M[N - 1][14] = ((msg.length - 1) * 8) / Math.pow(2, 32); M[N - 1][14] = Math.floor(M[N - 1][14]);
    M[N - 1][15] = ((msg.length - 1) * 8) & 0xffffffff;

    // set initial hash value [§5.3.1]
    var H0 = 0x67452301;
    var H1 = 0xefcdab89;
    var H2 = 0x98badcfe;
    var H3 = 0x10325476;
    var H4 = 0xc3d2e1f0;

    var W = new Array(80); var a, b, c, d, e;
    for (var i = 0; i < N; i++) {
        for (var t = 0; t < 16; t++) W[t] = M[i][t];
        for (var t = 16; t < 80; t++) W[t] = Sha1.ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);

        a = H0; b = H1; c = H2; d = H3; e = H4;

        for (var t = 0; t < 80; t++) {
            var s = Math.floor(t / 20); // seq for blocks of 'f' functions and 'K' constants
            var T = (Sha1.ROTL(a, 5) + Sha1.f(s, b, c, d) + e + K[s] + W[t]) & 0xffffffff;
            e = d;
            d = c;
            c = Sha1.ROTL(b, 30);
            b = a;
            a = T;
        }

        H0 = (H0 + a) & 0xffffffff;
        H1 = (H1 + b) & 0xffffffff;
        H2 = (H2 + c) & 0xffffffff;
        H3 = (H3 + d) & 0xffffffff;
        H4 = (H4 + e) & 0xffffffff;
    }

    return Sha1.toHexStr(H0) + Sha1.toHexStr(H1) + Sha1.toHexStr(H2) +
        Sha1.toHexStr(H3) + Sha1.toHexStr(H4);
};

Sha1.f = function (s, x, y, z) {
    switch (s) {
        case 0: return (x & y) ^ (~x & z);           // Ch()
        case 1: return x ^ y ^ z;                 // Parity()
        case 2: return (x & y) ^ (x & z) ^ (y & z);  // Maj()
        case 3: return x ^ y ^ z;                 // Parity()
    }
};

Sha1.ROTL = function (x, n) {
    return (x << n) | (x >>> (32 - n));
};

Sha1.toHexStr = function (n) {
    var s = "", v;
    for (var i = 7; i >= 0; i--) { v = (n >>> (i * 4)) & 0xf; s += v.toString(16); }
    return s;
};

if (typeof String.prototype.utf8Encode == 'undefined') {
    String.prototype.utf8Encode = function () {
        return unescape(encodeURIComponent(this));
    };
}

if (typeof String.prototype.utf8Decode == 'undefined') {
    String.prototype.utf8Decode = function () {
        try {
            return decodeURIComponent(escape(this));
        } catch (e) {
            return this; // invalid UTF-8? return as-is
        }
    };
}

if (typeof module != 'undefined' && module.exports)
    module.exports = Sha1; // CommonJs export
if (typeof define == 'function' && define.amd)
    define([], function () { return Sha1; }); // AMD

var keys = {
    "alignment": "https://w3id.org/xapi/acrossx/extensions/alignment",
    "duration": "http://id.tincanapi.com/extension/duration",
    "blooms-level": "https://w3id.org/xapi/acrossx/extensions/blooms-level",
    "supplemental-info": "https://w3id.org/xapi/acrossx/extensions/supplemental-info",
    "browser-info": "http://id.tincanapi.com/extension/browser-info",
    "starting-point": "http://id.tincanapi.com/extension/starting-point",
    "ending-point": "http://id.tincanapi.com/extension/ending-point",
    "time": "http://id.tincanapi.com/extension/time",
    "total-pages": "https://w3id.org/xapi/acrossx/extensions/total-pages",
    "page": "https://w3id.org/xapi/acrossx/extensions/page",
    "highlightedString": "https://w3id.org/xapi/acrossx/extensions/highlightedString",
    "anchor-text": "https://w3id.org/xapi/acrossx/extensions/anchor-text",
    "time-limit": "https://w3id.org/xapi/acrossx/extensions/time-limit",
    "total-items": "https://w3id.org/xapi/acrossx/extensions/total-items",
    "total-score": "https://w3id.org/xapi/acrossx/extensions/total-score",
    "pass-score": "https://w3id.org/xapi/acrossx/extensions/pass-score",
    "mentionedaccount":"https://w3id.org/xapi/acrossx/extensions/mentionedagent",
    "rubric":"https://w3id.org/xapi/acrossx/activities/rubric"
};

function validateURL(url) {
    //var regExp = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;
    //var regExp = /^https?:\/\/[\w-\.]+(:\d+)?(\/[~\w-\/\.]*)?(\?\S*)?(#\S*)?$/;
    var regExp = /^(((ht|f)tp(s?))\:\/\/)?((([a-zA-Z0-9_\-]{2,}\.)+[a-zA-Z]{2,})|((?:(?:25[0-5]|2[0-4]\d|[01]\d\d|\d?\d)(\?(\.?\d)\.)){4}))(:[a-zA-Z0-9]+)?(\/[a-zA-Z0-9\-\._\?\,\'/\\\+&amp;%\$#\=~]*)?$/;

    if (regExp.test(url))
        return true;

    return false;
}

function validateURI(uri) {
    var regExp = /^([a-z][a-z0-9+.-]*):(?:\/\/((?:(?=((?:[a-z0-9-._~!$&'()*+,;=:]|%[0-9A-F]{2})*))(\3)@)?(?=(\[[0-9A-F:.]{2,}\]|(?:[a-z0-9-._~!$&'()*+,;=]|%[0-9A-F]{2})*))\5(?::(?=(\d*))\6)?)(\/(?=((?:[a-z0-9-._~!$&'()*+,;=:@\/]|%[0-9A-F]{2})*))\8)?|(\/?(?!\/)(?=((?:[a-z0-9-._~!$&'()*+,;=:@\/]|%[0-9A-F]{2})*))\10)?)(?:\?(?=((?:[a-z0-9-._~!$&'()*+,;=:@\/?]|%[0-9A-F]{2})*))\11)?(?:#(?=((?:[a-z0-9-._~!$&'()*+,;=:@\/?]|%[0-9A-F]{2})*))\12)?$/i;

    if (regExp.test(uri))
        return true;

    return false;
}

function validateMbox(mbox) {
    var regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (/^mailto:/.test(mbox)) {
        if (regExp.test(mbox.replace('mailto:', '')))
            return 0;
    } else if (regExp.test(mbox)) {
        return 1;
    } else
        return 2;
}

function validateTimeStamp(timestamp) {
    var regExp = /^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)$/;

    if (regExp.test(timestamp))
        return true;

    return false;
}

function isStringArray(object) {
    if (Object.prototype.toString.call(object) === '[object Array]' && object.length > 0) {
        for (var i = 0; i < object.length; i++) {
            if (typeof object[i] != 'string')
                return false;
        }
    } else
        return false;

    return true;
}

function isObjectArray(object) {
    if (Object.prototype.toString.call(object) === '[object Array]' && object.length > 0) {
        for (var i = 0; i < object.length; i++) {
            if (!isJSONObject(object[i]))
                return false;
        }
    } else
        return false;

    return true;
}

function isISOString(string) {
    return isDuration(string) || isDatetime(string);
}

function isDuration(duration) {
    var durationExp = /^P((([0-9]*)Y)?(([0-9]*)M)?(([0-9]*)W)?(([0-9]*)D)?)?(T(([0-9]*)H)?(([0-9]*)M)?(([0-9]*\.?[0-9]{1,2})S)?)?$/;
    if (durationExp.test(duration))
        return true;
    return false;
}

function isDatetime(datetime) {
    var datetimeExp = /^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d(\.\d+)?([+-][0-2]\d:[0-5]\d|Z)$/;
    if (datetimeExp.test(datetime))
        return true;
    return false;
}

function isJSONObject(object) {
    var objectConstructor = {}.constructor;

    if (!object)
        return false;

    if (object.constructor !== objectConstructor)
        return false;

    return true;
}

var levels = ["remembering", "understanding", "applying", "analyzing", "evaluating", "creating"];

function isBloomsLevel(level) {
    if (levels.indexOf(level.toLowerCase()) >= 0)
        return true;

    return false;
}

function toDecimalNumber(num) {
    if (typeof num === "number") {
        return num;
    } else if (typeof num === "string" && num.trim().length > 0) {
        num = Number(num);
        if (!Number.isNaN(num)) {
            return num;
        }
    }
}

function getBrowserInfo() {
    var info = {};

    info["code_name"] = navigator.appCodeName;
    info["name"] = navigator.appName;
    info["version"] = navigator.appVersion;
    info["platform"] = navigator.platform;
    info["user-agent-header"] = navigator.userAgent;
    info["cookies-enabled"] = navigator.cookieEnabled;

    return info;
}

function isEmptyObject(object) {
    return Object.keys(object).length === 0 && JSON.stringify(object) === JSON.stringify({});
}

function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}

function isset(object) {
    return object !== undefined && object !== null;
}

function getNumericalDuration(duration) {
    var dateIndex = duration.indexOf("T");
    var object = {};
    var date = null;
    var time = null;

    // 將 Duration ISO String 區分成 [日期] 跟 [時間]
    if (dateIndex >= 0) {
        date = duration.substring(1, dateIndex);
        time = duration.substring(dateIndex + 1);
    }

    var year = 0;
    var month = 0;
    var day = 0;
    var hour = 0;
    var minute = 0;
    var second = 0;

    if (date) {
        var yearIndex = date.indexOf("Y");
        if (yearIndex >= 0) {
            year = Number(date.substring(0, yearIndex));
            date = date.substring(yearIndex + 1);
        }

        var monthIndex = date.indexOf("M");
        if (monthIndex >= 0) {
            month = Number(date.substring(0, monthIndex));
            date = date.substring(monthIndex + 1);
        }

        var dayIndex = date.indexOf("D");
        if (dayIndex >= 0) {
            day = Number(date.substring(0, dayIndex));
            date = date.substring(dayIndex + 1);
        }
    }

    if (time) {
        var hourIndex = time.indexOf("H");
        if (hourIndex >= 0) {
            hour = Number(time.substring(0, hourIndex));
            time = time.substring(hourIndex + 1);
        }

        var minuteIndex = time.indexOf("M");
        if (minuteIndex >= 0) {
            minute = Number(time.substring(0, minuteIndex));
            time = time.substring(minuteIndex + 1);
        }

        var secondIndex = time.indexOf("S");
        if (secondIndex >= 0) {
            second = Number(time.substring(0, secondIndex));
        }
    }

    object.year = year;
    object.month = month;
    object.day = day;
    object.hour = hour;
    object.minute = minute;
    object.second = second;

    return object;
}

function getNumericalDatetime(datetime) {
    var object = {};

    datetime = datetime.split("T");
    date = datetime[0];
    time = datetime[1].replace("Z", "");
    date = date.split('-').map(Number);
    time = time.split(':').map(Number);

    object.year = date[0];
    object.month = date[1];
    object.day = date[2];
    object.hour = time[0];
    object.minute = time[1];
    object.second = time[2]

    return object;
}

function calculateDuration(start, end) {
    var duration = {};
    var year, month, day, hour, minute, second;
    if (end.second < start.second) {
        end.minute = end.minute - 1;
        second = (end.second + 60) - start.second;
    } else {
        second = end.second - start.second;
    }

    if (end.minute < start.minute) {
        end.hour = end.hour - 1;
        minute = (end.minute + 60) - start.minute;
    } else {
        minute = end.minute - start.minute;
    }

    if (end.hour < start.hour) {
        end.day = end.day - 1;
        hour = (end.hour + 24) - start.hour;
    } else {
        hour = end.hour - start.hour;
    }

    if (end.day < start.day) {
        end.month = end.month - 1;
        day = (end.day + 30) - start.day;
    } else {
        day = end.day - start.day;
    }

    if (end.month < start.month) {
        end.year = end.year - 1;
        month = (end.month + 30) - start.month;
    } else {
        month = end.month - start.month;
    }

    year = end.year - start.year;
    duration.year = year;
    duration.month = month;
    duration.day = day;
    duration.hour = hour;
    duration.minute = minute;
    duration.second = second;

    duration.txt = "PT";

    if (year > 0)
        duration.txt += year + "Y";

    if (month > 0)
        duration.txt += month + "M";

    if (day > 0)
        duration.txt += day + "D";

    if (hour > 0)
        duration.txt += hour + "H";

    if (minute > 0)
        duration.txt += minute + "M";

    if (second > 0) duration.txt += second + "S";

    return duration;
}

var month_days = {
    '1': 31,
    '2': 28,
    '3': 31,
    '4': 30,
    '5': 31,
    '6': 30,
    '7': 31,
    '8': 31,
    '9': 30,
    '10': 31,
    '11': 30,
    '12': 31
};

function calculateTimeDifference(start, end) {
    var timeDifference = {};
    var year, month, day, hour, minute, second;

    if (end.second < start.second) {
        end.minute = end.minute - 1;
        second = (end.second + 60) - start.second;
    } else
        second = end.second - start.second;

    if (end.minute < start.minute) {
        end.hour = end.hour - 1;
        minute = (end.minute + 60) - start.minute;
    } else
        minute = end.minute - start.minute;

    if (end.hour < start.hour) {
        end.day = end.day - 1;
        hour = (end.hour + 24) - start.hour;
    } else
        hour = end.hour - start.hour;

    if (end.day < start.day) {
        var days;
        end.month = end.month - 1;

        if (end.year % 4 === 0 && end.month === 2)
            days = 29;
        else
            days = month_days[end.month];

        day = (end.day + days) - start.day;
    } else
        day = end.day - start.day;

    if (end.month < start.month) {
        end.year = end.year - 1;
        month = (end.month + 30) - start.month;
    } else
        month = end.month - start.month;

    year = end.year - start.year;
    timeDifference.year = year;
    timeDifference.month = month;
    timeDifference.day = day;
    timeDifference.hour = hour;
    timeDifference.minute = minute;
    timeDifference.second = second;

    return timeDifference;
}

var visca = (function (obj) {    
    var ADL = obj;
    var contextPlatform = null;

    return {
        // 建構子
        init: function (_user, _password) {

            if (typeof window !== 'undefined')
                ADL = window.ADL = obj.ADL || {};

            ADL.XAPIWrapper.changeConfig({
                'endpoint': vEndpoint,
                'user': _user,
                'password': _password
            });

        }, //end init()

        setGlobalPlatform : function(platform){
            if (typeof platform === 'string') {
                if (!isBlank(platform))
                    contextPlatform = platform;
            } else
                console.log('Type of platform is not a string');
        },

        setAgent: function (obj, name, idType, id) {
            var agent = {};
            if(obj == 'actor')
                agent.objectType = "Agent";
            else
                agent.objectType = "Group";

            if (typeof name === 'string') {
                if (!isBlank(name))
                    agent.name = name;
            } else
                console.log('[' + obj + '] Type of ' + obj + '\'s name is not a string');

            switch (idType) {
                case 'mbox':
                    if (typeof id === 'string') {
                        if (validateMbox(id) == 0 && !isBlank(id))
                            agent.mbox = id;
                        else if (validateMbox(id) == 1 && !isBlank(id))
                            agent.mbox = 'mailto:' + id;
                        else
                            console.log('[' + obj + '] The format of ' + obj + '\'s mbox is not \'mailto:link\'');
                    } else
                        console.log('[' + obj + '] Type of ' + obj + '\'s mbox is not a string');
                    break;
                case 'mbox_sha1sum':
                    if (typeof id === 'string') {
                        if (validateMbox(id) == 0 && !isBlank(id))
                            agent.mbox_sha1sum = Sha1.hash(id);
                        else if (validateMbox(id) == 1 && !isBlank(id))
                            agent.mbox_sha1sum = Sha1.hash('mailto:' + id);
                    } else
                        console.log('[' + obj + '] Type of ' + obj + '\'s name is not a string');
                    break;
                case 'openid':
                    if (validateURI(id))
                        agent.openid = id;
                    else
                        console.log('[' + obj + '] Type of ' + obj + '\'s openid is not uri');
                    break;
                case 'account':
                    if (isJSONObject(id)) {
                        if (!isEmptyObject(id))
                            agent.account = id;
                    }
                    break;
            }
            return agent;
        },

        setActorByMbox: function (name, mbox) {
            var actor = visca.setAgent('actor', name, 'mbox', mbox);
            return actor;
        },

        setActorByMboxSha1sum: function (name, mbox_sha1sum) {
            var actor = visca.setAgent('actor', name, 'mbox_sha1sum', mbox_sha1sum);
            return actor;
        },

        setActorByOpenid: function (name, openid) {
            var actor = visca.setAgent('actor', name, 'openid', openid);
            return actor;
        },

        setActorByAccount: function (name, homePage, accountName) {
            var account = {};
            if (validateURL(homePage)) {
                account.homePage = homePage;
            } else
                console.log('[actor] Type of account\'s homePage is not url');
            if (typeof accountName === 'string') {
                if (!isBlank(accountName))
                    account.name = accountName;
            } else
                console.log('[actor] Type of account\'s name is no string');

            var actor = visca.setAgent('actor', name, 'account', account);
            return actor;
        },

        setGroupByMbox: function (name, mbox) {
            var actor = visca.setAgent('group', name, 'mbox', mbox);
            return actor;
        },

        setGroupByMboxSha1sum: function (name, mbox_sha1sum) {
            var actor = visca.setAgent('group', name, 'mbox_sha1sum', mbox_sha1sum);
            return actor;
        },

        setGroupByOpenid: function (name, openid) {
            var actor = visca.setAgent('group', name, 'openid', openid);
            return actor;
        },

        setGroupByAccount: function (name, homePage, accountName) {
            var account = {};
            if (validateURL(homePage)) {
                account.homePage = homePage;
            } else
                console.log('[actor] Type of account\'s homePage is not url');
            if (typeof accountName === 'string') {
                if (!isBlank(accountName))
                    account.name = accountName;

            } else
                console.log('[actor] Type of account\'s name is no string');
            var actor = visca.setAgent('group', name, 'account', account);
            return actor;
        },

        setVerb: function (id, display) {
            var verb = {};
            if (typeof id == 'string' && !isBlank(id)) {
                if (validateURL(id))
                    verb.id = id;
                else
                    console.log('[verb] Type of verb\'s id is not URL');
            }
            if (display !== null) {
                if (isJSONObject(display)) {
                    if (!isEmptyObject(display))
                        verb.display = display;
                } else
                    console.log('[verb] Type of display is not JSON object');
            }
            return verb;
        },

        setTranslation: function (type, args) {
            var translation = {};
            var language, value;

            if (args.length % 2 == 0) {
                for (var i = 0; i < args.length; i += 2) {
                    language = args[i];
                    value = args[i + 1];
                    if (typeof language == 'string') {
                        if (!isBlank(language)) {
                            if (typeof value == 'string') {
                                if (!isBlank(value))
                                    translation[language] = value;
                                else
                                    console.log('[' + type + '] Value is blank');
                            } else
                                console.log('[' + type + '] Type of value is not string');
                        } else
                            console.log('[' + type + '] Language code is blank');
                    } else
                        console.log('[' + type + '] Type of language code is not string');
                }
            } else
                console.log('[' + type + '] Number of arguments is not even');

            return translation;
        },

        setDisplay: function () {
            return visca.setTranslation('display', arguments);
        },

        setObject: function (id, definition, isActivity) {
            var object = {};
            
            if(!isActivity)
                object.objectType = "StatementRef";
            else
                object.objectType = "Activity";

            if (typeof id == 'string' && !isBlank(id)) {
                if(object.objectType == "Activity") {
                    if (validateURL(id))
                        object.id = id;
                    else
                        console.log('[object] Type of object\'s id is not URL');
                } else
                    object.id = id;
            }
            if (isset(definition)) {
                if (isJSONObject(definition)) {
                    if (!isEmptyObject(definition))
                        object.definition = definition;
                } else
                    console.log('[object] Type of definition is not JSON object');
            }
            return object;
        },

        setDefinition: function (name, description, type, extensions, interactionType, correctResponsesPattern, choices) {
            var definition = {};

            if (isset(name)) {
                if (isJSONObject(name)) {
                    if (!isEmptyObject(name))
                        definition.name = name;
                } else
                    console.log('[definition] Type of name is not JSON object');
            }

            if (isset(description)) {
                if (isJSONObject(description)) {
                    if (!isEmptyObject(description))
                        definition.description = description;
                } else
                    console.log('[definition] Type of description is not JSON object');
            }

            if (isset(type)) {
                if (validateURL(type))
                    definition.type = type;
                else
                    console.log('[definition] Type of type is not URL');
            }

            if (isset(extensions)) {
                if (isJSONObject(extensions)) {
                    if (!isEmptyObject(extensions))
                        definition.extensions = extensions;
                } else
                    console.log('[definition] Type of extensions is not JSON object');
            }

            if (isset(interactionType)) {
                if (typeof interactionType == 'string') {
                    if (!isBlank(interactionType))
                        definition.interactionType = interactionType;
                } else
                    console.log('[definition] Type of interactionType is not string');
            }

            if (isset(correctResponsesPattern)) {
                if (isStringArray(correctResponsesPattern))
                    definition.correctResponsesPattern = correctResponsesPattern;
                else
                    console.log('[definition] Type of correctResponsesPattern is not array of strings');
            }
            if (isset(choices)) {
                if (isObjectArray(choices))
                    definition.choices = choices;
                else
                    console.log('[definition] Type of choices is not array of JSON objects');
            }
            return definition;
        },

        setCorrectResponsesPattern: function () {
            var correctResponsesPattern = [];
            var pattern;
            for (var i = 0; i < arguments.length; i++) {
                pattern = arguments[i];
                if (typeof pattern == 'string') {
                    if (!isBlank(pattern))
                        correctResponsesPattern.push(pattern);
                    else
                        console.log('[correctResponsesPattern] Argument ' + i + ' is blank');
                } else
                    console.log('[correctResponsesPattern] Type of argument ' + i + ' is not a string');
            }
            return correctResponsesPattern;
        },

        setChoices: function () {
            var choices = [];
            var choice, id, description;

            if (arguments.length % 2 == 0) {
                for (var i = 0; i < arguments.length; i += 2) {
                    choice = {};
                    id = arguments[i];
                    description = arguments[i + 1];

                    if (isset(id)) {
                        if (typeof id == 'string')
                            if (!isBlank(id))
                                choice.id = id;
                            else
                                console.log('[choices] Type of id is not string at arguments[' + i + ']');
                    }

                    if (isset(description)) {
                        if (isJSONObject(description)) {
                            if (!isEmptyObject(description))
                                choice.description = description;
                        } else
                            console.log('[choices] Type of description is not JSON object at arguments[' + (i + 1) + ']');
                    }

                    if (!isEmptyObject(choice))
                        choices.push(choice);
                }
            } else
                console.log("[choices] Number of arguments is not even");

            return choices;
        },

        setName: function () {
            return visca.setTranslation('name', arguments);

        },

        setDescription: function () {
            return visca.setTranslation('description', arguments);
        },

        setExtension: function (key, val) {
            var extension = {};
            var name = "";

            switch (key) {
                case "alignment":
                    if (isStringArray(val))
                        name = keys["alignment"];
                    else
                        console.log('[extension] Type of alignment is not a string array');
                    break;
                case "duration":
                    if (isDuration(val))
                        name = keys["duration"];
                    else
                        console.log('[extension] Type of duration is not ISO string(Duration)');
                    break;
                case "blooms-level":
                    if (isBloomsLevel(val)) {
                        name = keys["blooms-level"];
                        val = val[0].toUpperCase() + val.toLowerCase().slice(1);
                    } else
                        console.log('[extension] Levels: [' + levels + ']');
                    break;
                case "supplemental-info": // String | Activity Object | URL
                    if ((typeof val === "string" && !isBlank(val)) || validateURL(val))
                        name = keys["supplemental-info"];
                    else if (isJSONObject(val)) {
                        var isValid = true;
                        if (!val.hasOwnProperty('objectType')) {
                            isValid = false;
                            console.log('[extension] supplemental-info must have objectType');
                        }
                        if (!val.hasOwnProperty('id')) {
                            isValid = false;
                            console.log('[extension] supplemental-info must have id');
                        }
                        if (!val.hasOwnProperty('definition')) {
                            isValid = false;
                            console.log('[extension] supplemental-info must have definition');
                        }
                        else {
                            if (!val.definition.hasOwnProperty('name')) {
                                isValid = false;
                                console.log('[extension] supplemental-info must have definition\'s name');
                            }
                            if (!val.definition.hasOwnProperty('type')) {
                                isValid = false;
                                console.log('[extension] supplemental-info must have definition\'s type');
                            }
                        }
                        if (isValid)
                            name = keys["supplemental-info"];
                    }
                    break;
                case "browser-info":
                    name = keys["browser-info"];
                    val = getBrowserInfo();
                    break;
                case "starting-point":
                    if (isISOString(val))
                        name = keys["starting-point"];
                    else
                        console.log('[extension] Type of starting-point is not ISO string');
                    break;
                case "ending-point":
                    if (isISOString(val))
                        name = keys["ending-point"];
                    else
                        console.log('[extension] Type of ending-point is not ISO string');
                    break;
                case "time":
                    if (isDuration(val))
                        name = keys["time"];
                    else
                        console.log('[extension] Type of time is not ISO string(Duration)');
                    break;
                case "total-pages":
                    if (Number.isInteger(val))
                        name = keys["total-pages"];
                    else
                        console.log('[extension] Type of total-pages is not Integer');
                    break;
                case "page":
                    if (Number.isInteger(val))
                        name = keys["page"];
                    else
                        console.log('[extension] Type of page is not Integer');
                    break;
                case "highlightedString":
                    if (typeof val === "string")
                        name = keys["highlightedString"];
                    else
                        console.log('[extension] Type of highlightedString is not String');
                    break;
                case "anchor-text":
                    if (typeof val === "string")
                        name = keys["anchor-text"];
                    else
                        console.log('[extension] Type of anchor-text is not String');
                    break;
                case "time-limit":
                    if (isDuration(val))
                        name = keys["time-limit"];
                    else
                        console.log("[extension] Type of time-limit is not ISO string(Duration)");
                    break;
                case "total-items":
                    if (Number.isInteger(val))
                        name = keys["total-items"];
                    else
                        console.log("[extension] Type of total-items is not an integer");
                    break;
                case "total-score":
                    if (Number.isInteger(val))
                        name = keys["total-score"];
                    else
                        console.log("[extension] Type of total-score is not an integer");
                    break;
                case "pass-score":
                    if (Number.isInteger(val))
                        name = keys["pass-score"];
                    else
                        console.log("[extension] Type of pass-score is not an integer");
                    break;
                case "mentionedaccount":
                    if(isObjectArray(val))
                        name = keys["mentionedaccount"]
                    else
                        console.log("[extension] Type of mentionedaccount is not an object array");
                    break;
                case "rubric":
                    if (validateURL(val))
                        name = keys["rubric"];
                    else
                        console.log("[extension] Type of rubric is not URL");
                    break;
                default:
                    break;
            }

            if (typeof val === undefined || val === "")
                return;

            if (name !== "") //嚴格不等比較
                extension[name] = val;

            return extension;
        },

        setExtensions: function () {
            var extensions = {};

            for (var i = 0; i < arguments.length; i++) {
                if (isJSONObject(arguments[i])) {
                    if (!isEmptyObject(arguments[i])) {
                        var name = Object.keys(arguments[i])[0];
                        var val = arguments[i][name];
                        extensions[name] = val;
                    }
                } else
                    console.log('[extensions] Argument ' + i + ' is not JSON object');
            }

            return extensions;
        },

        setResult: function (duration, extensions, response, score, success) {
            var result = {};

            if (isset(duration)) {
                if (isDuration(duration))
                    result.duration = duration;
                else
                    console.log('[result] Type of duration is not ISO string(Duration)');
            }

            if (isset(extensions)) {
                if (isJSONObject(extensions)) {
                    if (!isEmptyObject(extensions))
                        result.extensions = extensions;
                } else
                    console.log('[result] Type of extensions is not JSON object');
            }

            if (isset(response)) {
                if (typeof response == 'string')
                    if (!isBlank(response))
                        result.response = response;
                    else
                        console.log('[result] Type of response is not string');
            }

            if (isset(score)) {
                if (isJSONObject(result)) {
                    if (!isEmptyObject(score))
                        result.score = score;
                } else
                    console.log('[result] Type of score is not JSON object');
            }

            if (isset(success)) {
                if (typeof success == 'boolean')
                    result.success = success;
                else
                    console.log('[result] Type of success is not boolean');
            }

            return result;
        },

        setScore: function (min, raw, max) {
            var score = {};
            min = toDecimalNumber(min);
            raw = toDecimalNumber(raw);
            max = toDecimalNumber(max);

            if (min <= raw && raw <= max) {
                score.min = Number(Math.floor(min * 100) / 100);
                score.raw = Number(Math.floor(raw * 100) / 100);
                score.max = Number(Math.floor(max * 100) / 100);
            } else console.log('[score] min <= raw <= max');

            return score;
        },

        setContext: function (instructor, language, contextActivities, platform, extensions, team, statementID, revision) {
            var context = {};

            if (isset(instructor)) {
                if (isJSONObject(instructor)) {
                    if (!isEmptyObject(instructor))
                        context.instructor = instructor;
                } else
                    console.log('[context] Type of instructor is not JSON object');
            }

            if (isset(language)) {
                if (typeof language == 'string') {
                    if (!isBlank(language))
                        context.language = language;
                } else
                    console.log('[context] Type of language is not string');
            }

            if (isset(contextActivities)) {
                if (isJSONObject(contextActivities)) {
                    if (!isEmptyObject(contextActivities))
                        context.contextActivities = contextActivities;
                } else
                    console.log('[context] Type of contextActivities is not JSON object');
            }

            if (isset(platform)) {
                if (typeof platform == 'string') {
                    if (!isBlank(platform))
                        context.platform = platform;
                } else
                    console.log('[context] Type of platform is not string');
            }

            if (isset(extensions)) {
                if (isJSONObject(extensions)) {
                    if (!isEmptyObject(extensions))
                        context.extensions = extensions;
                } else
                    console.log('[context] Type of extensions is not JSON object');
            }

            if (isset(team)) {
                if (isJSONObject(team)) {
                    if (!isEmptyObject(team))
                        context.team = team;
                } else
                    console.log('[context] Type of team is not JSON object');
            }

            if (isset(statementID)) {
                if (typeof statementID == 'string') {
                    if (!isBlank(statementID))
                        var statementRef = new Object();
                        statementRef.objectType = 'StatementRef';
                        statementRef.id = statementID;

                        context.statement = statementRef;
                } else
                    console.log('[context] Type of platform is not string');
            }

            if (isset(revision)) {
                if (typeof revision == 'string') {
                    if (!isBlank(revision))
                        context.revision = revision;
                } else
                    console.log('[context] Type of revision is not string');
            }

            return context;
        },

        setInstructorByMbox: function (name, mbox) {
            var instructor = visca.setAgent('instructor', name, 'mbox', mbox);
            return instructor;
        },

        setInstructorByMboxSha1sum: function (name, mbox_sha1sum) {
            var instructor = visca.setAgent('instructor', name, 'mbox_sha1sum', mbox_sha1sum);
            return instructor;
        },

        setInstructorByOpenid: function (name, openid) {
            var instructor = visca.setAgent('instructor', name, 'openid', openid);
            return instructor;
        },

        setInstructorByAccount: function (name, homePage, accountName) {
            var account = {};

            if (validateURL(homePage)) {
                account.homePage = homePage;
            } else
                console.log('[instructor] Type of account\'s homePage is not url');

            if (typeof accountName === 'string') {
                if (!isBlank(accountName))
                    account.name = accountName;
            } else
                console.log('[instructor] Type of account\'s name is no string');

            var instructor = visca.setAgent('instructor', name, 'account', account);
            return instructor;
        },

        setContextActivities: function (parent, group, category) {
            var contextActivities = {};

            if (isset(parent)) {
                if (isObjectArray(parent))
                    contextActivities.parent = parent;
                else
                    console.log('[contextActivities] Type of parent is not array of JSON objects');
            }

            if (isset(group)) {
                if (isObjectArray(group))
                    contextActivities.grouping = group;
                else
                    console.log('[contextActivities] Type of group is not array of JSON objects');
            }

            if (isset(category)) {
                if (isObjectArray(category))
                    contextActivities.category = category;
                else
                    console.log('[contextActivities] Type of category is not array of JSON objects');
            }

            return contextActivities;
        },

        setParent: function () {
            var parents = [];
            var parent, id, definition;

            if (arguments.length % 2 == 0) {
                for (var i = 0; i < arguments.length; i += 2) {
                    parent = {};
                    id = arguments[i];
                    definition = arguments[i + 1];
                    parent.objectType = "Activity";
                    if (validateURL(id))
                        parent.id = id;
                    else
                        console.log('[parent] Type of id is not URL at arguments[' + i + ']');

                    if (isset(definition)) {
                        if (isJSONObject(definition)) {
                            if (!isEmptyObject(definition))
                                parent.definition = definition;
                        } else
                            console.log('[parent] Type of definition is not JSON Object at arguments[' + (i + 1) + ']');
                    }
                    parents.push(parent);
                }
            } else
                console.log("[parent] Number of arguments is not even");

            return parents;
        },

        setGroup: function () {
            var groups = [];
            var tag, id, definition;

            if (arguments.length % 2 == 0) {
                for (var i = 0; i < arguments.length; i += 2) {
                    tag = {};
                    id = arguments[i];
                    definition = arguments[i + 1];
                    tag.objectType = "Activity";
                    if (validateURL(id))
                        tag.id = id;
                    else
                        console.log('[tag] Type of id is not URL at arguments[' + i + ']');

                    if (isset(definition)) {
                        if (isJSONObject(definition)) {
                            if (!isEmptyObject(definition))
                                tag.definition = definition;
                        } else
                            console.log('[tag] Type of definition is not JSON Object at arguments[' + (i + 1) + ']');
                    }
                    groups.push(tag);
                }
            } else
                console.log("[tag] Number of arguments is not even");

            return groups;
        },

        setCategory: function () {
            var categories = [];
            var category;
            for (var i = 0; i < arguments.length; i++) {
                category = {};
                var id = arguments[i];
                category.objectType = "Activity";

                if (validateURL(id))
                    category.id = id;
                else
                    console.log('[category] Type of id is not URL at arguments[' + i + ']');

                categories.push(category);
            }
            return categories;
        },

        setAuthorityByMbox: function (name, mbox) {
            var authority = visca.setAgent('authority', name, 'mbox', mbox);
            return authority;
        },

        setAuthorityByMboxSha1sum: function (name, mbox_sha1sum) {
            var authority = visca.setAgent('authority', name, 'mbox_sha1sum', mbox_sha1sum);
            return authority;
        },

        setAuthorityByOpenid: function (name, openid) {
            var authority = visca.setAgent('authority', name, 'openid', openid);
            return authority;
        },

        setAuthorityByAccount: function (name, homePage, accountName) {
            var account = {};

            if (validateURL(homePage)) {
                account.homePage = homePage;
            } else
                console.log('[authority] Type of account\'s homePage is not url');

            if (typeof accountName === 'string') {
                if (!isBlank(accountName))
                    account.name = accountName;
            } else
                console.log('[authority] Type of account\'s name is no string');

            var authority = visca.setAgent('authority', name, 'account', account);
            return authority;
        },

        setTimestamp: function () {
            var date = new Date();
            var timestamp = date.toISOString();
            return timestamp;
        },

        setAttachment: function (usageType, display, description, contentType, length, sha2, fileUrl) {
            var attachment = [];
            var subAtt = {};

            if (validateURL(usageType)) {
                subAtt.usageType = usageType;
            } else
                console.log('[attachment] Type of usageType is no IRI');

            if (isJSONObject(display)) {
                if (!isEmptyObject(display))
                    subAtt.display = display;
            } else
                console.log('[attachment] Type of display is not JSON object');

            if (description !== null) {
                if (isset(description)) {
                    if (isJSONObject(description)) {
                        if (!isEmptyObject(description))
                            subAtt.description = description;
                    } else
                        console.log('[attachment] Type of description is not JSON object');
                }
            }

            if (typeof contentType === 'string') {
                if (!isBlank(contentType))
                    subAtt.contentType = contentType;
            } else
                console.log('[attachment] Type of contentType is no string');

            subAtt.length = toDecimalNumber(length);

            if (typeof sha2 === 'string') {
                if (!isBlank(sha2))
                    subAtt.sha2 = sha2;
            } else
                console.log('[attachment] Type of sha2 is no SHA-2');

            if (fileUrl !== null) {
                if (validateURL(fileUrl)) {
                    subAtt.fileUrl = fileUrl;
                } else
                    console.log('[attachment] Type of fileUrl is no IRL');
            }

            attachment.push(subAtt);
            return attachment;            
        },

        setAttachments: function () {
            var attachments = [];

            for (var i = 0; i < arguments.length; i++) {
                if (isObjectArray(arguments[i])) {
                    if (!isEmptyObject(arguments[i]))
                        attachments = attachments.concat(arguments[i]);
                } else
                    console.log('[attachments] Attachments ' + i + ' is not JSON object');
            }

            return attachments;
        },

        checkRequired: {
            agent: function (agent, agentObject) {
                var isValid = true;
                if (!agentObject) {
                    console.log(agent + ': Required');
                    return false;
                }
                if (!agentObject.hasOwnProperty('objectType')) {
                    isValid = false;
                    console.log(agent + '.objectType: Required');
                }
                if (!agentObject.hasOwnProperty('name')) {
                    isValid = false;
                    console.log(agent + '.name: Required');
                }
                if (!agentObject.hasOwnProperty('mbox') && !agentObject.hasOwnProperty('mbox_sha1sum') && !agentObject.hasOwnProperty('openid') && !agentObject.hasOwnProperty('account')) {
                    isValid = false;
                    console.log(agent + '.mbox/' + agent + '.mbox_sha1sum/' + agent + '.openid/' + agent + '.account: Required');
                }
                return isValid;
            },

            actor: function (actor) {
                return visca.checkRequired.agent('actor', actor);
            },

            verb: function (verb) {
                var isValid = true;
                if (!verb.hasOwnProperty('id')) {
                    isValid = false;
                    console.log('verb.id: Required');
                }
                return isValid;
            },

            object: function (object) {
                var isValid = true;
                if (!object.hasOwnProperty('objectType')) {
                    isValid = false;
                    console.log('object.objectType: Required');
                    
                } else {
                    if (object.objectType == 'Activity' && !object.hasOwnProperty('definition')) {
                        isValid = false;
                        console.log('object.definition: Required');
                    }
                }

                if (!object.hasOwnProperty('id')) {
                    isValid = false;
                    console.log('object.id: Required');
                }
                
                return isValid;
            },

            definition: function (definition, name) {
                var isValid = true;
                if (!definition) {
                    isValid = false;
                    console.log('object.definition.' + name + ': Required');
                }
                return isValid;
            },
            //name 可為 parent、category
            contextActivities: function (activity, name, index) {
                var isValid = true;
                if (!activity) {
                    console.log('context.contextActivities: Required');
                    return false;
                }
                switch (name) {
                    case "parent":
                        if (!activity.hasOwnProperty('parent')) {
                            console.log('context.contextActivities.parent: Required');
                            return false;
                        }
                        if (index < activity.parent.length) {
                            if (!activity.parent[index].hasOwnProperty('objectType')) {
                                isValid = false;
                                console.log('context.contextActivities.parent[' + index + '].objectType: Required');
                            }
                            if (!activity.parent[index].hasOwnProperty('id')) {
                                isValid = false;
                                console.log('context.contextActivities.parent[' + index + '].id: Required');
                            }
                            if (activity.parent[index].hasOwnProperty('definition')) {
                                if (!activity.parent[index].definition.hasOwnProperty('type')) {
                                    isValid = false;
                                    console.log('context.contextActivities.parent[' + index + '].definition.type: Required');
                                }
                            }
                        } else {
                            console.log('context.contextActivities.parent[' + index + ']: Required');
                            return false;
                        }
                        break;
                    case "category":
                        if (!activity.hasOwnProperty('category')) {
                            console.log('context.contextActivities.category: Required');
                            return false;
                        }
                        if (index < activity.category.length) {
                            if (!activity.category[index].hasOwnProperty('objectType')) {
                                isValid = false;
                                console.log('context.contextActivities.category[' + index + '].objectType: Required');
                            }
                            if (!activity.category[index].hasOwnProperty('id')) {
                                isValid = false;
                                console.log('context.contextActivities.category[' + index + '].id: Required');
                            }
                        } else {
                            console.log('context.contextActivities.category[' + index + ']: Required');
                            return false;
                        }
                        break;
                    case "grouping":
                        if (!activity.hasOwnProperty('grouping')) {
                            console.log('context.contextActivities.grouping: Required');
                            return false;
                        }
                        break;
                    case "other":
                        if (!activity.hasOwnProperty('other')) {
                            console.log('context.contextActivities.other: Required');
                            return false;
                        }
                        break;
                }
                return isValid;
            },
            platform: function (activity) {
                var isValid = true;
                if (!activity.hasOwnProperty('platform')) {
                    console.log('context.platform: Required');
                    return false;
                }
                return isValid;
            },
            authority: function (authority) {
                return visca.checkRequired.agent('authority', authority);
            },

            extensions: function (object, extensions, name) {
                var isValid = true;
                if (!extensions) {
                    isValid = false;
                    console.log(object + '.extensions: Required');
                }
                else {
                    if (!extensions.hasOwnProperty(keys[name]) && keys[name]) {
                        isValid = false;
                        console.log(object + '.extensions.' + keys[name] + ': Required');
                    }
                }
                return isValid;
            },

            instructor: function (instructor) {
                return visca.checkRequired.agent('context.instructor', instructor);
            },

            result: function (result, name) {
                var isValid = true;
                if (result && !result.hasOwnProperty(name)) {
                    isValid = false;
                    console.log('result.' + name + ': Required');
                }
                return isValid;
            },

            attachments: function (attachments) {
                var isValid = true;

                if(attachments != null) {
                    for (var i = 0; i < attachments.length; i++){
                        if (!attachments[i].hasOwnProperty('usageType')) {
                            console.log('attachments[' + i + '].usageType: Required');
                            return false;
                        }

                        if (!attachments[i].hasOwnProperty('display')) {
                            console.log('attachments[' + i + '].display: Required');
                            return false;
                        }

                        if (!attachments[i].hasOwnProperty('contentType')) {
                            console.log('attachments[' + i + '].contentType: Required');
                            return false;
                        }

                        if (!attachments[i].hasOwnProperty('length')) {
                            console.log('attachments[' + i + '].length: Required');
                            return false;
                        }

                        if (!attachments[i].hasOwnProperty('sha2')) {
                            console.log('attachments[' + i + '].sha2: Required');
                            return false;
                        }
                    }
                }

                return isValid;
            },
        },

        checkResultDuration: function (result, isoType) {
            var duration = result.duration;
            var start = result.extensions[keys['starting-point']];
            var end = result.extensions[keys['ending-point']];

            if (isoType === 'duration') {
                if (!isDuration(start) || !isDuration(end)) {
                    return false;
                }

                duration = getNumericalDuration(duration);
                start = getNumericalDuration(start);
                end = getNumericalDuration(end);

                var result = calculateDuration(start, end);
                delete result.txt;

                if (JSON.stringify(duration) === JSON.stringify(result)) {
                    return true;
                } else
                    console.log('duration, starting-point, ending-point 不正確');

            } else if (isoType === 'datetime') {
                if (!isDatetime(start) || !isDatetime(end)) {
                    return false;
                }

                duration = getNumericalDuration(duration);
                start = getNumericalDatetime(start);
                end = getNumericalDatetime(end);

                if (JSON.stringify(duration) === JSON.stringify(calculateTimeDifference(start, end)))
                    return true;
                else
                    console.log('duration, starting-point(datetime), ending-point(datetime) 不正確');
            }

            return false;
        },

        setStatement: function (actor, verb, object, result, context, authority, timestamp, attachments) {
            var statement = {};

            if(contextPlatform != null && context.platform == null)
                context.platform = contextPlatform;

            if (isset(actor))
                statement.actor = actor;
            if (isset(verb))
                statement.verb = verb;
            if (isset(object))
                statement.object = object;
            if (isset(result))
                statement.result = result;
            if (isset(context))
                statement.context = context;
            if (isset(authority))
                statement.authority = authority;
            if (isset(attachments))
                statement.attachments = attachments;

            if (validateTimeStamp(timestamp)) 
                statement.timestamp = timestamp;
            else {
                console.log("Invalid Timestamp");
                statement.timestamp = visca.setTimestamp();
            }

            return statement;
        },

        /* 影片學習服務 */

        customizedWasAssignedVideo: function (actor, verb, object, context, authority, timestamp) {

            ADL.stmt = visca.setStatement(actor, verb, object, null, context, authority, timestamp, null);

            var isValid = true;

            isValid = visca.checkRequired.actor(actor) && isValid;
            isValid = visca.checkRequired.verb(verb) && isValid;
            isValid = visca.checkRequired.object(object) && isValid;
            isValid = visca.checkRequired.definition(object.definition.type, 'type') && isValid;
            isValid = visca.checkRequired.extensions('object.definition', object.definition.extensions, 'duration') && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 0) && isValid;
            isValid = visca.checkRequired.instructor(context.instructor) && isValid;
            isValid = visca.checkRequired.authority(authority) && isValid;

            if (isValid) {
                ADL.XAPIWrapper.sendStatement(ADL.stmt, function (resp, obj) {
                    console.log("[" + obj.id + "]: " + resp.status + " - " + resp.statusText);
                });
            }
        },

        customizedWatchedVideoClips: function (actor, verb, object, result, context, authority, timestamp) {

            ADL.stmt = visca.setStatement(actor, verb, object, result, context, authority, timestamp, null);

            var isValid = true;

            isValid = visca.checkRequired.actor(actor) && isValid;
            isValid = visca.checkRequired.verb(verb) && isValid;
            isValid = visca.checkRequired.object(object) && isValid;
            isValid = visca.checkRequired.definition(object.definition.type, 'type') && isValid;
            isValid = visca.checkRequired.extensions('object.definition', object.definition.extensions, 'duration') && isValid;
            isValid = visca.checkRequired.result(result, 'duration') && isValid;
            isValid = visca.checkRequired.extensions('result', result.extensions, 'starting-point') && isValid;
            isValid = visca.checkRequired.extensions('result', result.extensions, 'ending-point') && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 0) && isValid;

            // 檢查 result.extensions 的 starting-point & ending-point 是 [[ Duration ]] ISO String
            if (!isDuration(result.extensions[keys['starting-point']])) {
                isValid = false;
                console.log('Type of starting-point is not Duration ISO String');
            }
            if (!isDuration(result.extensions[keys['ending-point']])) {
                isValid = false;
                console.log('Type of ending-point is not Duration ISO String');
            }

            // 檢查 result 的 duration 的時間是否等於 ending-point 的時間減去 starting-point 的時間，且 starting-point 時間小於 ending-point 時間
            isValid = visca.checkResultDuration(result, 'duration') && isValid;

            if (isValid) {
                ADL.XAPIWrapper.sendStatement(ADL.stmt, function (resp, obj) {
                    console.log("[" + obj.id + "]: " + resp.status + " - " + resp.statusText);
                });
            }

        },

        customizedSkippedVideoClips: function (actor, verb, object, result, context, authority, timestamp) {

            ADL.stmt = visca.setStatement(actor, verb, object, result, context, authority, timestamp, null);

            var isValid = true;

            isValid = visca.checkRequired.actor(actor) && isValid;
            isValid = visca.checkRequired.verb(verb) && isValid;
            isValid = visca.checkRequired.object(object);
            isValid = visca.checkRequired.definition(object.definition.type, 'type') && isValid;
            isValid = visca.checkRequired.extensions('object.definition', object.definition.extensions, 'duration') && isValid;
            isValid = visca.checkRequired.result(result, 'duration') && isValid;
            isValid = visca.checkRequired.extensions('result', result.extensions, 'starting-point') && isValid;
            isValid = visca.checkRequired.extensions('result', result.extensions, 'ending-point') && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 0) && isValid;

            // 檢查 result.extensions 的 starting-point & ending-point 是 [[ Duration ]] ISO String
            if (!isDuration(result.extensions[keys['starting-point']])) {
                isValid = false;
                console.log('Type of starting-point is not Duration ISO String');
            }
            if (!isDuration(result.extensions[keys['ending-point']])) {
                isValid = false;
                console.log('Type of ending-point is not Duration ISO String');
            }

            // 檢查 result 的 duration 的時間是否等於 ending-point 的時間減去 starting-point 的時間，且 starting-point 時間小於 ending-point 時間
            isValid = visca.checkResultDuration(result, 'duration') && isValid;

            if (isValid) {
                ADL.XAPIWrapper.sendStatement(ADL.stmt, function (resp, obj) {
                    console.log("[" + obj.id + "]: " + resp.status + " - " + resp.statusText);
                });
            }

        },

        customizedTookVideoNotes: function (actor, verb, object, result, context, authority, timestamp) {

            ADL.stmt = visca.setStatement(actor, verb, object, result, context, authority, timestamp, null);

            // 做筆記的 context 的 starting-point & ending-point 如果存在，做額外檢查
            if (context.hasOwnProperty('extensions')) {
                var start = keys['starting-point'];
                if (context.extensions.hasOwnProperty(start)) {
                    if (!isDatetime(context.extensions[start])) {
                        delete context.extensions[start];
                        console.log('[extensions] Type of starting-point is not Datetime ISO String');
                    }
                }
                var end = keys['ending-point'];
                if (context.extensions.hasOwnProperty(end)) {
                    if (!isDatetime(context.extensions[end])) {
                        delete context.extensions[end];
                        console.log('[extensions] Type of ending-point is not Datetime ISO String');
                    }
                }
            }

            var isValid = true;

            isValid = visca.checkRequired.actor(actor) && isValid;
            isValid = visca.checkRequired.verb(verb) && isValid;
            isValid = visca.checkRequired.object(object) && isValid;
            isValid = visca.checkRequired.definition(object.definition.type, 'type') && isValid;
            isValid = visca.checkRequired.extensions('object.definition', object.definition.extensions, 'duration') && isValid;
            isValid = visca.checkRequired.result(result, 'duration') && isValid;
            isValid = visca.checkRequired.result(result, 'response') && isValid;
            isValid = visca.checkRequired.extensions('result', result.extensions, 'time') && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 0) && isValid;

            if (isValid) {
                ADL.XAPIWrapper.sendStatement(ADL.stmt, function (resp, obj) {
                    console.log("[" + obj.id + "]: " + resp.status + " - " + resp.statusText);
                });
            }

        },

        customizedAnsweredVideoQuestions: function (actor, verb, object, result, context, authority, timestamp) {

            ADL.stmt = visca.setStatement(actor, verb, object, result, context, authority, timestamp, null);

            var isValid = true;

            isValid = visca.checkRequired.actor(actor) && isValid;
            isValid = visca.checkRequired.verb(verb) && isValid;
            isValid = visca.checkRequired.object(object) && isValid;
            isValid = visca.checkRequired.definition(object.definition.type, 'type') && isValid;
            isValid = visca.checkRequired.definition(object.definition.interactionType, 'interactionType') && isValid;

            isValid = visca.checkRequired.result(result, 'success') && isValid;
            isValid = visca.checkRequired.result(result, 'response') && isValid;
            isValid = visca.checkRequired.result(result, 'duration') && isValid;

            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'parent', 0) && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 0) && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 1) && isValid;

            isValid = visca.checkRequired.extensions('context', context.extensions, 'time') && isValid;


            if (result.hasOwnProperty('extensions')) {
                if (result.extensions.hasOwnProperty(keys['starting-point']) && result.extensions.hasOwnProperty(keys['ending-point'])) {
                    // 檢查 result.extensions 的 starting-point & ending-point 是 [[ Datetime ]] ISO String
                    if (!isDatetime(result.extensions[keys['starting-point']])) {
                        isValid = false;
                        console.log('result.extensions.' + keys['starting-point'] + ' is not Datetime ISO String');
                    }
                    if (!isDatetime(result.extensions[keys['ending-point']])) {
                        isValid = false;
                        console.log('result.extensions.' + keys['ending-point'] + ' is not Datetime ISO String');
                    }
                    // 檢查 result 的 duration 的時間是否等於 ending-point 的時間減去 starting-point 的時間，且 starting-point 時間小於 ending-point 時間
                    isValid = visca.checkResultDuration(result, 'datetime') && isValid;
                }
            }

            if (isValid) {
                ADL.XAPIWrapper.sendStatement(ADL.stmt, function (resp, obj) {
                    console.log("[" + obj.id + "]: " + resp.status + " - " + resp.statusText);
                });
            }

        },

        customizedReadVideoHints: function (actor, verb, object, result, context, authority, timestamp) {

            ADL.stmt = visca.setStatement(actor, verb, object, result, context, authority, timestamp, null);

            var isValid = true;

            isValid = visca.checkRequired.actor(actor) && isValid;
            isValid = visca.checkRequired.verb(verb) && isValid;
            isValid = visca.checkRequired.object(object) && isValid;
            isValid = visca.checkRequired.definition(object.definition.type, 'type') && isValid;
            isValid = visca.checkRequired.definition(object.definition.interactionType, 'interactionType') && isValid;
            isValid = visca.checkRequired.extensions('object.definition', object.definition.extensions, 'supplemental-info') && isValid;

            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'parent', 0) && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 0) && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 1) && isValid;

            if (isValid) {
                ADL.XAPIWrapper.sendStatement(ADL.stmt, function (resp, obj) {
                    console.log("[" + obj.id + "]: " + resp.status + " - " + resp.statusText);
                });
            }

        },

        /* 電子書學習服務 */

        customizedWasAssignedEBook: function (actor, verb, object, context, authority, timestamp) {

            ADL.stmt = visca.setStatement(actor, verb, object, null, context, authority, timestamp, null);

            var isValid = true;
            isValid = visca.checkRequired.actor(actor) && isValid;
            isValid = visca.checkRequired.verb(verb) && isValid;
            isValid = visca.checkRequired.object(object) && isValid;
            isValid = visca.checkRequired.definition(object.definition.type, 'type') && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 0) && isValid;
            isValid = visca.checkRequired.authority(authority) && isValid;

            if (isValid) {
                ADL.XAPIWrapper.sendStatement(ADL.stmt, function (resp, obj) {
                    console.log("[" + obj.id + "]: " + resp.status + " - " + resp.statusText);
                });
            }

        },

        customizedReadEBookPage: function (actor, verb, object, result, context, authority, timestamp) {

            ADL.stmt = visca.setStatement(actor, verb, object, result, context, authority, timestamp, null);

            var isValid = true;
            isValid = visca.checkRequired.actor(actor) && isValid;
            isValid = visca.checkRequired.verb(verb) && isValid;
            isValid = visca.checkRequired.object(object) && isValid;
            isValid = visca.checkRequired.definition(object.definition.type, 'type') && isValid;
            isValid = visca.checkRequired.extensions('object.definition', object.definition.extensions, 'total-pages') && isValid;
            isValid = visca.checkRequired.extensions('object.definition', object.definition.extensions, 'page') && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 0) && isValid;
            isValid = visca.checkRequired.result(result, 'duration') && isValid;

            if (result.hasOwnProperty('extensions')) {
                if (result.extensions.hasOwnProperty(keys['starting-point']) && result.extensions.hasOwnProperty(keys['ending-point'])) {
                    // 檢查 result.extensions 的 starting-point & ending-point 是 [[ Datetime ]] ISO String
                    if (!isDatetime(result.extensions[keys['starting-point']])) {
                        isValid = false;
                        console.log('result.extensions.' + keys['starting-point'] + ' is not Datetime ISO String');
                    }
                    if (!isDatetime(result.extensions[keys['ending-point']])) {
                        isValid = false;
                        console.log('result.extensions.' + keys['ending-point'] + ' is not Datetime ISO String');
                    }
                    // 檢查 result 的 duration 的時間是否等於 ending-point 的時間減去 starting-point 的時間，且 starting-point 時間小於 ending-point 時間
                    isValid = visca.checkResultDuration(result, 'datetime') && isValid;
                }
            }

            // 檢查頁數不可大於總頁數
            var page = object.definition.extensions[keys["page"]];
            var totalPages = object.definition.extensions[keys["total-pages"]];
            if (isset(page) && isset(totalPages) && (page > totalPages)) {
                isValid = false
                console.log("page less than or equal total-pages");
            }

            if (isValid) {
                ADL.XAPIWrapper.sendStatement(ADL.stmt, function (resp, obj) {
                    console.log("[" + obj.id + "]: " + resp.status + " - " + resp.statusText);
                });
            }

        },

        customizedBookmarkedEBookPage: function (actor, verb, object, context, authority, timestamp) {

            ADL.stmt = visca.setStatement(actor, verb, object, null, context, authority, timestamp, null);

            var isValid = true;
            isValid = visca.checkRequired.actor(actor) && isValid;
            isValid = visca.checkRequired.verb(verb) && isValid;
            isValid = visca.checkRequired.object(object) && isValid;
            isValid = visca.checkRequired.definition(object.definition.type, 'type') && isValid;
            isValid = visca.checkRequired.extensions('object.definition', object.definition.extensions, 'page') && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 0) && isValid;

            if (isValid) {
                ADL.XAPIWrapper.sendStatement(ADL.stmt, function (resp, obj) {
                    console.log("[" + obj.id + "]: " + resp.status + " - " + resp.statusText);
                });
            }

        },

        customizedSearchedEBookString: function (actor, verb, object, result, context, authority, timestamp) {

            ADL.stmt = visca.setStatement(actor, verb, object, result, context, authority, timestamp, null);

            var isValid = true;
            isValid = visca.checkRequired.actor(actor) && isValid;
            isValid = visca.checkRequired.verb(verb) && isValid;
            isValid = visca.checkRequired.object(object) && isValid;
            isValid = visca.checkRequired.definition(object.definition.type, 'type') && isValid;
            isValid = visca.checkRequired.extensions('object.definition', object.definition.extensions, 'page') && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 0) && isValid;
            isValid = visca.checkRequired.result(result, 'response') && isValid;

            if (isValid) {
                ADL.XAPIWrapper.sendStatement(ADL.stmt, function (resp, obj) {
                    console.log("[" + obj.id + "]: " + resp.status + " - " + resp.statusText);
                });
            }

        },

        customizedHighlightedEBookParagraph: function (actor, verb, object, result, context, authority, timestamp) {

            ADL.stmt = visca.setStatement(actor, verb, object, result, context, authority, timestamp, null);

            var isValid = true;
            isValid = visca.checkRequired.actor(actor) && isValid;
            isValid = visca.checkRequired.verb(verb) && isValid;
            isValid = visca.checkRequired.object(object) && isValid;
            isValid = visca.checkRequired.definition(object.definition.type, 'type') && isValid;
            isValid = visca.checkRequired.extensions('object.definition', object.definition.extensions, 'page') && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 0) && isValid;
            isValid = visca.checkRequired.result(result, 'response') && isValid;

            if (isValid) {
                ADL.XAPIWrapper.sendStatement(ADL.stmt, function (resp, obj) {
                    console.log("[" + obj.id + "]: " + resp.status + " - " + resp.statusText);
                });
            }

        },

        customizedTookEBookNotes: function (actor, verb, object, result, context, authority, timestamp) {

            ADL.stmt = visca.setStatement(actor, verb, object, result, context, authority, timestamp, null);

            var isValid = true;
            isValid = visca.checkRequired.actor(actor) && isValid;
            isValid = visca.checkRequired.verb(verb) && isValid;
            isValid = visca.checkRequired.object(object) && isValid;
            isValid = visca.checkRequired.definition(object.definition.type, 'type') && isValid;
            isValid = visca.checkRequired.extensions('object.definition', object.definition.extensions, 'page') && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 0) && isValid;
            isValid = visca.checkRequired.result(result, 'duration') && isValid;
            isValid = visca.checkRequired.result(result, 'response') && isValid;

            if (isValid) {
                ADL.XAPIWrapper.sendStatement(ADL.stmt, function (resp, obj) {
                    console.log("[" + obj.id + "]: " + resp.status + " - " + resp.statusText);
                });
            }

        },

        customizedReferenceEBookLink: function (actor, verb, object, context, authority, timestamp) {

            ADL.stmt = visca.setStatement(actor, verb, object, null, context, authority, timestamp, null);

            var isValid = true;
            isValid = visca.checkRequired.actor(actor) && isValid;
            isValid = visca.checkRequired.verb(verb) && isValid;
            isValid = visca.checkRequired.object(object) && isValid;
            isValid = visca.checkRequired.definition(object.definition.type, 'type') && isValid;
            isValid = visca.checkRequired.extensions('object.definition', object.definition.extensions, 'page') && isValid;
            isValid = visca.checkRequired.extensions('object.definition', object.definition.extensions, 'anchor-text') && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 0) && isValid;

            if (isValid) {
                ADL.XAPIWrapper.sendStatement(ADL.stmt, function (resp, obj) {
                    console.log("[" + obj.id + "]: " + resp.status + " - " + resp.statusText);
                });
            }

        },

        customizedWatchedEBookVideo: function (actor, verb, object, result, context, authority, timestamp) {

            ADL.stmt = visca.setStatement(actor, verb, object, result, context, authority, timestamp, null);

            var isValid = true;
            isValid = visca.checkRequired.actor(actor) && isValid;
            isValid = visca.checkRequired.verb(verb) && isValid;
            isValid = visca.checkRequired.object(object) && isValid;
            isValid = visca.checkRequired.definition(object.definition.type, 'type') && isValid;
            isValid = visca.checkRequired.extensions('object.definition', object.definition.extensions, 'duration') && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'parent', 0) && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 0) && isValid;
            isValid = visca.checkRequired.result(result, 'duration') && isValid;
            isValid = visca.checkRequired.extensions('result', result.extensions, 'starting-point') && isValid;
            isValid = visca.checkRequired.extensions('result', result.extensions, 'ending-point') && isValid;

            if (isValid) {
                ADL.XAPIWrapper.sendStatement(ADL.stmt, function (resp, obj) {
                    console.log("[" + obj.id + "]: " + resp.status + " - " + resp.statusText);
                });
            }

        },

        customizedSkippedEBookVideo: function (actor, verb, object, result, context, authority, timestamp) {

            ADL.stmt = visca.setStatement(actor, verb, object, result, context, authority, timestamp, null);

            var isValid = true;
            isValid = visca.checkRequired.actor(actor) && isValid;
            isValid = visca.checkRequired.verb(verb) && isValid;
            isValid = visca.checkRequired.object(object) && isValid;
            isValid = visca.checkRequired.definition(object.definition.type, 'type') && isValid;
            isValid = visca.checkRequired.extensions('object.definition', object.definition.extensions, 'duration') && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'parent', 0) && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 0) && isValid;
            isValid = visca.checkRequired.result(result, 'duration') && isValid;
            isValid = visca.checkRequired.extensions('result', result.extensions, 'starting-point') && isValid;
            isValid = visca.checkRequired.extensions('result', result.extensions, 'ending-point') && isValid;

            if (isValid) {
                ADL.XAPIWrapper.sendStatement(ADL.stmt, function (resp, obj) {
                    console.log("[" + obj.id + "]: " + resp.status + " - " + resp.statusText);
                });
            }

        },

        /* 測驗學習服務 */

        customizedAnsweredQuizQuestions: function (actor, verb, object, result, context, authority, timestamp) {

            ADL.stmt = visca.setStatement(actor, verb, object, result, context, authority, timestamp, null);

            var isValid = true;
            isValid = visca.checkRequired.actor(actor) && isValid;
            isValid = visca.checkRequired.verb(verb) && isValid;
            isValid = visca.checkRequired.object(object) && isValid;
            isValid = visca.checkRequired.definition(object.definition.type, 'type') && isValid;
            isValid = visca.checkRequired.instructor(context.instructor) && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'parent', 0) && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 0) && isValid;
            isValid = visca.checkRequired.result(result, 'response') && isValid;
            isValid = visca.checkRequired.result(result, 'success') && isValid;

            if (isValid) {
                ADL.XAPIWrapper.sendStatement(ADL.stmt, function (resp, obj) {
                    console.log("[" + obj.id + "]: " + resp.status + " - " + resp.statusText);
                });
            }

        },

        customizedAttemptedQuiz: function (actor, verb, object, result, context, authority, timestamp) {

            ADL.stmt = visca.setStatement(actor, verb, object, result, context, authority, timestamp, null);

            var isValid = true;
            isValid = visca.checkRequired.actor(actor) && isValid;
            isValid = visca.checkRequired.verb(verb) && isValid;
            isValid = visca.checkRequired.object(object) && isValid;
            isValid = visca.checkRequired.definition(object.definition.type, 'type') && isValid;
            isValid = visca.checkRequired.instructor(context.instructor) && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 0) && isValid;
            isValid = visca.checkRequired.extensions('result', result.extensions, 'starting-point') && isValid;

            if (isValid) {
                ADL.XAPIWrapper.sendStatement(ADL.stmt, function (resp, obj) {
                    console.log("[" + obj.id + "]: " + resp.status + " - " + resp.statusText);
                });
            }

        },

        customizedCompletedQuiz: function (actor, verb, object, result, context, authority, timestamp) {

            ADL.stmt = visca.setStatement(actor, verb, object, result, context, authority, timestamp, null);

            var isValid = true;
            isValid = visca.checkRequired.actor(actor) && isValid;
            isValid = visca.checkRequired.verb(verb) && isValid;
            isValid = visca.checkRequired.object(object) && isValid;
            isValid = visca.checkRequired.definition(object.definition.type, 'type') && isValid;
            isValid = visca.checkRequired.extensions('object.definition', object.definition.extensions, 'total-items') && isValid;
            isValid = visca.checkRequired.instructor(context.instructor) && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 0) && isValid;
            isValid = visca.checkRequired.result(result, 'duration') && isValid;
            isValid = visca.checkRequired.result(result, 'score') && isValid;
            isValid = visca.checkRequired.extensions('result', result.extensions, 'ending-point') && isValid;

            if (isValid) {
                ADL.XAPIWrapper.sendStatement(ADL.stmt, function (resp, obj) {
                    console.log("[" + obj.id + "]: " + resp.status + " - " + resp.statusText);
                });
            }

        },

        customizedChoseCorrectOption: function (actor, verb, object, result, context, authority, timestamp) {

            ADL.stmt = visca.setStatement(actor, verb, object, result, context, authority, timestamp, null);

            var isValid = true;
            isValid = visca.checkRequired.actor(actor) && isValid;
            isValid = visca.checkRequired.verb(verb) && isValid;
            isValid = visca.checkRequired.object(object) && isValid;
            isValid = visca.checkRequired.definition(object.definition.type, 'type') && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'parent', 0) && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 0) && isValid;
            isValid = visca.checkRequired.result(result, 'response') && isValid;

            if (isValid) {
                ADL.XAPIWrapper.sendStatement(ADL.stmt, function (resp, obj) {
                    console.log("[" + obj.id + "]: " + resp.status + " - " + resp.statusText);
                });
            }

        },

        customizedReadQuizHints: function (actor, verb, object, result, context, authority, timestamp) {

            ADL.stmt = visca.setStatement(actor, verb, object, result, context, authority, timestamp, null);

            var isValid = true;
            isValid = visca.checkRequired.actor(actor) && isValid;
            isValid = visca.checkRequired.verb(verb) && isValid;
            isValid = visca.checkRequired.object(object) && isValid;
            isValid = visca.checkRequired.definition(object.definition.type, 'type') && isValid;
            isValid = visca.checkRequired.extensions('object.definition', object.definition.extensions, 'supplemental-info') && isValid;
            isValid = visca.checkRequired.instructor(context.instructor) && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'parent', 0) && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 0) && isValid;
            isValid = visca.checkRequired.result(result, 'duration') && isValid;

            if (isValid) {
                ADL.XAPIWrapper.sendStatement(ADL.stmt, function (resp, obj) {
                    console.log("[" + obj.id + "]: " + resp.status + " - " + resp.statusText);
                });
            }

        },

        /* 自我練習服務 */

        customizedAnsweredVideoPracticeQuestions: function (actor, verb, object, result, context, authority, timestamp) {

            ADL.stmt = visca.setStatement(actor, verb, object, result, context, authority, timestamp, null);

            var isValid = true;
            isValid = visca.checkRequired.actor(actor) && isValid;
            isValid = visca.checkRequired.verb(verb) && isValid;
            isValid = visca.checkRequired.object(object) && isValid;
            isValid = visca.checkRequired.definition(object.definition.type, 'type') && isValid;
            isValid = visca.checkRequired.definition(object.definition.type, 'interactionType') && isValid;
            isValid = visca.checkRequired.result(result, 'success') && isValid;
            isValid = visca.checkRequired.result(result, 'response') && isValid;
            isValid = visca.checkRequired.result(result, 'duration') && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'parent', 0) && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 0) && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 1) && isValid;
            isValid = visca.checkRequired.extensions('context', context.extensions, 'time');

            if (isValid) {
                ADL.XAPIWrapper.sendStatement(ADL.stmt, function (resp, obj) {
                    console.log("[" + obj.id + "]: " + resp.status + " - " + resp.statusText);
                });
            }

        },

        customizedAnsweredEBookPracticeQuestions: function (actor, verb, object, result, context, authority, timestamp) {

            ADL.stmt = visca.setStatement(actor, verb, object, result, context, authority, timestamp, null);

            var isValid = true;
            isValid = visca.checkRequired.actor(actor) && isValid;
            isValid = visca.checkRequired.verb(verb) && isValid;
            isValid = visca.checkRequired.object(object) && isValid;
            isValid = visca.checkRequired.definition(object.definition.type, 'type') && isValid;
            isValid = visca.checkRequired.definition(object.definition.type, 'interactionType') && isValid;
            isValid = visca.checkRequired.result(result, 'success') && isValid;
            isValid = visca.checkRequired.result(result, 'response') && isValid;
            isValid = visca.checkRequired.result(result, 'duration') && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'parent', 0) && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 0) && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 1) && isValid;
            isValid = visca.checkRequired.extensions('context', context.extensions, 'page');

            if (isValid) {
                ADL.XAPIWrapper.sendStatement(ADL.stmt, function (resp, obj) {
                    console.log("[" + obj.id + "]: " + resp.status + " - " + resp.statusText);
                });
            }

        },

        customizedReadEBookHints: function (actor, verb, object, result, context, authority, timestamp) {

            ADL.stmt = visca.setStatement(actor, verb, object, result, context, authority, timestamp, null);

            var isValid = true;
            isValid = visca.checkRequired.actor(actor) && isValid;
            isValid = visca.checkRequired.verb(verb) && isValid;
            isValid = visca.checkRequired.object(object) && isValid;
            isValid = visca.checkRequired.definition(object.definition.type, 'type') && isValid;
            isValid = visca.checkRequired.definition(object.definition.type, 'interactionType') && isValid;
            isValid = visca.checkRequired.extensions('object.definition', object.definition.extensions, 'supplemental-info') && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'parent', 0) && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 0) && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 1) && isValid;

            if (isValid) {
                ADL.XAPIWrapper.sendStatement(ADL.stmt, function (resp, obj) {
                    console.log("[" + obj.id + "]: " + resp.status + " - " + resp.statusText);
                });
            }
        },

        /* 討論服務 */
        customizedPostedForum: function (actor, verb, object, result, context, authority, timestamp, attachments) {

            ADL.stmt = visca.setStatement(actor, verb, object, result, context, authority, timestamp, attachments);

            var isValid = true;
            isValid = visca.checkRequired.actor(actor) && isValid;
            isValid = visca.checkRequired.verb(verb) && isValid;
            isValid = visca.checkRequired.object(object) && isValid;
            isValid = visca.checkRequired.definition(object.definition.type, 'type') && isValid;
            isValid = visca.checkRequired.result(result, 'response') && isValid;
            isValid = visca.checkRequired.result(result, 'duration') && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'parent', 0) && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 0) && isValid;
            // isValid = visca.checkRequired.contextActivities(context.contextActivities, 'grouping', 0) && isValid;
            // isValid = visca.checkRequired.contextActivities(context.contextActivities, 'other', 0) && isValid;

            // isValid = visca.checkRequired.platform(context) && isValid;

            isValid = visca.checkRequired.extensions('context.extensions', context.extensions, 'browser-info') && isValid;
            isValid = visca.checkRequired.attachments(attachments) && isValid;

            if (isValid) {
                ADL.XAPIWrapper.sendStatement(ADL.stmt, function (resp, obj) {
                    console.log("[" + obj.id + "]: " + resp.status + " - " + resp.statusText);
                });
            }
        },

        customizedCommentedForumPost: function (actor, verb, object, result, context, authority, timestamp, attachments) {

            ADL.stmt = visca.setStatement(actor, verb, object, result, context, authority, timestamp, attachments);

            var isValid = true;
            isValid = visca.checkRequired.actor(actor) && isValid;
            isValid = visca.checkRequired.verb(verb) && isValid;
            isValid = visca.checkRequired.object(object) && isValid;
            isValid = visca.checkRequired.definition(object.definition.type, 'type') && isValid;
            isValid = visca.checkRequired.result(result, 'response') && isValid;
            isValid = visca.checkRequired.result(result, 'duration') && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'parent', 0) && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 0) && isValid;
            // isValid = visca.checkRequired.contextActivities(context.contextActivities, 'grouping', 0) && isValid;
            // isValid = visca.checkRequired.contextActivities(context.contextActivities, 'other', 0) && isValid;
            // isValid = visca.checkRequired.platform(context) && isValid;

            isValid = visca.checkRequired.extensions('context.extensions', context.extensions, 'browser-info') && isValid;
            isValid = visca.checkRequired.attachments(attachments) && isValid;

            if (isValid) {

                ADL.XAPIWrapper.sendStatement(ADL.stmt, function (resp, obj) {
                    console.log("[" + obj.id + "]: " + resp.status + " - " + resp.statusText);
                });
            }
        },

        customizedRespondedForumComment: function (actor, verb, object, result, context, authority, timestamp, attachments) {

            ADL.stmt = visca.setStatement(actor, verb, object, result, context, authority, timestamp, attachments);

            var isValid = true;
            isValid = visca.checkRequired.actor(actor) && isValid;
            isValid = visca.checkRequired.verb(verb) && isValid;
            isValid = visca.checkRequired.object(object) && isValid;
            isValid = visca.checkRequired.definition(object.definition.type, 'type') && isValid;
            isValid = visca.checkRequired.result(result, 'response') && isValid;
            isValid = visca.checkRequired.result(result, 'duration') && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'parent', 0) && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 0) && isValid;
            // isValid = visca.checkRequired.contextActivities(context.contextActivities, 'grouping', 0) && isValid;
            // isValid = visca.checkRequired.contextActivities(context.contextActivities, 'other', 0) && isValid;
            // isValid = visca.checkRequired.platform(context) && isValid;

            isValid = visca.checkRequired.extensions('context.extensions', context.extensions, 'browser-info') && isValid;
            isValid = visca.checkRequired.attachments(attachments) && isValid;

            if (isValid) {

                ADL.XAPIWrapper.sendStatement(ADL.stmt, function (resp, obj) {
                    console.log("[" + obj.id + "]: " + resp.status + " - " + resp.statusText);
                });
            }
        },

        customizedEditedForumPosted: function (actor, verb, object, result, context, authority, timestamp, attachments) {

            ADL.stmt = visca.setStatement(actor, verb, object, result, context, authority, timestamp, attachments);

            var isValid = true;
            isValid = visca.checkRequired.actor(actor) && isValid;
            isValid = visca.checkRequired.verb(verb) && isValid;
            isValid = visca.checkRequired.object(object) && isValid;
            isValid = visca.checkRequired.definition(object.definition.type, 'type') && isValid;
            isValid = visca.checkRequired.result(result, 'response') && isValid;
            isValid = visca.checkRequired.result(result, 'duration') && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 0) && isValid;
            // isValid = visca.checkRequired.contextActivities(context.contextActivities, 'grouping', 0) && isValid;
            // isValid = visca.checkRequired.contextActivities(context.contextActivities, 'other', 0) && isValid;
            // isValid = visca.checkRequired.platform(context) && isValid;

            isValid = visca.checkRequired.extensions('context.extensions', context.extensions, 'browser-info') && isValid;
            isValid = visca.checkRequired.attachments(attachments) && isValid;

            if (isValid) {

                ADL.XAPIWrapper.sendStatement(ADL.stmt, function (resp, obj) {
                    console.log("[" + obj.id + "]: " + resp.status + " - " + resp.statusText);
                });
            }
        },

        customizedLikedForumComment: function (actor, verb, object, result, context, authority, timestamp) {

            ADL.stmt = visca.setStatement(actor, verb, object, result, context, authority, timestamp, null);

            var isValid = true;
            isValid = visca.checkRequired.actor(actor) && isValid;
            isValid = visca.checkRequired.verb(verb) && isValid;
            isValid = visca.checkRequired.object(object) && isValid;
            // isValid = visca.checkRequired.definition(object.definition.type, 'type') && isValid;
            isValid = visca.checkRequired.result(result, 'response') && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 0) && isValid;
            // isValid = visca.checkRequired.contextActivities(context.contextActivities, 'grouping', 0) && isValid;
            // isValid = visca.checkRequired.contextActivities(context.contextActivities, 'other', 0) && isValid;
            // isValid = visca.checkRequired.platform(context) && isValid;

            isValid = visca.checkRequired.extensions('context.extensions', context.extensions, 'browser-info') && isValid;

            if (isValid) {

                ADL.XAPIWrapper.sendStatement(ADL.stmt, function (resp, obj) {
                    console.log("[" + obj.id + "]: " + resp.status + " - " + resp.statusText);
                });
            }
        },

        customizedDislikedForumComment: function (actor, verb, object, result, context, authority, timestamp) {

            ADL.stmt = visca.setStatement(actor, verb, object, result, context, authority, timestamp, null);

            var isValid = true;
            isValid = visca.checkRequired.actor(actor) && isValid;
            isValid = visca.checkRequired.verb(verb) && isValid;
            isValid = visca.checkRequired.object(object) && isValid;
            // isValid = visca.checkRequired.definition(object.definition.type, 'type') && isValid;
            isValid = visca.checkRequired.result(result, 'response') && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 0) && isValid;
            // isValid = visca.checkRequired.contextActivities(context.contextActivities, 'grouping', 0) && isValid;
            // isValid = visca.checkRequired.contextActivities(context.contextActivities, 'other', 0) && isValid;
            // isValid = visca.checkRequired.platform(context) && isValid;

            isValid = visca.checkRequired.extensions('context.extensions', context.extensions, 'browser-info') && isValid;

            if (isValid) {
                console.log(ADL.stmt);

                ADL.XAPIWrapper.sendStatement(ADL.stmt, function (resp, obj) {
                    console.log("[" + obj.id + "]: " + resp.status + " - " + resp.statusText);
                });
            }
        },

        customizedPostedForumVideo: function (actor, verb, object, result, context, authority, timestamp, attachments) {

            ADL.stmt = visca.setStatement(actor, verb, object, result, context, authority, timestamp, attachments);

            var isValid = true;
            isValid = visca.checkRequired.actor(actor) && isValid;
            isValid = visca.checkRequired.verb(verb) && isValid;
            isValid = visca.checkRequired.object(object) && isValid;
            isValid = visca.checkRequired.definition(object.definition.type, 'type') && isValid;
            isValid = visca.checkRequired.result(result, 'response') && isValid;
            isValid = visca.checkRequired.result(result, 'duration') && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'parent', 0) && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 0) && isValid;
            // isValid = visca.checkRequired.contextActivities(context.contextActivities, 'grouping', 0) && isValid;
            // isValid = visca.checkRequired.contextActivities(context.contextActivities, 'other', 0) && isValid;
            // isValid = visca.checkRequired.platform(context) && isValid;

            isValid = visca.checkRequired.extensions('context', context.extensions, 'time') && isValid;
            isValid = visca.checkRequired.extensions('context.extensions', context.extensions, 'browser-info') && isValid;
            isValid = visca.checkRequired.attachments(attachments) && isValid;

            if (isValid) {

                ADL.XAPIWrapper.sendStatement(ADL.stmt, function (resp, obj) {
                    console.log("[" + obj.id + "]: " + resp.status + " - " + resp.statusText);
                });
            }
        },

        customizedReadForumTopic: function (actor, verb, object, result, context, authority, timestamp) {

            ADL.stmt = visca.setStatement(actor, verb, object, result, context, authority, timestamp, null);

            var isValid = true;
            isValid = visca.checkRequired.actor(actor) && isValid;
            isValid = visca.checkRequired.verb(verb) && isValid;
            isValid = visca.checkRequired.object(object) && isValid;
            isValid = visca.checkRequired.definition(object.definition.type, 'type') && isValid;
            isValid = visca.checkRequired.result(result, 'duration') && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'parent', 0) && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 0) && isValid;
            // isValid = visca.checkRequired.contextActivities(context.contextActivities, 'grouping', 0) && isValid;
            // isValid = visca.checkRequired.contextActivities(context.contextActivities, 'other', 0) && isValid;
            // isValid = visca.checkRequired.platform(context) && isValid;

            isValid = visca.checkRequired.extensions('context.extensions', context.extensions, 'browser-info') && isValid;

            if (isValid) {

                ADL.XAPIWrapper.sendStatement(ADL.stmt, function (resp, obj) {
                    console.log("[" + obj.id + "]: " + resp.status + " - " + resp.statusText);
                });
            }
        },

        customizedDeletedForumTopic: function (actor, verb, object, result, context, authority, timestamp) {

            ADL.stmt = visca.setStatement(actor, verb, object, result, context, authority, timestamp, null);

            var isValid = true;
            isValid = visca.checkRequired.actor(actor) && isValid;
            isValid = visca.checkRequired.verb(verb) && isValid;
            isValid = visca.checkRequired.object(object) && isValid;
            isValid = visca.checkRequired.definition(object.definition.type, 'type') && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'parent', 0) && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 0) && isValid;
            // isValid = visca.checkRequired.contextActivities(context.contextActivities, 'grouping', 0) && isValid;
            // isValid = visca.checkRequired.contextActivities(context.contextActivities, 'other', 0) && isValid;
            // isValid = visca.checkRequired.platform(context) && isValid;

            isValid = visca.checkRequired.extensions('context.extensions', context.extensions, 'browser-info') && isValid;

            if (isValid) {

                ADL.XAPIWrapper.sendStatement(ADL.stmt, function (resp, obj) {
                    console.log("[" + obj.id + "]: " + resp.status + " - " + resp.statusText);
                });
            }
        },
        /*學習計畫服務*/
        customizedAssignedLearningPlan: function (actor, verb, object, result, context, authority, timestamp) {

            ADL.stmt = visca.setStatement(actor, verb, object, result, context, authority, timestamp, null);

            var isValid = true;
            isValid = visca.checkRequired.actor(actor) && isValid;
            isValid = visca.checkRequired.verb(verb) && isValid;
            isValid = visca.checkRequired.object(object) && isValid;
            isValid = visca.checkRequired.extensions('object.definition', object.definition.extensions, 'alignment') && isValid;
            isValid = visca.checkRequired.extensions('object.definition', object.definition.extensions, 'supplemental-info') && isValid;
            isValid = visca.checkRequired.definition(object.definition.type, 'type') && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'parent', 0) && isValid;
            isValid = visca.checkRequired.agent('context.team', context.team) && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 0) && isValid;
            // isValid = visca.checkRequired.contextActivities(context.contextActivities, 'grouping', 0) && isValid;
            // isValid = visca.checkRequired.platform(context) && isValid;

            if (isValid) {

                ADL.XAPIWrapper.sendStatement(ADL.stmt, function (resp, obj) {
                    console.log("[" + obj.id + "]: " + resp.status + " - " + resp.statusText);
                });
            }
        },

        customizedAttemptedLearningPlan: function (actor, verb, object, result, context, authority, timestamp) {

            ADL.stmt = visca.setStatement(actor, verb, object, result, context, authority, timestamp, null);

            var isValid = true;
            isValid = visca.checkRequired.actor(actor) && isValid;
            isValid = visca.checkRequired.verb(verb) && isValid;
            isValid = visca.checkRequired.object(object) && isValid;
            isValid = visca.checkRequired.extensions('object.definition', object.definition.extensions, 'alignment') && isValid;
            isValid = visca.checkRequired.extensions('object.definition', object.definition.extensions, 'supplemental-info') && isValid;
            isValid = visca.checkRequired.definition(object.definition.type, 'type') && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'parent', 0) && isValid;
            isValid = visca.checkRequired.agent('context.team', context.team) && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 0) && isValid;
            // isValid = visca.checkRequired.contextActivities(context.contextActivities, 'grouping', 0) && isValid;
            // isValid = visca.checkRequired.platform(context) && isValid;

            if (isValid) {

                ADL.XAPIWrapper.sendStatement(ADL.stmt, function (resp, obj) {
                    console.log("[" + obj.id + "]: " + resp.status + " - " + resp.statusText);
                });
            }
        },

        customizedDesignedLearningPlan: function (actor, verb, object, result, context, authority, timestamp) {

            ADL.stmt = visca.setStatement(actor, verb, object, result, context, authority, timestamp, null);

            var isValid = true;
            isValid = visca.checkRequired.actor(actor) && isValid;
            isValid = visca.checkRequired.verb(verb) && isValid;
            isValid = visca.checkRequired.object(object) && isValid;
            isValid = visca.checkRequired.extensions('object.definition', object.definition.extensions, 'alignment') && isValid;
            isValid = visca.checkRequired.extensions('object.definition', object.definition.extensions, 'supplemental-info') && isValid;
            isValid = visca.checkRequired.definition(object.definition.type, 'type') && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'parent', 0) && isValid;
            isValid = visca.checkRequired.agent('context.team', context.team) && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 0) && isValid;
            // isValid = visca.checkRequired.contextActivities(context.contextActivities, 'grouping', 0) && isValid;
            // isValid = visca.checkRequired.platform(context) && isValid;

            if (isValid) {

                ADL.XAPIWrapper.sendStatement(ADL.stmt, function (resp, obj) {
                    console.log("[" + obj.id + "]: " + resp.status + " - " + resp.statusText);
                });
            }
        },

        customizedViewedLearningPlan: function (actor, verb, object, result, context, authority, timestamp) {

            ADL.stmt = visca.setStatement(actor, verb, object, result, context, authority, timestamp, null);

            var isValid = true;
            isValid = visca.checkRequired.actor(actor) && isValid;
            isValid = visca.checkRequired.verb(verb) && isValid;
            isValid = visca.checkRequired.object(object) && isValid;
            isValid = visca.checkRequired.extensions('object.definition', object.definition.extensions, 'alignment') && isValid;
            isValid = visca.checkRequired.definition(object.definition.type, 'type') && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'parent', 0) && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 0) && isValid;
            // isValid = visca.checkRequired.contextActivities(context.contextActivities, 'grouping', 0) && isValid;
            // isValid = visca.checkRequired.platform(context) && isValid;

            if (isValid) {

                ADL.XAPIWrapper.sendStatement(ADL.stmt, function (resp, obj) {
                    console.log("[" + obj.id + "]: " + resp.status + " - " + resp.statusText);
                });
            }
        },

        customizedSubmittedAssignment: function (actor, verb, object, result, context, authority, timestamp, attachments) {

            ADL.stmt = visca.setStatement(actor, verb, object, result, context, authority, timestamp, attachments);

            var isValid = true;
            isValid = visca.checkRequired.actor(actor) && isValid;
            isValid = visca.checkRequired.verb(verb) && isValid;
            isValid = visca.checkRequired.object(object) && isValid;
            isValid = visca.checkRequired.definition(object.definition.type, 'type') && isValid;
            isValid = visca.checkRequired.result(result, 'success') && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'parent', 0) && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 0) && isValid;
            // isValid = visca.checkRequired.contextActivities(context.contextActivities, 'grouping', 0) && isValid;
            // isValid = visca.checkRequired.contextActivities(context.contextActivities, 'other', 0) && isValid;
            // isValid = visca.checkRequired.platform(context) && isValid;
            isValid = visca.checkRequired.attachments(attachments) && isValid;

            if (isValid) {
                ADL.XAPIWrapper.sendStatement(ADL.stmt, function (resp, obj) {
                    console.log("[" + obj.id + "]: " + resp.status + " - " + resp.statusText);
                });
            }
        },

        customizedAssignedAssignment: function (actor, verb, object, result, context, authority, timestamp) {

            ADL.stmt = visca.setStatement(actor, verb, object, result, context, authority, timestamp, null);

            var isValid = true;
            isValid = visca.checkRequired.actor(actor) && isValid;
            isValid = visca.checkRequired.verb(verb) && isValid;
            isValid = visca.checkRequired.object(object) && isValid;
            isValid = visca.checkRequired.extensions('object.definition', object.definition.extensions, 'alignment') && isValid;
            isValid = visca.checkRequired.extensions('object.definition', object.definition.extensions, 'supplemental-info') && isValid;
            isValid = visca.checkRequired.definition(object.definition.type, 'type') && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'parent', 0) && isValid;
            isValid = visca.checkRequired.agent('context.team', context.team) && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 0) && isValid;
            // isValid = visca.checkRequired.contextActivities(context.contextActivities, 'grouping', 0) && isValid;
            // isValid = visca.checkRequired.platform(context) && isValid;

            if (isValid) {

                ADL.XAPIWrapper.sendStatement(ADL.stmt, function (resp, obj) {
                    console.log("[" + obj.id + "]: " + resp.status + " - " + resp.statusText);
                });
            }
        },

        customizedCompletedActivityLearningPlan: function (actor, verb, object, result, context, authority, timestamp) {

            ADL.stmt = visca.setStatement(actor, verb, object, result, context, authority, timestamp, null);

            var isValid = true;
            isValid = visca.checkRequired.actor(actor) && isValid;
            isValid = visca.checkRequired.verb(verb) && isValid;
            isValid = visca.checkRequired.object(object) && isValid;
            isValid = visca.checkRequired.extensions('object.definition', object.definition.extensions, 'alignment') && isValid;
            isValid = visca.checkRequired.definition(object.definition.type, 'type') && isValid;
            isValid = visca.checkRequired.extensions('result', result.extensions, 'rubric') && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'parent', 0) && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 0) && isValid;
            // isValid = visca.checkRequired.contextActivities(context.contextActivities, 'grouping', 0) && isValid;
            // isValid = visca.checkRequired.platform(context) && isValid;

            if (isValid) {

                ADL.XAPIWrapper.sendStatement(ADL.stmt, function (resp, obj) {
                    console.log("[" + obj.id + "]: " + resp.status + " - " + resp.statusText);
                });
            }
        },

        customizedCompletedLearningPlan: function (actor, verb, object, result, context, authority, timestamp) {

            ADL.stmt = visca.setStatement(actor, verb, object, result, context, authority, timestamp, null);

            var isValid = true;
            isValid = visca.checkRequired.actor(actor) && isValid;
            isValid = visca.checkRequired.verb(verb) && isValid;
            isValid = visca.checkRequired.object(object) && isValid;
            isValid = visca.checkRequired.extensions('object.definition', object.definition.extensions, 'alignment') && isValid;
            isValid = visca.checkRequired.extensions('object.definition', object.definition.extensions, 'supplemental-info') && isValid;
            isValid = visca.checkRequired.definition(object.definition.type, 'type') && isValid;
            isValid = visca.checkRequired.extensions('result', result.extensions, 'rubric') && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'parent', 0) && isValid;
            isValid = visca.checkRequired.contextActivities(context.contextActivities, 'category', 0) && isValid;
            // isValid = visca.checkRequired.contextActivities(context.contextActivities, 'grouping', 0) && isValid;
            // isValid = visca.checkRequired.platform(context) && isValid;

            if (isValid) {

                ADL.XAPIWrapper.sendStatement(ADL.stmt, function (resp, obj) {
                    console.log("[" + obj.id + "]: " + resp.status + " - " + resp.statusText);
                });
            }
        },

        /*
         *  簡化版的影片學習服務
         */
        wasAssignedVideo: function (actor, objectID, duration, instructor, authority, revision) {
            var verbDisplay = visca.setDisplay("zh-TW", "被指定");
            var verb = visca.setVerb("https://w3id.org/xapi/acrossx/verbs/was-assigned", verbDisplay);
            var defType = "https://w3id.org/xapi/acrossx/activities/video";
            var defExtensions = visca.setExtension("duration", duration);
            var objectDef = visca.setDefinition(null, null, defType, defExtensions, null, null, null);
            var object = visca.setObject(objectID, objectDef, true);
            var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/video");
            var contextActivities = visca.setContextActivities(null, null, category);
            var context = visca.setContext(instructor, null, contextActivities, null, null, null, null, revision);
            var timestamp = visca.setTimestamp();
            visca.customizedWasAssignedVideo(actor, verb, object, context, authority, timestamp);
        },

        watchedVideoClips: function (actor, objectID, duration, instructor, start, end, authority, revision) {
            var verbDisplay = visca.setDisplay("zh-TW", "觀看");
            var verb = visca.setVerb("https://w3id.org/xapi/acrossx/verbs/watched", verbDisplay);
            var defType = "https://w3id.org/xapi/acrossx/activities/video";
            var defExtensions = visca.setExtension("duration", duration);
            var objectDef = visca.setDefinition(null, null, defType, defExtensions, null, null, null);
            var object = visca.setObject(objectID, objectDef, true);
            var reDuration = calculateDuration(getNumericalDuration(start), getNumericalDuration(end)).txt;
            var reExtensions = visca.setExtensions(visca.setExtension("starting-point", start), visca.setExtension("ending-point", end));
            var result = visca.setResult(reDuration, reExtensions, null, null, null);
            var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/video");
            var contextActivities = visca.setContextActivities(null, null, category);
            var context = visca.setContext(instructor, null, contextActivities, null, null, null, null, revision);
            var timestamp = visca.setTimestamp();
            visca.customizedWatchedVideoClips(actor, verb, object, result, context, authority, timestamp);
        },

        skippedVideoClips: function (actor, objectID, duration, instructor, start, end, authority, revision) {
            var verbDisplay = visca.setDisplay("zh-TW", "跳過");
            var verb = visca.setVerb("https://w3id.org/xapi/acrossx/verbs/skipped", verbDisplay);
            var defType = "https://w3id.org/xapi/acrossx/activities/video";
            var defExtensions = visca.setExtension("duration", duration);
            var objectDef = visca.setDefinition(null, null, defType, defExtensions, null, null, null);
            var object = visca.setObject(objectID, objectDef, true);
            var reDuration = calculateDuration(getNumericalDuration(start), getNumericalDuration(end)).txt;
            var reExtensions = visca.setExtensions(visca.setExtension("starting-point", start), visca.setExtension("ending-point", end));
            var result = visca.setResult(reDuration, reExtensions, null, null, null);
            var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/video");
            var contextActivities = visca.setContextActivities(null, null, category);
            var context = visca.setContext(instructor, null, contextActivities, null, null, null, null, revision);
            var timestamp = visca.setTimestamp();
            visca.customizedSkippedVideoClips(actor, verb, object, result, context, authority, timestamp);
        },

        tookVideoNotes: function (actor, objectID, duration, instructor, reDuration, reResponse, time, authority, revision) {
            var verbDisplay = visca.setDisplay("zh-TW", "做筆記");
            var verb = visca.setVerb("https://w3id.org/xapi/adb/verbs/noted", verbDisplay);
            var defType = "https://w3id.org/xapi/acrossx/activities/video";
            var defExtensions = visca.setExtension("duration", duration);
            var objectDef = visca.setDefinition(null, null, defType, defExtensions, null, null, null);
            var object = visca.setObject(objectID, objectDef, true);
            var reExtensions = visca.setExtension('time', time);
            var result = visca.setResult(reDuration, reExtensions, reResponse, null, null)
            var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/video");
            var contextActivities = visca.setContextActivities(null, null, category);
            var context = visca.setContext(instructor, null, contextActivities, null, null, null, null, revision);
            var timestamp = visca.setTimestamp();
            visca.customizedTookVideoNotes(actor, verb, object, result, context, authority, timestamp);
        },

        answeredVideoQuestions: function (actor, objectID, interactionType, instructor, reDuration, reResponse, reSuccess, parentID, time, authority, revision) {
            var verbDisplay = visca.setDisplay("zh-TW", "回答");
            var verb = visca.setVerb("http://adlnet.gov/expapi/verbs/answered", verbDisplay);
            var defType = "http://adlnet.gov/expapi/activities/cmi.interaction";
            var objectDef = visca.setDefinition(null, null, defType, null, interactionType, null, null);
            var object = visca.setObject(objectID, objectDef, true);
            var result = visca.setResult(reDuration, null, reResponse, null, reSuccess);
            var pDefType = "https://w3id.org/xapi/acrossx/activities/video";
            var parentDef = visca.setDefinition(null, null, pDefType, null, null, null, null);
            var parent = visca.setParent(parentID, parentDef);
            var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/video", "https://w3id.org/xapi/acrossx/profile/practice");
            var contextActivities = visca.setContextActivities(parent, null, category);
            var contextExtensions = visca.setExtension("time", time);
            var context = visca.setContext(instructor, null, contextActivities, null, contextExtensions, null, null, revision);
            var timestamp = visca.setTimestamp();
            visca.customizedAnsweredVideoQuestions(actor, verb, object, result, context, authority, timestamp);
        },

        readVideoHints: function (actor, objectID, interactionType, instructor, hint, parentID, authority, revision) {
            var verbDisplay = visca.setDisplay("zh-TW", "閱讀");
            var verb = visca.setVerb("https://w3id.org/xapi/adb/verbs/read", verbDisplay);
            var defType = "http://adlnet.gov/expapi/activities/cmi.interaction";
            var defExtensions = visca.setExtension("supplemental-info", hint);
            var objectDef = visca.setDefinition(null, null, defType, defExtensions, interactionType, null, null);
            var object = visca.setObject(objectID, objectDef, true);
            var pDefType = "https://w3id.org/xapi/acrossx/activities/video";
            var parentDef = visca.setDefinition(null, null, pDefType, null, null, null, null);
            var parent = visca.setParent(parentID, parentDef);
            var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/video", "https://w3id.org/xapi/acrossx/profile/practice"); // 影片和自我練習的 Profile Activity
            var contextActivities = visca.setContextActivities(parent, null, category);
            var context = visca.setContext(instructor, null, contextActivities, null, null, null, null, revision);
            var timestamp = visca.setTimestamp();
            visca.customizedReadVideoHints(actor, verb, object, null, context, authority, timestamp);
        },

        /*
         *  簡化版的電子書學習服務
         */
        wasAssignedEBook: function (actor, objectID, authority, revision) {
            var verbDisplay = visca.setDisplay("zh-TW", "被指定");
            var verb = visca.setVerb("https://w3id.org/xapi/acrossx/verbs/was-assigned", verbDisplay);
            var defType = "https://w3id.org/xapi/acrossx/activities/e-book";
            var objectDef = visca.setDefinition(null, null, defType, null, null, null, null);
            var object = visca.setObject(objectID, objectDef, true);
            var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/ebook");
            var contextActivities = visca.setContextActivities(null, null, category);
            var context = visca.setContext(null, null, contextActivities, null, null, null, null, revision);
            var timestamp = visca.setTimestamp();
            visca.customizedWasAssignedEBook(actor, verb, object, context, authority, timestamp);
        },

        readEBookPage: function (actor, objectID, totalPages, page, reDuration, authority, revision) {
            var verbDisplay = visca.setDisplay("zh-TW", "閱讀");
            var verb = visca.setVerb("https://w3id.org/xapi/adb/verbs/read", verbDisplay);
            var defType = "https://w3id.org/xapi/acrossx/activities/e-book";
            totalPages = visca.setExtension("total-pages", totalPages);
            page = visca.setExtension("page", page);
            var defExtensions = visca.setExtensions(totalPages, page);
            var objectDef = visca.setDefinition(null, null, defType, defExtensions, null, null, null);
            var object = visca.setObject(objectID, objectDef, true);
            var result = visca.setResult(reDuration, null, null, null, null);
            var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/ebook");
            var contextActivities = visca.setContextActivities(null, null, category);
            var context = visca.setContext(null, null, contextActivities, null, null, null, null, revision);
            var timestamp = visca.setTimestamp();
            visca.customizedReadEBookPage(actor, verb, object, result, context, authority, timestamp);
        },

        bookmarkedEBookPage: function (actor, objectID, page, authority, revision) {
            var verbDisplay = visca.setDisplay("zh-TW", "加書籤");
            var verb = visca.setVerb("https://w3id.org/xapi/adb/verbs/bookmarked", verbDisplay);
            var defType = "https://w3id.org/xapi/acrossx/activities/e-book";
            var defExtensions = visca.setExtension("page", page);
            var objectDef = visca.setDefinition(null, null, defType, defExtensions, null, null, null);
            var object = visca.setObject(objectID, objectDef, true);
            var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/ebook");
            var contextActivities = visca.setContextActivities(null, null, category);
            var context = visca.setContext(null, null, contextActivities, null, null, null, null, revision);
            var timestamp = visca.setTimestamp();
            visca.customizedBookmarkedEBookPage(actor, verb, object, context, authority, timestamp);
        },

        searchedEBookString: function (actor, objectID, page, reResponse, authority, revision) {
            var verbDisplay = visca.setDisplay("zh-TW", "搜尋");
            var verb = visca.setVerb("https://w3id.org/xapi/acrossx/verbs/searched", verbDisplay);
            var defType = "https://w3id.org/xapi/acrossx/activities/e-book";
            var defExtensions = visca.setExtension("page", page);
            var objectDef = visca.setDefinition(null, null, defType, defExtensions, null, null, null);
            var object = visca.setObject(objectID, objectDef, true);
            var result = visca.setResult(null, null, reResponse, null, null);
            var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/ebook");
            var contextActivities = visca.setContextActivities(null, null, category);
            var context = visca.setContext(null, null, contextActivities, null, null, null, null, revision);
            var timestamp = visca.setTimestamp();
            visca.customizedSearchedEBookString(actor, verb, object, result, context, authority, timestamp);
        },

        highlightedEBookParagraph: function (actor, objectID, page, reResponse, authority, revision) {
            var verbDisplay = visca.setDisplay("zh-TW", "畫重點");
            var verb = visca.setVerb("https://w3id.org/xapi/adb/verbs/highlighted", verbDisplay);
            var defType = "https://w3id.org/xapi/acrossx/activities/e-book";
            var defExtensions = visca.setExtension("page", page);
            var objectDef = visca.setDefinition(null, null, defType, defExtensions, null, null, null);
            var object = visca.setObject(objectID, objectDef, true);
            var result = visca.setResult(null, null, reResponse, null, null);
            var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/ebook");
            var contextActivities = visca.setContextActivities(null, null, category);
            var context = visca.setContext(null, null, contextActivities, null, null, null, null, revision);
            var timestamp = visca.setTimestamp();
            visca.customizedHighlightedEBookParagraph(actor, verb, object, result, context, authority, timestamp);
        },

        tookEBookNotes: function (actor, objectID, page, reDuration, reResponse, authority, revision) {
            var verbDisplay = visca.setDisplay("zh-TW", "做筆記");
            var verb = visca.setVerb("https://w3id.org/xapi/adb/verbs/noted", verbDisplay);
            var defType = "https://w3id.org/xapi/acrossx/activities/e-book";
            var defExtensions = visca.setExtension("page", page);
            var objectDef = visca.setDefinition(null, null, defType, defExtensions, null, null, null);
            var object = visca.setObject(objectID, objectDef, true);
            var result = visca.setResult(reDuration, null, reResponse, null, null);
            var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/ebook");
            var contextActivities = visca.setContextActivities(null, null, category);
            var context = visca.setContext(null, null, contextActivities, null, null, null, null, revision);
            var timestamp = visca.setTimestamp();
            visca.customizedTookEBookNotes(actor, verb, object, result, context, authority, timestamp);
        },

        referenceEBookLink: function (actor, objectID, page, anchorText, authority, revision) {
            var verbDisplay = visca.setDisplay("zh-TW", "查詢參考");
            var verb = visca.setVerb("https://w3id.org/xapi/adb/verbs/referenced", verbDisplay);
            var defType = "https://w3id.org/xapi/acrossx/activities/e-book";
            page = visca.setExtension("page", page);
            anchorText = visca.setExtension("anchor-text", anchorText);
            var defExtensions = visca.setExtensions(page, anchorText);
            var objectDef = visca.setDefinition(null, null, defType, defExtensions, null, null, null);
            var object = visca.setObject(objectID, objectDef, true);
            var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/ebook");
            var contextActivities = visca.setContextActivities(null, null, category);
            var context = visca.setContext(null, null, contextActivities, null, null, null, null, revision);
            var timestamp = visca.setTimestamp();
            visca.customizedReferenceEBookLink(actor, verb, object, context, authority, timestamp);
        },

        watchedEBookVideo: function (actor, objectID, duration, start, end, parentID, page, authority, revision) {
            var verbDisplay = visca.setDisplay("zh-TW", "觀看");
            var verb = visca.setVerb("https://w3id.org/xapi/acrossx/verbs/watched", verbDisplay);
            var defType = "https://w3id.org/xapi/acrossx/activities/video";
            var defExtensions = visca.setExtension("duration", duration);
            var objectDef = visca.setDefinition(null, null, defType, defExtensions, null, null, null);
            var object = visca.setObject(objectID, objectDef, true);
            var reDuration = calculateDuration(getNumericalDuration(start), getNumericalDuration(end)).txt;
            start = visca.setExtension("starting-point", start);
            end = visca.setExtension("ending-point", end);
            var reExtensions = visca.setExtensions(start, end);
            var result = visca.setResult(reDuration, reExtensions, null, null, null);
            var pType = "https://w3id.org/xapi/acrossx/activities/e-book";
            var pExtensions = visca.setExtension("page", page);
            var parentDef = visca.setDefinition(null, null, pType, pExtensions, null, null, null);
            var parent = visca.setParent(parentID, parentDef);
            var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/ebook");
            var contextActivities = visca.setContextActivities(parent, null, category);
            var context = visca.setContext(null, null, contextActivities, null, null, null, null, revision);
            var timestamp = visca.setTimestamp();
            visca.customizedWatchedEBookVideo(actor, verb, object, result, context, authority, timestamp);
        },

        skippedEBookVideo: function (actor, objectID, duration, start, end, parentID, page, authority, revision) {
            var verbDisplay = visca.setDisplay("zh-TW", "跳過");
            var verb = visca.setVerb("http://w3id.org/xapi/acrossx/verbs/skipped", verbDisplay);
            var defType = "https://w3id.org/xapi/acrossx/activities/video";
            var defExtensions = visca.setExtension("duration", duration);
            var objectDef = visca.setDefinition(null, null, defType, defExtensions, null, null, null);
            var object = visca.setObject(objectID, objectDef, true);
            var reDuration = calculateDuration(getNumericalDuration(start), getNumericalDuration(end)).txt;
            start = visca.setExtension("starting-point", start);
            end = visca.setExtension("ending-point", end);
            var reExtensions = visca.setExtensions(start, end);
            var result = visca.setResult(reDuration, reExtensions, null, null, null);
            var pType = "https://w3id.org/xapi/acrossx/activities/e-book";
            var pExtensions = visca.setExtension("page", page);
            var parentDef = visca.setDefinition(null, null, pType, pExtensions, null, null, null);
            var parent = visca.setParent(parentID, parentDef);
            var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/ebook");
            var contextActivities = visca.setContextActivities(parent, null, category);
            var context = visca.setContext(null, null, contextActivities, null, null, null, revision);
            var timestamp = visca.setTimestamp();
            visca.customizedSkippedEBookVideo(actor, verb, object, result, context, authority, timestamp);
        },

        /*
         *  簡化版的測驗學習服務
         */
        answeredQuizQuestions: function (actor, objectID, reSuccess, reResponse, instructor, parentID, authority, revision) {
            var verbDisplay = visca.setDisplay("zh-TW", "回答");
            var verb = visca.setVerb("http://adlnet.gov/expapi/verbs/answered", verbDisplay);
            var defType = "http://adlnet.gov/expapi/activities/cmi.interaction";
            var objectDef = visca.setDefinition(null, null, defType, null, null, null, null);
            var object = visca.setObject(objectID, objectDef, true);
            var result = visca.setResult(null, null, reResponse, null, reSuccess);
            var pType = "http://adlnet.gov/expapi/activities/assessment";
            var parentDef = visca.setDefinition(null, null, pType, null, null, null, null);
            var parent = visca.setParent(parentID, parentDef);
            var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/assessment");
            var contextActivities = visca.setContextActivities(parent, null, category);
            var context = visca.setContext(instructor, null, contextActivities, null, null, null, null, revision);
            var timestamp = visca.setTimestamp();
            visca.customizedAnsweredQuizQuestions(actor, verb, object, result, context, authority, timestamp);
        },

        attemptedQuiz: function (actor, objectID, start, instructor, authority, revision) {
            var verbDisplay = visca.setDisplay("zh-TW", "開始嘗試");
            var verb = visca.setVerb("http://adlnet.gov/expapi/verbs/attempted", verbDisplay);
            var defType = "http://adlnet.gov/expapi/activities/assessment";
            var objectDef = visca.setDefinition(null, null, defType, null, null, null, null);
            var object = visca.setObject(objectID, objectDef, true);
            var reExtensions = visca.setExtension("starting-point", start);
            var result = visca.setResult(null, reExtensions, null, null, null);
            var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/assessment");
            var contextActivities = visca.setContextActivities(null, null, category);
            var context = visca.setContext(instructor, null, contextActivities, null, null, null, null, revision);
            var timestamp = visca.setTimestamp();
            visca.customizedAttemptedQuiz(actor, verb, object, result, context, authority, timestamp);
        },

        completedQuiz: function (actor, objectID, totalItems, reDuration, end, min, raw, max, instructor, authority, revision) {
            var verbDisplay = visca.setDisplay("zh-TW", "完成");
            var verb = visca.setVerb("http://adlnet.gov/expapi/verbs/completed", verbDisplay);
            var defType = "http://adlnet.gov/expapi/activities/assessment";
            var defExtensions = visca.setExtension("total-items", totalItems);
            var objectDef = visca.setDefinition(null, null, defType, defExtensions, null, null, null);
            var object = visca.setObject(objectID, objectDef, true);
            var reExtensions = visca.setExtension("ending-point", end);
            var reScore = visca.setScore(min, raw, max);
            var result = visca.setResult(reDuration, reExtensions, null, reScore, null);
            var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/assessment");
            var contextActivities = visca.setContextActivities(null, null, category);
            var context = visca.setContext(instructor, null, contextActivities, null, null, null, null, revision);
            var timestamp = visca.setTimestamp();
            visca.customizedCompletedQuiz(actor, verb, object, result, context, authority, timestamp);
        },

        choseCorrectOption: function (actor, objectID, reResponse, parentID, authority, revision) {
            var verbDisplay = visca.setDisplay("zh-TW", "互動");
            var verb = visca.setVerb("http://adlnet.gov/expapi/verbs/interacted", verbDisplay);
            var defType = "http://adlnet.gov/expapi/activities/cmi.interaction";
            var objectDef = visca.setDefinition(null, null, defType, null, null, null, null);
            var object = visca.setObject(objectID, objectDef, true);
            var result = visca.setResult(null, null, reResponse, null, null);
            var pType = "http://adlnet.gov/expapi/activities/assessment";
            var parentDef = visca.setDefinition(null, null, pType, null, null, null, null);
            var parent = visca.setParent(parentID, parentDef);
            var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/assessment");
            var contextActivities = visca.setContextActivities(parent, null, category);
            var context = visca.setContext(null, null, contextActivities, null, null, null, null, revision);
            var timestamp = visca.setTimestamp();
            visca.customizedChoseCorrectOption(actor, verb, object, result, context, authority, timestamp);
        },

        readQuizHints: function (actor, objectID, hint, reDuration, instructor, parentID, authority, revision) {
            var verbDisplay = visca.setDisplay("zh-TW", "閱讀");
            var verb = visca.setVerb("https://w3id.org/xapi/adb/verbs/read", verbDisplay);
            var defType = "http://adlnet.gov/expapi/activities/cmi.interaction";
            var defExtensions = visca.setExtension("supplemental-info", hint);
            var objectDef = visca.setDefinition(null, null, defType, defExtensions, null, null, null);
            var object = visca.setObject(objectID, objectDef, true);
            var result = visca.setResult(reDuration, null, null, null, null);
            var pType = "http://adlnet.gov/expapi/activities/assessment";
            var parentDef = visca.setDefinition(null, null, pType, null, null, null, null);
            var parent = visca.setParent(parentID, parentDef);
            var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/assessment");
            var contextActivities = visca.setContextActivities(parent, null, category);
            var context = visca.setContext(instructor, null, contextActivities, null, null, null, null, revision);
            var timestamp = visca.setTimestamp();
            visca.customizedReadQuizHints(actor, verb, object, result, context, authority, timestamp);
        },

        /* 
         * 簡化的自我練習服務
         */
        answeredVideoPracticeQuestions: function (actor, objectID, interactionType, reDuration, reResponse, reSuccess, parentID, time, authority, revision) {
            var verbDisplay = visca.setDisplay("zh-TW", "回答");
            var verb = visca.setVerb("http://adlnet.gov/expapi/verbs/answered", verbDisplay);
            var defType = "http://adlnet.gov/expapi/activities/cmi.interaction";
            var objectDef = visca.setDefinition(null, null, defType, null, interactionType, null, null);
            var object = visca.setObject(objectID, objectDef, true);
            var result = visca.setResult(reDuration, null, reResponse, null, reSuccess);
            var pType = "https://w3id.org/xapi/acrossx/activities/video";
            var parentDef = visca.setDefinition(null, null, pType, null, null, null, null);
            var parent = visca.setParent(parentID, parentDef);
            var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/practice", "https://w3id.org/xapi/acrossx/profile/video");
            var contextActivities = visca.setContextActivities(parent, null, category);
            var contextExtensions = visca.setExtension("time", time);
            var context = visca.setContext(null, null, contextActivities, null, contextExtensions, null, null, revision);
            var timestamp = visca.setTimestamp();
            visca.customizedAnsweredVideoPracticeQuestions(actor, verb, object, result, context, authority, timestamp);
        },

        answeredEBookPracticeQuestions: function (actor, objectID, interactionType, reDuration, reResponse, reSuccess, parentID, page, authority, revision) {
            var verbDisplay = visca.setDisplay("zh-TW", "回答");
            var verb = visca.setVerb("http://adlnet.gov/expapi/verbs/answered", verbDisplay);
            var defType = "http://adlnet.gov/expapi/activities/cmi.interaction";
            var objectDef = visca.setDefinition(null, null, defType, null, interactionType, null, null);
            var object = visca.setObject(objectID, objectDef, true);
            var result = visca.setResult(reDuration, null, reResponse, null, reSuccess);
            var pType = "https://w3id.org/xapi/acrossx/activities/e-book";
            var parentDef = visca.setDefinition(null, null, pType, null, null, null, null);
            var parent = visca.setParent(parentID, parentDef);
            var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/practice", "https://w3id.org/xapi/acrossx/profile/ebook");
            var contextActivities = visca.setContextActivities(parent, null, category);
            var contextExtensions = visca.setExtension("page", page);
            var context = visca.setContext(null, null, contextActivities, null, contextExtensions, null, null, revision);
            var timestamp = visca.setTimestamp();
            visca.customizedAnsweredEBookPracticeQuestions(actor, verb, object, result, context, authority, timestamp);
        },

        readEBookHints: function (actor, objectID, interactionType, hint, parentID, authority, revision) {
            var verbDisplay = visca.setDisplay("zh-TW", "閱讀");
            var verb = visca.setVerb("https://w3id.org/xapi/adb/verbs/read", verbDisplay);
            var defType = "http://adlnet.gov/expapi/activities/cmi.interaction";
            var defExtensions = visca.setExtension("supplemental-info", hint);
            var objectDef = visca.setDefinition(null, null, defType, defExtensions, interactionType, null, null);
            var object = visca.setObject(objectID, objectDef, true);
            var pType = "https://w3id.org/xapi/acrossx/activities/e-book";
            var parentDef = visca.setDefinition(null, null, pType, null, null, null, null);
            var parent = visca.setParent(parentID, parentDef);
            var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/practice", "https://w3id.org/xapi/acrossx/profile/ebook");
            var contextActivities = visca.setContextActivities(parent, null, category);
            var context = visca.setContext(null, null, contextActivities, null, null, null, null, revision);
            var timestamp = visca.setTimestamp();
            visca.customizedReadEBookHints(actor, verb, object, null, context, authority, timestamp);
        },
        /* 簡化版的討論服務 */
        /*
        Actor K posted on the forum

        **actor
        **objecti.id
        object.definition.name
        object.definition.description
        result.duration
        result.response
        context.team
        contextActivities.parent
        contextActivities.grouping
        contextActivities.other
        context.platform


        actor
        objectID
        reDuration
        reResponse
        parentID
        authority
        */
        postedForum: function (actor, objectID, reDuration, reResponse, parentID, team, authority, attachments, revision) {
            
            //Verb
            var verbDisplay = visca.setDisplay("zh-TW", "張貼");
            var verb = visca.setVerb("https://w3id.org/xapi/acrossX/verbs/posted", verbDisplay);            

            // object
            var defType = "http://w3id.org/xapi/acrossX/activitytype/online-discussion";
            var objectDef = visca.setDefinition(null, null, defType, null, null, null, null);
            var object = visca.setObject(objectID, objectDef, true);

            // result
            var result = visca.setResult(reDuration, null, reResponse, null, null);     

            //context         
            var parent = visca.setParent(parentID, null);
            var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/discussion");
            var contextActivities = visca.setContextActivities(parent, null, category);
            var conExtensions = visca.setExtension("browser-info");
            var context = visca.setContext(null, null, contextActivities, null, conExtensions, team, null, revision);

            // timestamp
            var timestamp = visca.setTimestamp();

            visca.customizedPostedForum(actor, verb, object, result, context, authority, timestamp, attachments);
        },
        // P commented on K's post	
        commentedForumPost: function (actor, objectID, reDuration, reResponse, parentID, authority, attachments, revision) {
            
            //Verb
            var verbDisplay = visca.setDisplay("zh-TW", "回應");
            var verb = visca.setVerb("http://adlnet.gov/expapi/verbs/commented", verbDisplay);            

            // object
            var defType = "http://w3id.org/xapi/acrossX/activitytype/online-discussion";
            var objectDef = visca.setDefinition(null, null, defType, null, null, null, null);
            var object = visca.setObject(objectID, objectDef, true);

            // result
            var result = visca.setResult(reDuration, null, reResponse, null, null);     

            //context        
            var parent = visca.setParent(parentID, null);
            var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/discussion");
            var contextActivities = visca.setContextActivities(parent, null, category);
            var conExtensions = visca.setExtension("browser-info");
            var context = visca.setContext(null, null, contextActivities, null, conExtensions, null, null, revision);

            // timestamp
            var timestamp = visca.setTimestamp();

            visca.customizedCommentedForumPost(actor, verb, object, result, context, authority, timestamp, attachments);
        },
        // R responded to P's comment	
        respondedForumComment: function (actor, objectID, reDuration, reResponse, parentID, authority, attachments, revision) {
            
            //Verb
            var verbDisplay = visca.setDisplay("zh-TW", "回應");
            var verb = visca.setVerb("http://adlnet.gov/expapi/verbs/commented", verbDisplay);            

            // object
            var defType = "http://w3id.org/xapi/acrossX/activitytype/online-discussion";
            var objectDef = visca.setDefinition(null, null, defType, null, null, null, null);
            var object = visca.setObject(objectID, objectDef, true);

            // result
            var result = visca.setResult(reDuration, null, reResponse, null, null);     

            //context      
            var parent = visca.setParent(parentID, null);
            var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/discussion");
            var contextActivities = visca.setContextActivities(parent, null, category);
            var conExtensions = visca.setExtension("browser-info");
            var context = visca.setContext(null, null, contextActivities, null, conExtensions, null, null, revision);

            // timestamp
            var timestamp = visca.setTimestamp();

            visca.customizedRespondedForumComment(actor, verb, object, result, context, authority, timestamp, attachments);
        },
        // K edited the posted content	
        editedForumPosted: function (actor, objectID, reDuration, reResponse, parentID, authority, attachments, revision) {
            
            //Verb
            var verbDisplay = visca.setDisplay("zh-TW", "編輯");
            var verb = visca.setVerb("https://w3id.org/xapi/acrossx/verbs/edited", verbDisplay);            

            // object
            var defType = "http://w3id.org/xapi/acrossX/activitytype/online-discussion";
            var objectDef = visca.setDefinition(null, null, defType, null, null, null, null);
            var object = visca.setObject(objectID, objectDef, true);

            // result
            var result = visca.setResult(reDuration, null, reResponse, null, null);     

            //context
            var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/discussion");
            var contextActivities = visca.setContextActivities(null, null, category);
            var conExtensions = visca.setExtension("browser-info");
            var context = visca.setContext(null, null, contextActivities, null, conExtensions, null, null, revision);

            // timestamp
            var timestamp = visca.setTimestamp();

            visca.customizedEditedForumPosted(actor, verb, object, result, context, authority, timestamp, attachments);
        },

        // Q liked (voted up) P's comment
        likedForumComment: function (actor, objectID, reResponse, authority, revision) {
            
            //Verb
            var verbDisplay = visca.setDisplay("zh-TW", "按讚");
            var verb = visca.setVerb("https://w3id.org/xapi/acrossx/verbs/liked", verbDisplay);            

            // object
            var object = visca.setObject(objectID, null, false);

            // result
            var reScore = visca.setScore(-1, 1, 1);
            var result = visca.setResult(null, null, reResponse, reScore, null);     

            //context
            var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/discussion");
            var contextActivities = visca.setContextActivities(null, null, category);
            var conExtensions = visca.setExtension("browser-info");
            var context = visca.setContext(null, null, contextActivities, null, conExtensions, null, null, revision);

            // timestamp
            var timestamp = visca.setTimestamp();

            visca.customizedLikedForumComment(actor, verb, object, result, context, authority, timestamp);
        },
        // Q disliked K's post
        dislikedForumComment: function (actor, objectID, reResponse, authority, revision) {
            
            //Verb
            var verbDisplay = visca.setDisplay("zh-TW", "不贊同");
            var verb = visca.setVerb("https://w3id.org/xapi/acrossx/verbs/disliked", verbDisplay);            

            // object
            var object = visca.setObject(objectID, null, false);

            // result
            var reScore = visca.setScore(-1, -1, 1);
            var result = visca.setResult(null, null, reResponse, reScore, null);     

            //context
            var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/discussion");
            var contextActivities = visca.setContextActivities(null, null, category);
            var conExtensions = visca.setExtension("browser-info");
            var context = visca.setContext(null, null, contextActivities, null, conExtensions, null, null, revision);

            // timestamp
            var timestamp = visca.setTimestamp();

            visca.customizedDislikedForumComment(actor, verb, object, result, context, authority, timestamp);
        },
        // Actor K posted on the forum from video V @timeline T			
        postedForumVideo: function (actor, objectID, reDuration, reResponse, parentID, authority, time, attachments, revision) {
            
            //Verb
            var verbDisplay = visca.setDisplay("zh-TW", "張貼");
            var verb = visca.setVerb("https://w3id.org/xapi/acrossX/verbs/posted", verbDisplay);            

            // object
            var defType = "http://w3id.org/xapi/acrossX/activitytype/online-discussion";
            var objectDef = visca.setDefinition(null, null, defType, null, null, null, null);
            var object = visca.setObject(objectID, objectDef, true);

            // result
            var result = visca.setResult(reDuration, null, reResponse, null, null);

            //context       
            var parent = visca.setParent(parentID, null);
            var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/discussion");
            var contextActivities = visca.setContextActivities(parent, null, category);
            var time = visca.setExtension("time", time);
            var browserInfo = visca.setExtension("browser-info");
            var conExtensions = visca.setExtensions(browserInfo, time);
            var context = visca.setContext(null, null, contextActivities, null, conExtensions, null, null, revision);

            // timestamp
            var timestamp = visca.setTimestamp();

            visca.customizedPostedForumVideo(actor, verb, object, result, context, authority, timestamp, attachments);
        },        
        //Actor K read topic T (discussion thread) on the forum
        readForumTopic: function (actor, objectID, reDuration, parentID, authority, revision) {
            
            //Verb
            var verbDisplay = visca.setDisplay("zh-TW", "閱讀");
            var verb = visca.setVerb("https://w3id.org/xapi/adb/verbs/read", verbDisplay);            

            // object
            var defType = "http://w3id.org/xapi/acrossX/activitytype/online-discussion";
            var objectDef = visca.setDefinition(null, null, defType, null, null, null, null);
            var object = visca.setObject(objectID, objectDef, true);

            // result
            var result = visca.setResult(reDuration, null, null, null, null);     

            //context          
            var parent = visca.setParent(parentID, null);
            var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/discussion");
            var contextActivities = visca.setContextActivities(parent, null, category);
            var conExtensions = visca.setExtension("browser-info");
            var context = visca.setContext(null, null, contextActivities, null, conExtensions, null, null, revision);

            // timestamp
            var timestamp = visca.setTimestamp();

            visca.customizedReadForumTopic(actor, verb, object, result, context, authority, timestamp);
        },
        //Actor K deleted topic T (discussion thread) on the forum
        deletedForumTopic: function (actor, objectID, parentID, authority, revision) {
            
            //Verb
            var verbDisplay = visca.setDisplay("zh-TW", "刪除");
            var verb = visca.setVerb("https://w3id.org/xapi/acrossx/verbs/deleted", verbDisplay);            

            // object
            var defType = "http://w3id.org/xapi/acrossX/activitytype/online-discussion";
            var objectDef = visca.setDefinition(null, null, defType, null, null, null, null);
            var object = visca.setObject(objectID, objectDef, true);

            //context     
            var parent = visca.setParent(parentID, null);
            var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/discussion");
            var contextActivities = visca.setContextActivities(parent, null, category);
            var conExtensions = visca.setExtension("browser-info");
            var context = visca.setContext(null, null, contextActivities, null, conExtensions, null, null, revision);

            // timestamp
            var timestamp = visca.setTimestamp();

            visca.customizedDeletedForumTopic(actor, verb, object, null, context, authority, timestamp);
        },
        /* 簡化版的學習計畫服務 */
        // Instructor O assigned Learning Plan P to Actor K
        assignedLearningPlan: function (actor, objectID, alignment, hint, instructor, parentID, team, statementID, authority, revision) {
            
            //Verb
            var verbDisplay = visca.setDisplay("zh-TW", "被指定");
            var verb = visca.setVerb("https://w3id.org/xapi/acrossx/verbs/was-assigned", verbDisplay);            

            // object
            var defType = "https://w3id.org/xapi/acrossx/activities/plan";
            var objAlignment = visca.setExtension("alignment", alignment);
            var objSupplementalInfo = visca.setExtension("supplemental-info",hint);
            var objExtensions = visca.setExtensions(objAlignment, objSupplementalInfo);
            var objectDef = visca.setDefinition(null, null, defType, objExtensions, null, null, null);
            var object = visca.setObject(objectID, objectDef, true);

            //context
            var parent = visca.setParent(parentID, null);
            var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/learning-plan");
            var contextActivities = visca.setContextActivities(parent, null, category);
            var context = visca.setContext(instructor, null, contextActivities, null, null, team, statementID, revision);

            // timestamp
            var timestamp = visca.setTimestamp();

            visca.customizedAssignedLearningPlan(actor, verb, object, null, context, authority, timestamp);
        },
        //Actor K attempted Plan P / Acvitivity X
        attemptedLearningPlan: function (actor, objectID, alignment, hint, instructor, parentID, team, authority, revision) {
            
            //Verb
            var verbDisplay = visca.setDisplay("zh-TW", "開始嘗試");
            var verb = visca.setVerb("http://adlnet.gov/expapi/verbs/attempted", verbDisplay);            

            // object
            var defType = "https://w3id.org/xapi/acrossx/activities/webpage";            
            var objAlignment = visca.setExtension("alignment", alignment);
            var objSupplementalInfo = visca.setExtension("supplemental-info",hint);
            var objExtensions = visca.setExtensions(objAlignment, objSupplementalInfo);
            var objectDef = visca.setDefinition(null, null, defType, objExtensions, null, null, null);
            var object = visca.setObject(objectID, objectDef, true);

            //context
            var parent = visca.setParent(parentID, null);
            var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/learning-plan");
            var contextActivities = visca.setContextActivities(parent, null, category);
            var context = visca.setContext(instructor, null, contextActivities, null, null, team, null, revision);

            // timestamp
            var timestamp = visca.setTimestamp();

            visca.customizedAttemptedLearningPlan(actor, verb, object, null, context, authority, timestamp);
        }, 
        //Actor(instructor/leanrer) K designed a Learning Plan P
        designedLearningPlan: function (actor, objectID, alignment, hint, instructor, parentID, team, authority, revision) {
            
            //Verb
            var verbDisplay = visca.setDisplay("zh-TW", "設計");
            var verb = visca.setVerb("https://w3id.org/xapi/acrossx/verbs/designed", verbDisplay);            

            // object
            var defType = "https://w3id.org/xapi/acrossx/activities/plan";            
            var objAlignment = visca.setExtension("alignment", alignment);
            var objSupplementalInfo = visca.setExtension("supplemental-info",hint);
            var objExtensions = visca.setExtensions(objAlignment, objSupplementalInfo);
            var objectDef = visca.setDefinition(null, null, defType, objExtensions, null, null, null);
            var object = visca.setObject(objectID, objectDef, true);

            //context
            var parent = visca.setParent(parentID, null);
            var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/learning-plan");
            var contextActivities = visca.setContextActivities(parent, null, category);
            var context = visca.setContext(instructor, null, contextActivities, null, null, team, null, revision);

            // timestamp
            var timestamp = visca.setTimestamp();

            visca.customizedDesignedLearningPlan(actor, verb, object, null, context, authority, timestamp);
        },

        //Actor K viewed Plan P (or viewed info. page I linked on plan main page) / Knowldege Map / Knowledge Map Node N
        viewedLearningPlan: function (actor, objectID, alignment, instructor, parentID, team, authority, revision) {
            
            //Verb
            var verbDisplay = visca.setDisplay("zh-TW", "查看");
            var verb = visca.setVerb("http://id.tincanapi.com/verb/viewed", verbDisplay);            

            // object
            var defType = "https://w3id.org/xapi/acrossx/activities/plan";            
            var objAlignment = visca.setExtension("alignment", alignment);
            var objectDef = visca.setDefinition(null, null, defType, objAlignment, null, null, null);
            var object = visca.setObject(objectID, objectDef, true);

            //context
            var parent = visca.setParent(parentID, null);
            var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/learning-plan");
            var contextActivities = visca.setContextActivities(parent, null, category);
            var context = visca.setContext(instructor, null, contextActivities, null, null, team, null, revision);

            // timestamp
            var timestamp = visca.setTimestamp();

            visca.customizedViewedLearningPlan(actor, verb, object, null, context, authority, timestamp);
        },

        // Actor K submitted submission S for Plan / Activity item / Assignment P		
        submittedAssignment: function (actor, objectID, min, raw, max, reSuccess, instructor, parentID, team, authority, attachments, revision) {
            
            //Verb
            var verbDisplay = visca.setDisplay("zh-TW", "提交");
            var verb = visca.setVerb("https://w3id.org/xapi/acrossx/verbs/submitted", verbDisplay);            

            // object
            var defType = "https://w3id.org/xapi/acrossx/activities/submission"; 
            var objectDef = visca.setDefinition(null, null, defType, null, null, null, null);
            var object = visca.setObject(objectID, objectDef, true);

            // result
            var reScore = visca.setScore(min, raw, max);
            var result = visca.setResult(null, null, null, reScore, reSuccess);     

             //context
            var parent = visca.setParent(parentID, null);
            var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/learning-plan");
            var contextActivities = visca.setContextActivities(parent, null, category);
            var context = visca.setContext(instructor, null, contextActivities, null, null, team, null, revision);

            // timestamp
            var timestamp = visca.setTimestamp();

            visca.customizedSubmittedAssignment(actor, verb, object, result, context, authority, timestamp, attachments);
        },	
        // Instructor O assigned Assignment A to Actor K
        assignedAssignment: function (actor, objectID, alignment, hint, instructor, parentID, team, statementID, authority, revision) {
            
            //Verb
            var verbDisplay = visca.setDisplay("zh-TW", "被指定");
            var verb = visca.setVerb("https://w3id.org/xapi/acrossx/verbs/was-assigned", verbDisplay);            

            // object
            var defType = "https://w3id.org/xapi/acrossx/activities/assignment";
            var objAlignment = visca.setExtension("alignment", alignment);
            var objSupplementalInfo = visca.setExtension("supplemental-info",hint);
            var objExtensions = visca.setExtensions(objAlignment, objSupplementalInfo);
            var objectDef = visca.setDefinition(null, null, defType, objExtensions, null, null, null);
            var object = visca.setObject(objectID, objectDef, true);

            //context
            var parent = visca.setParent(parentID, null);
            var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/learning-plan");
            var contextActivities = visca.setContextActivities(parent, null, category);
            var context = visca.setContext(instructor, null, contextActivities, null, null, team, statementID, revision);

            // timestamp
            var timestamp = visca.setTimestamp();

            visca.customizedAssignedAssignment(actor, verb, object, null, context, authority, timestamp);
        }, 
        //Actor K completed Activity X successfully
        completedActivityLearningPlan: function (actor, objectID, alignment, instructor, rubric, reSuccess, parentID, team, authority, revision) {
            
            //Verb
            var verbDisplay = visca.setDisplay("zh-TW", "完成");
            var verb = visca.setVerb("http://adlnet.gov/expapi/verbs/completed", verbDisplay);            

            // object
            var defType = "https://w3id.org/xapi/acrossx/activities/plan";            
            var objAlignment = visca.setExtension("alignment", alignment);
            var objectDef = visca.setDefinition(null, null, defType, objAlignment, null, null, null);
            var object = visca.setObject(objectID, objectDef, true);

            // result
            var reRubric = visca.setExtension("rubric", rubric);
            var result = visca.setResult(null, reRubric, null, null, reSuccess); 

            //context
            var parent = visca.setParent(parentID, null);
            var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/learning-plan");
            var contextActivities = visca.setContextActivities(parent, null, category);
            var context = visca.setContext(instructor, null, contextActivities, null, null, team, null, revision);

            // timestamp
            var timestamp = visca.setTimestamp();

            visca.customizedCompletedActivityLearningPlan(actor, verb, object, result, context, authority, timestamp);
        },

        // Actor K completed Plan P successfully
        completedLearningPlan: function (actor, objectID, alignment, hint, instructor, rubric, min, raw, max, reSuccess, parentID, team, authority, revision) {
            
            //Verb
            var verbDisplay = visca.setDisplay("zh-TW", "完成");
            var verb = visca.setVerb("http://adlnet.gov/expapi/verbs/completed", verbDisplay);            

            // object
            var defType = "https://w3id.org/xapi/acrossx/activities/plan";            
            var objAlignment = visca.setExtension("alignment", alignment);
            var objSupplementalInfo = visca.setExtension("supplemental-info",hint);
            var objExtensions = visca.setExtensions(objAlignment, objSupplementalInfo);
            var objectDef = visca.setDefinition(null, null, defType, objExtensions, null, null, null);
            var object = visca.setObject(objectID, objectDef, true);

            // result
            var reRubric = visca.setExtension("rubric", rubric);
            var reScore = visca.setScore(min, raw, max);
            var result = visca.setResult(null, reRubric, null, reScore, reSuccess); 

            //context
            var parent = visca.setParent(parentID, null);
            var category = visca.setCategory("https://w3id.org/xapi/acrossx/profile/learning-plan");
            var contextActivities = visca.setContextActivities(parent, null, category);
            var context = visca.setContext(instructor, null, contextActivities, null, null, team, null, revision);

            // timestamp
            var timestamp = visca.setTimestamp();

            visca.customizedCompletedLearningPlan(actor, verb, object, result, context, authority, timestamp);
        }

    } //end public function
})(this);
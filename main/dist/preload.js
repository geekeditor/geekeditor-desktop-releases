(function(_0x672188,_0x5e1cb2){var _0x54be7d=a3_0x4083,_0x4c6c4f=_0x672188();while(!![]){try{var _0x4716a0=parseInt(_0x54be7d(0xfc))/0x1+-parseInt(_0x54be7d(0x107))/0x2*(-parseInt(_0x54be7d(0xf9))/0x3)+parseInt(_0x54be7d(0x10a))/0x4+parseInt(_0x54be7d(0x10e))/0x5+-parseInt(_0x54be7d(0x115))/0x6*(parseInt(_0x54be7d(0x103))/0x7)+parseInt(_0x54be7d(0x111))/0x8*(-parseInt(_0x54be7d(0x105))/0x9)+-parseInt(_0x54be7d(0x102))/0xa;if(_0x4716a0===_0x5e1cb2)break;else _0x4c6c4f['push'](_0x4c6c4f['shift']());}catch(_0x4e493c){_0x4c6c4f['push'](_0x4c6c4f['shift']());}}}(a3_0x3971,0x86877),(()=>{'use strict';var _0x52d8e1=a3_0x4083;var _0x27f0a7,_0x569bc1={0x1f0:_0x17e7a1=>{var _0x5b068b=a3_0x4083;_0x17e7a1[_0x5b068b(0x113)]=require('electron');}},_0x57921b={};(_0x27f0a7=function _0x42ffc9(_0x168d54){var _0xd65c73=a3_0x4083,_0x270f5c=_0x57921b[_0x168d54];if(void 0x0!==_0x270f5c)return _0x270f5c['exports'];var _0x2320ba=_0x57921b[_0x168d54]={'exports':{}};return _0x569bc1[_0x168d54](_0x2320ba,_0x2320ba[_0xd65c73(0x113)],_0x42ffc9),_0x2320ba[_0xd65c73(0x113)];}(0x1f0))[_0x52d8e1(0x118)][_0x52d8e1(0xfd)](_0x52d8e1(0xf8),{'local':!0x0,'showDebugWindow':function(){var _0x292f26=_0x52d8e1;_0x27f0a7[_0x292f26(0x116)][_0x292f26(0x110)](_0x292f26(0xfe));},'selectDirectory':function(){return new Promise(function(_0x17d3c1,_0xc96435){var _0x20fb1f=a3_0x4083;_0x27f0a7[_0x20fb1f(0x116)][_0x20fb1f(0x104)](_0x20fb1f(0x10f)),_0x27f0a7['ipcRenderer'][_0x20fb1f(0x110)]('select-directory'),_0x27f0a7[_0x20fb1f(0x116)]['on'](_0x20fb1f(0x10f),function(_0x415faf,_0xd942b3){_0x17d3c1(_0xd942b3);});});},'toggleFullscreen':function(){var _0x27e48f=_0x52d8e1;_0x27f0a7[_0x27e48f(0x116)][_0x27e48f(0x110)](_0x27e48f(0xff));},'setAlwaysOnTop':function(_0x8995de){return new Promise(function(_0x5433d1,_0x59f048){var _0x1c11d2=a3_0x4083;_0x27f0a7[_0x1c11d2(0x116)]['removeAllListeners']('on-set-always-on-top'),_0x27f0a7['ipcRenderer'][_0x1c11d2(0x110)](_0x1c11d2(0x101),_0x8995de),_0x27f0a7['ipcRenderer']['on'](_0x1c11d2(0x112),function(_0x389ffb,_0x929bbf){_0x5433d1(_0x929bbf);});});},'get':function(_0x4206d3){return new Promise(function(_0x1506b2,_0xfeedf9){var _0xd8f7f8=a3_0x4083;_0x27f0a7[_0xd8f7f8(0x116)]['send'](_0xd8f7f8(0x11a),_0x4206d3);var _0x1c6935=function(_0x2f8b85,_0x308c25){var _0x4ffb03=_0xd8f7f8;_0x308c25[_0x4ffb03(0x10b)]['path']===_0x4206d3[_0x4ffb03(0x100)]&&(_0x1506b2(_0x308c25),_0x27f0a7[_0x4ffb03(0x116)][_0x4ffb03(0x109)](_0x4ffb03(0x119),_0x1c6935));};_0x27f0a7['ipcRenderer']['on'](_0xd8f7f8(0x119),_0x1c6935);});},'put':function(_0x249807){return new Promise(function(_0x53207e,_0x33e974){var _0x12701b=a3_0x4083;_0x27f0a7[_0x12701b(0x116)][_0x12701b(0x110)](_0x12701b(0xfb),_0x249807);var _0x4a1d75=function(_0x420d3e,_0x2234b7){var _0x19b9e6=_0x12701b;_0x2234b7[_0x19b9e6(0x10b)]['path']===_0x249807[_0x19b9e6(0x100)]&&(_0x53207e(_0x2234b7),_0x27f0a7[_0x19b9e6(0x116)][_0x19b9e6(0x109)](_0x19b9e6(0x10c),_0x4a1d75));};_0x27f0a7[_0x12701b(0x116)]['on']('put-reply',_0x4a1d75);});},'del':function(_0x27143a){return new Promise(function(_0x3f3fc8,_0x1e492d){var _0x2a34cb=a3_0x4083;_0x27f0a7[_0x2a34cb(0x116)][_0x2a34cb(0x110)](_0x2a34cb(0x117),_0x27143a);var _0x2f9e17=function(_0xabf6cb,_0x4ff3be){var _0x23d276=_0x2a34cb;_0x4ff3be['args'][_0x23d276(0x100)]===_0x27143a['path']&&(_0x3f3fc8(_0x4ff3be),_0x27f0a7['ipcRenderer']['removeListener'](_0x23d276(0x114),_0x2f9e17));};_0x27f0a7[_0x2a34cb(0x116)]['on'](_0x2a34cb(0x114),_0x2f9e17);});},'rename':function(_0x177f13){return new Promise(function(_0x5c0508,_0x47103e){var _0x2adcef=a3_0x4083;_0x27f0a7[_0x2adcef(0x116)]['send'](_0x2adcef(0xfa),_0x177f13);var _0x24f2b4=function(_0x5dddad,_0x20932e){var _0x57ddbb=_0x2adcef;_0x20932e[_0x57ddbb(0x10b)][_0x57ddbb(0x100)]===_0x177f13[_0x57ddbb(0x100)]&&(_0x5c0508(_0x20932e),_0x27f0a7[_0x57ddbb(0x116)][_0x57ddbb(0x109)](_0x57ddbb(0x108),_0x24f2b4));};_0x27f0a7['ipcRenderer']['on'](_0x2adcef(0x108),_0x24f2b4);});},'getUUID':function(){return new Promise(function(_0xbe6e9f,_0x223268){var _0x42e79d=a3_0x4083;_0x27f0a7[_0x42e79d(0x116)][_0x42e79d(0x104)](_0x42e79d(0x10d)),_0x27f0a7[_0x42e79d(0x116)]['send'](_0x42e79d(0x106)),_0x27f0a7[_0x42e79d(0x116)]['on'](_0x42e79d(0x10d),function(_0x3c59fb,_0x3fab59){_0xbe6e9f(_0x3fab59);});});}});})());function a3_0x4083(_0x74ea0b,_0x55e63e){var _0x3971e1=a3_0x3971();return a3_0x4083=function(_0x4083f4,_0x3986e2){_0x4083f4=_0x4083f4-0xf8;var _0x4dac19=_0x3971e1[_0x4083f4];return _0x4dac19;},a3_0x4083(_0x74ea0b,_0x55e63e);}function a3_0x3971(){var _0xfb124f=['show-debug-window','toggle-fullscreen','path','set-always-on-top','2389550zCCwrQ','266gFMcXe','removeAllListeners','8676oNdykZ','get-uuid','46xHyDtA','rename-reply','removeListener','1324532SgKTSc','args','put-reply','on-get-uuid','2817960GHHxDp','on-select-directory','send','5112fXjdCw','on-set-always-on-top','exports','del-reply','121746yJgilB','ipcRenderer','del','contextBridge','get-reply','get','LOCAL','93309AKywuw','rename','put','566946iFOjEe','exposeInMainWorld'];a3_0x3971=function(){return _0xfb124f;};return a3_0x3971();}
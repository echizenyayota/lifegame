"use strict";

// プロトタイプはオブジェクトの__proto__を参考にする

// プロトタイプがないオブジェクトを生成する
var state = Object.create(null);
var view = Object.create(null);
var controls = Object.create(null);

console.log(state);

// プロトタイプがあるオブジェクト生成する
var model = {};

console.log(model);

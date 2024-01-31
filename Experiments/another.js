let obj = await import("./init.js");
let say = obj.default;
// or, in one line: let {default: say} = await import('./say.js');

say();

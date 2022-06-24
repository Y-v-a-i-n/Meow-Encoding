const e=require("readline").createInterface({input:process.stdin,output:process.stdout}),
    o=require("gradient-string")("#B40431","#0404B4");
var m={0:"Meow meow",1:"MEow meow",2:"MeOw meow",3:"MeoW meow",4:"Meow Meow",5:"Meow mEow",6:"Meow meOw",7:"Meow meoW",8:"mEow meow",9:"mEOw meow",a:"mEoW meow",b:"mEow Meow",c:"mEow mEow",d:"mEow meOw",e:"mEow meoW",f:"meOw meow",g:"meOW meow",h:"meOw Meow",i:"meOw mEow",j:"meOw meOw",k:"meOw meoW",l:"meoW meow",m:"meoW Meow",n:"meoW mEow",o:"meoW meOw",p:"meoW meoW",q:"meow Meow",r:"meow MEow",s:"meow MeOw",t:"meow MeoW",u:"meow mEow",v:"meow mEOw",w:"meow mEoW",x:"meow meOw",y:"meow meOW",z:"meow meoW",A:"mEoW meow",B:"mEow Meow",C:"mEow mEow",D:"mEow meOw",E:"mEow meoW",F:"meOw meow",G:"meOW meow",H:"meOw Meow",I:"meOw mEow",J:"meOw meOw",K:"meOw meoW",L:"meoW meow",M:"meoW Meow",N:"meoW mEow",O:"meoW meOw",P:"meoW meoW",Q:"meow Meow",R:"meow MEow",S:"meow MeOw",T:"meow MeoW",U:"meow mEow",V:"meow mEOw",W:"meow mEoW",X:"meow meOw",Y:"meow meOW",Z:"meow meoW"},
    w={"Meow meow ":"0","MEow meow ":"1","MeOw meow ":"2","MeoW meow ":"3","Meow Meow ":"4","Meow mEow ":"5","Meow meOw ":"6","Meow meoW ":"7","mEow meow ":"8","mEOw meow ":"9","mEoW meow ":"A","mEow Meow ":"B","mEow mEow ":"C","mEow meOw ":"D","mEow meoW ":"E","meOw meow ":"F","meOW meow ":"G","meOw Meow ":"H","meOw mEow ":"I","meOw meOw ":"J","meOw meoW ":"K","meoW meow ":"L","meoW Meow ":"M","meoW mEow ":"N","meoW meOw ":"O","meoW meoW ":"P","meow Meow ":"Q","meow MEow ":"R","meow MeOw ":"S","meow MeoW ":"T","meow mEow ":"U","meow mEOw ":"V","meow mEoW ":"W","meow meOw ":"X","meow meOW ":"Y","meow meoW ":"Z"};
console.clear(),console.log(o("\n    /\\___/\\\n   /       \\\n  l  u   u  l\n--l----*----l--\n   \\   w   /     - Meow!\n     ======\n   /       \\ __\n   l        l\\ \\\n   l        l/ / \n   l  l l   l /\n   \\ ml lm /_/\n\n"));
let W=0;
setInterval((()=>{
0==W&&e.question(o("\nDo you want to encode a message or decode it ? [e/d] "),(E=>{
    E.startsWith("e")?e.question(o("\nWhat is the message to encode : "),(e=>{
        var w="";
        e.split("").forEach((e=>{
            w+=m[""+e]?m[""+e]+" ":e
        })),console.log(o("\n"+w)),W=0
    })):E.startsWith("d")?e.question(o("\nWhat is the message to decode : "),(e=>{
        var m="",
            E=e.match(/([a-zA-Z][a-zA-Z][a-zA-Z][a-zA-Z]) ([a-zA-Z][a-zA-Z][a-zA-Z][a-zA-Z]) |([ !-?&-à])/g);
        E[0]?(E.forEach((e=>{
            m+=w[""+e]?w[""+e]:e
        })),console.log(o("\n"+m)),W=0):(console.log(o("\nAn error has been occurred")),W=0)
    })):W=0
})),W=1
}),1e3);
const questions=[
"what is your name?",
"what is your dob?",
"what is your age?"
];

const ask =(i=0)=>{
process.stdout.write(questions[i]);
};

ask();

const ans=[];
process.stdin.on('data',x=>{
    ans.push(x.toString().trim());
    if(ans.length<questions.length){
        ask(ans.length)   
    }else{
        process.exit();
    }
});

process.on('exit',x=>{
const[name,dob,age]=ans

console.log(`
hi ${name} ${dob} ${age}`
);

})
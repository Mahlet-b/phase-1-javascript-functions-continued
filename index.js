// code your solution here
function saturdayFun (activity = "roller-skate"){
    
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(act = "go to the office"){
    return (`This Monday, I will ${act}.`);
}

function wrapAdjective(a1 = "*"){
    return function (spec = `special`){
        return `You are ${a1} ${spec} ${a1} !`
    }
        

}


function wrapAdjective(a1 = "||"){
    return function(result = "a didicated programmer"){
        return `You are ${a1}${result}${a1}!`
    }
}

//saturdayFun();

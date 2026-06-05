const balancedParenthesis = (str)=>{

    const stack = [];
    const map = {
        ")":"(",
        "}":"{",
        "]":"["
    }

    for(let ch of str){
        if(ch==="(" || ch === "{" || ch === "["){
            stack.push(ch)
        }else{
            if(stack.pop() !== map[ch]){
                return false
            }
        }
    }

    return stack.length===0;

}

console.log(balancedParenthesis("({[]})"))
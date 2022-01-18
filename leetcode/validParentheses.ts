// Valid Parentheses

function isValid(s: string): boolean {
    const parens: Map<string, string> = new Map([['}', '{'], [']', '['], [')', '(']])
    const stack: string[] = [s[0]]

    const checkStr = (s: string): boolean => {
        if (!s.length) return stack.length === 0

        const last = stack[stack.length - 1]

        if (!parens.has(s[0]) || !last || last !== parens.get(s[0])) {
            stack.push(s[0])
        } else {
            stack.pop()
        }

        return checkStr(s.substring(1))
    }
    
    return checkStr(s.substring(1))
};

console.log(isValid('()[]}{'))
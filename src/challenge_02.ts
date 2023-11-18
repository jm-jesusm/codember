function spyCompiler(input: string) {
    let commands = input.split('')
    let cache = 0;
    let ans = ''

    commands.forEach(command => {
        if(command == '#') cache++
        if(command == '@') cache--
        if(command == '*') cache*=cache
        if(command == '&') ans = ans.concat(String(cache))
    })

    return ans
}

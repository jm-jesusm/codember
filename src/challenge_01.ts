function decrypt (message: string) {
    let dictionary: {[key:string]: number} = {}
    let ans = ""

    message.split(' ').forEach(word => {
        if(dictionary[word]) 
            dictionary[word]++
        else 
            dictionary[word] = 1
    });

    for (const [key, value] of Object.entries(dictionary)) 
        ans = ans.concat(key, String(value))
    
    return ans
}

function badPasswordIndex(index: number, policies: string) {
    function policyChecker(pattern: string, password: string) {
        const [times, character] = pattern.split(' ')
        const [min, max] = times.split('-').map(Number)
    
        const ocurrencies = (password.match(new RegExp(character, "g")) || []).length
    
        return min <= ocurrencies && ocurrencies <= max
    }

    const policiesArray = policies.split('\n')
    const badPasswordArray: string[] = []
    for(const policy of policiesArray) {
        const [pattern, password] = policy.split(': ')
        if(!policyChecker(pattern, password)) {
            if(badPasswordArray.length === index)
                return password
            badPasswordArray.push(password)
        }
    }
    
}
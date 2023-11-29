function massiveVerifyReal(input: string) {
    function verifyReal(name: string) {
        const lettersMap = new Map()
    
        const [firstPart, checksum]: string[] = name.split('-')
        firstPart.split('').forEach(letter => {
            if(lettersMap.has(letter))
                lettersMap.set(letter, lettersMap.get(letter)+1)
            else
                lettersMap.set(letter, 1)
        });
    
        let onlyOneAppearInDictionary = ''
        for (const [letter, appears] of lettersMap.entries()) 
            if(appears === 1)
                onlyOneAppearInDictionary += letter
    
        return onlyOneAppearInDictionary === checksum
    }

    const names = input.split('\n')
    return names.filter(name => verifyReal(name))
}

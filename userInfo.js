function createUserProfiles(originalNames, modifiedNames) {
    var profiles = [];
    
    var id = 1;
    
    for (var i = 0; i < originalNames.length; i++) {
        var userProfile = {
            originalName: originalNames[i],
            modifiedName: modifiedNames[i],
            id: id
        };
        
        id++;
        
        profiles.push(userProfile);
    }
    
    return profiles;
}

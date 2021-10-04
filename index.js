//find the objects whose condition returns true

function findMatching (drivers, string) {
    return drivers.filter (function (el){
        return el.toLowerCase().indexOf(string.toLowerCase()) !==-1
    })
}



//function that matches first 2 letters of the name

function fuzzyMatch(driver, string) {
    let correctLetters = driver.filter(beginningLetters => beginningLetters.substring(0,2) === string)
return correctLetters;
}

//

function matchName(drivers, name){
  return drivers.filter(function(driver){
    return driver.name === name;
  })
}
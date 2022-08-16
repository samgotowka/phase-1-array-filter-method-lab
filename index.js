function findMatching(drivers,dr){
    return drivers.filter((el)=> el.toLowerCase()===dr.toLowerCase())
  } 
function fuzzyMatch(drivers,dr){
    return drivers.filter((el)=>el.toLowerCase().indexOf(dr.toLowerCase()))=== 0
    }

function matchName(drivers){
    for(const name of drivers) {
        if(name=== drivers)
        return matchName
    }
}  
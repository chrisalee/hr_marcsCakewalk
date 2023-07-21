/*
 * Complete the 'marcsCakewalk' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY calorie as parameter.
 */

function marcsCakewalk(calorie) {
    const mostToLeast = calorie.sort((a, b) => b - a);
    
    let milesNeededToWalk = 0;
    
    for(let i = 0; i < mostToLeast.length; i++) {
        milesNeededToWalk += (Math.pow(2, i) * mostToLeast[i])
    }
    
    console.log(milesNeededToWalk);
    return milesNeededToWalk;
}

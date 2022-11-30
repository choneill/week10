function go(){
    let numbersArray=[7,21,23,36,79,44,29];
    let largest=numbersArray[0];
    for(i=0; i<numbersArray.length; i++){
        document.getElementById("main").innerHTML+=(numbersArray[i]+",");
        }
        
}
function largest(){
    let numbersArray=[7,21,23,36,79,44,29];
    let largest=numbersArray[0];
    for(i=0; i<numbersArray.length; i++){ 
        if(largest < numbersArray[i]){
			largest = numbersArray[i];
            document.getElementById("main").innerHTML+=("Largest Number in the Array"+largest);       
        }
    }
        
}
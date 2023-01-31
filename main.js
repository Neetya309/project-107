startClassification(){
    navigator.mediaDevices.getUserMedia();
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = m15.soundClassification("https://teachablemachine.withgoogle.com/models/wiKMPh7zs/",modelready);


}
function model_ready() {
   classifier.classify(gotResult);

}
function gotResults(error, results) {
    if(error){
        console.error();
    }
    else{
        console.log(results);
    } 
}

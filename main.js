function setup(){
    canvas = createCanvas(400,400);
    video = createCapture(VIDEO);
    video.hide();
    canvas.center();
    classifier = ml5.imageClassifier('MobileNet', modelLoaded);
}
function draw(){
    image(video,0,0,400,400);
    classifier.classify(video, gotResults)
}
function modelLoaded(){
    console.log('Model Loaded!')
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("objectResult").innerHTML=results[0].label
        document.getElementById("accuracyResult").innerHTML=results[0].confidence.toFixed(2)
    }
}
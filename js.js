https://teachablemachine.withgoogle.com/models/lL7dcbVtr/




let classifier;


function startClassification() {
    
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(function (stream) {
           
            const modelURL = 'https://teachablemachine.withgoogle.com/models/YOUR_MODEL_URL/model.json';
            classifier = ml5.soundClassifier(modelURL, modelReady);
        })
        .catch(function (error) {
            console.error('Error accessing microphone:', error);
        });
}


function modelReady() {
    console.log('Model Loaded!');
    
    classifier.classify(gotResults);
}


function gotResults(error, results) {
    if (error) {
        console.error('Error during classification:', error);
        return;
    }
    
   
    console.log('Results:', results);
    
    
    if (results && results[0]) {
        const label = results[0].label;
        const confidence = results[0].confidence.toFixed(2);
        document.getElementById('detection-count').innerText = `Detected: ${label} (Confidence: ${confidence})`;
    }
}



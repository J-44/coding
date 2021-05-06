Webcam.set({
height: 350,
width:350,
image_format:"png",
png_quality:90
})
cam= document.getElementById("shot");
Webcam.attach("#camera")
Webcam.snap(function (data_uri) {
    document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
});
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/lzCFTOTFd/model.json");
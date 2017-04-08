function WordCount(text){
    var words =[];
    words = text.split(" ");
    console.log(words);
    return words.length;
}
function UniqueWordCount(text){
    var words =[];
    var uniqueWords =[];
    words = text.split(" ");
    for(i = 0; i < words.length; i++){
        var isUnique =true;
        for(j = 0; j < uniqueWords.length; j++){
            if( words[i]===uniqueWords[j]){
                isUnique=false;
                break;
            }
        }
        if (isUnique){
            uniqueWords.push(words[i]);

        }
    }
    console.log(uniqueWords);
return uniqueWords.length

}
function AvgWordLength(text){
    var words =[];
    var totalLength =0;
    words = text.split(" ");
    for(h = 0; h < words.length; h++){
        totalLength = totalLength +words[h].length;

    }

    return (totalLength/words.length);
}



function formSubmit(e){
    e.preventDefault();
    var wordCount =0;
    var uniqueWordCount =0;
    var totalLength =0;
    var avgWordLength =0;
    var userText = $('#user-text').val().trim().toLowerCase();
    userText = userText.replace(".", "");
    userText = userText.replace('  ', ' ');
    wordCount=WordCount(userText);
    $('#js-word-count').text(wordCount);
    avgWordLength=AvgWordLength(userText);
    $('#js-average-word-length').text(avgWordLength);
    uniqueWordCount=UniqueWordCount(userText);
    $('#js-unique-word-count').text(uniqueWordCount);
}




    $('#js-text-form').submit(formSubmit);


// a method is a function attached to an object
var words = {
    
        'the stove':'der Herd',
        'the pot':'der Topf',
        'the pan':'die Pfanne',
        'the window':'das Fenster',
        'the table':'der Tisch',
        'the chair':'der Stuhl',
        'the teacher':'der Lehrer',
        'the cup':'die Tasse',
        'the student':'der Student',
        'the lesson':'der Unterricht',
        'the homework':'die Hausaufgaben',
        'the break':'die Pause',
        'the school':'die Schule',
        'to work':'arbeiten',
        'to study':'studieren',
        'to go':'gehen',
        'to run':'laufen',
        'to breathe':'atmen',
        'to eat':'essen',
        'to sleep':'schlafen',
        'das Haus':'the house',
        'der Baum':'the tree',
        'der Fluss':'the river',
        'der See':'the lake',
        'das Meer':'the sea',
        'schwimmen':'to swim',
        'fliegen':'to fly',
        'trinken':'to drink',
        'sprechen':'to speak',
        'fahren':'to drive',
        'die Kuh':'the cow',
        'der Hund':'the dog',
        'die Katze':'the cat',
        'das Pferd':'the horse',
        'werfen':'to throw',
        'klettern':'to climb',
        'spielen':'to play',
        'sitzen':'to sit',
        'stehen':'to stand',
        'singen':'to sing'
};


function getRandomWord() {
   
    var listLength = Object.keys(words).length;
   
    var wordNum = Math.floor(Math.random() * listLength);
    
    var wordSelect = Object.keys(words)[wordNum];
    var wordValue = words[wordSelect];
    
    document.getElementById('question').innerHTML = wordSelect;
    
    return { word : wordSelect, value: wordValue };
}

var findWord = getRandomWord();
var selectWord = findWord.value;

function check() {

    if(document.getElementById('answerField').value === selectWord) {
        
        document.getElementById('result').innerHTML = 'Cool, you are so good!';
    }else{
        document.getElementById('result').innerHTML = 'Try again!';
    }
}

var checkBtn = document.getElementById('button');

checkBtn.addEventListener('click', function(){
    check();
 document.getElementById("newWord").style.display = "inline";
    
});

var checkNewBtn = document.getElementById('newWord');

checkNewBtn.addEventListener('click', function(){
    window.location.reload();
    
});

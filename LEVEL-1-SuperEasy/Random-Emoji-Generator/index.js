 const emojis = [ 
  "😀","🙃", "😇", "😶‍🌫️", "😬", "😴", "😨",
  "🥶", "😨", "😨", "🤭", "😾", "🤗", "👽",
  "🥶", "🤭", "🥶", "🥶", "☠️", "🤯", "🤠",
  "😿",  "😵", "🤭",  "😤", "🤕", "😑","🫥",
  "😿", "😵", "😵", "👹","👻","🤐","😥",
  "🤖",  "🥴" ,"🫣" ,"😨", "😰", "😡", "🫣",
  "🤠", "😤", "😿","😿","👾","😐",  "🤠", 
  "🙂‍↔️", "🤯", "🤯", "🤬","🙂‍↕️","🥳","🤩",
  "🤔", "🥵", "🥺", "😞","🧐","😘","🥹",
  "😭", "😱", "🤭", "🙄","😪","😵","😵‍💫",
  "🥶", "🫢", "🫠", "🤤","😷","💩","😹"
];

function getRandomEmoji(){
  let emoji = emojis[Math.floor(Math.random() * emojis.length)];
 console.log(emoji);
 document.getElementById('emoji-generator').textContent = emoji;
}

getRandomEmoji()
let id_song = document.getElementsByClassName("container");
console.log(id_song[0]);
element = document.createElement("div")
element.innerHTML = `<head><script src="C:\Users\Tarun\Desktop\Medea_TarunBranch\Medea_firebase\public\shaka_player\shaka-player/myapp.js"></script></head><body><video id="video"
width="640"
poster="//shaka_player/shaka-player-demo.appspot.com/assets/poster.jpg"
controls autoplay></video></body>`
id_song[0].addEventListener('click',function(e){


id_song[0].replaceWith(element);


});
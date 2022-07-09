import "./style.css";

/*document.querySelector('#app').innerHTML = `
  <h1>Hello Laciesha!</h1>
  <img src="https://picsum.photos/400/400" alt="Random image"/>
  <br>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
//https://picsum.photos/v2/list?page=2&limit=100


for (let i = 0; i < listOfPhotos.length; i++) {
  console.log(i,listOfPhotos[i].author, listOfPhotos[i].id);
}
*/

fetch("https://picsum.photos/v2/list?page=2&limit=100")
  .then((response) => response.json())
  .then((listOfPhotos) => {
    let i = Math.floor(Math.random() * 100);

    console.log(i, listOfPhotos[i].id, listOfPhotos[i].download_url);
    document.querySelector("#app").innerHTML += `
            <h2>
            ${listOfPhotos[i].author} - ${listOfPhotos[i].id}
            </h2>
          

           <img src="${listOfPhotos[i].download_url}" alt="Random image" />`;
  });

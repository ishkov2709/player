const refs = {
  plate: document.querySelector(".plate-box"),
  songFile: document.querySelector(".file"),
  formBtn: document.querySelector(".formBtn"),
  audioBox: document.querySelector(".audio-box"),
};

const readForm = (e) => {
  const file = e.target.files[0];

  const audio = document.createElement("audio");
  audio.controls = true;
  audio.classList.add("track");
  console.log(URL.createObjectURL(file));
  audio.src = URL.createObjectURL(file);

  const title = document.createElement("p");
  title.classList.add("title");
  title.textContent = file.name;

  refs.audioBox.innerHTML = "";
  refs.audioBox.append(...[title, audio]);

  refs.plate.style.display = "block";

  document.body.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;

  audio.play();
};

refs.songFile.addEventListener("change", readForm);

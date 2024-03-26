const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const questionPrompt = document.querySelector(".question-prompt"); // Thêm đoạn này

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yêuuuuuuuuu béeeeee mình chit nhaaaaa 🥺<br>";
  gif.src =
    "https://th.bing.com/th/id/R.43d629baac93871acb0c6459d791d766?rik=UtJUnaU6SBh%2fnQ&pid=ImgRaw&r=0";

  // Ẩn cả hai nút Yes và No
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  questionPrompt.style.display = "none"; // Ẩn dòng chữ khi người dùng nhấn vào nút Yes và No
});

noBtn.addEventListener("click", () => {
  question.innerHTML = "Dỗiiiiiiiiii <br>";
  gif.src =
    "https://media1.tenor.com/images/a17ebf72052f630e892e56a32419af97/tenor.gif?itemid=13806507";
});

{
  /* <div class="main__graph__column">
  <div class="bar"></div>
  <p class="day">sun</p>
</div>; */
}

const graph = document.querySelector(".main__graph");

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    const max = data.reduce(
      (acc, curr) => (curr.amount > acc ? curr.amount : acc),
      0
    );
    const heightUnit = 100 / max;
    data.forEach((item) => {
      const col = document.createElement("div");
      col.classList.add("main__graph__column");

      const bar = document.createElement("div");
      bar.classList.add("bar");
      bar.style.height = `${heightUnit * item.amount}px`;

      const day = document.createElement("p");
      day.classList.add("day");
      day.textContent = item.day;

      col.insertAdjacentElement("beforeend", bar);
      col.insertAdjacentElement("beforeend", day);

      document
        .querySelector(".main__graph")
        .insertAdjacentElement("beforeend", col);
    });
  });

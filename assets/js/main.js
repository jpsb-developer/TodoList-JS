const relogio = () => {
  const getTimeFromSeconds = (segundos) => {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-br", { hour12: false, timeZone: "GMT" });
  };

  const relogio = document.querySelector(".relogio");
  let segundos = 0;
  let timer;

  const inicaRelogio = () => {
    timer = setInterval(() => {
      segundos++;
      relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
  };

  document.addEventListener("click", (e) => {
    const el = e.target;
    if (el.classList.contains("resetar")) {
      relogio.classList.remove("pausado");
      clearInterval(timer);
      segundos = 0;
      relogio.innerHTML = "00:00:00";
    }
    if (el.classList.contains("pausar")) {
      relogio.classList.add("pausado");
      clearInterval(timer);
    }
    if (el.classList.contains("iniciar")) {
      clearInterval(timer);
      relogio.classList.remove("pausado");
      inicaRelogio();
    }
  });
};

relogio()


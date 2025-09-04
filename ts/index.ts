const form = document.querySelector("#search-form > form");
const input: HTMLInputElement | null =
  document.querySelector("#input-localizacao");

const sectionTempoInfo = document.querySelector("#tempo-info");

form?.addEventListener("submit", async (event) => {
  //função assicrona, com async e com await, pois precisa esperar a resposta da api
  event.preventDefault(); //evita recarregar a pagina

  if (!input || !sectionTempoInfo) return; //se não existir nada, retorna nada

  const localizacao = input.value; //atribuir o que é escrito do input no localização

  if (localizacao.length < 3) {
    //se não tiver maior q 3 letras, retorna um alert
    alert("O local precisa ter pelo menos 3 letras");
    return;
  }

  try{
    //consumindo a api com fetch, e buscando pela cidade que o usuario digitar
    const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=57fe410a1d0d8b795c0dd1131e7ec8b3&lang=pt_br&units=metric`
  );

  //retorna um json
  const dados = await response.json();
  const infos = {
    temperatura: Math.round(dados.main.temp),
    local: dados.name,
    icone: `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`,
  };

  
  sectionTempoInfo.innerHTML = `
  <div class="tempo-dados">
        <h2>${infos.local}</h2>
        <span>${infos.temperatura}</span>

      </div>
      <img src="${infos.icone}" >`;
  } catch (err){
    console.log("Deu um erro na obtenção dos dados da API", err);
  }

});

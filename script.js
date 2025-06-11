document.addEventListener('DOMContentLoaded', function() {
  const photos = document.querySelectorAll('.photo-slider img');
  let currentIndex = 0;
  
  // Mostra a primeira imagem
  if (photos.length > 0) {
    photos[currentIndex].classList.add('active');
  }

  function showNextPhoto() {
    // Esconde a foto atual
    photos[currentIndex].classList.remove('active');
    
    // Avança para a próxima foto
    currentIndex = (currentIndex + 1) % photos.length;
    
    // Mostra a nova foto
    photos[currentIndex].classList.add('active');
  }

  // Inicia o carrossel (troca a cada 3 segundos)
  setInterval(showNextPhoto, 3000);
});

const inicio = new Date("2024-03-08T14:00:00");
    const tempoSpan = document.getElementById("tempo");

    function atualizarTempo() {
      const agora = new Date();
      let diff = agora - inicio;

      const segundosTotais = Math.floor(diff / 1000);
      const anos = Math.floor(segundosTotais / (365.25 * 24 * 60 * 60));
      const diasRestantes = segundosTotais % (365.25 * 24 * 60 * 60);

      const dias = Math.floor(diasRestantes / (60 * 60 * 24));
      const horas = Math.floor((diasRestantes % (60 * 60 * 24)) / (60 * 60));
      const minutos = Math.floor((diasRestantes % (60 * 60)) / 60);
      const segundos = Math.floor(diasRestantes % 60);

      tempoSpan.textContent = `${anos} anos, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
    }

    setInterval(atualizarTempo, 1000);
    atualizarTempo();

    const heartsContainer = document.getElementById("hearts-container");

    function criarCoracao() {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.textContent = "💗";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.fontSize = Math.random() * 20 + 20 + "px";
      heartsContainer.appendChild(heart);
      setTimeout(() => heart.remove(), 5000);
    }
    setInterval(criarCoracao, 300);
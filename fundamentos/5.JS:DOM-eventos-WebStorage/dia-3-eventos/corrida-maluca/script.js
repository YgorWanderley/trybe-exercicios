window.onload = () => {
  //captura de elementos
  const startBtn = document.getElementById("start-race-btn");
  const resetBtn = document.getElementById("reset-race-btn");
  const player1 = document.getElementById("player1");
  const player2 = document.getElementById("player2");

  player1.style.marginLeft = 0;
  player2.style.marginLeft = 0;
  

  startBtn.addEventListener("click", () => {
    player1.style.marginLeft = parseInt(player1.style.marginLeft) + Math.random() * 100 + "px";
    player2.style.marginLeft = parseInt(player2.style.marginLeft) + Math.random() * 100 + "px";

    const player1Win = parseInt(player1.style.marginLeft) > window.innerWidth;
    const player2Win = parseInt(player2.style.marginLeft) > window.innerWidth;
    if (player1Win) {
      alert("PLAYER 1 GANHOU !!")  
    }
    if (player2Win) {
      alert("PLAYER 2 GANHOU !!")
    }
  })

}
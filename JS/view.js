// Update HTML

const app = document.getElementById("app");

//--------------------------------------------------------
updateView();

function updateView() {
  app.innerHTML = /*HTML*/ ` 
  
  <div class="container">
    <div class="title">
      <h1>MAGIC 8 BALL</h1>
    </div>

    <div id="outputAnswer" class="prompt">
      <h3>Ask me anything, anything at all!</h3>
    </div>

    <div class="image-container">
      <img src="Assets/Magic_eight_ball.png">
    </div>

    <div class="input-container">
      <input type="text" placeholder="Type your question here...">
      <button onclick="answerUser()" class="ask-button">Ask!</button>
    </div>

  </div>



  `;
}

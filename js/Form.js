class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
    this.resetButton = createButton("");
  }

  
  setElementsPosition() {
    this.titleImg.position(120, 160);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  //BP
  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `
      Hello ${this.input.value()}
      </br>wait for another player to join...`;
      this.greeting.html(message);

      playerCount += 1;
      player.name = this.input.value();
      player.index = playerCount;
      player.addPlayer();
      player.updateCount(playerCount);
      player.getDistance();
      
    });
  }

  makeReset(){
    this.resetButton.class("resetButton");
    this.resetButton.position(width / 2 + 450, height / 2 - 400);
  }
  
  handleResetButton() {
    this.resetButton.mousePressed(() => {
      database.ref("/").set({
        gameState: 0,
        playerCount: 0,
        players: {},
        CarsAtEnd: 0,
      });
      window.location.reload();
    });
  }
  display() {

    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
    this.makeReset();
    this.handleResetButton();
  }

  //BP
  hide(){
    this.input.hide();
    this.playButton.hide();
    this.greeting.hide();
  }

}

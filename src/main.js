import GameState from "./GameState"
import TitleState from "./TitleState"
import LevelState from "./LevelState"
import GameOverState from "./GameOverState"
import ControlsState from "./ControlsState"
import AboutState from "./AboutState"
import Engine from "./Engine"

const WIDTH = 1000;
const HEIGHT = 600;

let engine = new Engine(WIDTH, HEIGHT);

let gameStates = {};
gameStates.titleState = new TitleState(engine);
gameStates.levelState = new LevelState(engine);
gameStates.gameOverState = new GameOverState(engine);
gameStates.controlsState = new ControlsState(engine);
gameStates.aboutState = new AboutState(engine);

engine.gameStates = gameStates;

// engine.setState("titleState");
engine.setState("levelState");
engine.start();

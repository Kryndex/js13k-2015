export default class SineWaveController {

  constructor(engine) {
    this.vx = 2 + Math.random();
    this.p = 0.001 + Math.random() * 0.001;
    this.engine = engine;
  }

  init(foe, timestamp) {
    foe.setPosition(-50, Math.sin(timestamp * 0.0002 * Math.random) * this.engine.height * 0.5 + 0.5 * this.engine.height);
    foe.setVelocity(2, 0);
    foe.lastX = foe.x - foe.vx;
    foe.lastY = foe.y - foe.vy;
  }

  update(foe, timestamp) {
    foe.x += foe.vx * 1.5;
    foe.y = Math.sin(-0.6 * foe.seq + timestamp * this.p) * this.engine.height * 0.4 + 0.5 * this.engine.height;
  }

}

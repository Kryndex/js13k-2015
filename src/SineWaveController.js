const HEIGHT = 600;

export default class SineWaveController {

  init(foe, timestamp) {
    foe.setPosition(-50, Math.sin(timestamp * 0.0001) * HEIGHT * 0.5 + 0.5 * HEIGHT);
    foe.setVelocity(2, 0);
    foe.lastX = foe.x - foe.vx;
    foe.lastY = foe.y - foe.vy;
  }

  update(foe, timestamp) {
    foe.x += foe.vx * 1.5;
    foe.y = Math.sin(-0.6 * foe.seq + timestamp * 0.001) * HEIGHT * 0.4 + 0.5 * HEIGHT;
  }

}
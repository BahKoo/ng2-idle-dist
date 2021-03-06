/**
 * ng2-idle - A module for responding to idle users in Angular2 applications.
 # @author Mike Grabski <me@mikegrabski.com> (http://mikegrabski.com/)
 * @version v1.0.0-alpha.16
 * @link https://github.com/HackedByChinese/ng2-idle.git#readme
 * @license MIT
 */
import {InterruptArgs} from '../interruptargs';
import {InterruptSource} from '../interruptsource';


/*
 * A simple InterruptSource for mocking during tests.
 */
export class MockInterruptSource extends InterruptSource {
  constructor(attach?: () => void, detach?: () => void) {
    super(attach, detach);
  }

  /*
   * Simulates the external interrupt, triggering onInterrupt.
   * @param innerArgs - The original event arguments or data, if any.
   */
  trigger(innerArgs?: any): void {
    this.onInterrupt.emit(new InterruptArgs(this, innerArgs));
  }
}

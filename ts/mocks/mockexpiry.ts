/**
 * ng2-idle - A module for responding to idle users in Angular2 applications.
 # @author Mike Grabski <me@mikegrabski.com> (http://mikegrabski.com/)
 * @version v1.0.0-alpha.16
 * @link https://github.com/HackedByChinese/ng2-idle.git#readme
 * @license MIT
 */
import {IdleExpiry} from '../idleexpiry';

export class MockExpiry extends IdleExpiry {
  public lastDate: Date;
  public mockNow: Date;

  last(value?: Date): Date {
    if (value !== void 0) {
      this.lastDate = value;
    }

    return this.lastDate;
  }

  now(): Date {
    return this.mockNow || new Date();
  }
}

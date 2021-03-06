/**
 * ng2-idle - A module for responding to idle users in Angular2 applications.
 # @author Mike Grabski <me@mikegrabski.com> (http://mikegrabski.com/)
 * @version v1.0.0-alpha.16
 * @link https://github.com/HackedByChinese/ng2-idle.git#readme
 * @license MIT
 */
import { EventEmitter, OnDestroy } from '@angular/core';
import { IdleExpiry } from './idleexpiry';
import { Interrupt } from './interrupt';
import { InterruptSource } from './interruptsource';
import { KeepaliveSvc } from './keepalivesvc';
export declare enum AutoResume {
    disabled = 0,
    idle = 1,
    notIdle = 2,
}
export declare class Idle implements OnDestroy {
    private expiry;
    private idle;
    private timeoutVal;
    private autoResume;
    private interrupts;
    private running;
    private idling;
    private idleHandle;
    private timeoutHandle;
    private countdown;
    private keepaliveEnabled;
    private keepaliveSvc;
    onIdleStart: EventEmitter<any>;
    onIdleEnd: EventEmitter<any>;
    onTimeoutWarning: EventEmitter<number>;
    onTimeout: EventEmitter<number>;
    onInterrupt: EventEmitter<any>;
    constructor(expiry: IdleExpiry, keepaliveSvc?: KeepaliveSvc);
    getKeepaliveEnabled(): boolean;
    setKeepaliveEnabled(value: boolean): boolean;
    getTimeout(): number;
    setTimeout(seconds: number | boolean): number;
    getIdle(): number;
    setIdle(seconds: number): number;
    getAutoResume(): AutoResume;
    setAutoResume(value: AutoResume): AutoResume;
    setInterrupts(sources: Array<InterruptSource>): Array<Interrupt>;
    getInterrupts(): Array<Interrupt>;
    clearInterrupts(): void;
    isRunning(): boolean;
    isIdling(): boolean;
    watch(skipExpiry?: boolean): void;
    stop(): void;
    timeout(): void;
    interrupt(force?: boolean, eventArgs?: any): void;
    private toggleState();
    private toggleInterrupts(resume);
    private doCountdown();
    private safeClearInterval(handleName);
    private startKeepalive();
    private stopKeepalive();
    ngOnDestroy(): void;
}

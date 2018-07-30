import { OnInit, EventEmitter } from '@angular/core';
export declare class CounterButtonComponent implements OnInit {
    countChanged: EventEmitter<number>;
    clickCount: number;
    constructor();
    ngOnInit(): void;
    /**
     * Increments the count when the button is clicked and emits an event
     * to notify parent component of new count value
     */
    handleButtonClick(): void;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Output, EventEmitter } from '@angular/core';
export class CounterButtonComponent {
    constructor() {
        this.countChanged = new EventEmitter();
        this.clickCount = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * Increments the count when the button is clicked and emits an event
     * to notify parent component of new count value
     * @return {?}
     */
    handleButtonClick() {
        this.clickCount++;
        this.countChanged.emit(this.clickCount);
    }
}
CounterButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-counter-button',
                template: `<button type="button" id="lib-counter-button" mat-raised-button color="primary" [matBadge]="clickCount" matBadgeColor="accent" [matBadgeHidden]="clickCount === 0"
(click)="handleButtonClick()">Click Me!</button>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
CounterButtonComponent.ctorParameters = () => [];
CounterButtonComponent.propDecorators = {
    countChanged: [{ type: Output }]
};
function CounterButtonComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    CounterButtonComponent.prototype.countChanged;
    /** @type {?} */
    CounterButtonComponent.prototype.clickCount;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRlci1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXktbmV3LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb3VudGVyLWJ1dHRvbi9jb3VudGVyLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVN4RSxNQUFNO0lBSUo7NEJBSCtDLElBQUksWUFBWSxFQUFFOzBCQUNwRCxDQUFDO0tBRUc7Ozs7SUFFakIsUUFBUSxNQUFNOzs7Ozs7SUFNZCxpQkFBaUI7UUFDZixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQ3pDOzs7WUF0QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRTs7Q0FFWDtnQkFDQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDYjs7Ozs7MkJBRUUsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY291bnRlci1idXR0b24nLFxuICB0ZW1wbGF0ZTogYDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwibGliLWNvdW50ZXItYnV0dG9uXCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgW21hdEJhZGdlXT1cImNsaWNrQ291bnRcIiBtYXRCYWRnZUNvbG9yPVwiYWNjZW50XCIgW21hdEJhZGdlSGlkZGVuXT1cImNsaWNrQ291bnQgPT09IDBcIlxuKGNsaWNrKT1cImhhbmRsZUJ1dHRvbkNsaWNrKClcIj5DbGljayBNZSE8L2J1dHRvbj5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBDb3VudGVyQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQE91dHB1dCgpIGNvdW50Q2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNsaWNrQ291bnQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7IH1cblxuICAvKipcbiAgICogSW5jcmVtZW50cyB0aGUgY291bnQgd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQgYW5kIGVtaXRzIGFuIGV2ZW50XG4gICAqIHRvIG5vdGlmeSBwYXJlbnQgY29tcG9uZW50IG9mIG5ldyBjb3VudCB2YWx1ZVxuICAgKi9cbiAgaGFuZGxlQnV0dG9uQ2xpY2soKSB7XG4gICAgdGhpcy5jbGlja0NvdW50Kys7XG4gICAgdGhpcy5jb3VudENoYW5nZWQuZW1pdCh0aGlzLmNsaWNrQ291bnQpO1xuICB9XG5cbn1cbiJdfQ==
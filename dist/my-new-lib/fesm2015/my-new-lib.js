import { Component, Output, EventEmitter, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CounterButtonComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MyNewLibModule {
}
MyNewLibModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatBadgeModule
                ],
                declarations: [CounterButtonComponent],
                exports: [CounterButtonComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { MyNewLibModule, CounterButtonComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbmV3LWxpYi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbXktbmV3LWxpYi9saWIvY291bnRlci1idXR0b24vY291bnRlci1idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9teS1uZXctbGliL2xpYi9teS1uZXctbGliLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWNvdW50ZXItYnV0dG9uJyxcbiAgdGVtcGxhdGU6IGA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImxpYi1jb3VudGVyLWJ1dHRvblwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIFttYXRCYWRnZV09XCJjbGlja0NvdW50XCIgbWF0QmFkZ2VDb2xvcj1cImFjY2VudFwiIFttYXRCYWRnZUhpZGRlbl09XCJjbGlja0NvdW50ID09PSAwXCJcbihjbGljayk9XCJoYW5kbGVCdXR0b25DbGljaygpXCI+Q2xpY2sgTWUhPC9idXR0b24+XG5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgQ291bnRlckJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBPdXRwdXQoKSBjb3VudENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjbGlja0NvdW50ID0gMDtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkgeyB9XG5cbiAgLyoqXG4gICAqIEluY3JlbWVudHMgdGhlIGNvdW50IHdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkIGFuZCBlbWl0cyBhbiBldmVudFxuICAgKiB0byBub3RpZnkgcGFyZW50IGNvbXBvbmVudCBvZiBuZXcgY291bnQgdmFsdWVcbiAgICovXG4gIGhhbmRsZUJ1dHRvbkNsaWNrKCkge1xuICAgIHRoaXMuY2xpY2tDb3VudCsrO1xuICAgIHRoaXMuY291bnRDaGFuZ2VkLmVtaXQodGhpcy5jbGlja0NvdW50KTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IE1hdEJhZGdlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYmFkZ2UnO1xuXG5pbXBvcnQgeyBDb3VudGVyQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb3VudGVyLWJ1dHRvbi9jb3VudGVyLWJ1dHRvbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRCYWRnZU1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtDb3VudGVyQnV0dG9uQ29tcG9uZW50XSxcbiAgZXhwb3J0czogWyBDb3VudGVyQnV0dG9uQ29tcG9uZW50IF1cbn0pXG5leHBvcnQgY2xhc3MgTXlOZXdMaWJNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7SUFhRTs0QkFIK0MsSUFBSSxZQUFZLEVBQUU7MEJBQ3BELENBQUM7S0FFRzs7OztJQUVqQixRQUFRLE1BQU07Ozs7OztJQU1kLGlCQUFpQjtRQUNmLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDekM7OztZQXRCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFOztDQUVYO2dCQUNDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUNiOzs7OzsyQkFFRSxNQUFNOzs7Ozs7O0FDVlQ7OztZQU9DLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixlQUFlO29CQUNmLGNBQWM7aUJBQ2Y7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUM7Z0JBQ3RDLE9BQU8sRUFBRSxDQUFFLHNCQUFzQixDQUFFO2FBQ3BDOzs7Ozs7Ozs7Ozs7Ozs7In0=
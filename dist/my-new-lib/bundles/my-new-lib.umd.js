(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/material'), require('@angular/material/badge')) :
    typeof define === 'function' && define.amd ? define('my-new-lib', ['exports', '@angular/core', '@angular/common', '@angular/material', '@angular/material/badge'], factory) :
    (factory((global['my-new-lib'] = {}),global.ng.core,global.ng.common,global.ng.material,global.ng.material.badge));
}(this, (function (exports,core,common,material,badge) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var CounterButtonComponent = (function () {
        function CounterButtonComponent() {
            this.countChanged = new core.EventEmitter();
            this.clickCount = 0;
        }
        /**
         * @return {?}
         */
        CounterButtonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * Increments the count when the button is clicked and emits an event
         * to notify parent component of new count value
         */
        /**
         * Increments the count when the button is clicked and emits an event
         * to notify parent component of new count value
         * @return {?}
         */
        CounterButtonComponent.prototype.handleButtonClick = /**
         * Increments the count when the button is clicked and emits an event
         * to notify parent component of new count value
         * @return {?}
         */
            function () {
                this.clickCount++;
                this.countChanged.emit(this.clickCount);
            };
        CounterButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-counter-button',
                        template: "<button type=\"button\" id=\"lib-counter-button\" mat-raised-button color=\"primary\" [matBadge]=\"clickCount\" matBadgeColor=\"accent\" [matBadgeHidden]=\"clickCount === 0\"\n(click)=\"handleButtonClick()\">Click Me!</button>\n",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        CounterButtonComponent.ctorParameters = function () { return []; };
        CounterButtonComponent.propDecorators = {
            countChanged: [{ type: core.Output }]
        };
        return CounterButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MyNewLibModule = (function () {
        function MyNewLibModule() {
        }
        MyNewLibModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            material.MatButtonModule,
                            badge.MatBadgeModule
                        ],
                        declarations: [CounterButtonComponent],
                        exports: [CounterButtonComponent]
                    },] },
        ];
        return MyNewLibModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.MyNewLibModule = MyNewLibModule;
    exports.CounterButtonComponent = CounterButtonComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbmV3LWxpYi51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL215LW5ldy1saWIvbGliL2NvdW50ZXItYnV0dG9uL2NvdW50ZXItYnV0dG9uLmNvbXBvbmVudC50cyIsIm5nOi8vbXktbmV3LWxpYi9saWIvbXktbmV3LWxpYi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1jb3VudGVyLWJ1dHRvbicsXG4gIHRlbXBsYXRlOiBgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJsaWItY291bnRlci1idXR0b25cIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBbbWF0QmFkZ2VdPVwiY2xpY2tDb3VudFwiIG1hdEJhZGdlQ29sb3I9XCJhY2NlbnRcIiBbbWF0QmFkZ2VIaWRkZW5dPVwiY2xpY2tDb3VudCA9PT0gMFwiXG4oY2xpY2spPVwiaGFuZGxlQnV0dG9uQ2xpY2soKVwiPkNsaWNrIE1lITwvYnV0dG9uPlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIENvdW50ZXJCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAT3V0cHV0KCkgY291bnRDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY2xpY2tDb3VudCA9IDA7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHsgfVxuXG4gIC8qKlxuICAgKiBJbmNyZW1lbnRzIHRoZSBjb3VudCB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZCBhbmQgZW1pdHMgYW4gZXZlbnRcbiAgICogdG8gbm90aWZ5IHBhcmVudCBjb21wb25lbnQgb2YgbmV3IGNvdW50IHZhbHVlXG4gICAqL1xuICBoYW5kbGVCdXR0b25DbGljaygpIHtcbiAgICB0aGlzLmNsaWNrQ291bnQrKztcbiAgICB0aGlzLmNvdW50Q2hhbmdlZC5lbWl0KHRoaXMuY2xpY2tDb3VudCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBNYXRCYWRnZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2JhZGdlJztcblxuaW1wb3J0IHsgQ291bnRlckJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vY291bnRlci1idXR0b24vY291bnRlci1idXR0b24uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0QmFkZ2VNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQ291bnRlckJ1dHRvbkNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFsgQ291bnRlckJ1dHRvbkNvbXBvbmVudCBdXG59KVxuZXhwb3J0IGNsYXNzIE15TmV3TGliTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkV2ZW50RW1pdHRlciIsIkNvbXBvbmVudCIsIk91dHB1dCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiTWF0QnV0dG9uTW9kdWxlIiwiTWF0QmFkZ2VNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQWFFO2dDQUgrQyxJQUFJQSxpQkFBWSxFQUFFOzhCQUNwRCxDQUFDO1NBRUc7Ozs7UUFFakIseUNBQVE7OztZQUFSLGVBQWM7Ozs7Ozs7Ozs7UUFNZCxrREFBaUI7Ozs7O1lBQWpCO2dCQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ3pDOztvQkF0QkZDLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsb0JBQW9CO3dCQUM5QixRQUFRLEVBQUUsc09BRVg7d0JBQ0MsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO3FCQUNiOzs7OzttQ0FFRUMsV0FBTTs7cUNBVlQ7Ozs7Ozs7QUNBQTs7OztvQkFPQ0MsYUFBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRTs0QkFDUEMsbUJBQVk7NEJBQ1pDLHdCQUFlOzRCQUNmQyxvQkFBYzt5QkFDZjt3QkFDRCxZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzt3QkFDdEMsT0FBTyxFQUFFLENBQUUsc0JBQXNCLENBQUU7cUJBQ3BDOzs2QkFmRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
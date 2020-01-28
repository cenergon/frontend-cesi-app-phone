import { Component } from '@angular/core';
import { IonSimpleWizard } from './ion-simple-wizard.component';
// import { Events } from 'ionic-angular';
import { Events } from '@ionic/angular';

import { WizardAnimations } from './ion-simple-wizard-animations';

@Component({
    selector: 'ion-wizard-step',
    // tslint:disable-next-line: no-host-metadata-property
    host: {
        '[@WizardAnimations]': 'isCurrent ?"enter":"leave"'
    },
    template: `
    <ng-content></ng-content>
  `,
    animations: WizardAnimations.zoom // TO DO: Change the animation by @Input for example
})
// tslint:disable-next-line: component-class-suffix
export class IonSimpleWizardStep {
    public isCurrent;
    public step;
    constructor(public parent: IonSimpleWizard, public evts: Events) {
        this.step = this.parent.addStep();
        this.isCurrent = this.step === this.parent.step;
        this.parent.stepChange.subscribe(step => {
            this.isCurrent = this.step === step;
            if (this.isCurrent) {
                this.evts.publish('step:changed', this.step);
            }

        });
    }
}

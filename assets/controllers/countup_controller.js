import { Controller } from '@hotwired/stimulus';
import { CountUp } from 'countup.js';

export default class extends Controller {
    static targets = ["result"]
    static values = {
        start: Number,
        end: Number,
        duration: Number,
        easing: Boolean,
    }

    connect() {
        let result = new CountUp(this.resultTarget, this.endValue, {
            duration: this.durationValue,
            useEasing: this.easingValue
        });
        result.start();
    }
}
import { startStimulusApp } from '@symfony/stimulus-bundle';
import ScrollReveal from '@stimulus-components/scroll-reveal';

const app = startStimulusApp();
// register any custom, 3rd party controllers here
app.register('scroll-reveal', ScrollReveal)

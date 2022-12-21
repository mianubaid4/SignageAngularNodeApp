import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats-widget1',
  templateUrl: './stats-widget1.component.html',
})
export class StatsWidget1Component {
  @Input() svgIcon = '';
  @Input() iconColor = '';
  @Input() title = '';
  @Input() time = '';
  @Input() color = '';
  @Input() description = '';

  constructor() {}
}

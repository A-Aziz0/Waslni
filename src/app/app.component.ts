import {AfterViewInit, Component, Renderer2} from '@angular/core';
import {ChildrenOutletContexts, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
  ]
})
export class AppComponent implements  AfterViewInit {

  constructor(private contexts: ChildrenOutletContexts, private renderer: Renderer2) {
  }

  async ngAfterViewInit(): Promise<void> {
    this.renderer.selectRootElement("#loader")
    this.renderer.destroy();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}

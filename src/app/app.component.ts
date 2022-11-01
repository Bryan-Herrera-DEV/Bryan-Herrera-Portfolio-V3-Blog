import { DOCUMENT, isPlatformBrowser } from "@angular/common";
import {
	Component,
	Inject,
	OnInit,
	Renderer2,
	PLATFORM_ID,
} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
		private _renderer2: Renderer2,
		@Inject(DOCUMENT) private _document: Document,
		@Inject(PLATFORM_ID) private platformId: object
	) {}
	ngOnInit() {
		if (isPlatformBrowser(this.platformId)) {
			let elemento = this._document.getElementById("elementId");
			let script = this._renderer2.createElement("script");
			script.type = "application/javascript";
			script.src = "assets/n_Assets/js/theme.bundle.js";
			this._renderer2.appendChild(elemento, script);
		}
  }
}

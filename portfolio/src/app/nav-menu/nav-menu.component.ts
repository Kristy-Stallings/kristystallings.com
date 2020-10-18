import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}

var els = document.querySelectorAll('.speak');
[].forEach.call(els, function(el: { addEventListener: (arg0: string, arg1: () => void) => void; classList: { add: (arg0: string) => void; }; }) {
	el.addEventListener('click', function() {
		[].forEach.call(els, function(clk: { classList: { remove: (arg0: string) => void; }; }) {
			clk.classList.remove('active');
		});
		el.classList.add('active');
	});
});

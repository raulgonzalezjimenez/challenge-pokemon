import { Component } from './component';

export class Header extends Component {
  constructor(selector: string) {
    super(selector);

    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <header class="header"> 
    <img src="public/pokemon-logo.svg" alt="" />
     
     
    </header>
    `;
  }
}

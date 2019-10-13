import { LitElement, html, customElement, property } from 'lit-element';
import '@vaadin/vaadin-tabs';
import { Router } from '@vaadin/router';

import './pages/intro-page';
import './pages/scene1-page';
import './pages/scene2-page';

@customElement('my-app')
export class MyApp extends LitElement {
  @property({ type: String }) activeTab = location.pathname === '/' ? 'intro' : location.pathname.replace('/', '');
  @property({ type: Array }) tabs = ['intro', 'intermediate', 'advanced'];
  @property({ type: Boolean }) smallScreen;

  firstUpdated() {
    const router = new Router(this.shadowRoot.getElementById('outlet'));
    router.setRoutes([
      {
        path: '/',
        component: 'intro-page'
      },
      {
        path: '/scene1',
        component: 'scene1-page'
      },
      {
        path: '/scene2',
        component: 'scene2-page'
      },
      {
        path: '/advanced',
        component: 'advanced-demos'
      },
      {
        path: '(.*)',
        redirect: '/', action: () => {
          console.log('?')
        }
      }
    ]);
  }

  switchRoute(route: string) {
    this.activeTab = route;
    Router.go(`/${route}`);
  }

  render() {
    return html`
      <style>
        :host {
          display: block;
        }
        
        h2 {
          font-size: 20px;
          color: #217FF9;
        }
        
        h1 {
          margin-top: 0px;
          color: #217FF9;
        }
        
        #header {
          display: flex;
        }
        
        a {
          text-decoration: none;
        }
        
        a:visited {
          color: #217FF9;
        }
        
        #header h1 { flex: 1; }
        #header svg { margin: 8px 0 8px 0; }
        .github {transform: scale(1.2, 1.2);}
        .logo {
          margin-top: -3px;
          margin-right: 8px;
        }
        
        .nav { margin-bottom: 20px; }
        .footer { text-align: center; color: #a8a8a8; }
      </style>

      <vaadin-tabs class="${this.smallScreen ? 'nav' : ''}" orientation="${this.smallScreen ? 'vertical' : 'horizontal'}" selected=${this.tabs.indexOf(this.activeTab)} theme="${this.smallScreen ? '' : 'centered'}">
        <vaadin-tab @click=${() => this.switchRoute('')}>intro</vaadin-tab>
        <vaadin-tab @click=${() => this.switchRoute('scene1')}>scene1</vaadin-tab>
        <vaadin-tab @click=${() => this.switchRoute('scene2')}>scene2</vaadin-tab>
      </vaadin-tabs>
            
      <div id='outlet'></div>
    `
  }
}

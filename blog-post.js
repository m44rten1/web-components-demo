class BlogPost extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    const hi = () => console.log('hi');

    this.shadowRoot.innerHTML = `
      <h2>My first blog post</h2>
      <button onclick="hi">Click me</button>
      <p>My first blog post content</p>
    `;
  }

  connectedCallback() {
    console.log('connected');
  }

  disconnectedCallback() {
    console.log('disconnected');
  }

  hi() {
    console.log('hi');
  }
}

customElements.define('blog-post', BlogPost);
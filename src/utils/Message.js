export default class Message {
  constructor({resp, data}) {
    this.resp = resp;
    this.data = data;
    this.message = document.createElement('span');
    this.message.classList.add('message');
  }
  contentMessage(context, message = '') {
    this.message.classList.add(context);
    if (context !== 'succes') {
      this.message.innerText = `Error: ${this.resp.status} ${this.data.message}`;
      setTimeout(() => this.message.remove(), 3000)
    } else {
      this.message.innerText = `${message}`;
      setTimeout(() => this.message.remove(), 3000)
    }
    return this.message;
  }
};
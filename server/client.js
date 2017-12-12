class Client {
  constructor(conn, id) {
    this.conn = conn;
    this.id = id;
    this.session = null; // session is where the client will live in
    this.state = null;
  }

  broadcast(data) {
    if (!this.session) {
      throw new Error("Cannot broadcast without session");
    }
    data.clientId = this.id;

    this.session.clients.forEach(client => {
      if (this === client) {
        return;
      }
      client.send(data);
    });
  }

  send(data) {
    const msg = JSON.stringify(data);
    console.log(`Sending message (server-side): ${msg}`);
    this.conn.send(msg, err => {
      if (err) {
        console.error("Message failed: ", msg, err);
      }
    });
  }
}

module.exports = Client;

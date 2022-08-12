class Server {
  constructor({ express }) {
    this.app = express();
  }

  listen(port) {
    this.app.listen(port, () => {
      console.log("l'Api a demarrer sur le port 8000");
    });
  }
}

export default Server;

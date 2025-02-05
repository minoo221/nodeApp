module.exports = {
  apps: [
    {
      name: "backend",
      script: "server.js", // hlavný súbor aplikácie
      instances: "max", // využije všetky CPU jadrá
      exec_mode: "cluster", // beží v cluster mode
      watch: false, // vypnuté sledovanie zmien
      env: {
        NODE_ENV: "production",
        MONGO_URI: "mongodb://admin:secret@mongodb:27017/mydatabase",
      },
    },
  ],
};

export const connectionString = "Endpoint=sb://mytestservicebus1.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=LFjpE/i3HfB0f54oh/Sphn4T2GG0lUH0u+ASbEUi8Hs=";

export const queueName = "myfirstqueues";

export const messages = [
    { body: "LA",
      applicationProperties: {
        userId: 'West'
      }
    },
    { body: "PHI",
      applicationProperties: {
        userId: 'John'
      }
    }
];
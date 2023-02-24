import { ServiceBusClient } from "@azure/service-bus";
import * as Config from './config';

const send = async () => {
    const sbClient = new ServiceBusClient(Config.connectionString);
    const sender = sbClient.createSender(Config.queueName);

    try {
        let batch = await sender.createMessageBatch();

        for (let i = 0; i < Config.messages.length; i++) {
            console.log(`Message to batch: ${JSON.stringify(Config.messages[i])}`);

            if (!batch.tryAddMessage(Config.messages[i])) {
                await sender.sendMessages(batch);

                batch = await sender.createMessageBatch();
            }
        }

        await sender.sendMessages(batch);

        await sender.close();
    }
    catch (err) {
        console.log("Error occurred: " + err);
        process.exit(1);
    }
    finally {
        await sbClient.close();
    }
}

send();
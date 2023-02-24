import { delay, ServiceBusClient, MessageHandlers, ServiceBusReceivedMessage, ProcessErrorArgs } from '@azure/service-bus';

import * as Config from './config';

const receive = async() => {
    const sbClient = new ServiceBusClient(Config.connectionString);

    const receiver = sbClient.createReceiver(Config.queueName);

    const myMessageHandler = async (message: ServiceBusReceivedMessage) => {
        console.log(`Received message: ${message.body}`);
    }

    const myErrorHandler = async (err: ProcessErrorArgs) => {
        console.log(err);
    }

    const messageHandlers = {
        processMessage: myMessageHandler,
        processError: myErrorHandler
    } as MessageHandlers;

    receiver.subscribe(messageHandlers);

    await delay(20000);
    await receiver.close();
    await sbClient.close();
}

receive().catch(err => {
    console.log(`Error occurred: ${err}`);
    process.exit(1);
})
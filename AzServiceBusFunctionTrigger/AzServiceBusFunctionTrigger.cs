using System;
using System.Collections.Generic;
using Azure.Messaging.ServiceBus;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.Extensions.Logging;
using Microsoft.Azure.Functions.Worker;
using System.Text.Json;

namespace AzServiceBusFunctionTrigger
{
    public class AzServiceBusFunctionTrigger
    {
        private readonly ILogger<AzServiceBusFunctionTrigger> _logger;

        public AzServiceBusFunctionTrigger(ILogger<AzServiceBusFunctionTrigger> log)
        {
            _logger = log;
        }

        [FunctionName("AzServiceBusFunctionTrigger")]
        public void Run([ServiceBusTrigger("demotopic1", "S3", Connection = "ConnectionString")] string mySbMsg)
        //, FunctionContext context
        {
            // string body = mySbMsg.Body.ToString();
            // Console.WriteLine(body);
            // foreach (KeyValuePair<string, object> kvp in mySbMsg.ApplicationProperties)
            // {
            //     Console.WriteLine("Key = {0}, Value = {1}", kvp.Key, kvp.Value);
            // }

            Console.WriteLine(mySbMsg);

            // IReadOnlyDictionary<string, object> bindingData = context.BindingContext.BindingData;
            // string userPropertiesStr = bindingData["applicationProperties"].ToString();
            // if (string.IsNullOrEmpty(userPropertiesStr))
            // {
            //     throw new Exception("applicationProperties is null or empty");
            // }

            // JsonDocument json = JsonDocument.Parse(userPropertiesStr);
            // JsonElement xProp = json.RootElement.GetProperty("userId");
            // string x = xProp.ToString();
            // Console.WriteLine(x);

            //_logger.LogInformation($"C# ServiceBus topic trigger function processed message: {mySbMsg}");
        }
    }
}

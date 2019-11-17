using Microsoft.AspNetCore.SignalR;
using SignalRDemo.DTOs;
using SignalRDemo.Services;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace SignalRDemo.Hubs
{
    public class DataHub : Hub
    {
        private readonly ITimeServices timeServices;

        public DataHub(ITimeServices timeServices)
        {
            this.timeServices = timeServices;
        }
       
        public async Task SendDateTime()
        {
            DateTimeServiceModel result;
            do
            {
                Thread.Sleep(1000);
                var currentDateTime = DateTime.Now;
                result = this.timeServices.GetUpdate(currentDateTime);
                await this.Clients.Caller
                    .SendAsync("ReceiveStatusUpdate", 
                                $"{result.Minutes:F1} minutes", 
                                $"{result.Days:F1} days",
                                $"{result.Chickens:F1} total chickens",
                                $"{result.Chickens % 12} current chicken group");

            }
            while (result.Minutes <= double.MaxValue);
            await this.Clients.Caller.SendAsync("Finished");
        }
    }
}

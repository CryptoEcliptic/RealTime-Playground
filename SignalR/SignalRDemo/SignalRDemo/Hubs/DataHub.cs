using Microsoft.AspNetCore.SignalR;
using NAudio.Wave;
using SignalRDemo.DTOs;
using SignalRDemo.Services;
using System;
using System.Media;
using System.Threading;
using System.Threading.Tasks;

namespace SignalRDemo.Hubs
{
    public class DataHub : Hub
    {
        private readonly ITimeServices timeServices;
        private readonly IMessageGenerator messageGenerator;

        public DataHub(ITimeServices timeServices, IMessageGenerator messageGenerator)
        {
            this.timeServices = timeServices;
            this.messageGenerator = messageGenerator;
        }

        public async Task SendDateTime()
        {
            DateTimeServiceModel result;
            var currentDateTime = DateTime.Now;
            result = this.timeServices.GetUpdate(currentDateTime);
            await this.Clients.Caller
                .SendAsync("ReceiveStatusUpdate",
                            $"{result.Minutes:F1} minutes",
                            $"{result.Days:F1} days",
                            $"{result.Chickens:F1} total chickens",
                            $"{result.ChickenGroups:F2} current chicken group",
                            $"{result.TotalBoxes:F2} total boxes",
                            $"{result.BoxGroup:F2} box group"
                            );

            await this.Clients.Caller.SendAsync("Finished");
        }

        public async Task SendMessage()
        {
            var message = this.messageGenerator.GenerateMessage();
            await this.Clients.Caller.SendAsync("ReceiveTextMessage", message);
        }
    }
}

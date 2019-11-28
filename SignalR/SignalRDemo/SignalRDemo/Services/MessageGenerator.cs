using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignalRDemo.Services
{
    public class MessageGenerator : IMessageGenerator
    {
        private readonly List<string> messages = new List<string>()
        {
            "Пильо има имен ден! Пильо иска подарък!",
            "Кафиееее!",
            "Роогче, роогче, роогче!",
            "Джунгръц, джунгръц..."

        };
        public string GenerateMessage()
        {
            int maxCollectionIndex = messages.Count() - 1;
            Random rnd = new Random();
            int index = rnd.Next(0, maxCollectionIndex);
            string returnMessage = messages[index];
            return returnMessage;
        }
    }
}

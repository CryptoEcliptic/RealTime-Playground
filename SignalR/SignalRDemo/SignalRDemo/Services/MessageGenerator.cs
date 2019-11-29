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
            "Джунгръц, джунгръц...",
            "Пильо съгрешил :( Ама само малко красотички си купил.",
            "Ааааа...ааааа...ПИЛЕЕЕ. Знаеш ли какъв огромен беше тоя паяк!?",
            "Ах, пръжчицата ми! Какъв си мекичък и удобен!",
            "Олеее, олееее, Пильо закъснява!",
            "Биидо-биидо, Пильо малко закъснява, ама само малце.",
            "Пииильооо, това не е пуйка, това е фламинго!",
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

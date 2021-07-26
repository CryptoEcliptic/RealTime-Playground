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
            "Пильо не е прост, той знае!",
            "Кака боец!",
            "Чеши, чеши гръбчето!",
            "Отборно простиране",
            "Олее, аз май бях оставила нещо на химическо чистене преди 2 месеца",
            "Пильо, успя ли да наловиш кренвиршки? Много бързо ли бягаха?",
            "Пильо иска море, пильо иска плажче :)",
            "Тумито е малко пълно",
            "Пильо е отслабнал, нали?",

        };
        public string GenerateMessage()
        {
            int maxCollectionIndex = messages.Count();
            Random rnd = new Random();
            int index = rnd.Next(0, maxCollectionIndex);
            string returnMessage = messages[index];
            return returnMessage;
        }
    }
}
